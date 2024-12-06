import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from 'react-native';
import SessionDetailsSection from './sessionDetailsSection';
import {
  usePostFindBuddyMutation,
  usePostCreateSingleSlotMutation,
} from '@/libs/lb_features/src/lib/buddy/buddyServices';
import tw from 'twrnc';
import { Select, Option } from '@/libs/lb_presentation/src';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { commonConstants } from '@/libs/lb_common/commonConstants';

const CreateSessionForm = () => {
  const [sessionType, setSessionType] = useState('');
  const [sessionsDate, setSessions] = useState([
    { id: Date.now(), date: null },
  ]);
  const [formData, setFormData] = useState([
    { topic: '', subtopic: '', details: '', duration: '', minParticipants: '' },
  ]);
  const [timeRanges, setTimeRanges] = useState([[]]);
  const [isLoading, setIsLoading] = useState(false);
  const [sessionSummary, setSessionSummary] = useState(null);
  const [userId, setUserId] = useState(null);

  const [postFindBuddy, { isLoading: isMutationLoading }] =
    usePostFindBuddyMutation();
  const [postSingleSlot] = usePostCreateSingleSlotMutation();

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const storedUserId = await AsyncStorage.getItem('userId');
        if (storedUserId) {
          setUserId(storedUserId);
        }
      } catch (e) {
        console.error('Error fetching userId from AsyncStorage:', e);
      }
    };

    fetchUserId();
  }, []);

  const handleSessionTypeChange = (value) => {
    setSessionType(value);
  };

  const onInputChange = (index, field, value) => {
    const updatedFormData = [...formData];
    if (!updatedFormData[index]) {
      updatedFormData[index] = {};
    }
    updatedFormData[index][field] = value;
    setFormData(updatedFormData);
  };

  const handleTimeRangesChange = (index, ranges) => {
    const updatedTimeRanges = [...timeRanges];
    updatedTimeRanges[index] = ranges;
    setTimeRanges(updatedTimeRanges);
  };

  const handleDateChange = (index, date) => {
    const updatedSessions = [...sessionsDate];
    updatedSessions[index].date = date;
    setSessions(updatedSessions);
    console.log('Selected Date for session', index + 1, ':', date);
  };

  const addSessionSection = () => {
    setSessions([...sessionsDate, { id: Date.now(), date: null }]);
    setFormData([
      ...formData,
      {
        topic: '',
        subtopic: '',
        details: '',
        duration: '',
        minParticipants: '',
      },
    ]);
    setTimeRanges([...timeRanges, []]);
  };

  const removeSessionSection = (index) => {
    setSessions(sessionsDate.filter((_, i) => i !== index));
    setFormData(formData.filter((_, i) => i !== index));
    setTimeRanges(timeRanges.filter((_, i) => i !== index));
  };

  const convertToTimeString = ({ hours, minutes, period }) => {
    // Convert hours to 24-hour format
    if (period === 'PM' && hours !== 12) {
      hours += 12;
    } else if (period === 'AM' && hours === 12) {
      hours = 0;
    }

    // Format hours and minutes to two digits
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');

    // Return the time in HH:mm:ss format
    return `${formattedHours}:${formattedMinutes}:00`;
  };

  // Utility function to format date
  const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const createSession = async () => {
    if (!sessionType) {
      Alert.alert('Error', 'Please select a session type');
      return;
    }

    const missingFields = formData.some(
      (session) => !session.topic || !session.subtopic
    );
    if (missingFields) {
      Alert.alert(
        'Error',
        'Please fill in all required fields: Topic and Subtopic'
      );
      return;
    }

    // Initialize and format session dates
    const formattedDates = sessionsDate.map((session) =>
      session.date ? formatDate(session.date) : null
    );

    // Set session summary state
    setSessionSummary({
      sessionType,
      sessions: formData,
      sessionsDate,
      formattedDates,
      timeRanges,
    });

    const timeObject = timeRanges[0][0].from;
    let time = convertToTimeString(timeObject);
    // console.log(time);
    let hourString = time.split(':')[0];
    const hour = parseInt(hourString, 10);

    // Define session data for API
    const sessionData = {
      preferences: {
        sessions: [
          {
            dateTimeSlots: [
              `${formattedDates[formattedDates.length - 1]}T${time}Z,${
                formattedDates[formattedDates.length - 1]
              }T${time}Z`,
            ],
            catId: sessionType ? sessionType[0] : '',
            // catId:'Programming',
            subSkillId: formData[0]?.topic || '',
            participantsExpertiseLevel: [2],
            participantsReqd: [1, 100],
            duration: 60,
          },
        ],
        profession: ['Trainer'],
      },
      userDetails: {
        userId: userId,
        expertiseLevel: [{ Communication: '2' }],
      },
    };

    /*  const slotData = {
      date: `${formattedDates[formattedDates.length - 1]}`,
      time: hour,
      skillsData: [
        {
          catName: sessionType ? sessionType[0] : '',
          catId: 'c001',
          catDescription: 'Various programming skills',
          skills: [
            {
              skillName: formData[0]?.topic || '',
              skillId: 'c001',
              skillDescription: '',
              participantsReqd: [2, 100],
              evaluation: 'Coding test and project',
              guidelines: 'fundamentals and libraries',
            },
          ],
        },
      ],
    }; */

    const slotData = {
      userId: '',
      role: 'Trainer',

      category_cs: sessionType[0],

      sessions_cs: [
        {
          subject_cs: formData[0]?.topic,
          isInviteOnly_cs: false,
          minParticipants_cs: 1,
          maxParticipants_cs: 100,

          dateTimeSlots_cs: ['2024-06-14T10:00:00Z,2024-06-14T15:20:00Z'],
          topic_cs: formData[0].subtopic,
          details_cs: '',
        },
      ],
    };

    try {
      setIsLoading(true);
      const response1 = await postFindBuddy(sessionData);
      const response2 = await postSingleSlot(slotData);
      if (response1.error || response2.error) {
        Alert.alert('Error', 'Failed to create sessions. Please try again.');
      } else {
        Alert.alert('Success', 'Sessions created successfully!');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to create sessions. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={tw`flex-1`}
    >
      <ScrollView
        style={tw`flex-1 bg-gray-100 dark:bg-gray-900`}
        contentContainerStyle={tw`p-4`}
        showsVerticalScrollIndicator={false}
      >
        <View style={tw`mb-6`}>
          <Text
            style={tw`text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2`}
          >
            Create New Session
          </Text>
          <Text style={tw`text-sm text-gray-600 dark:text-gray-400`}>
            Fill in the details below to create your study session
          </Text>
        </View>

        <View style={tw`mb-6 z-10`}>
          <Select
            onChange={handleSessionTypeChange}
            selectedValue={sessionType}
            style={tw`bg-white dark:bg-gray-700 rounded-lg`}
            label="Choose Session Type*"
          >
            <Option value="Academics" label="Academics" />
            <Option value="Technicals" label="Technicals" />
            <Option value="Combined_Studies" label="Combined Studies" />
          </Select>
        </View>

        {sessionsDate.map((_, index) => (
          <SessionDetailsSection
            key={index}
            index={index}
            onRemove={removeSessionSection}
            handleTimeRangesChange={(ranges) =>
              handleTimeRangesChange(index, ranges)
            }
            onInputChange={onInputChange}
            onDateChange={(date) => handleDateChange(index, date)} // Pass the date change handler
            formData={formData}
          />
        ))}

        <TouchableOpacity
          onPress={addSessionSection}
          style={tw`flex-row items-center justify-center p-4 mb-6 bg-gray-50 dark:bg-gray-800 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-700`}
        >
          <Ionicons
            name="add-circle-outline"
            size={24}
            color={tw.color('blue-500')}
          />
          <Text style={tw`ml-2 text-blue-500 font-medium`}>
            Add Another Session
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={createSession}
          disabled={isLoading || isMutationLoading}
          style={tw`bg-blue-500 p-4 rounded-xl mb-8 flex-row justify-center items-center ${
            isLoading || isMutationLoading ? 'opacity-70' : ''
          }`}
        >
          {isLoading || isMutationLoading ? (
            <ActivityIndicator color="white" style={tw`mr-2`} />
          ) : null}
          <Text style={tw`text-white font-semibold text-lg text-center`}>
            {isLoading || isMutationLoading ? 'Creating...' : 'Create Session'}
          </Text>
        </TouchableOpacity>

        {/* Displaying the session summary */}
        {sessionSummary && (
          <View style={tw`mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl`}>
            <Text
              style={tw`text-xl font-bold text-gray-800 dark:text-gray-100 mb-2`}
            >
              Session Summary
            </Text>
            <Text
              style={tw`text-lg font-semibold text-gray-700 dark:text-gray-300`}
            >
              Session Type: {sessionSummary.sessionType}
            </Text>
            {sessionSummary.sessions.map((session, index) => (
              <View key={index} style={tw`mb-2`}>
                <Text style={tw`text-md text-gray-600 dark:text-gray-400`}>
                  {`Session ${index + 1}: ${session.topic} - ${
                    session.subtopic
                  } - Date: ${sessionSummary.formattedDates[index]}`}
                </Text>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CreateSessionForm;

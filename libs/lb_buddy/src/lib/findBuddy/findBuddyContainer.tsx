import React, { useState, useEffect, useReducer, useRef } from 'react';
import {
  Button,
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Animated,
} from 'react-native';
import dayjs from 'dayjs';
import SelectableChips from './selectableChips';
import SessionsList from './sessionList';
import { usePostFindBuddyMutation } from '@/libs/lb_features/src/lib/buddy/buddyServices';
import tw from 'twrnc';
import SkillContainer from './skillContainer';
import { useRouter } from 'expo-router';
import DateComponent from './dateComponent';
import { findBuddyPgData } from '../mocks/buddyData';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { findBuddyDefaults, buddyConstants } from '../buddyConstants';
import { getUserId } from '@/libs/lb_utils/src';
import { setLoginRedirect } from '@/libs/lb_data-api/src/lib/rtk/rtk-slice-loginRedirect';
import { useDispatch } from 'react-redux';
import { setFindBuddyMessage } from '@/libs/lb_data-api/src/lib/rtk/rtk-slice-buddyMessage';
import { commonConstants } from '@/libs/lb_common/commonConstants';
import app from '../../../../../app.json';
import IconButton from '@/components/navigation/DayNightButton';

const { width } = Dimensions.get('window');

// Reducer function for managing time slot selection
const timeSlotReducer = (state, action) => {
  try {
    switch (action.type) {
      case 'SELECT_DAY':
        return 'day';
      case 'SELECT_NIGHT':
        return 'night';
      case 'SELECT_ALL':
        return 'all';
      default:
        throw new Error(`Unsupported action type: ${action.type}`);
    }
  } catch (error) {
    console.error('Error in timeSlotReducer:', error);
    return state;
  }
};

export default function FindBuddyContainer() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [postFindBuddy] = usePostFindBuddyMutation();
  const [timeRanges, setTimeRanges] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const handleTimeRangesChange = (newTimeRanges) => {
    setTimeRanges(newTimeRanges);
  };

  const [selectedSkills, setSelectedSkills] = useState([]);
  const handleSelectedSkillsChange = (newSelectedSkills) => {
    setSelectedSkills(newSelectedSkills);
  };

  const [selectedChips, setSelectedChips] = useState({});
  const handleSelectionChange = (newSelectedChips) => {
    if (selectedSession) {
      setSelectedChips(newSelectedChips);
      console.log('Newly selected chips:', newSelectedChips);
    }
  };

  const [selectedSession, setSelectedSession] = useState(null);
  const [responseMessage, setResponseMessage] = useState('');
  const [appName, setAppName] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const scrollY = useRef(new Animated.Value(0)).current;

  // Reducer-based state for time slot selection
  const [selectedTime, dispatchTimeSlot] = useReducer(timeSlotReducer, 'all');

  useEffect(() => {
    const fetchAppName = () => {
      const name = app.expo.name;
      setAppName(name);
    };

    fetchAppName();
  }, []);

  const handleSelectSession = (session) => {
    setSelectedSession(session);
    console.log('Selected session details:', session);
  };

  useEffect(() => {
    if (selectedSession && selectedChips.expertiseLevel?.expertiseLevel) {
      if (selectedSession.date) {
        setIsButtonDisabled(false);
      } else {
        setIsButtonDisabled(true);
      }
    } else {
      setIsButtonDisabled(true);
    }
  }, [selectedSession, selectedChips]);

  const findSession = async () => {
    try {
      setIsLoading(true);
      if (!selectedSession) {
        console.error('Selected session or active date is missing.');
        return;
      }

      if (!selectedSession.date) {
        console.error('Active date is missing.');
        return;
      }

      const dateTimeSlots = `${selectedSession.date}T${selectedSession.start}:00Z, ${selectedSession.date}T${selectedSession.end}`;
      let userId;
      try {
        userId = await AsyncStorage.getItem('userId');
        if (!userId) {
          dispatch(setLoginRedirect('/buddy/findBuddy'));
        }
        // Handle the userId
      } catch (storageError) {
        console.error('Error accessing storage:', storageError);
        // Add fallback behavior
      }

      const profession = commonConstants.professionConfig[appName];
      const sessionData = {
        preferences: {
          sessions: [
            {
              dateTimeSlots: [dateTimeSlots],
              catId: selectedSession?.catName || findBuddyDefaults.CATEGORY_ID,
              subSkillId: selectedSession?.skillName || findBuddyDefaults.SUB_SKILL_ID,
              participantsExpertiseLevel: selectedChips.expertiseLevel?.expertiseLevel || findBuddyDefaults.EXPERTISE_LEVEL,
              participantsReqd: selectedSession?.participantsReqd || findBuddyDefaults.PARTICIPANTS_REQUIRED,
              duration: selectedSession?.duration || findBuddyDefaults.DURATION
            },
          ],
          profession: [profession],
        },
        userDetails: {
          userId: userId,
          expertiseLevel: selectedChips.expertiseLevel?.expertiseLevel
            ? [{ Communication: selectedChips.expertiseLevel?.expertiseLevel }]
            : findBuddyDefaults.EXPERTISE,
        },
      };

      const response = await postFindBuddy(sessionData).unwrap();
      console.log('Session joined successfully:', response);

      if (response.isNewSessionCreated === false && response.message === "User has already participated in this session.") {
        setResponseMessage('Your session is already confirmed');
        dispatch(setFindBuddyMessage('Your session is already confirmed'));
      } else if (response.isNewSessionCreated) {
        const msg = 'Your session is in the WAITING LIST, would update you once it is confirmed.';
        setResponseMessage(msg);
        dispatch(setFindBuddyMessage(msg));
      } else {
        setResponseMessage('Your session is confirmed');
        dispatch(setFindBuddyMessage('Your session is confirmed'));
      }

      if (userId.startsWith('xz')) {
        router.push('/common/login');
      }
    } catch (error) {
      console.error('Failed to join session:', error);
      // Add user-friendly error message
      setResponseMessage('Unable to book session. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Book a session</Text>

          <IconButton
            onPress={() => dispatchTimeSlot({ type: 'SELECT_DAY' })}
            disabled={selectedTime === 'day'}
            imageSource={require('../../../../../assets/images/day.png')}
          />

          <IconButton
            onPress={() => dispatchTimeSlot({ type: 'SELECT_NIGHT' })}
            disabled={selectedTime === 'night'}
            imageSource={require('../../../../../assets/images/night.png')}
          />

          <IconButton
            onPress={() => dispatchTimeSlot({ type: 'SELECT_ALL' })}
            disabled={selectedTime === 'all'}
            imageSource={require('../../../../../assets/images/reset.png')}
          />
        </View>
        <ScrollView
          onScroll={(event) => {
            scrollY.setValue(event.nativeEvent.contentOffset.y);
          }}
          scrollEventThrottle={16}
        >
          <DateComponent
            onSelectSession={handleSelectSession}
            selectedTime={selectedTime}
          />
          <SkillContainer onSelectedSkillsChange={handleSelectedSkillsChange} />
          {selectedSession && (
            <View>
              <SelectableChips
                data={findBuddyPgData}
                onSelectionChange={handleSelectionChange}
              />
            </View>
          )}
          {responseMessage && (
            <Text style={styles.responseMessage}>{responseMessage}</Text>
          )}
          <View style={tw`mt-4 mb-5 w-full flex items-center`}>
            <Button
              title="Book a session"
              onPress={findSession}
              disabled={isButtonDisabled}
              color={isButtonDisabled ? 'gray' : ''}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
    gap: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  iconButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 50,
  },
  responseMessage: {
    color: 'green',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 20,
  },
  button: {
    width: 80,
    height: 40,
    borderRadius: 10,
    overflow: 'hidden',
  },
  disabledButton: {
    opacity: 0.3,
  },
});

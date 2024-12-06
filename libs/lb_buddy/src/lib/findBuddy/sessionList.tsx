import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import dayjs from 'dayjs';
import { useGetSlotMutation } from '@/libs/lb_features/src/lib/buddy/buddyServices';
import { appConfig, featuresConfig } from '@/libs/lb_common/featuresConfig';

const formatTime = (hour) => {
  const date = dayjs().hour(hour);
  return date.format('h A'); // Convert to 12-hour format with AM/PM
};

const SessionsList = ({ activeDate, selectedTime, onSelectSession }) => {
  const [selectedSession, setSelectedSession] = useState(null);

  const dateTimeRange = [
    dayjs().toISOString(),
    dayjs().add(7, 'day').endOf('day').toISOString(),
  ];

  const sessionsPayload = {
    dateTimeRange,
    sessions: appConfig('sessionsSkillsPayload'),
  };

  const [getSlot, { data: getSlotResp, error, isLoading }] = useGetSlotMutation();
  console.warn('getSlotResp ', getSlotResp);
  useEffect(() => {
    getSlot(sessionsPayload);
  }, [getSlot]);

  const getActiveDateSlots = () => {
    const activeDateFormatted = activeDate.format('YYYY-MM-DD');
    const todayFormatted = dayjs().format('YYYY-MM-DD');
    const uniqueSlots = {};
    const currentHour = dayjs().hour(); // Get current hour
    const currentMinute = dayjs().minute(); // Get current minute
  
    if (getSlotResp) {
      getSlotResp.forEach((category) => {
        category.skills.forEach((skill) => {
          Object.keys(skill.slots).forEach((date) => {
            if (date === activeDateFormatted) {
              skill.slots[date].forEach((start) => {
                const isSlotValid =
                  selectedTime === "all" ||
                  (selectedTime === "day" && start >= 5 && start < 17) ||
                  (selectedTime === "night" && start >= 17 && start < 24);
  
                if (isSlotValid) {
                  if (activeDateFormatted === todayFormatted) {
                    // If today, filter out expired sessions based on hour and minute
                    const slotHour = Math.floor(start);
                    const slotMinute = Math.round((start - slotHour) * 60); // Get minutes from fractional hour if applicable
  
                    if (
                      slotHour > currentHour || 
                      (slotHour === currentHour && slotMinute > currentMinute)
                    ) {
                      const end = (start + 2) % 24;
                      const slotKey = start;
  
                      if (!uniqueSlots[slotKey]) {
                        uniqueSlots[slotKey] = {
                          time: formatTime(slotHour),
                          sessions: [],
                        };
                      }
  
                      const isSkillExists = uniqueSlots[slotKey].sessions.some(
                        (session) =>
                          session.skillName === skill.skillName &&
                          session.catName === category.catName
                      );
  
                      if (!isSkillExists) {
                        uniqueSlots[slotKey].sessions.push({
                          catName: category.catName,
                          skillName: skill.skillName,
                          start,
                          end,
                          date, // Include date for comparison
                        });
                      }
                    }
                  } else {
                    const end = (start + 2) % 24;
                    const slotKey = start;
  
                    if (!uniqueSlots[slotKey]) {
                      uniqueSlots[slotKey] = {
                        time: formatTime(start),
                        sessions: [],
                      };
                    }
  
                    const isSkillExists = uniqueSlots[slotKey].sessions.some(
                      (session) =>
                        session.skillName === skill.skillName &&
                        session.catName === category.catName
                    );
  
                    if (!isSkillExists) {
                      uniqueSlots[slotKey].sessions.push({
                        catName: category.catName,
                        skillName: skill.skillName,
                        start,
                        end,
                        date, // Include date for comparison
                      });
                    }
                  }
                }
              });
            }
          });
        });
      });
    }
  
    return Object.values(uniqueSlots).sort((a, b) => a.start - b.start);
  };
  
  const activeSlots = getActiveDateSlots();

  const handleSelect = (session) => {
    const selected = {
      ...session,
      activeDate: activeDate.format('YYYY-MM-DD'), // Include active date in selected session
    };
    setSelectedSession(selected);
    onSelectSession(selected);
  };

  const isSelectedSession = (session) =>
    selectedSession?.start === session.start &&
    selectedSession?.skillName === session.skillName &&
    selectedSession?.activeDate === activeDate.format('YYYY-MM-DD'); // Compare active dates as well

  return (
    <View style={tw`mt-4`}>
      {isLoading ? (
        <Text style={tw`text-gray-600 text-center mt-2 text-white`}>Loading sessions...</Text>
      ) : activeSlots.length > 0 ? (
        activeSlots.map((slotInfo, index) => (
          <View key={index} style={tw`mb-5 px-4`}>
            <View style={tw`flex-row items-start`}>
              <View style={tw`w-20`}>
                <Text style={tw`text-white text-lg border-gray-300 pr-2`}>
                  {slotInfo.time}
                </Text>
              </View>
              <View style={tw`flex-1 pl-2`}>
                {slotInfo.sessions.map((session, i) => (
                  <TouchableOpacity
                    key={i}
                    onPress={() => handleSelect(session)}
                    style={[
                      tw`p-2 border-2 w-40 rounded-lg mb-2`,
                      {
                        borderColor: isSelectedSession(session)
                          ? 'rgba(34, 197, 94, 0.7)' // green border with opacity
                          : 'rgba(209, 213, 219, 1)', // gray border with opacity
                        backgroundColor: isSelectedSession(session)
                          ? 'rgba(34, 197, 94, 0.5)' // green background with opacity
                          : '#FFFFFF', // white background
                      },
                    ]}
                  >
                    <Text
                      style={[
                        tw`text-lg text-center`,
                        {
                          color: isSelectedSession(session)
                            ? 'white'
                            : 'black', // Ensure text is black for unselected sessions on white background
                        },
                      ]}
                    >
                      {session.skillName}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
        ))
      ) : (
        <Text style={tw`text-gray-600 text-center mt-2 text-white`}>No available sessions for this date.</Text>
      )}
    </View>
  );
};

export default SessionsList;

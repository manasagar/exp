// App.tsx
import React, { useState } from 'react';
import { View, Button } from 'react-native';
import StreakProgress from './streakProgress';
import FlameIcon from './flameIcon';
import StreakFreezes from './streakFreeze';
import XPPoints from './XpPints';
import VIPStatus from './VIPStatus';
import NotificationsReminders from './notificationReminder';
import { STREAK_FREEZES_LIMIT } from './constants';
import { MILESTONES_CONFIG } from './milestoneConfig';

const StreakContainer = () => {
  const [streakDays, setStreakDays] = useState(5); // Update with actual streak days
  const [streakFreezes, setStreakFreezes] = useState(STREAK_FREEZES_LIMIT);

  const handleCompleteLesson = () => {
    // Logic to handle completing a lesson and marking the day as completed
    setStreakDays((prevDays) => prevDays + 1);
  };

  return (
    <View>
      <FlameIcon streak={streakDays} />
      <StreakProgress days={streakDays} />
      
      <StreakFreezes availableFreezes={streakFreezes} />
      <XPPoints streak={streakDays} />
      <VIPStatus streak={streakDays} />
      <NotificationsReminders />

      {/* Button to simulate completing a lesson */}
      <Button title="Complete Lesson" onPress={handleCompleteLesson} />
    </View>
  );
};

export default StreakContainer;

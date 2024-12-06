import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const StreakProgress = ({ days }: { days: number }) => {
  const [checkedDays, setCheckedDays] = React.useState<boolean[]>([false, false, false, false, false, false, false]);

  const toggleDay = (index: number) => {
    const updatedCheckedDays = [...checkedDays];
    updatedCheckedDays[index] = !updatedCheckedDays[index];
    setCheckedDays(updatedCheckedDays);
  };

  return (
    <View style={styles.container}>
      <View style={styles.streakIndicator}>
        <Text style={styles.streakNumber}>{days}</Text>
        <Text style={styles.streakText}>day streak!</Text>
      </View>

      <View style={styles.checkBoxContainer}>
        {['Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We'].map((day, index) => (
          <View key={index} style={styles.checkboxWrapper}>
            <Text style={styles.checkboxLabel}>{day}</Text>
            <TouchableOpacity
              style={[
                styles.checkbox,
                { backgroundColor: checkedDays[index] ? 'orange' : 'transparent' },
              ]}
              onPress={() => toggleDay(index)}
            >
              {checkedDays[index] && <Text style={styles.checkmark}>✓</Text>}
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <Text style={styles.warningText}>
        But your streak will reset if you don’t practice tomorrow. Watch out!
      </Text>

      <TouchableOpacity style={styles.commitmentButton}>
        <Text style={styles.buttonText}>I’M COMMITTED</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  streakIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  streakNumber: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'orange',
  },
  streakText: {
    fontSize: 18,
  },
  checkBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '30%', // Adjust the width to your preference
    marginTop: 20,
  },
  checkboxWrapper: {
    alignItems: 'center',
  },
  checkboxLabel: {
    color: 'gray',
    fontSize: 14,
    fontWeight: '700',
  },
  checkbox: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'orange',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  checkmark: {
    color: 'white',
    fontSize: 16,
  },
  warningText: {
    fontSize: 14,
    color: 'black',
    marginTop: 10,
  },
  commitmentButton: {
    backgroundColor: '#0074D9',
    color: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default StreakProgress;

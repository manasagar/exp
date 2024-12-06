import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const minutesMultiple = 20;
const defaultHrGapBwFromTo = 3;

const getDefaultTime = () => {
  const now = new Date();
  let minutes = Math.ceil(now.getMinutes() / minutesMultiple) * minutesMultiple;
  let hours = now.getHours();
  let period = 'AM';

  if (minutes >= 60) {
    minutes = 0;
    hours += 1;
  }

  if (hours >= 12) {
    period = 'PM';
    if (hours > 12) {
      hours -= 12;
    }
  }

  return { hours, minutes, period };
};

const getNextDefaultTime = (fromTime) => {
  let { hours, minutes, period } = fromTime;
  hours += defaultHrGapBwFromTo;

  if (hours >= 12) {
    period = period === 'AM' ? 'PM' : 'AM';
    if (hours > 12) {
      hours -= 12;
    }
  }

  return { hours, minutes, period };
};

const TimeRangeComponent = ({ onTimeRangesChange }) => {
  console.log('onTimeRangesChange ',onTimeRangesChange);
  const [timeRanges, setTimeRanges] = useState([{ from: getDefaultTime(), to: getNextDefaultTime(getDefaultTime()) }]);

  useEffect(() => {
    onTimeRangesChange(timeRanges);
  }, [timeRanges]);

  const addTimeRange = () => {
    setTimeRanges([
      ...timeRanges,
      { from: { hours: 0, minutes: 0, period: 'AM' }, to: { hours: 0, minutes: 0, period: 'AM' } },
    ]);
  };

  const removeTimeRange = (index) => {
    const newTimeRanges = timeRanges.filter((_, i) => i !== index);
    setTimeRanges(newTimeRanges);
  };

  const handleTimeChange = (index, type, field, value) => {
    const newTimeRanges = [...timeRanges];
    newTimeRanges[index][type][field] = field === 'hours' || field === 'minutes' ? parseInt(value) || 0 : value;
    setTimeRanges(newTimeRanges);
  };

  const screenWidth = Dimensions.get('window').width;
  const isSmallScreen = screenWidth < 768;

  return (
    <View style={styles.container}>
      {timeRanges.map((timeRange, index) => (
        <View key={index} style={styles.timeRangeRow}>
          <View style={[styles.timeSectionContainer, isSmallScreen ? styles.timeSectionContainerSmall : styles.timeSectionContainerLarge]}>
            <View style={styles.timeSection}>
              <Text>From</Text>
              <TextInput
                style={styles.input}
                keyboardType="number-pad"
                value={timeRange.from.hours.toString()}
                onChangeText={(text) => handleTimeChange(index, 'from', 'hours', text)}
              />
              <TextInput
                style={styles.input}
                keyboardType="number-pad"
                value={timeRange.from.minutes.toString()}
                onChangeText={(text) => handleTimeChange(index, 'from', 'minutes', text)}
              />
              <Picker
                selectedValue={timeRange.from.period}
                style={styles.picker}
                onValueChange={(itemValue) => handleTimeChange(index, 'from', 'period', itemValue)}
              >
                <Picker.Item label="AM" value="AM" />
                <Picker.Item label="PM" value="PM" />
              </Picker>
            </View>

            <View style={styles.timeSection}>
              <Text>To</Text>
              <TextInput
                style={styles.input}
                keyboardType="number-pad"
                value={timeRange.to.hours.toString()}
                onChangeText={(text) => handleTimeChange(index, 'to', 'hours', text)}
              />
              <TextInput
                style={styles.input}
                keyboardType="number-pad"
                value={timeRange.to.minutes.toString()}
                onChangeText={(text) => handleTimeChange(index, 'to', 'minutes', text)}
              />
              <Picker
                selectedValue={timeRange.to.period}
                style={styles.picker}
                onValueChange={(itemValue) => handleTimeChange(index, 'to', 'period', itemValue)}
              >
                <Picker.Item label="AM" value="AM" />
                <Picker.Item label="PM" value="PM" />
              </Picker>
            </View>
          </View>

          <View style={styles.buttons}>
            {timeRanges.length > 1 && (
              <TouchableOpacity style={styles.removeButton} onPress={() => removeTimeRange(index)}>
                <Text style={styles.removeButtonText}>−</Text>
              </TouchableOpacity>
            )}
            {index === timeRanges.length - 1 && (
              <TouchableOpacity style={styles.addButton} onPress={addTimeRange}>
                <Text style={styles.addButtonText}>+</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      ))}

     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal:38,
    paddingVertical:12,
    width: 'auto',
  },
  timeRangeRow: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    marginBottom: 16,
  },
  timeSectionContainer: {
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  timeSectionContainerSmall: {},
  timeSectionContainerLarge: {
    flexDirection: 'row',
  },
  timeSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  input: {
    borderWidth: 1,
    padding: 8,
    margin: 4,
    width: 40,
    textAlign: 'center',
  },
  picker: {
    width: 60,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: '#007bff',
    paddingLeft: 9,
    paddingRight: 9,
    paddingBottom: 3,
    borderRadius: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
  },
  removeButton: {
    backgroundColor: '#ff0000',
    paddingLeft: 9,
    paddingRight: 9,
    paddingBottom: 3,
    borderRadius: 20,
    marginLeft: 8,
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
  },
  selectedTimes: {
    marginTop: 16,
    textAlign: 'center',
  },
});

export default TimeRangeComponent

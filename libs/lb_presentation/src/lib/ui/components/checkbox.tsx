import React from 'react';
import { Controller, Control } from 'react-hook-form';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface CheckBoxProps {
  control: Control;
  name: string;
  label: string;
  defaultValue?: boolean;
  onValueChange?: (value: boolean) => void;
}

const CheckBox: React.FC<CheckBoxProps> = ({ control, name, label, defaultValue, onValueChange }) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue || false}
      render={({ field: { onChange, value } }) => (
        <TouchableOpacity 
          onPress={() => {
            const newValue = !value;
            onChange(newValue);
            if (onValueChange) {
              onValueChange(newValue);
            }
          }} 
          style={styles.container}
        >
          <View style={styles.checkboxContainer}>
            <View style={[styles.checkbox, value && styles.checkedCheckbox]} />
            <Text style={styles.label}>{label}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 4,
    backgroundColor: 'white',
  },
  checkedCheckbox: {
    backgroundColor: '#5f8427',
  },
  label: {
    marginLeft: 8,
    fontSize: 16,
  },
});

export default CheckBox;

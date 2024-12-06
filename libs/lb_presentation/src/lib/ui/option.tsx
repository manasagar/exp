import React from 'react';
import { TouchableOpacity, StyleSheet, GestureResponderEvent, Text } from 'react-native';

export interface OptionProps {
  value: string | number;
  label: string;
  nativeID?: string | number;
  onPress?: (value: string | number) => void;
  selected?: boolean;
  disabled?: boolean;
}

export function Option({ value, label, nativeID, onPress, selected, disabled = false }: OptionProps) {
  const styles = StyleSheet.create({
    selected: { backgroundColor: "skyBlue", color: "white" },
    default: { fontWeight: "500", textTransform: "uppercase", zIndex: 200, elevation: 201, padding: 5 },
    disabled: { opacity: 0.75, backgroundColor: "grey" }
  });

  const handlePress = (e: GestureResponderEvent) => {
    if (onPress) onPress(value);
  };

  return (
    <TouchableOpacity
      disabled={disabled}
      style={{ backgroundColor: selected ? "skyblue" : "white" }}
      onPress={handlePress}
    >
      <Text style={[styles.default, selected && styles.selected, disabled && styles.disabled]}>{label}</Text>
    </TouchableOpacity>
  );
}

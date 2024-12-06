import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

interface RadioButtonProps {
  value: string;
  label: string;
  selected: boolean;
  onPress: () => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  selected,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View
        style={[styles.radioButton, selected && styles.selectedRadioButton]}
      />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  radioButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    marginRight: 10,
    borderColor: "#000", // Adjust border color as needed
  },
  selectedRadioButton: {
    backgroundColor: "#5f8427",
  },
  label: {
    fontSize: 17,
    fontWeight: "500",
    flex: 1, // Allow text to take available space
    flexWrap: "wrap",
  },
});

export default RadioButton;

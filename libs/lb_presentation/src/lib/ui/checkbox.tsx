import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import tw from "twrnc";

interface CustomCheckboxProps {
  label?: string;
  checked?: boolean;
  onChange: (checked: boolean) => void;
  imgSrc: string;
  level?: Number;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  label,
  checked = false,
  onChange,
  imgSrc,
  level,
}) => {
  const [isChecked, setChecked] = useState(checked);

  useEffect(() => {
    setChecked(checked);
  }, [checked]);

  const handlePress = () => {
    const newChecked = !isChecked;
    setChecked(newChecked);
    onChange(newChecked);
  };

  let checkboxSize = "w-8 h-8 ";
  let tickSize = "text-xl";

  if (level === 1) {
    checkboxSize = "w-7 h-7 ";
    tickSize = "text-lg";
  } else if (level === 2) {
    checkboxSize = "w-6 h-6";
    tickSize = "text-base";
  } else if (level === 3) {
    checkboxSize = "w-5 h-5";
    tickSize = "text-xs";
  }

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={tw`flex-row items-center my-2  py-2 rounded-md focus:outline-none focus:border-blue-500`}
    >
      <View
        style={tw`${checkboxSize} border border-black bg-white rounded mr-2 flex justify-center items-center`}
      >
        {isChecked && (
          <Text style={tw`${tickSize} text-black font-bold`}>✓</Text>
        )}
      </View>
      <View style={tw`flex-row gap-4 justify-center items-center`}>
        {label && <Text style={tw`text-base`}>{label}</Text>}
      </View>
    </TouchableOpacity>
  );
};

export default CustomCheckbox;

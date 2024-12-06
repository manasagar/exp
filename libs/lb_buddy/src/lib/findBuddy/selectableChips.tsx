import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import tw from "twrnc";

// Chip component to handle each group of selectable chips
const Chips = ({ data, isMultiple, onSelectionChange }) => {
  const [selectedOptions, setSelectedOptions] = useState({});

  // Effect to notify parent component of selection changes
  useEffect(() => {
    onSelectionChange(selectedOptions);
  }, [selectedOptions]);

  // Handle chip selection, supporting single or multiple selections
  const handleSelect = (apiKey, value) => {
    setSelectedOptions((prev) => {
      const newOptions = { ...prev };
      if (!newOptions[apiKey]) {
        newOptions[apiKey] = [value];
      } else {
        if (isMultiple) {
          // If multiple selection is enabled
          if (!newOptions[apiKey].includes(value)) {
            newOptions[apiKey].push(value);
          }
        } else {
          // If only single selection is enabled
          newOptions[apiKey] = [value];
        }
      }
      return newOptions;
    });
  };

  return (
    <View style={tw`p-4`}>
      {/* Chip group label */}
      <Text style={tw`text-lg font-bold mb-2 text-white`}>{data.label}</Text>
      <View style={tw`flex-row flex-wrap`}>
        {/* Map through the options to display each chip */}
        {data.options.map((option) => (
          <TouchableOpacity
            key={option.value}
            style={[
              tw`px-4 py-2 rounded-full m-1 border`, // Ensuring border is applied here
              selectedOptions[option.apiKey] &&
              selectedOptions[option.apiKey].includes(option.value)
                ? tw`bg-[rgba(16,185,129,0.2)] border-[rgba(16,185,129,0.5)]` // Transparent green for selected chip
                : tw`bg-gray-600 border-white`, // Style for non-selected chip
            ]}
            onPress={() => handleSelect(option.apiKey, option.value)}
          >
            <Text
              style={[
                tw`text-sm font-semibold`,
                selectedOptions[option.apiKey] &&
                selectedOptions[option.apiKey].includes(option.value)
                  ? tw`text-white`
                  : tw`text-white`,
              ]}
            >
              {option.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

// Main SelectableChips component to render groups of chips
const SelectableChips = ({ data, onSelectionChange }) => {
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleSelectionChange = (newSelectedOptions) => {
    setSelectedOptions((prev) => ({ ...prev, ...newSelectedOptions }));
  };

  useEffect(() => {
    onSelectionChange(selectedOptions); // Notify parent of selected options
  }, [selectedOptions]);

  return (
    <ScrollView style={tw``}>
      <View style={tw`px-3`}>
        {/* Uncomment the sections below for day and preferences if needed */}
        {/* 
        <Chips
          data={data.day}
          isMultiple={false}
          onSelectionChange={(newSelectedOptions) =>
            handleSelectionChange({ day: newSelectedOptions })
          }
        />
        <Chips
          data={data.preferences}
          isMultiple={true}
          onSelectionChange={(newSelectedOptions) =>
            handleSelectionChange({ preferences: newSelectedOptions })
          }
        /> 
        */}
        
        {/* Expertise level selection (single choice) */}
        <Chips
          data={data.expertiseLevel}
          isMultiple={false}
          onSelectionChange={(newSelectedOptions) =>
            handleSelectionChange({ expertiseLevel: newSelectedOptions })
          }
        />
      </View>
    </ScrollView>
  );
};

export default SelectableChips;

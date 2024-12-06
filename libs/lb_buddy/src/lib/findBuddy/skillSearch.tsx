import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import tw from 'twrnc';
import _ from 'lodash';
import AntDesign from '@expo/vector-icons/AntDesign';
import { skillsData } from './availableSessions';

const isMultipleItemsSelectable = false; // Set this to false to disable multiple selection
const isCategorySelectable = false; // If true category can be selected which means all the skills under it were selected
const SkillSearch = ({ onSelectedSkillsChange }) => {
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState(skillsData);
  const [selctdSt_ids, setSelctdSt_ids] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    if (query.length < 2) {
      setFilteredData(skillsData);
    } else {
      const debouncedFilter = _.debounce(() => {
        const lowerCaseQuery = query.toLowerCase();
        const newFilteredData = skillsData
          .map((category) => {
            const subSkillsMatch = category.subSkills.filter((subSkill) => {
              return (
                subSkill.displayName.toLowerCase().includes(lowerCaseQuery) ||
                (subSkill.alt &&
                  subSkill.alt.some((altName) =>
                    altName.toLowerCase().includes(lowerCaseQuery)
                  ))
              );
            });
            if (subSkillsMatch.length > 0) {
              return { ...category, subSkills: subSkillsMatch };
            }
            return null;
          })
          .filter((category) => category !== null);
        setFilteredData(newFilteredData);
      }, 300);
      debouncedFilter();
    }
  }, [query]);

  useEffect(() => {
    const selectedSkills = selctdSt_ids.map((id) =>
      skillsData
        .flatMap((category) => [category, ...category.subSkills])
        .find((skill) => skill.id === id)
    );
    // console.log("Selected skills:", selectedSkills);
    onSelectedSkillsChange(selectedSkills);
  }, [selctdSt_ids]);

  const handleSelect = (id) => {
    if (isMultipleItemsSelectable) {
      setSelctdSt_ids((prevSelectedIds) =>
        prevSelectedIds.includes(id)
          ? prevSelectedIds.filter((selectedId) => selectedId !== id)
          : [...prevSelectedIds, id]
      );
    } else {
      setSelctdSt_ids([id]);
    }
  };

  const handleClear = () => {
    setQuery('');
    setFilteredData(skillsData);
    setIsHidden(false); // Reset the hidden state when clearing
  };

  const handleHide = () => {
    setIsHidden(true);
  };

  const handleFocus = () => {
    setIsFocused(true);
    setIsHidden(false); // Reset the hidden state when focusing
  };

  const renderSubSkill = ({ item }) => (
    <TouchableOpacity
      style={tw`ml-3 py-2 ${
        selctdSt_ids.includes(item.id) ? 'bg-blue-300' : 'bg-white'
      }`}
      onPress={() => handleSelect(item.id)}
    >
      <Text>{item.displayName}</Text>
    </TouchableOpacity>
  );

  const renderCategory = ({ item }) => (
    <View>
      <TouchableOpacity
        style={tw`py-2  ${
          isCategorySelectable && selctdSt_ids.includes(item.id)
            ? 'bg-blue-300'
            : 'bg-white'
        }`}
        onPress={() => isCategorySelectable && handleSelect(item.id)}
      >
        <Text style={tw`font-bold text-lg`}>{item.displayName}</Text>
      </TouchableOpacity>
      <FlatList
        data={item.subSkills}
        renderItem={renderSubSkill}
        keyExtractor={(subItem) => subItem.id}
      />
    </View>
  );

  return (
    <View style={tw`p-4`}>
      <View style={tw`relative`}>
        <TextInput
          style={tw`border p-2 w-72`}
          placeholder="Search skills..."
          value={query}
          onChangeText={setQuery}
          onFocus={handleFocus}
        />
        {query.length > 0 && (
          <TouchableOpacity
            style={tw`absolute right-2 top-2`}
            onPress={handleClear}
          >
            <Text style={tw`text-gray-500`}>✕</Text>
          </TouchableOpacity>
        )}
      </View>
      {isFocused && !isHidden && (
        <View>
          <TouchableOpacity
            style={tw`p-2 bg-gray-200 flex-row justify-between items-center`}
            onPress={handleHide}
          >
            <Text>Hide</Text>
   
            <AntDesign name="up" size={16} color="black" style={tw`mr-2`} />
          </TouchableOpacity>

          <FlatList
            data={filteredData}
            renderItem={renderCategory}
            keyExtractor={(item) => item.id}
          />
        </View>
      )}
    </View>
  );
};

export default SkillSearch;

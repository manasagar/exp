import React, { useState, memo } from 'react';
import { View, FlatList, Text, Pressable, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import Ionicons from vector icons
import tw from 'twrnc';

interface Item {
  key: string;
  value: string;
  checked: boolean;
}

interface CustomMultipleSelectProps {
  data: Item[];
  onSelect: (item: Item) => void;
  selectAll: () => void;
}

const ListItem = memo(({ item, onSelect }: { item: Item; onSelect: (item: Item) => void }) => {
  return (
    <Pressable
      onPress={() => onSelect(item)}
      style={[
        tw`bg-[#F3F4F6] border-[1px] p-3 flex-row items-center justify-center`,
        item?.checked ? tw`bg-blue-200` : tw`bg-gray-200`,
        styles.listItem
      ]}
      accessible={true}
      accessibilityLabel={`Select ${item?.value}`}
    >
      <Text style={tw`text-black font-semibold text-center`}>
        {item?.value}
      </Text>
    </Pressable>
  );
});

const CustomMultipleSelect: React.FC<CustomMultipleSelectProps> = ({ data, onSelect, selectAll }) => {
  const [openSelectBox, setOpenSelectBox] = useState(false);

  // Determine if all items are selected
  const allSelected = data.length > 0 && data.every(item => item.checked);

  return (
    <View style={tw`p-3`}>
      <Pressable
        style={[tw`bg-gray-100 rounded flex-row items-center justify-between p-3`, styles.selectBox]}
        onPress={() => setOpenSelectBox(!openSelectBox)}
        accessible={true}
        accessibilityLabel="Toggle Select Categories"
      >
        <Text style={tw`text-black font-semibold`}>
          Categories
        </Text>
        {/* Display icon based on openSelectBox state with margin between icon and text */}
        <Icon name={openSelectBox ? 'chevron-up' : 'chevron-down'} size={20} color="black" style={tw`ml-2`} />
      </Pressable>

      {openSelectBox && (
        <View style={styles.container}>
          {data.length === 0 ? (
            <Text style={tw`text-black font-semibold text-center p-3`}>No categories available</Text>
          ) : (
            <Pressable
              onPress={selectAll}
              style={[tw`bg-gray-200 border-[1px] flex-row items-center justify-center`, styles.selectAll]}
              accessible={true}
              accessibilityLabel={allSelected ? "Deselect All Items" : "Select All Items"}
            >
              <Text style={tw`text-black font-semibold`}>
                {allSelected ? 'Deselect All' : 'Select All'}
              </Text>
            </Pressable>
          )}
          <ScrollView
            style={styles.scrollContainer}
            nestedScrollEnabled={true} // Allow nested scrolling
            showsVerticalScrollIndicator={false} // Hide the vertical scrollbar
          >
            <FlatList
              data={data}
              renderItem={({ item }) => <ListItem item={item} onSelect={onSelect} />}
              keyExtractor={(item) => item?.key}
              contentContainerStyle={styles.flatListContent}
            />
          </ScrollView>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: 150,  // Fixed width for the container
  },
  selectBox: {
    maxWidth: 150,  // Fixed width for the select box
    minHeight: 40,  // Adjust height as needed
  },
  selectAll: {
    maxWidth: 150,  // Fixed width for the select all button
    minHeight: 40,  // Adjust height as needed
  },
  scrollContainer: {
    width: '100%',  // Ensure ScrollView takes full width
    maxHeight: 350,  // Adjust height as needed, or remove for flexible height
  },
  flatListContent: {
    paddingHorizontal: 0,  // Ensure no extra horizontal padding
  },
  listItem: {
    minHeight: 40,  // Ensure each item has a minimum height
  },
});

export default CustomMultipleSelect;

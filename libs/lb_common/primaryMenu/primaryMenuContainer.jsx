import React, { useState, useRef, useEffect } from 'react';
import { Animated, View, TouchableOpacity, Text, Dimensions, Modal, TouchableWithoutFeedback } from 'react-native';
import tw from 'twrnc';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { primaryMenuConfig } from './primaryMenuConfig';

const MenuItem = ({ label, route, onPress }) => (
  <TouchableOpacity onPress={() => onPress(route)}>
    <View style={tw`py-2 px-8 bg-white`}>
      <Text style={tw`text-base text-gray-700`}>{label}</Text>
    </View>
  </TouchableOpacity>
);

const MenuHeading = ({ heading, isExpand, onToggleExpand, items = [], onPress }) => (
  <View style={tw`py-2 border-b border-gray-200 bg-white`}>
    <TouchableOpacity onPress={onToggleExpand}>
      <View style={tw`flex-row items-center justify-between px-4 bg-white`}>
        <Text style={tw`text-base font-semibold text-gray-800`}>{heading}</Text>
        <Entypo
          name={isExpand ? 'chevron-down' : 'chevron-right'}
          size={20}
          color="gray"
        />
      </View>
    </TouchableOpacity>
    {isExpand && (
      <View style={tw`bg-white`}>
        {items.map((item) => (
          <MenuItem key={item.label} label={item.label} route={item.route} onPress={onPress} />
        ))}
      </View>
    )}
  </View>
);

export default function PrimaryMenuContainer() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);
  const slideAnim = useRef(new Animated.Value(-screenWidth)).current;
  const navigation = useNavigation();

  useEffect(() => {
    const handleResize = ({ window }) => {
      setScreenWidth(window.width);
    };

    const subscription = Dimensions.addEventListener('change', handleResize);

    return () => {
      subscription?.remove();
    };
  }, []);

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: isMenuOpen ? 0 : -screenWidth,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [isMenuOpen, screenWidth]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const [expandedHeadings, setExpandedHeadings] = useState(
    primaryMenuConfig.map((item, index) => item.heading === 'Home' ? true : (item.isExpand || false))
  );

  const toggleExpand = (index) => {
    setExpandedHeadings((prev) =>
      prev.map((expanded, i) => (i === index ? !expanded : expanded))
    );
  };

  const handleMenuPress = (route) => {
    if (route) {
      console.log(`Navigating to route: ${route}`); // Debugging
      toggleMenu();  // Close the menu when a route is selected
      navigation.navigate(route);
    }
  };

  const handleOutsidePress = () => {
    if (isMenuOpen) {
      toggleMenu(); // Close the menu when clicking outside
    }
  };

  return (
    <View style={tw`flex-1`}>
      <TouchableOpacity
        onPress={toggleMenu}
        style={tw`absolute top-3 left-3 z-20 bg-gray-100 p-1 rounded-full`}
      >
        <Entypo name="menu" size={20} color="black" />
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={isMenuOpen}
        animationType="fade"
        onRequestClose={toggleMenu}
      >
        <TouchableWithoutFeedback onPress={handleOutsidePress}>
          <View style={tw`flex-1 bg-black opacity-50`} />
        </TouchableWithoutFeedback>
        <TouchableOpacity
        onPress={toggleMenu}
        style={tw`absolute top-3 left-3 z-20 bg-gray-100 p-1 rounded-full`}
      >
        <Entypo name="menu" size={20} color="black" />
      </TouchableOpacity>
        <Animated.View
          style={[
            tw`absolute top-1 left-0 mt-4 h-auto z-10 shadow-lg bg-white`,
            { width: screenWidth, transform: [{ translateX: slideAnim }] },
          ]}
        >
          <View style={tw`pt-7 pb-2 px-7 bg-white`}>
            {primaryMenuConfig.map((item, index) => (
              <MenuHeading
                key={item.heading}
                heading={item.heading}
                isExpand={expandedHeadings[index]}
                onToggleExpand={() => toggleExpand(index)}
                items={item.items}
                onPress={handleMenuPress}
              />
            ))}
          </View>
        </Animated.View>
      </Modal>
    </View>
  );
}

import React from 'react';
import { View, StyleSheet, useWindowDimensions, FlatList } from 'react-native';
import ServiceItem from './serviceItem';
import { appConfig } from '@/libs/lb_common/featuresConfig';

const ServicesContainer = () => {
  const { width, height } = useWindowDimensions();

  // Fetch services configuration from appConfig
  const servicesConfig = appConfig('servicesConfig');

  // Convert servicesConfig to an array of items
  const servicesArray = Object.keys(servicesConfig).map((key) => ({
    key, // The key will be used as a unique identifier
    ...servicesConfig[key],
  }));

  // Render Item function for FlatList
  const renderItem = ({ item }) => {
    return <ServiceItem service={item} width={width} />;
  };

  return (
    <View style={[styles.container, { width, height }]}>
      <FlatList
        data={servicesArray} // Set the data prop to the array of services
        renderItem={renderItem} // Render each ServiceItem
        keyExtractor={(item) => item.key} // Use the key as a unique identifier
        showsVerticalScrollIndicator={false} // Optional: hides vertical scrollbar
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131927',
    borderRadius: 8,
  },
});

export default ServicesContainer;

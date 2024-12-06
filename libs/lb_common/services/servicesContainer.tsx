import React from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';
import ServiceItem from './serviceItem';
import { appConfig } from '@/libs/lb_common/featuresConfig';

const ServicesContainer = () => {
  const { width, height } = useWindowDimensions();

  const servicesConfig = appConfig('servicesConfig');

  return (
    <View style={[styles.container, { width, height }]}>
      {Object.keys(servicesConfig).map((key, index) => (
        <ServiceItem key={index} service={servicesConfig[key]} width={width} />
      ))}
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

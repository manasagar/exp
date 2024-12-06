import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  GestureResponderEvent
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // Import MaterialIcons
// import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import { useRouter } from "expo-router";

// Type definition for props
interface ServiceItemProps {
  service: {
    title: string;
    description: string;
    icon: string | number;
    route?: string;
  };
  numItems?: number; // Allow for dynamic number of items to adjust tile size
}

const ServiceItem: React.FC<ServiceItemProps> = ({ service, numItems = 5 }) => {

  const router = useRouter();

  // Get screen width and height
  const { width, height } = Dimensions.get('window');

  // Dynamically calculate the tile height based on the number of items (default to 5)
  const tileHeight = height * 0.8 / numItems;

  // Calculate image height based on tile height
  const imageHeight = tileHeight * 0.6; // 60% of the tile height for the image

  const handlePress = (event: GestureResponderEvent) => {
    try {
      if (service.route) {
        router.push(`${service.route}`);
      } else {
        console.error('Service route is missing:', service);
      }
    } catch (error) {
      console.error('Navigation error:', error);
    }
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.9}
      style={[
        styles.flexRow,
        styles.item,
        {
          width: width - 20, // Set tile width dynamically
          height: tileHeight // Set tile height dynamically
        }
      ]}
    >
      <Image
        source={
          typeof service.icon === 'string'
            ? { uri: service.icon, cache: 'force-cache' }
            : service.icon
        }
        style={[
          styles.image,
          { width: width * 0.25, height: imageHeight }
        ]}
        resizeMode="contain"
      />

      <View style={styles.flex1}>
        <Text style={styles.title}>{service.title}</Text>
        <Text style={styles.description}>{service.description}</Text>
      </View>

      <View style={styles.arrowContainer}>
        <MaterialIcons name="chevron-right" size={28} color="#131927" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#E5E7EB' // equivalent to bg-gray-200
  },
  item: {
    borderRadius: 8,
    borderColor: '#131927',
    borderWidth: 1,
    marginVertical: 16,
    alignSelf: 'center',
    flexDirection: 'row'
  },
  flex1: {
    flex: 1
  },
  title: {
    fontSize: 18, // equivalent to text-lg
    fontWeight: 'bold'
  },
  description: {
    fontSize: 14, // equivalent to text-sm
    color: '#4B5563' // equivalent to text-gray-600
  },
  image: {
    marginRight: 16, // Adds margin between image and text
    resizeMode: 'contain' // Ensure the image maintains its aspect ratio
  },
  arrowContainer: {
    paddingRight: 4, // Add some right padding for better alignment
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ServiceItem;

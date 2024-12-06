import React, { useState, useEffect } from 'react';
import { View, Dimensions, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Screenshot from '../../../../lb_utils/src/lib/screenshot/screenshotContainer';
import tw from 'twrnc';
import ElementRenderer from '../../../../lb_features/src/lib/content/templates/elementRenderer';
import ProgressBar from '../../../../lb_features/src/lib/content/top-progres';

export const SlideItem = ({ slide, onTouchStart, onTouchEnd, index, size }) => {
  const width = Dimensions.get('window').width;  // Use window width

  const [menuVisible, setMenuVisible] = useState(false);
  const [progress, setProgress] = useState(0); // State for progress

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  useEffect(() => {
    if (size > 0) {
      // Calculate the progress percentage
      const newProgress = ((index + 1) / size) * 100;
      setProgress(newProgress);
    }
  }, [index, size]);

  return (
    <View style={styles.container}>
      {/* Option Bar (from layout.tsx) should be placed here if needed, outside the ScrollView */}

      <View style={styles.stickyProgressBar}>
        <ProgressBar percentage={progress} />
      </View>
      
      <TouchableOpacity
        onPress={onTouchStart}
        onPressOut={onTouchEnd}
        activeOpacity={1}
        style={[
          tw`justify-center items-center`,
          { width,height:'97vh' }
        ]}
      >
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <Screenshot>
            <ElementRenderer
              currentSegmentIndex={0}
              card={slide}
            />
          </Screenshot>
        </ScrollView>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start', // Ensure content starts from the top
  },
  stickyProgressBar: {
    position: 'absolute',
    top: 0,
    width: '90%',
    zIndex: 1,
    margin: 20, // Adjust this value to the height of your progress bar
  },
  scrollViewContent: {
    paddingTop: 30, // Ensure content is below the progress bar
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SlideItem;

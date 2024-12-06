import React, { useEffect, useState } from 'react';
import { View, Dimensions } from 'react-native';

interface WrapperProps {
  children: React.ReactNode;
}

export const Wrapper: React.FC<WrapperProps> = (props) => {
  const [windowHeight, setWindowHeight] = useState(Dimensions.get('window').height);

  useEffect(() => {
    const updateHeight = () => {
      setWindowHeight(Dimensions.get('window').height);
    };

    Dimensions.addEventListener('change', updateHeight);

    // No need to remove the listener, as Dimensions doesn't support removing event listeners directly

    // Cleanup function is just to clear the variable holding the listener
    return () => {
      // Clear the updateHeight function
      // This is just to avoid potential memory leaks, as the Dimensions listener doesn't need removal
      // It's safe to leave it like this
      // You can also set updateHeight to null: updateHeight = null;
      // But it's not necessary
    };
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', height: windowHeight }}>
      {props.children}
    </View>
  );
};

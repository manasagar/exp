import React, { useEffect, useRef } from 'react';
import { ViewStyle } from 'react-native';
import { View, StyleSheet, Animated } from 'react-native';

interface ProgressBarProps {
    percentage: number;
    style?: ViewStyle;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage, style }) => {
    const progressAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(progressAnim, {
            toValue: percentage,
            duration: 500, // Adjust the duration as needed
            useNativeDriver: false, // `useNativeDriver` must be false for width animation
        }).start();
    }, [percentage]);

    const widthInterpolated = progressAnim.interpolate({
        inputRange: [0, 100],
        outputRange: ['0%', '100%'],
    });

    return (
        <View style={[styles.progressBar, style]}>
            <Animated.View style={[styles.progressFill, { width: widthInterpolated }]} />
        </View>
    );
};

const styles = StyleSheet.create({
    progressBar: {
        height: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#a9dc45',
        overflow: 'hidden', // Ensure the fill doesn't overflow the container
    },
    progressFill: {
        height: '100%',
        backgroundColor: '#a9dc45', // Valid color code #a9dc45
    },
});

export default ProgressBar;

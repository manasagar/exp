/* eslint-disable @typescript-eslint/no-unused-vars */
import { View , Text } from 'react-native';
import tw from 'twrnc';
import React, { useEffect } from 'react';
import { initializeBranch } from './branch'; // Adjust the path as necessary

const Testing = () => {
    useEffect(() => {
        const yourBranchKey = 'key_test_mqcRnUp4zGZbTxvj4UpjebkmFxa6fEn1'; // Replace with your actual key
        initializeBranch(yourBranchKey);
     }, []);
    
     // ... rest of your component
     return (
        <View>
        <Text>heyyyyy</Text>
        </View>
     );
    }
export default Testing;
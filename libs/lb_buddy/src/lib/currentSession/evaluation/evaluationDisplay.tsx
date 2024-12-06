import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';
import { technicalEvaluation } from './technical';
import { spokenEvaluation } from './spoken';

const EvaluationDisplay = () => {
  //TODO: Replace with actual feedback data
  const feedbackData = {
    evaluation: {},
  };
  const renderFeedbackItem = (item: any) => {
    const userResponse = feedbackData[item.inputId];
    const evaluationItem = item.options?.find(
      (option: any) => option.value === userResponse
    );

    return (
      <View key={item.inputId} style={tw`mb-4`}>
    
        <Text style={tw`text-base`}>
          {item.input === 'textArea'
            ? userResponse
            : evaluationItem?.label || userResponse}
        </Text>
        {userResponse !== item.desiredVal && item.improvementTip && (
          <View style={tw`mt-2`}>
          
            {item.improvementTip.map((tip: string, index: number) => (
              <Text key={index} style={tw`text-blue-500`}>
                • {tip}
              </Text>
            ))}
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={tw`p-4 mb-6`}>
      <Text style={tw`font-bold text-lg text-white`}>Suggested improvements for you:</Text>
      {/* TODO: spokenEvaluation/technicalEvaluation Dynamically */}
      {spokenEvaluation[0].items[0].evaluation.map(renderFeedbackItem)}
    </View>
  );
};

export default EvaluationDisplay;

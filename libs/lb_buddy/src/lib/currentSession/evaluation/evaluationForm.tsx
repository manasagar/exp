import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useForm, FormProvider } from 'react-hook-form';
import tw from 'twrnc';
import { spokenEvaluation } from './spoken';
import { TextArea } from '@/libs/lb_presentation/src';
import { useSendFeedbackMutation } from '@/libs/lb_features/src/lib/buddy/buddyServices';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import the icon component

export default function EvaluationForm({ hasJoinedMeeting }) {
  const defaultValues = {};
  const [formData, setFormData] = useState({});
  const [sendFeedback] = useSendFeedbackMutation();
  const [isAccordionOpen, setAccordionOpen] = useState(false); // State to manage accordion
  const [isFeedbackSent, setFeedbackSent] = useState(false);  // State to track if feedback is sent

  useEffect(() => {
    const initialFormData = {};
    spokenEvaluation.forEach((section, sectionIndex) => {
      section.items.forEach((item, itemIndex) => {
        item.evaluation.forEach((evalItem, evalIndex) => {
          const key = `${sectionIndex}.${itemIndex}.${evalIndex}`;
          defaultValues[key] = true; // Set all values to true by default
          initialFormData[evalItem.inputId] = true; // Initialize JSON with true
        });
      });
    });
    setFormData(initialFormData);
  }, []);

  // Open the accordion automatically if hasJoinedMeeting is true
  useEffect(() => {
    if (hasJoinedMeeting) {
      setAccordionOpen(true);
    }
  }, [hasJoinedMeeting]); // Run this effect whenever hasJoinedMeeting changes

  const methods = useForm({ defaultValues });

  const handleValueChange = (key, value, inputId) => {
    methods.setValue(key, value);
    setFormData((prevData) => ({
      ...prevData,
      [inputId]: value,
    }));
  };

  const onSubmit = async () => {
    console.log(formData); // Log the form data before submission
    const userId = await AsyncStorage.getItem("userId");
    const sessionId = await AsyncStorage.getItem("sessionId");
  
    // Construct the feedback object according to your feedback model
    const feedbackPayload = {
      userId: userId,
      feedback: formData, // Pass the form data directly, already structured as key-value pairs
      sessionId: sessionId,
    };
  
    try {
      const result = await sendFeedback(feedbackPayload);
      if (result) {
        setFeedbackSent(true);  // Set feedback sent status to true
        console.log("Feedback sent successfully");
      }
    } catch (error) {
      console.error("Error sending feedback:", error);
    }
  };
  

  return (
    <FormProvider {...methods}>
      <View style={tw`px-4`}>
        <TouchableOpacity
          style={tw`flex-row items-center mb-4`}
          onPress={() => setAccordionOpen(!isAccordionOpen)}
        >
          <View
            style={tw`w-8 h-8 rounded-full justify-center items-center mr-4 ${
              isFeedbackSent ? 'bg-green-500' : 'bg-blue-500'
            }`}
          >
            <Icon
              name={isFeedbackSent ? 'check' : (isAccordionOpen ? 'remove' : 'add')}
              size={20}
              color="#fff"
            />
          </View>
          <Text style={tw`text-lg font-bold flex-1 text-white`}>
            {isFeedbackSent
              ? 'Feedback sent successfully'
              : 'Submit this evaluation form, once you are done with the session.'}
          </Text>
        </TouchableOpacity>

        {isAccordionOpen && !isFeedbackSent && (  // Hide the form if feedback is sent
          <View>
            {spokenEvaluation.map((section, sectionIndex) => (
              <View key={sectionIndex} style={tw`mb-4`}>
                <Text style={tw`text-xl font-bold mb-2 text-white`}>{section.label}</Text>
                {section.items.map((item, itemIndex) => (
                  <View
                    key={itemIndex}
                    style={tw`mb-3 pb-2 border-b border-gray-200`}
                  >
                    <Text style={tw`font-semibold mb-1 text-white`}>{item.label}</Text>
                    {item.evaluation.map((evalItem, evalIndex) => {
                      const key = `${sectionIndex}.${itemIndex}.${evalIndex}`;
                      const selectedValue = methods.watch(key); // Get the current value of the key

                      return (
                        <View key={evalIndex} style={tw`flex-row items-center mb-1`}>
                          <Text style={tw`flex-1 text-white`}>{evalItem.text}</Text>
                          {evalItem.input === 'radio' && (
                            <View style={tw`flex-row`}>
                              {evalItem.options.map((option, optionIndex) => (
                                <TouchableOpacity
                                  key={optionIndex}
                                  style={tw`mr-3 p-2 border border-gray-300 text-white rounded-full ${
                                    selectedValue === option.value
                                      ? 'bg-blue-500'
                                      : 'bg-white'
                                  }`}
                                  onPress={() =>
                                    handleValueChange(key, option.value, evalItem.inputId)
                                  }
                                >
                                  <Icon
                                    name={option.label === 'Yes' ? 'check' : 'close'}
                                    size={20}
                                    color={selectedValue === option.value ? '#fff' : '#000'}
                                  />
                                </TouchableOpacity>
                              ))}
                            </View>
                          )}
                          {evalItem.input === 'textArea' && (
                            <TextArea
                              name={key}
                              twClass="w-full h-24 mt-2 text-white"
                              placeholder={evalItem.placeholder}
                              style={{ borderColor: '#ccc', borderRadius: 4 }}
                              onChange={(e) => handleValueChange(key, e.target.value, evalItem.inputId)}
                            />
                          )}
                        </View>
                      );
                    })}
                  </View>
                ))}
              </View>
            ))}
            <TouchableOpacity
              style={tw`mt-4 bg-blue-500 p-3 rounded-lg`} // Removed mb-12 and z-10 for left alignment
              onPress={methods.handleSubmit(onSubmit)}
            >
              <Text style={tw`text-white text-center font-bold`}>
                Submit Feedback
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </FormProvider>
  );
}

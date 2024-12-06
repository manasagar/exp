import { promptAI, retrieveMarkedContent, generateImage } from '../../../../lb_utils/src/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import _ from 'lodash';

import PromptInput from './promptInput';

import ResponseDisplay from './responseDisplay';
import React from 'react';


const CreateCourseContentContainer = () => {
  const [skillName, setSkillName] = useState('python');
  const [responseArr, setResponseArr] = useState<string[]>([]);



  const handleStartPress = async () => {
    const str = `skill_name = ${skillName}`;
    setPromptVariables(str);
    resetVariables();

    const startTime = performance.now();
    await iteratePrompts({ prompts: promptsConfig });
    const endTime = performance.now();
    const executionTime = (endTime - startTime) / 1000;
    
    const apiHistoryStr = (await AsyncStorage.getItem('apiHistory')) || '[]';
    const apiHistory = JSON.parse(apiHistoryStr);
    console.info('Ended the APIs', {
      apiHistory,
      ApiCount: apiHistory.length,
      executionTimeForAPis: executionTime,
      curriculumItems: responseObj.curriculumItems,
    });
    saveCurriculumData();
    updateGwItems();

    //update the curriculum data table from here with  responseObj.curriculumItems
  };

  return (
    <>
      <PromptInput
        skillName={skillName}
        setSkillName={setSkillName}
        onStartPress={handleStartPress}
      />
      <ResponseDisplay responseArr={responseArr} />
    </>
  );
};

export default CreateCourseContentContainer;

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { Platform, View } from 'react-native';
import tw from 'twrnc';
import { getQParam } from '../../../../lb_utils/src/index';
import { useGetCourseDataMutation } from './courseContentService';
import { reactData } from './data/ReactData';
import CreateCardsData from './templates/createCardsData';

import React from 'react';

const ContentContainer = () => {
  let isVerticalView;
  Platform.OS == "web" ? isVerticalView = getQParam('isVerticalView'): isVerticalView = null // For admin purpose, to view all cards at once
  

  const [
    getCourseData,
    {
      isSuccess: isGetCourseDataSuccess,
      isError: isGetCourseDataApiError,
      error: getCourseDataError,
      isLoading: isGetCourseDataLoading,
    },
  ] = useGetCourseDataMutation();

  const getCourseDataPayload = [
    { courseId: 'reactData', limit: 'all' },
    { courseId: 'ergonomicsData', limit: 'all' },
  ];

  const itemsToRender = [
    ...reactData.items.intro,
    ...reactData.items.means,
    ...reactData.items.syntax,
    ...reactData.items.jsx_qz,
    ...reactData.items.Dynamic_intro,
    ...reactData.items.Dynamic,
    ...reactData.items.Dynamic_qz,
    // Add more items as needed
  ];

  const [sessionCount, setSessionCount] = useState(1);
  const [currIndex, setCurrIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  useEffect(() => {
  //  getCourseData(getCourseDataPayload);

    const fetchCurrentIndex = async () => {
      let ans = await AsyncStorage.getItem('currIndex');
      if (ans) {
        setCurrIndex(parseInt(ans || '0'));
      } else {
        AsyncStorage.setItem('currIndex', '0');
      }
    };
    fetchCurrentIndex();
  }, []);

  useEffect(() => {
    const fetchPrevIndex = async () => {
      let ans = await AsyncStorage.getItem('prevIndex');
      if (ans) {
        let num = await AsyncStorage.getItem('currIndex');
        setPrevIndex(parseInt(ans || '0') + parseInt(num || '0'));
        await AsyncStorage.setItem(
          'prevIndex',
          (parseInt(ans || '0') + 1 + parseInt(num || '0')).toString(),
        );
      } else {
        AsyncStorage.setItem('prevIndex', '0');
      }
    };
    fetchPrevIndex();
  }, []);

  const clearAll = () => {
    setSessionCount(0);
    setCurrIndex(0);
    setPrevIndex(0);
  };

  return (
    <View style={tw`bg-[#092635]`}>   
     <CreateCardsData/> 
    </View>
  );
};

export default ContentContainer;
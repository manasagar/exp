import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';
import { useParams } from 'react-router-dom';
import Carousel from './Carasole';
import tw from 'twrnc';
import { courseDetailsConfig } from './course-details-config';
import { Btn } from '../../../../lb_presentation/src/index';
import CustomCheckbox from '../../../../lb_presentation/src/lib/ui/checkbox';

const CourseDetailsContainer = () => {
  const { courseId }: any = useParams();
  if(!courseDetailsConfig.hasOwnProperty(courseId)){
    return <Text>invalid url</Text>
  }
  const [selectedCourse, setselectedCourse] = useState<any>(
    courseDetailsConfig[courseId]
  );

  const handleStartPress = () => {
    // Add your logic here
  };
  
  return (
    <ScrollView>
      <Text style={tw`font-bold text-xl p-2 my-4`}>
        course : {selectedCourse?.title}
      </Text>
      <View style={tw`p-3`}>
       {/*  <Carousel /> */}
      </View>
      {Object.keys(selectedCourse?.checks).map((key: any) => {
        console.log(key);

        return (
          <CustomCheckbox
            imgSrc={''}
            label={selectedCourse.checks[key].text}
            onChange={(val: any) => console.log(val)}
          />
        );
      })}

      <Btn onPress={handleStartPress} style={tw`mt-5 bg-blue-400`}>
        <Text style={tw`text-white font-primary font-bold`}>Start</Text>
      </Btn>
    </ScrollView>
  );
};

export { CourseDetailsContainer };

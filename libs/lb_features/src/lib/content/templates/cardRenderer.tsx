import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { selectedCurriculum_Mock, useSelectorWrap } from '../../../../../lb_data-api/src/index';
import { CardWrapper } from '../../../../../lb_presentation/src/index';
import Carousel from '../../../../../lb_presentation/src/lib/carousel/carousel';
import { useFetchContentStatusMutation } from '../../courseDetails/selectedCurriculumService';
import ElementRenderer from './elementRenderer';
import {
  formTitleCard,  
  identifyCardsBasedOnConfig, 
  getSessionCards,     
} from './sessionCardsHelper';
import { getUserId, isDevEnv } from '../../../../../lb_utils/src/index';    


// Assuming the structure of your card objects, you may need to replace this with your actual card type or interface.
interface Card {
  cardId: string;
  render: any[]; // Define the structure of `render` array as per your requirement
}

// display can be vertical or carousel 
export default function CardRenderer() {
  //read unvisited ids
  
  const [cardsTobeRendered, setCardsTobeRendered] = useState<Card[]>([]);

  const [
    fetchContentStatus,
    {
      isSuccess: isGetCourseDataSuccess,
      isError: isGetCourseDataApiError,
      error: getCourseDataError,
      isLoading: isGetCourseDataLoading,
    },
  ] = useFetchContentStatusMutation();

  const createCardsObj = async () => {
    let contentStatus;

    try {
      console.info(isDevEnv());
      if (isDevEnv()) {
        contentStatus = selectedCurriculum_Mock;
      }else{
        contentStatus = await fetchContentStatus({
          userId: getUserId(),
        }).unwrap();
      }
    } catch (err) {
      console.error('Failed to fetch selected curriculum:', err);
      return;
    }    

    const { sessionCards } = getSessionCards({
      contentStatus: contentStatus[0], //TODO: The index should be dynamic
    });
             
    sessionCards.forEach((topic, index) => {
      const { categoryName, topicName, subtopicsArr, topicId } = topic;

      subtopicsArr.forEach((subtopic) => {
        identifyCardsBasedOnConfig(subtopic, setCardsTobeRendered);
      });      

      setCardsTobeRendered((prevVal) => {   
        const titleCard = formTitleCard({ categoryName, topicName, topicId });
        return index === 0 ? [titleCard, ...prevVal] : [...prevVal, titleCard];
      });
    
    });
  };

  useEffect(() => {
    createCardsObj();
    console.info('createCardsObj');
  }, []);


  return (
    <CardWrapper>
       <Carousel data={cardsTobeRendered} />
    </CardWrapper>
  );
}
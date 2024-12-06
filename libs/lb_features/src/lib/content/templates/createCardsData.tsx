import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { CardWrapper } from "../../../../../lb_presentation/src/index";
import Carousel from "../../../../../lb_presentation/src/lib/carousel/carousel";
import tw from "twrnc";

import { getSessionCards, formTitleCard } from "./sessionCardsHelper";

import { populateMiscCards } from "./miscCardsPopulator";


import {
  getRouteParam,
  getUserId,
  mlConstants,
} from "../../../../../lb_utils/src/index";
import {
  useGetCourseProgressQuery,
  useGetCurriculumDataQuery,
} from "../../courseDetails/selectedCurriculumService";
import { useGetUserBehaviourQuery } from "../../userBehaviourService";

import { useSelectorWrap } from "../../../../../lb_data-api/src";
import { useDispatch } from "react-redux";
import { setCourseStatus } from "./carouselSlice";

export default function CreateCardsData() {
  const [userId, setUserId] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchUserId = async () => {
      let id = await getUserId();
      setUserId(id);
    };
    fetchUserId();
  }, []);
  
  const { data: userBehaviourData } = useGetUserBehaviourQuery({
    URL_PARAMS: [userId],
  },
  { skip: !userId });

  const [cardsTobeRendered, setCardsTobeRendered] = useState([]);
  const [unDisplayedCards_st, setUnDisplayedCards_st] = useState([]); //Left over cards from a subtopic Which were not pushed to session cards due to capacity issue.
  const [contentStatusData, setContentStatusData] = useState();

  const currentSkill = getRouteParam({
    route: useRoute(),
    paramName: mlConstants.curriculumCourse_routeParam,
  });

  const { data: contentStatusPosted } = useSelectorWrap(
    "courseStatusPosted_rn"
  );

  const { data: contentStatus, refetch: refetchGetCourseProgress } = useGetCourseProgressQuery(
    {
      URL_PARAMS: [userId, currentSkill],
    },
    { skip: !userId || !currentSkill }
  );
  
  useEffect(() => {
    if (userId && currentSkill) {
      refetchGetCourseProgress();
    }
  }, [userId, currentSkill, refetchGetCourseProgress]);

  const { data: curriculumData } = useGetCurriculumDataQuery({
    URL_PARAMS: [currentSkill],
  },
  { skip: !currentSkill });

  const createCardsObj = async (contentStatusVal) => {
    const { sessionCards, unDisplayedCardsObj} = getSessionCards({
      curriculumData,
      contentStatusData: contentStatusVal,
    });

    const finalCards = getFinalCards(sessionCards);
    const miscCards = populateMiscCards({ userBehaviourData });
    setCardsTobeRendered([...finalCards, ...miscCards]);
    setUnDisplayedCards_st(unDisplayedCardsObj);

    console.info(
      'unDisplayedCards3',
      unDisplayedCardsObj
    );

  };

  useEffect(() => {
    if (
      !contentStatus ||
      !curriculumData ||
      !contentStatus.data ||
      !userBehaviourData
    ) {
      return;
    }

    setContentStatusData(contentStatus.data);
    dispatch(setCourseStatus( contentStatus.data ));

    createCardsObj(contentStatus.data);
  }, [contentStatus, curriculumData, userBehaviourData]);

  function getFinalCards(sessionCards: any[]) {
    return sessionCards.flatMap((topic, index) => {
      const { categoryId, categoryName, topicName, topicId } = topic;

      const titleCard = formTitleCard({
        categoryId,
        categoryName,
        topicName,
        topicId,
      });

      return index === 0 ? [titleCard, ...topic.subtopicsArr] : [titleCard, ...topic.subtopicsArr];
    });
  }

  return (
    <>
      {contentStatusData ? (
        <CardWrapper>
          <Carousel data={{ cardsTobeRendered, unDisplayedCards_st }} />
        </CardWrapper>
      ) : (
        <Text style={tw`text-2xl text-white`}>
          Please select topics from the curriculum page.
        </Text>
      )}
    </>
  );


}

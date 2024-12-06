import { useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { Category, Topic } from "./types";
import { useRoute } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import CategorySection from "./categorySection";
import styles from "./curriculumStyles";
import CurriculumTopBar from "./curriculumTopBar";
import {
  useGetCourseProgressQuery,
  useGetCurriculumDataQuery,
  usePatchCourseProgressMutation,
  usePostCourseProgressMutation,
} from "./selectedCurriculumService";
import {
  appRoutes,
  getRouteParam,
  mlConstants,
} from "../../../../lb_utils/src/index";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { commonConstants } from "../../../../lb_common/commonConstants";
import { setPostedCourseStatus } from "../content/templates/carouselSlice";
import { getUserId } from '../../../../lb_utils/src/lib/utils';

export function CurriculumContainer() {
  let courseStatusTobePosted;
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const fetchUserId = async () => {
      let id = await getUserId();
      setUserId(id);
    };
    fetchUserId();
  }, []);

  const { appRoutes_common } = commonConstants;
  const [
    postCourseProgress,
    {
      isSuccess: isPostCourseStatusSuccess,
      isError: isPostCourseProgessApiError,
      error: isPostCourseProgessError,
      isLoading: isPostCourseProgessLoading,
      data: postCourseData,
    },
  ] = usePostCourseProgressMutation();

  const [
    patchCourseProgress,
    {
      isSuccess: isPatchCourseStatusSuccess,
      isError: isPatchCourseProgessApiError,
      error: isPatchCourseProgessError,
      isLoading: isPatchCourseProgessLoading,
      data: patchCourseData,
    },
  ] = usePatchCourseProgressMutation();

  const currentSkill = getRouteParam({
    route: useRoute(),
    paramName: mlConstants.curriculumCourse_routeParam,
  });

  const { data: curriculumData, isLoading: isCurriculumDataLoading } = useGetCurriculumDataQuery({
    URL_PARAMS: [currentSkill],
  });

  const { data: contentStatus } = useGetCourseProgressQuery(
    {
      URL_PARAMS: [userId, currentSkill],
    },
    {
      skip: !userId || !currentSkill, // Skip query until userId and currentSkill are available
    }
  );

  const [selectedSubtopics, setSelectedSubtopics] = useState<string[]>([]);
  const [expandedTopics, setExpandedTopics] = useState<number[]>([]);
  const [isSelectAllChecked, setIsSelectAllChecked] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (contentStatus?.data?.selctdSt_ids) {
      setSelectedSubtopics(contentStatus.data.selctdSt_ids);
      setIsSelectAllChecked(
        contentStatus.data.selctdSt_ids.length === getAllSubtopics().length
      );
    }
  }, [contentStatus, curriculumData]);

  const isTopicFullySelected = (topic: Topic) =>
    topic.subtopicsArr.every((subtopic) =>
      selectedSubtopics.includes(subtopic.subtopicId)
    );

  const isCategoryFullySelected = (category: Category) =>
    category.topics.every(isTopicFullySelected);

  const handleTopicPress = (topicId: number) => {
    setExpandedTopics((prevTopics) =>
      prevTopics.includes(topicId)
        ? prevTopics.filter((id) => id !== topicId)
        : [...prevTopics, topicId]
    );
  };

  const handleSubtopicPress = (subtopicId: string) => {
    setSelectedSubtopics((prevSubtopics) => {
      const newSubtopics = prevSubtopics.includes(subtopicId)
        ? prevSubtopics.filter((id) => id !== subtopicId)
        : [...prevSubtopics, subtopicId];
      setIsSelectAllChecked(newSubtopics.length === getAllSubtopics().length);
      return newSubtopics;
    });
  };

  const onSelectAllSubtopics = (topic: Topic, checked: boolean) => {
    const subtopicIds = topic.subtopicsArr.map(
      (subtopic) => subtopic.subtopicId
    );
    setSelectedSubtopics((prevSubtopics) => {
      const newSubtopics = checked
        ? [...prevSubtopics, ...subtopicIds]
        : prevSubtopics.filter((id) => !subtopicIds.includes(id));
      setIsSelectAllChecked(newSubtopics.length === getAllSubtopics().length);
      return newSubtopics;
    });
  };

  const getAllSubtopics = () => {
    return (
      curriculumData?.curriculumItems?.flatMap((category) =>
        category.topics.flatMap((topic) =>
          topic.subtopicsArr.map((subtopic) => subtopic.subtopicId)
        )
      ) || []
    );
  };

  const selectAll = (checked: boolean) => {
    const allSubtopics = getAllSubtopics();
    setSelectedSubtopics(checked ? allSubtopics : []);
    setIsSelectAllChecked(checked);
  };

  const onStartCourse = () => {
    // Navigate to the common/login
    // Once the user is logged in, then execute the below code

    courseStatusTobePosted = {
      userId: userId,
      curriculumId: currentSkill,
      selctdSt_ids: selectedSubtopics,
      unVisitedSt_ids: selectedSubtopics,
      unDisplayedCards: [],
    };

    dispatch(setPostedCourseStatus(courseStatusTobePosted)); //TODO: Should have been Placed when the api was successful

    // save it in DB
    if (contentStatus?.data[0]) {
      // If exists, use Patch
      patchCourseProgress(courseStatusTobePosted);
    } else {
      // post
      patchCourseProgress(courseStatusTobePosted);
    }
  };

  useEffect(() => {
    if (!isPatchCourseStatusSuccess) {
      return;
    }

    const {
      ks: { isDisplayLoginAfterCurriculum },
      routePaths: { skillContentRoute },
    } = mlConstants;

    let nextRoute = skillContentRoute.replace(/\[.*?\]/g, "");
    nextRoute = `/${currentSkill}${nextRoute}`;

    if (isDisplayLoginAfterCurriculum) {
      const redirectAfterLogin = skillContentRoute;
      // Store the intended redirection path
      localStorage.setItem("redirectAfterLogin", redirectAfterLogin);
      nextRoute = appRoutes_common.loginRoute;
    }
    isPatchCourseStatusSuccess && router.push({ pathname: nextRoute });
  }, [isPatchCourseStatusSuccess]);

  if (isCurriculumDataLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    curriculumData ? (
      <View style={styles.container}>
        <CurriculumTopBar
          courseName={curriculumData.common?.courseName || ""}
          isSelectAllChecked={isSelectAllChecked}
          selectAll={selectAll}
          onStartCourse={onStartCourse} // Updated function here
        />
        {curriculumData.curriculumItems?.map((category) => (
          <CategorySection
            key={category.categoryId}
            category={category}
            expandedTopics={expandedTopics}
            selectedSubtopics={selectedSubtopics}
            onTopicPress={handleTopicPress}
            onSubtopicPress={handleSubtopicPress}
            onSelectAllSubtopics={onSelectAllSubtopics}
          />
        ))}
      </View>
    ) : (
      <Text>
        Curriculum not found for the provided ID
      </Text>
    )
  );
}

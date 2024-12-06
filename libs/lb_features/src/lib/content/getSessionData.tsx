import { reactData } from './data/ReactData';
import { ergonomicsData } from './data/ergonomicsData';
import { focusData } from './data/focusData';
import { planningData } from './data/planningData';
import { productivityData } from './data/productivityData';
import { nonSessionsConfig, sessionsConfig } from './sessionsConfig';

interface CourseData {
  items: { [key: string]: any[] };
  grouping: { [key: number]: string[] };
}

// Constant for storing productivityData
const courseData: CourseData = reactData;

// Function to generate cards data
const generateCardsData = (isDisplayAll_Courses: boolean, isDisplayAll_InCourse: boolean): { [key: string]: any[] } => {
  let cardsData: { [key: string]: any[] } = {};

  if (isDisplayAll_Courses) {
    // Display all cards: https://chat.openai.com/share/5d7af895-3dae-40a7-8ae2-a11745dc8f29

    Object.entries(sessionsConfig).forEach(([key, value]) => {
      cardsData[key] = courseData.items[value];
    });
  } else {
    cardsData = courseData.items;
  }
  return cardsData;
};

// Function to format cards data
const formatCardsData = (cardsData: { [key: string]: any[] }, isDisplayAll_InCourse: boolean) => {
  if (isDisplayAll_InCourse) {
    // https://chat.openai.com/share/15a02b04-deb4-427c-b8a1-1e0f55449aa7
    return Object.entries(cardsData).map(([key, value]) => ({
      key,
      card: value.map((item, index) => ({
        id: index,
        ...item,
      })),
    }));
  }

  const sessionIndex = 0;
  const cardGroupKeys = courseData.grouping[sessionIndex];
  const cardGroupItems = cardGroupKeys.map((k) => courseData.items[k]);

  return cardGroupItems.map((items, index) => ({
    key: index,
    card: items.map((item, innerIndex) => ({
      id: innerIndex,
      ...item,
    })),
  }));
};

// Function to generate the data to be supplied to GenericRender
export const generateGenericRenderData = () => {
  const isDisplayAll_Courses = false;
  const isDisplayAll_InCourse = true;

  const cardsData = generateCardsData(
    isDisplayAll_Courses,
    isDisplayAll_InCourse
  );
  return formatCardsData(cardsData, isDisplayAll_InCourse);
};

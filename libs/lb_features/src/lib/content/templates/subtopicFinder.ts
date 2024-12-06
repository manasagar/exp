export const findSubtopicByCardId = (cardId, curriculumData) => {
  const subtopicId = getSubtopicIdFromCardId(cardId);
  return findSubtopicById(subtopicId, curriculumData);
};

export const findSubtopicById = (subtopicId, curriculumData) => {
  return curriculumData.curriculumItems
    .flatMap(item => item.topics)
    .flatMap(topic => topic.subtopicsArr)
    .find(subtopic => subtopic.subtopicId === subtopicId);
};

export const getSubtopicIdFromCardId = (cardId: string): string => {
  return cardId.split("-")[1];
};

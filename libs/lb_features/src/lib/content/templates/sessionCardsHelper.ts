import { APP_CONSTANTS } from "../../../../../lb_utils/src/index";
import { identifyCardsBasedOnConfig } from './cardIdentifier';
import { findSubtopicByCardId, findSubtopicById, getSubtopicIdFromCardId } from './subtopicFinder';
import { populateMiscCards } from './miscCardsPopulator';

export const getSessionCards = ({ contentStatusData, curriculumData }) => {
  const { unDisplayedCards = [], unVisitedSt_ids = [] } = contentStatusData;
  const sessionCards = [];
  const unDisplayedCardsObj = [];
  let totalCardsCount = 0;
  const displayedCards = new Set(contentStatusData.displayedCards || []);

  // Process unDisplayedCards
  processCards(unDisplayedCards, curriculumData, sessionCards, unDisplayedCardsObj, totalCardsCount, false, displayedCards);

  // Process unVisitedSt_ids if needed
  if (totalCardsCount < APP_CONSTANTS.MAX_CARDS_IN_SESSION) {
    processCards(unVisitedSt_ids, curriculumData, sessionCards, unDisplayedCardsObj, totalCardsCount, true, displayedCards);
  }

  // Group cards by topic
  const groupedCards = groupCardsByTopic(sessionCards, curriculumData);

  return { sessionCards: groupedCards, unDisplayedCardsObj };
};

const groupCardsByTopic = (cards, curriculumData) => {
  const topicMap = new Map();
  let totalCardsAdded = 0;

  for (const card of cards) {
    if (totalCardsAdded >= APP_CONSTANTS.MAX_CARDS_IN_SESSION) break;

    const subtopicId = getSubtopicIdFromCardId(card.cardId);
    const topic = findTopicBySubtopicId(subtopicId, curriculumData);
    
    if (topic) {
      if (!topicMap.has(topic.topicId)) {
        topicMap.set(topic.topicId, {
          ...topic,
          subtopicsArr: [],
          addedCards: new Set()
        });
      }
      const topicData = topicMap.get(topic.topicId);
      if (!topicData.addedCards.has(card.cardId)) {
        topicData.subtopicsArr.push(card);
        topicData.addedCards.add(card.cardId);
        totalCardsAdded++;
      }
    }
  }

  // Remove the addedCards set before returning
  return Array.from(topicMap.values()).map(({ addedCards, ...rest }) => rest);
};

const findTopicBySubtopicId = (subtopicId, curriculumData) => {
  for (const item of curriculumData.curriculumItems) {
    for (const topic of item.topics) {
      if (topic.subtopicsArr.some(subtopic => subtopic.subtopicId === subtopicId)) {
        return {
          categoryId: item.categoryId,
          categoryName: item.categoryName,
          topicId: topic.topicId,
          topicName: topic.topicName
        };
      }
    }
  }
  return null;
};

const processCards = (cardIds, curriculumData, sessionCards, unDisplayedCardsObj, totalCardsCount, isSubtopicId = false, displayedCards = new Set()) => {



  for (const id of cardIds) {
    if (isSubtopicId) {
      // This branch is for unVisitedSt_ids
      const subtopic = findSubtopicById(id, curriculumData);
      if (subtopic) {
        const cards = identifyCardsBasedOnConfig(subtopic);
        console.info({cards});
        for (const card of cards) {
          if (!displayedCards.has(card.cardId)) {
            if (totalCardsCount < APP_CONSTANTS.MAX_CARDS_IN_SESSION) {
              sessionCards.push(card);
              totalCardsCount++;
            } else {
              unDisplayedCardsObj.push(card);
            }
          }
        }
      }
    } else {
      // This branch is for unDisplayedCards
      const subtopic = findSubtopicByCardId(id, curriculumData);
      if (subtopic && subtopic.contentObj) {
        let card;
        for (const section in subtopic.contentObj) {
          if (subtopic.contentObj[section].data) {
            card = subtopic.contentObj[section].data.find(c => c.cardId === id);
            if (card) break;
          }
        }
        if (card && !displayedCards.has(card.cardId)) {
          if (totalCardsCount < APP_CONSTANTS.MAX_CARDS_IN_SESSION) {
            sessionCards.push(card);
            totalCardsCount++;
          } else {
            unDisplayedCardsObj.push(card);
          }
        }
      }
    }
    
    if (totalCardsCount >= APP_CONSTANTS.MAX_CARDS_IN_SESSION) break;
  }
};


const formTitleCard = ({
  categoryId,
  categoryName,
  topicName,
  topicId,
}): Card => {
  return {
    cardId: `ti1-${topicId}_000`,
    render: [
      {
        element: "sessionTitle",
        content: { categoryName, topicName },
      },
    ],
  };
};

export { formTitleCard, populateMiscCards };

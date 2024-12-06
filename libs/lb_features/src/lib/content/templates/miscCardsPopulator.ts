import { nudgeCards } from "../data/nudgeCards";

export const populateMiscCards = ({ userBehaviourData }) => {
  const cards = [];
  const {
    nudges: { isMvpNudgeDisplayed },
  } = userBehaviourData;
  if (!isMvpNudgeDisplayed) {
    //TODO cards.push(nudgeCards.mvp[0]);
  }
  return cards;
};

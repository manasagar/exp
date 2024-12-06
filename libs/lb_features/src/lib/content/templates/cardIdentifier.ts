import { contentConfig } from "./contentConfig";

export const identifyCardsBasedOnConfig = (subtopic) => {
  const { contentObj } = subtopic;
  const cards = [];

  Object.keys(contentConfig).forEach((contentType) => {
    const currentContentType = contentObj[contentType];

    if (!currentContentType) {
      console.warn(`contentType ${contentType} is invalid`);
      return;
    }

    const { data } = currentContentType;
    const maxAllowed = contentConfig[contentType].maxInSession;
    const toBeRendered =
      contentConfig[contentType].toBeRendered === "all"
        ? data.length
        : maxAllowed;

    cards.push(...data.slice(0, toBeRendered));
  });

  return cards;
};

import { getFullImgPath } from '@dr/lb_utils';

const assetPath = 'micros/Productivity';

const items = {
  personalities: [
    {
      type: 'html',
      content: `Help me to improve my willpowerHelp me to improve my willpower`,
      meta: {
        assetPrompts: {
          userGen: [``],
          sysGen: [],
        },
      },
    },
    {
      type: 'html',
      content: `help me to reduce my impulsiveness`,
    },
    {
      type: 'html',
      content: `Help me to reduce my guilt`,
    },
    {
      type: 'html',
      content: `Help me to reduce my stress`,
    },
    {
      type: 'html',
      content: `Help me to reduce my Memory power`,
    },
  ],
};

export const productivityData = {
  common: {},
  items: [[]],
};

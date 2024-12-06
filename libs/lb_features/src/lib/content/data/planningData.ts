// planningData.ts
import { Linking } from 'react-native';

const assetPath = 'micros/planning';
const items = {
  p1: [
    {
      type: 'title',
      content:
        '<b>PLANNING</b> = List tasks + Estimate time + Set deadline + Prioritize',
      style: { flexDirection: 'column' },
    },
    {
      type: 'text',
      content: '<i>Task planning template</i>',
      style: { alignSelf: 'center' },
    },
    {
      type: 'image',
      imgDetails: {
        imgPath: [`${assetPath}/TaskPlanTemplate`],
        imgTwClasses: 'w-93 h-24',
      },
      events: {
        onPress: () => {
          Linking.openURL('https://example.com');
        },
      },
    },
    {
      type: 'image',
      imgDetails: {
        imgPath: [`${assetPath}/taskPlan_m`],
        imgTwClasses: 'w-96 h-124',
      },
    },
  ],

  p2: [
    {
      type: 'title',
      content: 'Failing to plan is planning to fail',
    },
    {
      type: 'image',

      imgDetails: {
        imgPath: [`${assetPath}/jar`],
        imgTwClasses: 'w-65 h-65',
      },
    },

    {
      type: 'text',
      content:
        'What would be the efficient sequence to fill the jar with below items?',
    },

    {
      type: 'image',

      imgDetails: {
        imgPath: [`${assetPath}/pebbles`],
        imgTwClasses: 'w-65 h-65',
      },
    },

    {
      type: 'image',

      imgDetails: {
        imgPath: [`${assetPath}/water`],
        imgTwClasses: 'w-65 h-65',
      },
    },

    {
      type: 'image',

      imgDetails: {
        imgPath: [`${assetPath}/sand`],
        imgTwClasses: 'w-65 h-65',
      },
    },

    {
      type: 'image',

      imgDetails: {
        imgPath: [`${assetPath}/big_stones`],
        imgTwClasses: 'w-65 h-65',
      },
    },
  ],
};

export const planningData = {
  common: {},
  grouping: [['p1', 'p2']],
  items,
};

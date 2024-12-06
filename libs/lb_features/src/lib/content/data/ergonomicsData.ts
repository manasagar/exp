// ergonomicsData.ts

const assetPath = 'micros/ergonomics';
const items = {
  story_healthy_living: [
    {
      type: 'title',
      content: `Take care of your body. It's the only place you have to live.`,
    },
    {
      type: 'image',
      imgDetails: {
        imgPath: [`${assetPath}/Sad_donkey`],
        imgTwClasses: 'w-76 h-124',
      },
    },
    {
      type: 'image',
      imgDetails: {
        imgPath: [`${assetPath}/Happy_donkey`],
        imgTwClasses: 'w-76 h-124',
      },
    },
    {
      type: 'fact',
      content: ` <span style="font-weight: bold;">Ergonomic</span> workplaces can improve employee productivity by up to 20%.`,
    },
  ],

  story_sitting_habits: [
    { type: 'title', content: 'Sitting Is The New Smoking' },
    {
      type: 'image',
      imgDetails: {
        imgPath: [`${assetPath}/sitting_smoke`],
        imgTwClasses: 'w-76 h-124',
      },
    },
    {
      type: 'text',
      content: 'Increases risk of:',
      style: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingHorizontal: 16,
        paddingVertical: 8,
      },
    },
    {
      type: 'list',
      items: [
        '- <span style="font-style: italic;">Cardiovascular disease</span>',
        '- <span style="font-style: italic;">Type 2 diabetes</span>',
        '- <span style="font-style: italic;">Obesity</span>',
      ],
      style: { paddingHorizontal: 16 },
    },
    {
      type: 'list',
      items: [
        '- <span style="font-style: italic;">Musculoskeletal disorders</span>',
        '- <span style="font-style: italic;">Certain cancers</span>',
        '- <span style="font-style: italic;">Mental health issues</span>',
      ],
      style: { paddingHorizontal: 16 },
    },
    {
      type: 'list',
      items: ['- <span style="font-style: italic;">Osteoporosis</span>'],
      style: { paddingHorizontal: 16 },
    },
  ],

  story_work_posture: [
    {
      type: 'title',
      content:
        'Your keyboard might be your livelihood, but your body is your temple.',
    },
    {
      type: 'text',
      content: 'Whenever feasible (during meetings or periods of low typing),',
    },
    {
      type: 'text',
      content:
        '<span style="text-transform: uppercase;">lay down & work.</span>',
      style: { fontWeight: 'bold', textAlign: 'center', marginTop: 5 },
    },
    {
      type: 'image',
      imgDetails: {
        imgPath: [`${assetPath}/Tablemate_sleeping`],
        imgTwClasses: 'w-76 h-124',
      },
    },
    {
      type: 'button',
      label: 'Customize Your Tablemate',
      onPress: () => console.log('Button pressed'),
      emoji: '🛠️',
      style: {
        button:
          'self-start mt-10 px-3 py-2 rounded bg-blue-500 inline-flex items-center justify-between shadow-md mb-5 max-w-xs w-auto',
        label: 'text-white font-bold text-lg mr-2',
        emoji: { fontSize: 20 },
      },
    },
  ],
};

export const ergonomicsData = {
  common: {},
  grouping: [
    ['story_healthy_living', 'story_sitting_habits'],
    ['story_work_posture'],
  ],
  items,
};

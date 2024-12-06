// focusData.ts

import { getFullImgPath } from '@dr/lb_utils';

const assetPath = 'micros/focus';

const items = {
  pomo_tip: [
    {
      type: 'title',
      content: '<b>FOCUS</b> = 1 Thing @ 1 Time ⏰',
      style: { flexDirection: 'column' },
    },
    {
      type: 'text',
      content: '<i>(1) Create project, tasks</i> 📝',
      style: { marginBottom: 2, alignSelf: 'flex-start', marginTop: 4 },
    },
    {
      type: 'text',
      content: '<u>(2) Estimate pomos & set due date</u> 🗓️',
      style: { marginBottom: 4, alignSelf: 'flex-start' },
    },
    {
      type: 'text',
      content: '(3) Follow Pomodoro technique whenever you are working 💼',
      style: { alignSelf: 'flex-start' },
    },
    {
      type: 'image',
      imgDetails: {
        imgPath: [`${assetPath}/pomo_m`],
        imgTwClasses: 'w-99 h-99',
      },
    },
  ],

  focus_imp: [
    {
      type: 'title',
      content:
        'A trembling hand struggles to <b>ignite</b> a piece of <b>paper</b>',
    },
    {
      type: 'image',
      imgDetails: {
        imgPath: [`${assetPath}/sunMagnifier`],
        imgTwClasses: 'w-99 h-99',
      },
    },
  ],

  focus_story1: [
    {
      type: 'html',
      content: `In the legendary epic Mahabharata,<br/> Dhrona, an expert archer and mentor, challenges his pupils' concentration by instructing them to target the eye of a clay bird positioned in a tree.
    <br/><br/><img   style="width: 50%; height: 100px; align-self: center;" loading="lazy" src="${getFullImgPath(
      { imgUrl: `${assetPath}/arjuna_focus` }
    )}"/>
   `,

      style: { alignSelf: 'flex-start' },
      meta: {
        assetPrompts: {
          userGen: [`Pandavas with their bows and their master dhrona under a tree`],
          sysGen: [],
        },
        contentPrompts: {
          userGen: [``],
          sysGen: [],
        },
      },
    },
  ],

  focus_story2: [
    {
      type: 'html',
      content: `
    
    When other students are distracted by leaves, tree branches, and the entire bird, <b>Arjuna</b> alone zeroes in on the bird's eye and successfully strikes it.

    <br/><br/><img   style="width: 50%; height: 100px; align-self: center;" loading="lazy" src="${getFullImgPath(
      { imgUrl: `${assetPath}/arjuna_focus` }
    )}"/>
    
    <br/><br/>
    Success demands singular devotion amidst a sea of distractions.`,

      style: { alignSelf: 'flex-start' },
      meta: {
        assetPrompts: {
          userGen: [
            ``,
          ],
          sysGen: [],
        },
        contentPrompts: {
          userGen: [
            ``,
          ],
          sysGen: [],
        },
      },
    },
  ],
};

export const focusData = {
  common: {},
  grouping: [
    ['focus_story1', 'focus_story2'],
    ['focus_imp', 'pomo_tip'],
  ],
  items,
};

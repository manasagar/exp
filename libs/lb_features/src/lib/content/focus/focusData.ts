import { getFullImgPath } from '@dr/lb_utils';

const assetPath = 'micros/focus';
const f1 = [
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
      imgTwClasses: 'w-99 h-99 items-center justify-center',
    },
  },
];

const f2 = [
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
];

const f3 = [
  {
    type: 'html',
    content: `In the legendary epic Mahabharata,<br/> Dhrona, an expert archer and mentor, challenges his pupils' concentration by instructing them to target the eye of a clay bird positioned in a tree.
    <br/><br/><img   style="  width: auto; height: 350px; align-self: center; display:flex;" loading="lazy" src="${getFullImgPath(
      { imgUrl: `${assetPath}/arjuna_focus` }
    )}"/>
    Whereas other students are distracted by leaves, tree branches, and the entire bird, <b>Arjuna</b> alone zeroes in on the bird's eye and successfully strikes it.
    
    <br/><br/>
    Success demands singular devotion amidst a sea of distractions.`,

    style: { alignSelf: 'flex-start' },
    meta: {
      assetPrompts: {
        userGen: [
          `Warrior Arjuna from Mahabharata standing on the ground and targeting his bow towards a clay bird's eye which is sitting on a tree's top branch. The arrow should should be aligned with the direction of the bird. The bird should be of relative size. The distance between the for bow and the bird should be far`,
        ],
        sysGen: [],
      },
      contentPrompts: {
        userGen: [
          `provide at least 6 sorted by the best for  the title, moral, Relevant quote, Conclusion for the above story.`,
        ],
        sysGen: [],
      },
    },
  },
];

export const focusData = {
  common: {},
  items: [[f3, f2, f1]],
};

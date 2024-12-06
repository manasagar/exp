import { getFullImgPath } from '@dr/lb_utils';

const assetPath = 'micros/Productivity';

const items1 = {
  1: [
    {
      type: 'html',
      content: `<h1 style="font-size: 24px; "><span style="font-size: 44px; text-transform: capitalize;">2</span> woodcutters competed to see who could chop the most wood in a day.</h1>
<br/>
  <span style="font-weight: bold;">They started together</span>, <i>but one took breaks while the other worked harder continuously.</i>`,
      meta: {
        assetPrompts: {
          userGen: [
            `2 Woodcutters with axe in their hands. They were near a timber factory. There were couple of timber logs around them`,
          ],
          sysGen: [],
        },
        contentPrompts: {
          userGen: [],
          sysGen: [],
        },
      },
    },
  ],
  2: [
    {
      type: 'html',
      content: `When time expired, the<span style="color: red; font-weight: bold;"> first woodcutter</span> was absolutely sure that he had won the prize.   <br>  <br>However, he was very surprised to learn that he was mistaken.`,
      meta: {
        assetPrompts: {
          userGen: [
            `A woodcutter was surprised when he saw large  heap  of timber logs. Another woodcutter was Standing near the heap`,
          ],
          sysGen: [],
        },
        contentPrompts: {
          userGen: [],
          sysGen: [],
        },
      },
    },
  ],
  3: [
    {
      type: 'html',
      content: `<span style="text-decoration: underline;">He asked his partner,</span> "<span style="font-weight: bold;">Each hour I heard that you stopped working for ten minutes. How could you have cut more trees than I? It's impossible!</span>"
    <br>
    <br>
    
    The <span style="color: blue; font-style: italic;">second woodcutter</span> replied, "<span style="text-transform: uppercase;">While you were cutting the trees, during my breaks, I sharpened my axe.</span>"`,
      meta: {
        assetPrompts: {
          userGen: [`A woodcutter sharpening his axe`],
          sysGen: [],
        },
        contentPrompts: {
          userGen: [],
          sysGen: [],
        },
      },
    },
  ],
};

const items2 = {
  '4': [
    {
      type: 'html',
      content: `
    <div style="font-size: 24px;"><b>Tom</b> worked @ a timber company for <i>2 years</i> but never received a raise.
</div>`,
      meta: {
        assetPrompts: {
          userGen: [
            `A tired woodcutter with untrimmed beared look, chopping wood with a rusted saw. `,
          ],
          sysGen: [],
        },
      },
    },
  ],
  '4_1': [
    {
      type: 'html',
      content: `
    <div style="font-size: 24px;"><div style="margin-top: 20px;">He felt <u>envious</u> when a newcomer, <b>Jack</b>, managed to <u>cut more wood</u> and earned a raise within just a <i>year</i>.</div>
</div>`,
      meta: {
        assetPrompts: {
          userGen: [
            `A woodcutter with glow and smile on his face, chopping wood with a shiny new saw. `,
          ],
          sysGen: [],
        },
      },
    },
  ],
  5: [
    {
      type: 'html',
      content: `<div style="margin-bottom: 20px;">
    <p style="font-size: 24px;"><b>Tom</b> extended his work hours to over <i >11 hours</i> while <b>Jack</b> worked only <i>8 hours</i>. However, despite his efforts, he couldn't <u>outperform</u> <b>Jack</b>.</p>
</div>`,
      meta: {
        assetPrompts: {
          userGen: [
            `A tired woodcutter with untrimmed beared look. Another woodcutter with glow and smile on his face `,
          ],
          sysGen: [],
        },
      },
    },
  ],
  6: [
    {
      type: 'html',
      content: `<div style="margin-bottom: 20px;">
    <p style="font-size: 24px;"><b>Tom</b> approached <b>Jack</b> for <u>advice</u>. Upon seeing <b>Tom's</b> axe, <b>Jack</b> inquired, “When was the last time you <u>sharpened</u> your axe?”</p>
</div>`,
    },
  ],
};

const items3 = {
  7: [
    {
      type: 'html',
      content: `<div style="font-size: 24px;">
     <b>Tom</b> replied - “I've <u>never sharpened</u> it. I've been too busy trying to <u>cut down enough trees</u>.”
</div>`,
    },
  ],
  8: [
    {
      type: 'html',
      content: `<div style="font-size: 24px;">Do you <span style="text-transform: uppercase; color: light gray;">know</span> 🤔 <span style="text-transform: uppercase; color: light gray;">anyone</span> 🧑 who <span style="font-weight: bold; text-transform: uppercase; color: green;">gets a lot done</span> 🚀 <span style="font-weight: bold; text-transform: uppercase; color: blue;">quickly</span> ⏱? 

    <img   style="width: 50%; height: 100px; align-self: center;margin-top:20px;margin-bottom:20px " loading="lazy" src="${getFullImgPath(
        { imgUrl: `${assetPath}/dummyImg` }
      )}"/>
   </div>`,
      meta: {
        assetPrompts: {
          userGen: [
            `A happy looking employee is leaving the office, While other employees who were looking tired were still working at their desk with their laptop`,
          ],
          sysGen: [],
        },
      },
    },
  ],
  9: [
    {
      type: 'html',
      content: `<div style="font-size: 24px;">

    
   <p>
    What makes them <span style="text-transform: capitalize; color:blue;">able to do so much</span> 💪?</p>
    <img   style="width: 50%; height: 100px; align-self: center;margin-top:20px;margin-bottom:20px " loading="lazy" src="${getFullImgPath(
        { imgUrl: `${assetPath}/dummyImg` }
      )}"/>
    </div>`,
      meta: {
        assetPrompts: {
          userGen: [
            `A happy looking employee working at his desk On his laptop`,
          ],
          sysGen: [],
        },
      },
    },
  ],

  11: [
    {
      type: 'form',
      config: {
        fieldsPerView: 3,
        submitOn: 'next',
      },
      details: {
        title: `<span style="text-transform: capitalize; ">what's your current productivity level?</span>`,
        subheading: `<span style="text-transform: capitalize; ">form subheading</span>`,
        listDetails: {
          title: `<span style="text-transform: capitalize; ">list title</span>`,
          list: [`<span style="text-transform: capitalize; "List items</span>`],
        },
      },
      fields: [
        {
          label: `<span style="text-transform: capitalize; ">Checkbox Question</span>`,
          id: '78',
          validations: ['required'],
          type: 'checkbox',
          options: [
            {
              display: `<img style="width: 50%; height: 100px; align-self: center;margin-top:20px;margin-bottom:20px;" loading="lazy" src="${getFullImgPath(
                { imgUrl: `${assetPath}/dummyImg` }
              )}"/><span style="text-transform: capitalize; ">checkbox option</span>`,
              value: 'tytt',
              ifSelectedDisplay: [79],
              responses: [
                `<span style="text-transform: capitalize; ">76 to do so much</span>`,
              ],
            },
          ],
        },
        {
          label: `<span style="text-transform: capitalize; ">radio button question</span>`,
          id: '79',
          validations: ['required'],
          type: 'radio',
          options: [
            {
              display: `<img style="width: 50%; height: 100px; align-self: center;margin-top:20px;margin-bottom:20px;" loading="lazy" src="${getFullImgPath(
                { imgUrl: `${assetPath}/dummyImg` }
              )}"/><span >High: Always delivers high quality work in less than Estimated time.</span>`,
              value: 'tytt',
              ifSelectedDisplay: [],
              responses: [
                `<span style="text-transform: capitalize; ">9 to do so much</span>`,
              ],
              meta: {
                assetPrompts: {
                  userGen: [`electric saw chopping wood`],
                },
              },
            },
          ],
        },
        {
          label: `<img style="width: 50%; height: 100px; align-self: center;margin-top:20px;margin-bottom:20px;" loading="lazy" src="${getFullImgPath(
            { imgUrl: `${assetPath}/dummyImg` }
          )}"/><span style="text-transform: capitalize; ">Textbooks question</span>`,
          id: '795',
          validations: ['required'],
          type: 'textbox',
          placeholder: 'Please enter',
        },
        {
          label: `<img style="width: 50%; height: 100px; align-self: center;margin-top:20px;margin-bottom:20px;" loading="lazy" src="${getFullImgPath(
            { imgUrl: `${assetPath}/dummyImg` }
          )}"/><span style="text-transform: capitalize; ">6 to do so much</span>`,
          id: '795',
          validations: ['required'],
          type: 'textarea',
          placeholder: 'Please enter',
        },
      ],
    },
  ],

};

/* Productivity equal to more work in less time

Benefits of being productive:
  spend more time with family
  more time for future planning

what's your current productivity level?

High Productivity: Always delivers high quality work in less than Estimated time.

Moderate Productivity: Meets goals with some delays or errors, needs improvement.

Low Productivity: Often misses goals, delays and low-quality work.*/

export const productivityData = {
  common: {},
  grouping: [
    ['1', '2', '3'],
    ['4', '4_1', '5', '6', '7', '8'],
    ['4', '2', '3'],
    ['4', '4_1', '5', '6', '7', '8'],
  ],
  items: {
    ...items1,
    ...items2,
    ...items3,
  },
};

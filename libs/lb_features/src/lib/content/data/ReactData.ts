// ReactData.ts

import { getFullImgPath } from '../../../../../lb_utils/src/index';

const assetPath = 'react';

const jsx = {
  intro: [
    {
      type: 'generic',
      content: {
        sessionTitle: `JSX Introduction`,
      },
      meta: {
        assetPrompts: {
          userGen: [],
          sysGen: [``],
        },
      },
    },
  ],
  means: [
    {
      type: 'generic',
      content: {
        qn: `What is JSX?`,
        ans: `JSX stands for JavaScript XML. It's a syntax extension for JavaScript that allows developers to write HTML-like code within JavaScript. JSX is commonly used with React, a popular JavaScript library for building user interfaces. `,
       
      },
      meta: {
        assetPrompts: {
          userGen: [],
          sysGen: [``],
        },
      },
    },
  ],
  syntax: [
    {
      type: 'generic',
      content: {
        title: `Syntax`,
        body: `Eg:`,
        code: `const element = <h1>Hello, JSX!</h1>;`,
      },
      meta: {
        assetPrompts: {
          userGen: [
            `There would be 2 lab bottles. 
          these two were getting mixed into a bottle jar known as jsx.`,
          ],
          sysGen: [``],
        },
      },
    },
  ],

  jsx_qz: [
    {
      type: 'generic',
      cardType:"quiz",
      content: {
        qz_qn: ` What does JSX stand for?`,
        qz_options: {
          inputType: 'radio',
          isVariedResponse: true,
          correctOptions: ['JavaScript_XML'],
          options: [
            {
              value: 'JavaScript_XML',
              label: 'JavaScript XML',
              name: 'jsx',
              response:
                "Great job! That's correct. JSX stands for JavaScript XML.",
            },
            {
              value: 'Just_Xylophones',
              label: 'Just Xylophones',
              name: 'jsx',
              response:
                "Nice try, but that's not correct. The correct answer is (a) JavaScript XML.",
            },
            {
              value: 'Java_Super_Xylophone',
              label: 'Java Super Xylophone',
              name: 'jsx',
              response:
                'Almost there, but not quite. The correct answer is (a) JavaScript XML. Keep going!',
            },
          ],
        },
      },
      meta: {
        assetPrompts: {
          userGen: [],
          sysGen: [``],
        },
      },
    },
  ],
  Dynamic_intro: [
    {
      type: 'generic',
      content: {
        qn: `What is Dynamic Content?`,
        ans: `JSX allows embedding JavaScript expressions within curly braces {}. <br/>This enables dynamic content rendering. `,
       
      },
      meta: {
        assetPrompts: {
          userGen: [],
          sysGen: [``],
        },
      },
    },
  ],
  Dynamic: [
    {
      type: 'generic',
      content: {
        title: `Syntax`,
        body: `Eg`,
        code: `const name = 'World';
const element = <h1>Hello, {name}!</h1>;
`,
      },
      meta: {
        assetPrompts: {
          userGen: [],
          sysGen: [``],
        },
      },
    },
  ],
  Attributes: [
    {
      type: 'generic',
      content: {
        title: `Attributes in JSX`,
        body: `JSX uses camelCase for HTML attributes like className instead of class, and htmlFor instead of for, to avoid conflicts with JavaScript keywords.`,
      },
      meta: {
        assetPrompts: {
          userGen: [],
          sysGen: [``],
        },
      },
    },
  ],

  AttributesEg: [
    {
      type: 'generic',
      content: {
        title: `Examples of Attributes in JSX`,

        code: `
        {/* Using className instead of class */}
        <input type="text" className="input-field" />
  
        {/* Using onClick instead of onclick */}
        <button onClick={() => console.log('Button clicked')}>Click Me</button>
  
        {/* Using htmlFor */}
        
        <label htmlFor="username">Username:</label>;
`,
      },
      meta: {
        assetPrompts: {
          userGen: [],
          sysGen: [``],
        },
      },
    },
  ],
  DynamicAttributes: [
    {
      type: 'generic',
      content: {
        title: ` Dynamic Attributes`,

        code: `
        const imgUrl = 'example.jpg';
        const element = <img src={imgUrl} alt="Example" />;
        
`,
      },
      meta: {
        assetPrompts: {
          userGen: [],
          sysGen: [``],
        },
      },
    },
  ],
  Dynamic_qz: [
    {
      type: 'generic',
      cardType:"quiz",
      content: {
        qz_qn: '🤔 How do you pass dynamic values to JSX attributes?',
        qz_options: {
          inputType: 'radio',
          isVariedResponse: true,
          correctOptions: ['Using_curly_braces'],
          options: [
            {
              value: 'Using_curly_braces',
              label: 'Using curly braces {}',
              name: 'Dynamic_q',
              response:
                "👍 Great job! That's correct. Dynamic values are passed to JSX attributes using curly braces {}.",
            },
            {
              value: 'Using_quotes',
              label: 'Using quotes ""',
              name: 'Dynamic_q',
              response:
                "❌ Nice try, but that's not correct. The correct answer is (a) Using curly braces {}.",
            },
            {
              value: 'Using_square_brackets',
              label: 'Using square brackets []',
              name: 'Dynamic_q',
              response:
                '❌ Almost there, but not quite. The correct answer is (a) Using curly braces {}. Keep going!',
            },
          ],
        },
      },
      meta: {
        assetPrompts: {
          userGen: [],
          sysGen: [''],
        },
      },
    },
  ],
  JSX_Transpilation_qz: [
    {
      type: 'generic',
      cardType:"quiz",
      content: {
        qz_qn: "Browsers don't understand [Text] directly<br><br>so JSX code is transformed into regular JavaScript functions using tools like [Text]",
        qz_options: [
          {
            isVariedResponse: true,
            correctOptions: ['Using_curly_braces'],
            options: [
              {
                value: 'Using_curly_braces',
                label: 'Using curly braces {}',
                name: 'Dynamic_q',
                response:
                  "👍 Great job! That's correct. Dynamic values are passed to JSX attributes using curly braces {}.",
              },
              {
                value: 'Using_quotes',
                label: 'Using quotes ""',
                name: 'Dynamic_q',
                response:
                  "❌ Nice try, but that's not correct. The correct answer is (a) Using curly braces {}.",
              },
            ],
          },
        ],
      },
      meta: {
        assetPrompts: {
          userGen: [],
          sysGen: [''],
        },
      },
    },
  ],
  jsx_joke:[
    {
      type: 'generic',
      cardType:"joke",
      content: {
        jo_qn: `Why did the React component break up with HTML? `,
        jo_ans: `Because it found JSX more attractive and easier to work with!        `,
        html: `<img style="width: 50%; height: 100px; align-self: center; margin-top: 20px; margin-bottom: 20px;" loading="lazy" src="${getFullImgPath(
          { imgUrl: `${assetPath}/Html_brokeUp` }
        )}">
       `,
      },
      meta: {
        assetPrompts: {
          userGen: ['A  baby boy looking sad when a baby  girl and baby  boy with  a hat joyfully riding on a single cycle.'],
          sysGen: [``],
        },
      },
    },
  ],
};



export const reactData = {
  common: {},
  grouping: [Object.keys(jsx)],
  items: {
    ...jsx,
  },
};


  
 
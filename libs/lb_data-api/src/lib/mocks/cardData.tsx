//https://chat.openai.com/share/83157055-4101-48fc-8528-3f8b695d53be

const items = {
  1: [{}],
  2: [{}],
  3: [{}],
  4: [{}],
  5: [{}],
  6: [{}],
  7: [{}],
};

export const productivityData = {
  common: {},
  grouping: [
    [1, 3, 4],
    [2, 5, 6],
  ],
  items,
};

const cardFormat = {
  cardId: '2',
  about_cardId: 'Unique Identifier for the card',
  render: [
    {
      element: 'sessionTitle',
      about:
        'Use this only if there is only title and nothing else in the card content',
      content: 'Prerequisite Skills',
    },
    {
      element: 'title',
      about: 'The text would not end with ?  It should be short.',
      content: 'Prerequisite Skills',
    },
    {
      element: 'description',
      about:
        'If there are 2 to 3 lines ',
      content: 'Prerequisite Skills',
    },
    {
      element: 'question',
      about:
        'If the card content is in the question format. Eg: What is React js? ',
      content: 'Prerequisite Skills',
    },
    {
      element: 'answer',
      about:
        'For displaying Answers in response to a question. It mostly comes in combination with “qn” element',
      content: 'Prerequisite Skills',
    },    
    {
      element: 'image',
      about: ' For rendering image',
      content: {
        imgPath: '',
        imgTwClasses: 'w-76 h-124',
      },
    },
  
   
    {
      element: 'codeSnippet',
      about: ' For code snippets',
      content: '',
    },
    {
      element: 'analogy',
      about: 'For Explaining with an analogy',
      content: 'Prerequisite Skills',
    },
    {
      element: 'listItems',
      about: ' For list items',
      content: ['HTML/CSS', 'JavaScript fundamentals', 'ES6+ features'],
    },
    {
      element: 'imgPrompt',
      about: ' For Image prompts',
      content: 'Prerequisite Skills',
    },

    {
      element: 'jo_qn',
      about: 'Question in a joke',
      content: 'Prerequisite Skills',
    },
    {
      element: 'jo_ans',
      about: 'Answer in a joke',
      content: 'Prerequisite Skills',
    },

    {
      "element": "riddle_qn",
      "about": "Question in a riddle",
      "content": "Prerequisite Skills"
    },
    {
      "element": "riddle_ans",
      "about": "Answer in a riddle",
      "content": "Prerequisite Skills"
    },
    {
      "element": "facts_title",
      "content": "3 fun facts about JSX"
    },
    {
      "element": "facts_Items",
      "about": " For listing fun facts",
      "content": [
        "HTML/CSS",
        "JavaScript fundamentals",
        "ES6+ features"
      ]
    },
    {
      element: 'qz_qn',
      about: 'If the card content is in the quiz question format. ',
      content: 'What does JSX stand for?',
    },
    {
      element: 'qz_options',
      about:
        'For displaying options in response to a quiz question. It  comes in combination with qz_qn element',
      content: {
        correctOptions: ['JavaScript_XML'],
        options: [
          {
            value: 'JavaScript_XML', // value of the option
            label: 'JavaScript XML', // label displayed for the option
            name: 'jsx', // name of the option group
            response:
              "Great job! That's correct. JSX stands for JavaScript XML.", // response for selecting this option
          },        
          {
            value: 'Just_Xylophones',
            label: 'Just Xylophones',
            name: 'jsx',
            response:
              "Nice try, but that's not correct. The correct answer is (a) JavaScript XML.",
          },
        ],
      },
    },
  ],
 
};

const cardFormatCampus = {
  cardId: '2',
  about_cardId: 'Unique Identifier for the card',
  render: [
  
    {
      element: 'title',
      about: 'The text would not end with ?  It should be short.',
      content: 'Prerequisite Skills',
    },
    {
      element: 'description',
      about:
        'If there are 2 to 3 lines ',
      content: 'Prerequisite Skills',
    },
    {
      element: 'question',
      about:
        'If the card content is in the question format. Eg: What is React js? ',
      content: 'Prerequisite Skills',
    },
    {
      element: 'answer',
      about:
        'For displaying Answers in response to a question. It mostly comes in combination with “qn” element',
      content: 'Prerequisite Skills',
    },    
    {
      type: 'image',
      about: ' For rendering image',
      content: {
        imgPath: '',
        imgTwClasses: 'w-76 h-124',
      },
    },
   
    {
      element: 'analogy',
      about: 'For Explaining with an analogy',
      content: 'Prerequisite Skills',
    },
    {
      element: 'listItems',
      about: ' For list items',
      content: ['HTML/CSS', 'JavaScript fundamentals', 'ES6+ features'],
    },
    {
      element: 'imgPrompt',
      about: ' For Image prompts',
      content: 'Prerequisite Skills',
    },

    {
      element: 'jo_qn',
      about: 'Question in a joke',
      content: 'Prerequisite Skills',
    },
    {
      element: 'jo_ans',
      about: 'Answer in a joke',
      content: 'Prerequisite Skills',
    },

    {
      "element": "riddle_qn",
      "about": "Question in a riddle",
      "content": "Prerequisite Skills"
    },
    {
      "element": "riddle_ans",
      "about": "Answer in a riddle",
      "content": "Prerequisite Skills"
    },
    {
      "element": "facts_title",
      "content": "3 fun facts about JSX"
    },
    {
      "element": "facts_Items",
      "about": " For listing fun facts",
      "content": [
        "HTML/CSS",
        "JavaScript fundamentals",
        "ES6+ features"
      ]
    }
  ],
 
};
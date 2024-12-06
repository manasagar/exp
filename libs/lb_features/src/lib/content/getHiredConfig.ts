const intro = [{}];

const followUp = [
  {
    question: 'Why should anyone hire you?',
  },
  {
    options: ['Why should anyone hire you?'],
  },
  {
    tips: [
      'Get certifications',
      'Build a strong portfolio on stack overflow by answering questions',
      'Contribute on Github' 
    ],
  },
  {
    quote: ['Number of problems you solve determines your experience Not the number of years you work'],
  },
];

export const getHiredConfig = [...intro, ...followUp];

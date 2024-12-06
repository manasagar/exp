export const academics = [
  {
    categoryId: 1,
    categoryName: 'Academic Performance',
    topics: [
      {
        topicId: '1.1',
        topicName: 'Academic Performance',
        subtopicsArr: [
          {
            subtopicName: 'Academics',
            subtopicId: '1.1_1',
            contentObj: {
              mainDetails: {
                data: [
                  {
                    cardId: 'c1-1.1_1',
                    render: [
                      {
                        element: 'imgPrompt',
                        about: `An image prompt to explain the  below element in the render array. The prompt should be elaborate and Should have specific details of the image.  The prompt should be able to generate a simple image.  Avoid vague prompts such as: An image prompt to explain the missing semicolons in Python. Use a suitable image style eg:['Photorealistic', 'Illustrative', 'Abstract', 'Isometric', 'Minimalist', 'Sketch', 'Line Art', 'Cartoon', 'Vector'] based on the context. `,
                        content: `Create an image split into two halves to depict the journey of a student transitioning into a professional career. On one side, show a student wearing a traditional graduation gown and hat, smiling proudly, holding a diploma, and standing against a backdrop of a university with a crowd of cheering classmates. On the other half, depict the same student now dressed in professional business attire, sitting confidently across a table from an interviewer in a modern office setting. The interviewer should be holding a resume, and the background should show elements of the office like a window with a cityscape view, a desk, and some office plants. The overall image should convey a sense of achievement, transition, and new beginnings.`,
                        subDirName: 'campus_career',
                        imgPath: '',
                      },
                      {
                        element: 'formulae',
                        about:
                          'represent the context of subtopicName, topicName and categoryName  through a formula.',
                        content: ' Better Academics = Better employability',
                      },
                    ],
                  },
                  {
                    cardId: 'c2-1.1_1',
                    render: [
                      {
                        element: 'imgPrompt',
                        about:
                          'An image prompt to explain the  below element in the render array.',
                        content: 'A confused programmer in the forest',
                        subDirName: 'campus_career',
                        imgPath: '',
                      },
                      {
                        element: 'stats',
                        about: '',
                        content: [
                          {
                            text: '70% of Indian employers consider academic performance a key factor in hiring decisions',
                            source:
                              'India Employability Survey by Aspiring Minds',
                          },
                        ],
                      },
                    ],
                  },
                  {
                    cardId: 'c3-1.1_1',
                    render: [
                      {
                        element: 'imgPrompt',
                        about:
                          'An image prompt to create image of the person in the source of the below element in the render array.',
                        subDirName: 'campus_career',
                        imgPath: '',
                      },
                      {
                        element: 'quotes',
                        about: '',
                        content: [
                          {
                            text: `Academic excellence is the foundation for a successful career. It demonstrates a student's ability to learn, adapt, and excel in their chosen field.`,
                            source:
                              'Dr. Raghuram G. Rajan, Economist and Academician',
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            },
          },
          {
            subtopicName: 'Tips to achieve better Academics',
            subtopicId: '1.1_2',
            contentObj: {
              mainDetails: {
                data: [
                  {
                    cardId: 'c1-1.1_2',
                    render: [
                      {
                        element: 'tips',
                        about:
                          'represent the context of subtopicName, topicName and categoryName  through a formula.',
                        content: [
                          {
                            key: 'Understand the core',
                            content: 'Understand the core of the subject.',
                          },
                          {
                            key: 'Listen to classes with focus',
                            content:
                              'Pay attention during classes to grasp the main concepts.',
                          },

                          {
                            key: 'Take effective notes',
                            content:
                              'Summarize key points during lectures to aid understanding and revision.',
                          },

                          {
                            key: 'Join study groups',
                            content:
                              'Collaborate with peers to discuss and learn different perspectives.',
                          },
                          {
                            key: 'Utilize resources',
                            content:
                              'Make use of textbooks, online materials, and tutoring when needed.',
                          },
                          {
                            key: 'Stay positive and motivated',
                            content:
                              'Maintain a positive mindset and remind yourself of your academic goals.',
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            },
          },
        ],
      },
    ],
  },
];

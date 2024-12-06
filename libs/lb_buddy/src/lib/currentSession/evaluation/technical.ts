export const technicalEvaluation = [
  {
    label: 'Overall Feedback',
    items: [
      {
        evaluation: [
          {
            text: 'Was this session helpful to you?',
            inputId: 'usefulness',
            input: 'radio',
            desiredVal: 'yes',
            preSelect: 'yes',
            options: [
              {
                label: 'Yes',
                value: 'yes',
              },
              {
                label: 'No',
                value: 'no',
              },
            ],
            selfText: 'Helpfulness of the session', // Added selfText
          },
          {
            text: 'Rate this session',
            inputId: 'sessionRating',
            input: 'radio',
            desiredVal: '3',
            preSelect: '2',
            options: [
              {
                label: '👎',
                value: '1',
              },
              {
                label: 'Thumbs Sideways',
                value: '2',
              },
              {
                label: '👍',
                value: '3',
              },
            ],
            selfText: 'Session rating', // Added selfText
          },
          {
            inputId: 'customFeedback',
            input: 'textArea',
            placeholder: 'Any feedback?',
            selfText: 'Additional feedback', // Added selfText
          },
        ],
      },
    ],
  },
];

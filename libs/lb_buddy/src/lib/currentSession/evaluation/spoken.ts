const fundamentals = {
  label: 'Fundamentals',
  items: [
    {
      label: 'Clarity',
      evaluation: [
        {
          text: 'Was the speaker easy to understand?',
          inputId: 'fundamentals_clarity_understandable',
          input: 'radio',
          desiredVal: 'yes',
          improvementTip: ['Enunciate clearly and pronounce words correctly.'],
          preSelect: 'yes',
          options: [
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'no' },
          ],
          selfText: 'Ease of understanding',
        },
        {
          text: 'Did they speak at an appropriate pace?',
          inputId: 'fundamentals_clarity_pace',
          input: 'radio',
          desiredVal: 'yes',
          improvementTip: [
            "Practice speaking at a moderate pace that's easy to follow.",
          ],
          preSelect: 'yes',
          options: [
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'no' },
          ],
          selfText: 'Speaking pace',
        },
        {
          text: 'Were their words clear and well-articulated?',
          inputId: 'fundamentals_clarity_articulation',
          input: 'radio',
          desiredVal: 'yes',
          improvementTip: [
            'Warm up your voice before speaking to improve articulation.',
          ],
          preSelect: 'yes',
          options: [
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'no' },
          ],
          selfText: 'Clarity and articulation of words',
        },
      ],
    },
    {
      label: 'Conciseness',
      evaluation: [
        {
          text: 'Did the speaker get to the point quickly?',
          inputId: 'fundamentals_conciseness_directness',
          input: 'radio',
          desiredVal: 'yes',
          improvementTip: [
            'Plan your key points in advance to stay focused and avoid rambling.',
          ],
          preSelect: 'yes',
          options: [
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'no' },
          ],
          selfText: 'Directness and getting to the point',
        },
        {
          text: "Did they avoid unnecessary rambling or filler words like 'um', 'uh', 'like', etc.?",
          inputId: 'fundamentals_conciseness_fillers',
          input: 'radio',
          desiredVal: 'yes',
          improvementTip: [
            'Pause briefly instead of using filler words when you need to think.',
          ],
          preSelect: 'yes',
          options: [
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'no' },
          ],
          selfText: 'Avoidance of rambling and filler words',
        },
      ],
    },
    {
      label: 'Confidence',
      evaluation: [
        {
          text: 'Did the speaker project a self-assured demeanor?',
          inputId: 'fundamentals_confidence_demeanor',
          input: 'radio',
          desiredVal: 'yes',
          improvementTip: [
            'Maintain good posture, make eye contact, and smile naturally.',
          ],
          preSelect: 'yes',
          options: [
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'no' },
          ],
          selfText: 'Projection of a self-assured demeanor',
        },
        {
          text: 'Was their voice steady and strong?',
          inputId: 'fundamentals_confidence_voice',
          input: 'radio',
          desiredVal: 'yes',
          improvementTip: [
            'Practice speaking with a clear, steady voice, projecting to the back of the room.',
          ],
          preSelect: 'yes',
          options: [
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'no' },
          ],
          selfText: 'Steadiness and strength of voice',
        },
        {
          text: 'Did their body language convey confidence?',
          inputId: 'fundamentals_confidence_bodyLanguage',
          input: 'radio',
          desiredVal: 'no', // Assuming we want open body language, not overly confident
          improvementTip: [
            'Avoid crossing your arms and use open gestures to engage your audience.',
          ],
          preSelect: 'yes',
          options: [
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'no' },
          ],
          selfText: 'Confidence in body language',
        },
      ],
    },
    {
      label: 'Correctness',
      evaluation: [
        {
          text: 'Did the speaker use proper grammar, pronunciation, and vocabulary?',
          inputId: 'fundamentals_correctness_grammar',
          input: 'radio',
          desiredVal: 'yes',
          improvementTip: [
            'Review grammar rules and practice pronunciation. Expand your vocabulary by reading and listening to diverse sources.',
          ],
          preSelect: 'yes',
          options: [
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'no' },
          ],
          selfText: 'Use of proper grammar, pronunciation, and vocabulary',
        },
        {
          text: 'Were there any noticeable errors or inconsistencies?',
          inputId: 'fundamentals_correctness_errors',
          input: 'radio',
          desiredVal: 'no',
          improvementTip: [
            'Before speaking, think for a few seconds and then continue. This will help you be more conscious of what you say.',
          ],
          preSelect: 'yes',
          options: [
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'no' },
          ],
          selfText: 'Noticeable errors or inconsistencies',
        },
      ],
    },
  ],
};

const engagement = {
  label: 'Engagement',
  items: [
    {
      label: 'Eye Contact',
      evaluation: [
        {
          text: 'Did the speaker maintain consistent eye contact with the audience?',
          inputId: 'engagement_eyeContact_consistency',
          input: 'radio',
          desiredVal: 'yes',
          improvementTip: [
            'Practice making eye contact with different people in the audience, shifting your gaze naturally.',
          ],
          preSelect: 'yes',
          options: [
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'no' },
          ],
          selfText: 'Consistency of eye contact with audience',
        },
        {
          text: 'Did their eye contact feel natural and engaging?',
          inputId: 'engagement_eyeContact_naturalness',
          input: 'radio',
          desiredVal: 'yes',
          improvementTip: [
            'Relax and try to connect with individuals through your gaze. Avoid staring intensely.',
          ],
          preSelect: 'yes',
          options: [
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'no' },
          ],
          selfText: 'Naturalness and engagement of eye contact',
        },
      ],
    },
    {
      label: 'Body Language',
      evaluation: [
        {
          text: 'Did the speaker use open and inviting gestures?',
          inputId: 'engagement_bodyLanguage_openness',
          input: 'radio',
          desiredVal: 'yes',
          improvementTip: [
            'Use open gestures like spreading your arms slightly and uncrossing them.',
          ],
          preSelect: 'yes',
          options: [
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'no' },
          ],
          selfText: 'Openness and inviting nature of gestures',
        },
        {
          text: 'Did their facial expressions convey warmth and approachability?',
          inputId: 'engagement_bodyLanguage_expressions',
          input: 'radio',
          desiredVal: 'yes',
          improvementTip: [
            'Smile genuinely and use your facial expressions to match the tone of your message.',
          ],
          preSelect: 'yes',
          options: [
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'no' },
          ],
          selfText: 'Warmth and approachability in facial expressions',
        },
      ],
    },
    {
      label: 'Active Listening',
      evaluation: [
        {
          text: 'Did the speaker actively listen to others?',
          inputId: 'engagement_activeListening_listening',
          input: 'radio',
          desiredVal: 'yes',
          improvementTip: [
            'Focus your attention on the speaker, avoid interrupting, and show genuine interest in what they say.',
          ],
          preSelect: 'yes',
          options: [
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'no' },
          ],
          selfText: 'Active listening to others',
        },
        {
          text: 'Did they nod, paraphrase, or ask clarifying questions?',
          inputId: 'engagement_activeListening_engagement',
          input: 'radio',
          desiredVal: 'yes',
          improvementTip: [
            "Show that you understand by nodding, summarizing what you've heard, or asking questions to clarify.",
          ],
          preSelect: 'yes',
          options: [
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'no' },
          ],
          selfText:
            'Engagement through nodding, paraphrasing, or clarifying questions',
        },
      ],
    },
    {
      label: 'Enthusiasm',
      evaluation: [
        {
          text: 'Did the speaker speak with passion and energy?',
          inputId: 'engagement_enthusiasm_passion',
          input: 'radio',
          desiredVal: 'yes',
          improvementTip: [
            'Find genuine excitement for your topic and let it show in your voice and expressions.',
          ],
          preSelect: 'yes',
          options: [
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'no' },
          ],
          selfText: 'Passion and energy in speaking',
        },
        {
          text: 'Were they engaging and captivating to listen to?',
          inputId: 'engagement_enthusiasm_captivation',
          input: 'radio',
          desiredVal: 'yes',
          improvementTip: [
            "Vary your tone, use stories or examples, and connect your message to the audience's interests.",
          ],
          preSelect: 'yes',
          options: [
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'no' },
          ],
          selfText: 'Engagement and captivation in speaking',
        },
      ],
    },
  ],
};

export const spokenEvaluation = [fundamentals, engagement];

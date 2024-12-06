export const nudgeCards = {
  mvp: [
    {
      cardId: "mvpCard",
      render: [
        {
          element: "imgPrompt",
          content:
            "A young teacher writing on a blackboard tied to a tree. students were 10 years old and they were sitting on the ground. This setting is in rural India. it was a sunny day. The students were wearing half trousers.",
          imgPath: "assets/nudge/mvp",
        },
        {
          element: "info_nudge",
          content: "We're new, Sorry if things aren't perfect yet.",
        },
        
      ],
    }    
  ],
  action: [
    {
      type: "html",
      content: `
      Knowledge without implementation is just information
      
      
      Don't just skim through the content take action at the same time
      `,
    },
  ],
  rating: [
    {
      type: "html",
      content: `
        On the scale of 5 what would be your rating
        `,
    },
  ],
  shareCards: [
    {
      type: "html",
      content: `
      You can share the cards here
      `,
    },
  ],
};

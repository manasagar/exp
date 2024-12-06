//participantsRange: [min, max no. of participants allowed],participantsRange:  [x] Min Max is same
export const techFormats = {
  qa: {
    formatLbl: "Q & A",
    formatDesc:
      "Host will be answering the questions raised by the participants.",

    roles: [
      {
        roleId: "questioner",
        displayName: "Questioner",
        desc: "You can ask questions and the host will be answering.",
        participantsRange: [4, 12],
      },
      {
        roleId: "host",
        displayName: "Host",
        desc: "You will be answering the questions asked by the Questioner.",
        participantsRange: [1, 2],
      },
    ],
  },
  mockInterview: {
    formatLbl: "Mock Interview",
    formatDesc:
      "Simulate a real interview scenario with an interviewer and an interviewee.",
    roles: [
      {
        roleId: "interviewer",
        displayName: "Interviewer",
        desc: "You will be asking interview questions to assess the Interviewee's skills.",
        participantsRange: [1, 2],
      },
      {
        roleId: "interviewee",
        displayName: "Interviewee",
        desc: "You will be answering the interview questions posed by the Interviewer.",
        participantsRange: [1],
      },
    ],
  },
  projectWalkthrough: {
    formatLbl: "Project Walkthrough",
    formatDesc:
      "Presenter will showcase their project and explain their code and design decisions.",
    roles: [
      {
        roleId: "presenter",
        displayName: "Presenter",
        desc: "You will be presenting your project and explaining your code and design decisions.",
        participantsRange: [1],
      },
      {
        roleId: "reviewer",
        displayName: "Reviewer",
        desc: "You will be reviewing the presenter's project and providing feedback.",
        participantsRange: [1, 12],
      },
    ],
  },
  techTalks: {
    formatLbl: "Tech Talks",
    formatDesc:
      "An explainer will discuss a specific skill or concept in detail while learners engage and ask questions.",
    roles: [
      {
        roleId: "explainer",
        displayName: "Explainer",
        desc: "You will be explaining a specific skill or concept in detail.",
        participantsRange: [1],
      },
      {
        roleId: "learner",
        displayName: "Learner",
        desc: "You will be listening to the explanation and asking questions to clarify your understanding.",
        participantsRange: [1, 12],
      },
    ],
  },
  pairLearning: {
    formatLbl: "Pair Learning",
    formatDesc:
      "participants go through articles, tutorials, or videos and discuss the key takeaways",
    participantsRange: [2, 4],
  },
};

const buddyRouteNs = 'buddy';
export const buddyConstants = {
  buddyRoutes: {
    bookSession: `${buddyRouteNs}/bookSession`,
    upcomingSessions: `${buddyRouteNs}/upcomingSessions`,
    currentSession: `${buddyRouteNs}/currentSession`,
    createSession: `${buddyRouteNs}/createSession`,
  },
};

// Default values used across the project
export const findBuddyDefaults = {
  CATEGORY_ID: 'defaultCategory',
  SUB_SKILL_ID: 'CSS',
  EXPERTISE_LEVEL: [2],
  PARTICIPANTS_REQUIRED: [2, 4],
  DURATION: 45, // in minutes
  SESSION_DETAILS: [
    {
      format: 'qa',
      role: ['questioner'],
    },
  ],
  EXPERTISE: [
    { Communication: 3 }
  ]
}


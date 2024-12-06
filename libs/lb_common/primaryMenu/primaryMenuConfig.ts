export const primaryMenuConfig = [
  {
    heading: 'Home',
    isExpand: true,
    items: [
      {
        label: 'Services',
        route: 'index',
      },
    ],
  },
  {
    heading: 'Micro learning',
    isExpand: true,
    items: [
      {
        label: 'All courses',
        route: 'ml/gw',
      },
      {
        label: 'Current session',
        route: 'buddy/currentSession',
      },
    ],
  },
  {
    heading: 'Buddy learning',
    isExpand: true,
    items: [
      {
        label: 'Book a session',
        route: 'buddy/findBuddy',
      },
      {
        label: 'Upcoming sessions',
        route: 'buddy/availableSessions',
      },
    ],
  },
  {
    heading: 'Informational',
    isExpand: false,
    items: [
      {
        label: 'Pricing',
        route: 'common/pricing',
      },
      {
        label: 'About Us',
        route: 'common/aboutUs',
      },
      {
        label: 'Contact Us',
        route: 'common/contactUs',
      },
      {
        label: 'Privacy Policy',
        route: 'common/privacyPolicy',
      },
      {
        label: 'Terms & Conditions',
        route: 'common/tnc',
      },
      {
        label: 'Refunds & Cancellation',
        route: 'common/refundPolicy',
      },
    ],
  },
  {
    heading: 'Others',
    isExpand: true,
    items: [
      {
        label: 'Account',
        route: 'common/profile',
      },
      
      {
        label: 'Discover',
        route: 'common/profile',
        status: ['upcoming'],
      },
     
      
    ],
  },
];

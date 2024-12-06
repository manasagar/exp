import { feedbackData } from '../lb_data-api/src/lib/mocks/feedbackData';
import { getUserBehaviourData } from '../lb_data-api/src/lib/mocks/getUserBehaviourData';

export const ANDROID_CLIENT_ID =
  '122771236069-tel0knvd4e1nkuu2t73kj7f185caglb1.apps.googleusercontent.com';
export const WEB_CLIENT_ID =
  '122771236069-n8amnbahps6a568ag15p8m54t1slqmgn.apps.googleusercontent.com';

export const commonConstants = {
  compInfo:{
    appName :'Dhrona Campus',
    companyAddress :`FL-NO:808, G-BLOCK, BRC, SHIV HILLS APTS, Rangareddy- 500089,Hyderabad, Telangana, India`, 
    contactEmail :'staff@stakesmen.com',
    companyName: "CYBERED TECH PRIVATE LIMITED",
    domainName : 'campus.dhrona.one',
    jurisdiction: "Hyderabad, Telangana, India"
  },
  userIdKey: 'userId', //Key used in Async storage
  apiUrls: {
    postFeedback: {
      url: '/api/feedback',
      GET: feedbackData,
    },
    postSentiment: {
      url: 'ml/sentiment',
      POST: '',
    },
    getUserBehaviour: {
      url: 'api/users/behavior/URL_PARAM_0',
      GET: getUserBehaviourData,
    },
    patchUserBehaviour: {
      url: '/api/user/behavior/mutation/URL_PARAM_0',
      PATCH: '',
    },
  },
  appRoutes_common: {
    loginRoute: '/common/login',
    services: '/common/services',
    profile: '/common/profile',
  },
  professionConfig: {
    campus: 'student',
    lingo: "all"
  },
};

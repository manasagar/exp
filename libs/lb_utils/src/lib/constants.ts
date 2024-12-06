import { createUserDetails } from "../../../lb_data-api/src/lib/mocks/createUserDetails";
import { curriculumData } from "../../../lb_data-api/src/lib/mocks/curriculumData";
import { postLearningStatusData } from "../../../lb_data-api/src/lib/mocks/postLearningStatusData";
import { selectedCurriculum_Mock } from "../../../lb_data-api/src/lib/mocks/selectedCurriculum_Mock";


export const apiUrls = {
  createUser: "/createUser",
  getAllUsers: "/getAllUsers",
  getUserById: "/getUser/:id",
  updateUser: "/updateUser/:id",
  deleteUser: "/deleteUser/:id",
};

export const APP_CONSTANTS = {
  MIN_CARDS_IN_SESSION: 2,
  MAX_CARDS_IN_SESSION: 3, //TODO:Cards
};

export const appRoutes = {
  courseDeatils: "/course-details",
  gw: "/gw",
  welcome: "/welcome",
  content: "/content",
  streak: "/streak",
  scoring: "/scoring",
  privacy: "/privacy",
  curriculum: "/curriculum",
  createCourseContent: "/createCourseContent",
  noShow: "/noShow",
  testing: "/testing",
};


 //TODO export const API_URL = process.env.API_URL  || "http://localhost:6200";
export const API_URL = "https://dhrona-mbg4k7zj3a-el.a.run.app/"; //TODO
//export const API_URL = "http://localhost:6200";

export const assetDetails = {
  defaultImgExt: ".webp",
  //TODO
  //assetsBasePath: 'https://dhrona-mbg4k7zj3a-el.a.run.app/assets/',
  assetsBasePath: API_URL,
};

export const GOOGLE_CLIENT_IDS = {
  WEB: "https://122771236069-hc9ralqomprkun66ck9htignid76avc6.apps.googleusercontent.com",
  ANDROID:
    "https://122771236069-n8amnbahps6a568ag15p8m54t1slqmgn.apps.googleusercontent.com",
  IOS: "122771236069-jl0e05cc9r72h9eto6aa9g7sqs4a916v.apps.googleusercontent.com",
};

// constants.ts
export const branchKey = "key_live_dzmHcfsrBAPiXX84oqS4VoicDrdUQosI";

export const commonReferralLinkData = {
  campaign: "content 123",
  channel: "referral",
  feature: "share",
};

//for carousel in millisecs
export const AUTO_PLAY_DELAY = 5000;

export const mlConstants = {
  curriculumCourse_routeParam: "curriculumCourse", //Param used in the route 

  ks: {
    isDisplayLoginAfterCurriculum: false,
  },
  routePaths: {
    skillContentRoute: "[curriculumCourse]/content",
    startNewSession:"ml/startNextSession"
  },
  apiUrls: {
    getCurriculumData: {
      url: "/api/curriculum/URL_PARAM_0",
      GET: curriculumData,
    },
    addGwItem: { url: "/addGwItem", POST: "" },
    selectedCurriculum: {
      url: "/api/curriculum/learningStatus",
      POST: postLearningStatusData,
      PATCH: {},
    },
    getCourseProgress: {
      url: "/api/curriculum/learningStatus/URL_PARAM_0/URL_PARAM_1",
      GET: selectedCurriculum_Mock,
    },
   
    setUserDetails: { 
      url: "/api/users/details", 
      POST: createUserDetails 
    },
    getUserDetails: {
      url: "/api/users/details/URL_PARAM_0",
      GET: {},
    },
    deleteUserDetails: {
      url: "/api/users/details/URL_PARAM_0",
      DELETE: {},
    },
    validateUserdetails: {
      url: "/api/users/details/validate", 
      POST: ""
    },
    replaceUserId: {
      url: "/api/users/details/replaceId", 
      PATCH: {},
    },
  
    getUserStreak: { 
      url: "/getStreak/:id", 
      GET: "" },
    updateStreak: { 
      url: "/updateStreak/:id", 
      POST: "" },

    postFindBuddy: {
      url: "/api/buddy/findBuddy",
      POST: {},
    },
    getSession: {
      url: "/api/buddy/getSession/URL_PARAM_0",
      GET: {},
    },
    getUserSessions: {
      url: "/api/buddy/userSessions",
      POST: {},
    },
    postLeaveSession: {
      url :"/api/buddy/leaveSession",
      POST: {},
    },
    getSlot :{
      url: "/api/buddy/getSlot",
      POST: {}
    },
    sendFeedback:{
      url: "/api/feedback/",
      POST:{}
    },
    getSessionFeedback:{
      url: "/api/feedback/session",
      POST: {},
    },
    getSkillData: {
      url: "/api/ml/getSkillData",
      POST: {},
    },
    postCreateSingleSlot :{
      url: "/api/buddy/createSingleSlot",
      POST: {}
    }


  },
};

import { injectEndPointsWrapper } from "../../../../lb_data-api/src";
import { mlConstants } from "../../../../lb_utils/src";

const { apiUrls } = mlConstants;
const apiObj = {
  endPointsData: [
    
    {
      ep_url: `${apiUrls["postFindBuddy"].url}`,
      ep_type: "POST",
      ep_name: "postFindBuddy",
    },
    {
      ep_url: `${apiUrls["getSession"].url}`,
      ep_type: "GET",
      ep_name: "getSession",
    },
    {
      ep_url: `${apiUrls["getUserSessions"].url}`,
      ep_type: "POST",
      ep_name: "getUserSessions",
    },
    {
      ep_url: `${apiUrls["postLeaveSession"].url}`,
      ep_type: "POST",
      ep_name: "postLeaveSession",
    },
    {
      ep_url: `${apiUrls["getSlot"].url}`,
      ep_type: "POST",
      ep_name: "getSlot",
    },
    {
      ep_url: `${apiUrls["sendFeedback"].url}`,
      ep_type: "POST",
      ep_name: "sendFeedback",
    },
    {
      ep_url: `${apiUrls["getSessionFeedback"].url}`,
      ep_type: "POST",
      ep_name: "getSessionFeedback",
    },
    {
      ep_url: `${apiUrls["postCreateSingleSlot"].url}`,
      ep_type: "POST",
      ep_name: "postCreateSingleSlot",
    },
  ],
};

export const {
  usePostFindBuddyMutation, useGetSessionQuery, useGetUserSessionsMutation, usePostLeaveSessionMutation, useGetSlotMutation, useSendFeedbackMutation, useGetSessionFeedbackMutation, usePostCreateSingleSlotMutation
} = injectEndPointsWrapper(apiObj);

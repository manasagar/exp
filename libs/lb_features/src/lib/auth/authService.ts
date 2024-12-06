import { injectEndPointsWrapper } from "../../../../lb_data-api/src";
import { mlConstants } from "../../../../lb_utils/src";

const { apiUrls } = mlConstants;
const apiObj = {
  endPointsData: [
    {
      ep_url: `${apiUrls["getUserDetails"].url}`,
      ep_type: "GET",
      ep_name: "getUserDetails",
    },
    {
      ep_url: `${apiUrls["setUserDetails"].url}`,
      ep_type: "POST",
      ep_name: "createUserDetails",
    },  
    {
      ep_url: `${apiUrls["setUserDetails"].url}`,
      ep_type: "PATCH",
      ep_name: "patchUserDetails",
    },   
    {
      ep_url: `${apiUrls["deleteUserDetails"].url}`,
      ep_type: "DELETE",
      ep_name: "deleteUserDetails",
    },
    {
      ep_url: `${apiUrls["validateUserdetails"].url}`,
      ep_type: "POST",
      ep_name: "validateUserDetails",
    },
    {
      ep_url: `${apiUrls["replaceUserId"].url}`,
      ep_type: "PATCH",
      ep_name: "replaceUserId",
    },
  ],
};

export const {
  usePatchUserDetailsMutation,
  useGetUserDetailsQuery,
  useCreateUserDetailsMutation,
  useDeleteUserDetailsMutation,
  useValidateUserDetailsMutation,
  useReplaceUserIdMutation
} = injectEndPointsWrapper(apiObj);

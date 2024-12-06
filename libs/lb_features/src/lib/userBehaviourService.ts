import { commonConstants } from "../../../lb_common/commonConstants";
import { injectEndPointsWrapper } from "../../../lb_data-api/src";

const { apiUrls } = commonConstants;
const apiObj = {
  endPointsData: [
    {
      ep_url: `${apiUrls["getUserBehaviour"].url}`,
      ep_type: "GET",
      ep_name: "getUserBehaviour",
    },
    {
      ep_url: `${apiUrls["patchUserBehaviour"].url}`,
      ep_type: "PATCH",
      ep_name: "patchUserBehaviour",
    },
  ],
};

export const { useGetUserBehaviourQuery, usePatchUserBehaviourMutation } =
  injectEndPointsWrapper(apiObj);

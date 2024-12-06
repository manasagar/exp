import { commonConstants } from "../../../lb_common/commonConstants";
import { injectEndPointsWrapper } from "../../../lb_data-api/src";

const { apiUrls } = commonConstants;
const apiObj = {
  endPointsData: [
    {
      ep_url: `${apiUrls["postSentiment"].url}`,
      ep_type: "POST",
      ep_name: "postSentiment",
    },
  ],
};

export const { usePostSentimentMutation } =
  injectEndPointsWrapper(apiObj);

import { injectEndPointsWrapper } from '../rtk/rtk-api';
import { apiUrls } from "../../../../lb_utils/src/index";

const apiObj = {
  endPointsData: [
  
    {
      ep_url: `${apiUrls["holdings"]}`,
      ep_type: "GET",
      ep_name: "fetchEquitiesData",
    }
  ],
};

export const {
  useFetchEquitiesDataQuery,
} = injectEndPointsWrapper(apiObj);



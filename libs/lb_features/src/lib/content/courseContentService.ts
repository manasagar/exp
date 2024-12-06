
import { injectEndPointsWrapper } from "../../../../lb_data-api/src/index";
import { apiUrls } from "../../../../lb_utils/src/index";

const apiObj = {
  endPointsData: [
  
    {
      ep_url: `${apiUrls["getCourseData"]}`,
      ep_type: "POST",
      ep_name: "getCourseData",
    }
  ],
};

export const {
  useGetCourseDataMutation,
} = injectEndPointsWrapper(apiObj);



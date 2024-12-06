import { injectEndPointsWrapper } from "../../../../lb_data-api/src";
import { mlConstants } from "../../../../lb_utils/src";

const { apiUrls } = mlConstants;
const apiObj = {
  endPointsData: [
    {
      ep_url: `${apiUrls["getCurriculumData"].url}`,
      ep_type: "GET",
      ep_name: "getCurriculumData",
    },

    {
      ep_url: `${apiUrls["selectedCurriculum"].url}`,
      ep_type: "POST",
      ep_name: "postCourseProgress",
    },
    {
      ep_url: `${apiUrls["selectedCurriculum"].url}`,
      ep_type: "PATCH",
      ep_name: "patchCourseProgress",
    },
    {
      ep_url: `${apiUrls["getCourseProgress"].url}`,
      ep_type: "GET",
      ep_name: "getCourseProgress",
    },
  ],
};

export const {
  useGetCurriculumDataQuery,
  usePatchCourseProgressMutation,
  usePostCourseProgressMutation,
  useGetCourseProgressQuery,
} = injectEndPointsWrapper(apiObj);

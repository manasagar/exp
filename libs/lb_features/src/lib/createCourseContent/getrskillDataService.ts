import { injectEndPointsWrapper } from '../../../../lb_data-api/src';
import { mlConstants } from '../../../../lb_utils/src';

const { apiUrls } = mlConstants;
const apiObj = {
  endPointsData: [
    {
      ep_url: `${apiUrls['getSkillData'].url}`,
      ep_type: 'POST',
      ep_name: 'postGetSkillData',
    },
  ],
};

export const { usePostGetSkillDataMutation} = injectEndPointsWrapper(apiObj);

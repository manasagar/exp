import { Platform } from 'react-native'; 
import { Branch } from 'react-native-branch'; 
import BranchWeb from 'branch'; 

export const initializeBranch = async () => {
  try {
    const branchKey = process.env.BRANCH_KEY;
    
    if (Platform.OS === 'ios' || Platform.OS === 'android') {
      await Branch.init(branchKey);
    } else {
      await BranchWeb.init(branchKey, { createLink: true });
    }
    console.log('Branch initialized successfully');
  } catch (error) {
    console.error('Error initializing Branch:', error);
  }
};

export const createDeepLinkWithReward = async (referrerId, rewardAmount) => {
  try {
    const linkProperties = {
      tags: ['referral'],
      data: {
        referrerId, 
        rewardAmount, 
      },
    };

    if (Platform.OS === 'ios' || Platform.OS === 'android') {
      const { url } = await Branch.createBranchUniversalObject('referral', {}).generateShortUrl(linkProperties);
      return url;
    } else {
      const { url } = await BranchWeb.createLink(linkProperties);
      return url;
    }
  } catch (error) {
    console.error('Error creating deep link:', error);
    return null;
  }
};

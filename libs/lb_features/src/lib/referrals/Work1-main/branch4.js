import { createDeepLinkWithReward } from './path-to-shared-library/branch';

async function handleReferralAction() {
  const referrerId = '12345'; 
  const rewardAmount = 10; 

  const deepLink = await createDeepLinkWithReward(referrerId, rewardAmount);
  if (deepLink) {
    console.log('Deep Link:', deepLink);
  } else {
    console.error('Error creating deep link');
  }
}

handleReferralAction();

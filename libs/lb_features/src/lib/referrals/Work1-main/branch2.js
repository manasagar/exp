import React, { useEffect, useState } from 'react';
import { initializeBranch, createDeepLinkWithReward } from './path-to-shared-library/branch';

function MyReactApp() {
  const [referrerReward, setReferrerReward] = useState(null);

  useEffect(() => {
    initializeBranch();

    const handleDeepLink = (data) => {
      if (data && data.data) {
        const { referrerId, rewardAmount } = data.data;
        if (referrerId && rewardAmount) {
          setReferrerReward(rewardAmount);
        }
      }
    };

    const simulateDeepLinkData = {
      data: {
        referrerId: '12345',
        rewardAmount: 10,
      },
    };
    handleDeepLink(simulateDeepLinkData);

  }, []);

  return (
    <div>
      <h1>My React App</h1>
      {referrerReward && <p>Referrer Reward: {referrerReward}</p>}
    </div>
  );
}

export default MyReactApp;

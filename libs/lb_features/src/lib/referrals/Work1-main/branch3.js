import React, { useEffect, useState } from 'react';
import { initializeBranch, createDeepLinkWithReward } from './path-to-shared-library/branch';
import { View, Text } from 'react-native';
import branch from 'react-native-branch'; 

function MyReactNativeApp() {
  const [referrerReward, setReferrerReward] = useState(null);

  useEffect(() => {
    initializeBranch();

    const handleDeepLink = ({ error, params }) => {
      if (error) {
        console.error('Error from Branch: ' + error);
        return;
      }
      if (params['+clicked_branch_link']) {
        const { referrerId, rewardAmount } = params;
        if (referrerId && rewardAmount) {
          setReferrerReward(rewardAmount);
        }
      }
    };

    branch.subscribe(handleDeepLink);

    return () => {
      branch.unsubscribe(handleDeepLink);
    };
  }, []);

  return (
    <View>
      <Text>My React Native App</Text>
      {referrerReward && <Text>Referrer Reward: {referrerReward}</Text>}
    </View>
  );
}

export default MyReactNativeApp;

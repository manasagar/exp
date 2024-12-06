import { LinkProperties } from 'react-native-branch';
import { Branch } from 'react-native-branch';

const generateReferralLink = (userId: string) => {
  import { LinkProperties } from 'eact-native-branch';

const generateReferralLink = (userId: string) => {
  const linkProperties = new LinkProperties()
   .setChannel('referral')
   .setFeature('referral')
   .setCampaign('referral')
   .setStage('new user')
   .addTag('referral')
   .setAlias(`referral-${userId}`);

  const branchUniversalObject = new BranchUniversalObject()
   .setCanonicalIdentifier(`user/${userId}`)
   .setTitle(`Referral Link for ${userId}`)
   .setContentDescription(`Share this link to refer friends!`)
   .setContentImageUrl('https://example.com/referral-image.png')
   .setMetadata({
      customMetadata: {
        userId,
      },
    });

  return branchUniversalObject.generateShortUrl(linkProperties);
};
};

const trackInstallation = () => {
  import { Branch } from 'eact-native-branch';

const App = () => {
  useEffect(() => {
    Branch.init('YOUR_BRANCH_KEY', () => {
    });

    Branch.subscribe(({ type, data }) => {
      if (type === 'INSTALL') {
        console.log('Installation tracked:', data);
      }
    });
  }, []);

  return <AppContainer />;
};
};

const trackReward = (referredUserId: string) => {
  const trackReward = (referredUserId: string) => {
  console.log(`Reward tracked for user ${referredUserId}`);
};
};

export { generateReferralLink, trackInstallation, trackReward };

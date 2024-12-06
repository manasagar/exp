import { LinkProperties } from 'react-native-branch';

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

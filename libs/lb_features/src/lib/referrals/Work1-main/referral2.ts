import { generateReferralLink, trackInstallation, trackReward } from './referral';

const App = () => {
  useEffect(() => {
    branch.init('YOUR_BRANCH_KEY', () => {
      console.log('Branch SDK initialized');
    });

    branch.subscribe(({ type, data }) => {
      if (type === 'INSTALL') {
        console.log('Installation tracked:', data);
        trackInstallation();
      }
    });
  },

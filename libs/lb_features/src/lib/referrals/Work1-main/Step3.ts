import { Branch } from 'react-native-branch';

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

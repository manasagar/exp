import { useEffect } from 'react';
import { AppState, Platform } from 'react-native';

const useAppStateAndBrowserTab = (onAppStateChange, onVisibilityChange, onBeforeUnload) => {
  useEffect(() => {
    let appStateSubscription;

    if (Platform.OS === 'web') {
      const handleVisibilityChange = () => {
        if (document.hidden) {
          onVisibilityChange('hidden');
        } else {
          onVisibilityChange('visible');
        }
      };

      const handleBeforeUnload = (event) => {
        onBeforeUnload();
        event.preventDefault();
        event.returnValue = ''; // Chrome requires returnValue to be set
      };

      document.addEventListener('visibilitychange', handleVisibilityChange);
      window.addEventListener('beforeunload', handleBeforeUnload);

      return () => {
        document.removeEventListener('visibilitychange', handleVisibilityChange);
        window.removeEventListener('beforeunload', handleBeforeUnload);
      };
    } else {
      const handleAppStateChange = (nextAppState) => {
        onAppStateChange(nextAppState);
      };

      appStateSubscription = AppState.addEventListener('change', handleAppStateChange);

      return () => {
        if (appStateSubscription) {
          appStateSubscription.remove();
        }
      };
    }
  }, [onAppStateChange, onVisibilityChange, onBeforeUnload]);
};

export default useAppStateAndBrowserTab;

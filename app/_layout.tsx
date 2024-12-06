import React, { Suspense } from 'react';
import { Stack, usePathname } from 'expo-router';
import { Provider } from 'react-redux';
import { initialize } from 'react-native-clarity';
import { app_store } from 'libs/lb_data-api/src/index';
import Head from 'expo-router/head';
import LoadingScreen from './loadingScreen';
import { View, StyleSheet } from 'react-native';
import OptionsBarContainer from '../libs/lb_features/src/lib/optionsBar/optionsBarContainer';
import PrimaryMenuContainer from '../libs/lb_common/primaryMenu/primaryMenuContainer';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = React.lazy(() => import('./index'));
const GwScreen = React.lazy(() => import('./ml/gw'));
const CurriculumCourseScreen = React.lazy(() => import('./[curriculumCourse]/'));
const CurriculumCourseContentScreen = React.lazy(() => import('./[curriculumCourse]/content/'));
const StartNewMlSession = React.lazy(() => import('./ml/startNextSession'));
const DemoScreen = React.lazy(() => import('./demo'));
const LoginScreen = React.lazy(() => import('./common/login'));
const ServicesScreen = React.lazy(() => import('./common/services'));
const SignupScreen = React.lazy(() => import('./common/signup'));
const ProfileScreen = React.lazy(() => import('./common/profile'));
const AvailableSessionsScreen = React.lazy(() => import('./buddy/availableSessions'));
const CurrentSessionScreen = React.lazy(() => import('./buddy/currentSession'));
const FindBuddyScreen = React.lazy(() => import('./buddy/findBuddy'));
const CreateSessionScreen = React.lazy(() => import('./buddy/createSession'));
const PricingScreen = React.lazy(() => import('./common/pricing'));
const AboutUsScreen = React.lazy(() => import('./common/aboutUs'));
const ContactUsScreen = React.lazy(() => import('./common/contactUs'));
const PrivacyPolicyScreen = React.lazy(() => import('./common/privacyPolicy'));
const TncScreen = React.lazy(() => import('./common/tnc'));
const RefundPolicyScreen = React.lazy(() => import('./common/refundPolicy'));

const commonScreenOptions = {
  headerShown: false,
  contentStyle: { backgroundColor: '#131927' }
};

const routes = {
  index: HomeScreen,
  'ml/gw': GwScreen,
  '[curriculumCourse]/': CurriculumCourseScreen,
  '[curriculumCourse]/content/': CurriculumCourseContentScreen,
  'ml/startNextSession': StartNewMlSession,
  'demo': DemoScreen,
  'common/services': ServicesScreen,
  'common/login': LoginScreen,
  'common/signup': SignupScreen,
  'common/profile': ProfileScreen,
  'buddy/availableSessions': AvailableSessionsScreen,
  'buddy/currentSession': CurrentSessionScreen,
  'buddy/findBuddy': FindBuddyScreen,
  'buddy/createSession': CreateSessionScreen,
  'common/pricing': PricingScreen,
  'common/aboutUs': AboutUsScreen,
  'common/contactUs': ContactUsScreen,
  'common/privacyPolicy': PrivacyPolicyScreen,
  'common/tnc': TncScreen,
  'common/refundPolicy': RefundPolicyScreen,
};

const GoogleAnalytics = () => (
  <Head>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-ES7RCZMLJ5" />
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-ES7RCZMLJ5');
        `
      }}
    />
  </Head>
);

export default function RootLayout() {
  const pathname = usePathname();
  const paddingTop = pathname === '/ml/gw' ? 0 : 50;

  initialize('lsttawpxmz');

  return (
    <Provider store={app_store}>
      <GoogleAnalytics />
      <SafeAreaView style={styles.safeArea}>
        <View style={[styles.container, { paddingTop }]}>
          <Suspense fallback={<LoadingScreen />}>
            <Stack screenOptions={{ headerShown: false }}>
              {Object.entries(routes).map(([name, Component]) => (
                <Stack.Screen
                  key={name}
                  name={name}
                  element={<Component />}
                  options={commonScreenOptions}
                />
              ))}
            </Stack>
          </Suspense>
          <View style={styles.primaryMenu}>
            <PrimaryMenuContainer />
          </View>
          <View style={styles.optionsBar}>
            <OptionsBarContainer />
          </View>
        </View>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#131927',
  },
  primaryMenu: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 10,
  },
  optionsBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    padding: 10,
  },
});

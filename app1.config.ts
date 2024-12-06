
const IS_DEV = process.env.APP_VARIANT === 'development';
const IS_PREVIEW = process.env.APP_VARIANT === 'preview';

const getAppConfig = () => {
  const appType = process.env.APP_TYPE;
  
  if (appType === 'CAMPUS') {
    return require('./app.json');
  } else if(appType === 'LINGO'){
    return require('./app_lingo.json');
  }
};

export default ({ config }) => {
  const appConfig = getAppConfig();
  return {
    ...config,
    ...appConfig,
    name: process.env.APP_NAME,
    version: process.env.APP_VERSION,
    ios: {
      bundleIdentifier: process.env.APP_IDENTIFIER
    },
    android: {
      package: process.env.APP_IDENTIFIER
    }
  };
};

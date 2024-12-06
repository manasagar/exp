import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { assetDetails, mlConstants } from './constants';

  import { commonConstants } from '../../../lb_common/commonConstants';
// import { jsonrepair } from 'jsonrepair';



export const isMobile = () => {
  return !(Platform.OS === 'web');
};
export const isRunningInApp = () => {
  return !(Platform.OS === 'web');
};



export const getFullImgPath = ({ imgPath }) => {
  const { defaultImgExt, assetsBasePath } = assetDetails;
  // Check if imgPath contains a file extension
  if (!imgPath?.includes('.')) {
    // Append defaultImgExt if imgPath doesn't contain a file extension
    imgPath += defaultImgExt;
  }

  // Construct the full image URL
  return `${assetsBasePath}${imgPath}`;
};

export const getQParam = (param) => {
  let value;

  // Check if the code is running in a web environment
  if (typeof window !== 'undefined') {
    const url = new URL(window.location.href);
    value = url.searchParams.get(param);
  } else if (typeof URLSearchParams !== 'undefined') {
    // For React Native or other environments
    const searchParams = new URLSearchParams(global.__URLSearchParams__);
    value = searchParams.get(param);
  }

  return value;
};

export const getRouteParam = ({ route, paramName }) => {
  return route.params[paramName];
};

// Function to retrieve marked content from text
export const retrieveMarkedContent = (text) => {
  const regex = /zqw(.+?)zqw/s; // Using 's' flag for dot to match newline
  const match = regex.exec(text);
  if (match) {
    const content = match[1].trim();
    console.info(`**Response**: From retrieveMarkedContent, ${content}`);
    return parseContent(content);
  } else {
    console.error('No content found between markers.', { text });
    return null;
  }
};

// Function to parse content
const parseContent = (content) => {
  // Check if content starts with '[' or '{' indicating JSON array or object respectively
  if (content.startsWith('[') || content.startsWith('{')) {
    let json;
    try {
      // json = parseJSON(jsonrepair(content));
      json = parseJSON(content);
    } catch (ex) {
      json = null;
      console.info({ content, ex });
    }
    return json;
  } else {
    // Return plain text content
    return content;
  }
};

// Function to parse JSON content
const parseJSON = (content) => {
  try {
    return JSON.parse(content);
  } catch (error) {
    console.error('Error parsing JSON content:', { error, content });
    return null;
  }
};

const generateTempUserId = async() => {
  const { userIdKey } = commonConstants;
  let tempUserId = await AsyncStorage.getItem(userIdKey);
  if (!tempUserId) {
    tempUserId = `xz-${Math.random().toString(36).substring(2, 15)}`;
    await AsyncStorage.setItem(userIdKey, tempUserId);
  }
  return tempUserId; // Return tempUserId instead of userId
}

export const isUserIdTemp = async() => {
  return (await getUserId()).startsWith("xz-");
}

export const getUserId = async () => {
  let userId = await AsyncStorage.getItem('userId') || (await generateTempUserId());
  return userId;
};

export const getApplicationName =  () => { 
  return  "campus"; //TODO
};

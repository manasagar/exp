import AsyncStorage from '@react-native-async-storage/async-storage';

export const getSessionCount = async () => {
  try {
    const sessionCountString = await AsyncStorage.getItem('sessionCount');
    return parseInt(sessionCountString || '1'); // Default to 1 if not found
  } catch (error) {
    console.error('Error getting session count:', error);
    return 1; // Return 1 in case of errors
  }
};

export const userExists = async () => {
  const lastOpenedString = await AsyncStorage.getItem('lastOpened');
  if (lastOpenedString) {
    return true;
  } else {
    return false;
  }
}

export const createNewUser = async () => {
  console.log('Creating new user');
  let currentDate = new Date();
  await AsyncStorage.setItem('lastOpened', currentDate.setHours(7, 0, 0, 0).toString());
  await AsyncStorage.setItem('sessionCount', '1');
}

// Function to get last opened date in milliseconds at 7 am
export const getLastOpenedAt7am = async () => {
  const currentDate = new Date();
  currentDate.setHours(7, 0, 0, 0);
  const lastOpenedString = await AsyncStorage.getItem('lastOpened');

  if (lastOpenedString) {
    return parseInt(lastOpenedString, 10);
  } else {
    return currentDate.getTime(); // User opens for the first time return current date at 7 am
  }
};

// Function to check if opened today
export const isOpenedToday = (lastOpenedAt7am: number) => {
  const currentDate = new Date();
  const tempDate = new Date();//create a temp date object to compare with current date
   if (currentDate.setHours(7, 0, 0, 0) - lastOpenedAt7am > 24 * 60 * 60 * 1000) { // if user missed a day
    console.log('user missed a day', lastOpenedAt7am);
    createNewUser();//create new session if user missed a day
    return true;
  }
  else if (tempDate.setHours(7, 0, 0, 0) > currentDate.getTime()) { //if user opened before 7 am
    console.log('opening before 7am', lastOpenedAt7am);
    return true; //return true
  }
  else if (currentDate.setHours(7, 0, 0, 0) === lastOpenedAt7am) {// user opening on same day
    console.log('opening on same day', lastOpenedAt7am);
    return true
  }
  else if (currentDate.setHours(7, 0, 0, 0) - lastOpenedAt7am === 24 * 60 * 60 * 1000) {
    console.log('opening on next consecutive day', lastOpenedAt7am);
    return false;
  }
};

// Function to update session count based on logic
export const updateSessionCount = async () => {
  try {
    const isNewUser = !(await userExists()); // Negate the result of userExists
    if (isNewUser) {
      createNewUser();
      return 1;
    }
    const lastOpenedAt7am = await getLastOpenedAt7am();
    const currentCountString = await AsyncStorage.getItem('sessionCount');
    const currentCount = parseInt(currentCountString || '1');
  //  /*TODO:
     if (isOpenedToday(lastOpenedAt7am)) return currentCount;
    else {
      const newCount = currentCount + 1;
      await AsyncStorage.setItem('sessionCount', newCount.toString());
      await AsyncStorage.setItem('lastOpened', new Date().setHours(7, 0, 0, 0).toString());
      return newCount;
    } 
  } catch (error) { console.error('Error updating session count:', error); }
};
export const clearAll = async () => {
  try {
    await AsyncStorage.clear()
  } catch (e) {
    // clear error
  }
  console.log('Done.')
}
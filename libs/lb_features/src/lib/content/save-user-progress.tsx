import AsyncStorage from '@react-native-async-storage/async-storage';

export const getLastIndex = async () => {
    try {
        const lastIndex = await AsyncStorage.getItem('lastIndex');
        return parseInt(lastIndex || '0'); // Default to 0 if not found
    } catch (error) {
        console.error('Error getting session count:', error);
        return 0; // Return 1 in case of errors
    }
};

export const setLastIndex = async (index: number) => {
    console.log('Setting lastIndex to', index);
    try {
        await AsyncStorage.setItem('lastIndex', index.toString());
    } catch (error) {
        console.error('Error setting session count:', error);
    }
}
export const setCurrIndex = async (currIndex: { toString: () => string; }) => {
    console.log('Setting currindesx to', JSON.stringify(currIndex));
    try {
        await AsyncStorage.setItem('currIndex',currIndex.toString());
    } catch (error) {
        console.error('Error setting currindex:', error);
    }
}

export const cardsExist = async () => {
    const cards = await AsyncStorage.getItem('cards');
    if (cards) return cards;
    else return false;
}

export const deleteCards = async () => {
    console.log('Deleting cards');
    
    try {
        await AsyncStorage.removeItem('cards');
        await AsyncStorage.setItem('lastIndex', '0');
    } catch (error) {
        console.error('Error deleting cards:', error);
    }
}
// export const updateLastIndex = async (index: number) => {
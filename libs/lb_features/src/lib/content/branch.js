/* eslint-disable no-redeclare */

// Import necessary modules
import { Platform } from 'react-native';

let Branch;

if (Platform.OS === 'web') {
  // For React (browser)
  Branch = require('branch-sdk').Branch;
} else {
  // For React Native
  Branch = require('react-native-branch');
}

// Initialize Branch with your Branch key
/**
 * Initializes Branch with the given key.
 * @param {string} branchKey - The Branch key.
 * @returns {Promise<void>}
 */
export const initializeBranch = async (branchKey) => {
 try {
    if (Platform.OS === 'ios' || Platform.OS === 'android') {
      // React Native initialization
      await Branch.init(branchKey);
    } else {
      // React (browser) initialization
      await Branch.init(branchKey, { createLink: true });
    }
    console.log('Branch initialized successfully');
 } catch (error) {
    console.error('Error initializing Branch:', error);
 }
};

// Function to create deep links
/**
 * Creates a deep link.
 * @param {any} data - Data to pass in the deep link.
 * @param {string} channel - Specify the channel for tracking.
 * @returns {Promise<string | null>}
 */
export const createDeepLink = async (data, channel) => {
 try {
    const linkProperties = {
      tags: ['referral'], // Add relevant tags
      channel: channel, // Specify the channel for tracking
      data: data, // Data to pass in the deep link
    };

    if (Platform.OS === 'ios' || Platform.OS === 'android') {
      // React Native deep link generation
      const link = await Branch.createBranchUniversalLink(linkProperties);
      return link;
    } else {
      // React (browser) deep link generation
      const link = await Branch.createLink(linkProperties);
      return link;
    }
 } catch (error) {
    console.error('Error creating deep link:', error);
    return null;
 }
};

// Function to get referrer data

/**
 * Gets referrer data.
 * @returns {Promise<any | null>}
 */
export const getReferrerData = async () => {
 try {
    if (Platform.OS === 'ios' || Platform.OS === 'android') {
      // React Native referrer data
      const data = await Branch.getReferralService().getLatestReferringBranchAsync();
      return data.data; // Access data from the referral
    } else {
      // React (browser) referrer data (not directly supported)
      console.warn('Referrer data retrieval not directly supported in browser');
      return null;
    }
 } catch (error) {
    console.error('Error getting referrer data:', error);
    return null;
 }
};

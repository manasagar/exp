import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import tw from 'twrnc';

export const PrivacyPolicyContainer = () => {
  return (
    <ScrollView style={tw`bg-white dark:bg-[#151718] min-h-full p-4`}>
      <View style={tw`mb-6`}>
        <Text style={tw`text-2xl font-bold text-black dark:text-white mb-2`}>Privacy Policy for dhrona</Text>
        <Text style={tw`text-lg font-semibold text-black dark:text-white mb-4`}>Last updated: July 27, 2024</Text>

        <Text style={tw`text-xl font-bold text-black dark:text-white my-4`}>Data Collection</Text>
        <Text style={tw`text-base text-gray-800 dark:text-gray-200 mb-4`}>
          We collect the following types of information:
          • Personal Information (name, email address, phone number)
          • Usage Data (app interactions, preferences)
          • Device Information (device type, operating system)
          • Location Data (with your explicit consent)
        </Text>

        <Text style={tw`text-xl font-bold text-black dark:text-white my-4`}>Data Protection & Storage</Text>
        <Text style={tw`text-base text-gray-800 dark:text-gray-200 mb-4`}>
          Your data is protected using industry-standard encryption protocols. We store data on secure servers with regular backups. We retain your data only for as long as necessary to provide our services or as required by law.
        </Text>

        <Text style={tw`text-lg font-semibold text-black dark:text-white mb-2`}>Third-Party Sharing</Text>
        <Text style={tw`text-base text-gray-800 dark:text-gray-200 mb-4`}>
          We may share your data with:
          • Analytics partners to improve our services
          • Legal authorities when required by law
          We never sell your personal data to third parties.
        </Text>

        <Text style={tw`text-xl font-bold text-black dark:text-white my-4`}>Cookies and Tracking</Text>
        <Text style={tw`text-base text-gray-800 dark:text-gray-200 mb-4`}>
          We use cookies and similar tracking technologies to:
          • Remember your preferences
          • Analyze usage patterns
          • Enhance security
          • Improve user experience
          You can control cookie settings through your device preferences.
        </Text>

        <Text style={tw`text-xl font-bold text-black dark:text-white my-4`}>Contact Us</Text>
        <Text style={tw`text-base text-gray-800 dark:text-gray-200 mb-2`}>
          For privacy-related inquiries, contact us at:
        </Text>
        <Text style={tw`text-base text-gray-800 dark:text-gray-200`}>
          Email: staff@stakesmen.com
        </Text>
      </View>
    </ScrollView>
  );
};

export default PrivacyPolicyContainer;
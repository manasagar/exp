import React from 'react';
import { ScrollView, Text, TouchableOpacity, Linking, View } from 'react-native';
import tw from 'twrnc';

export const ContactUsContainer = () => {
  const handleWhatsApp = () => {
    Linking.openURL('whatsapp://send?phone=919966819486');
  };

  const handleEmail = () => {
    Linking.openURL('mailto:stakesmen@gmail.com');
  };

  const handleSocialLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView style={tw`bg-white dark:bg-[#151718] min-h-full p-4`}>
      <View style={tw`space-y-6`}>
        <View>
          <Text style={tw`text-lg font-bold dark:text-white`}>Address</Text>
          <Text style={tw`text-gray-600 dark:text-gray-300 mt-2`}>
            G-808, BRC Infra Siva Hills{'\n'}
            Puppalaguda{'\n'}
            Hyderabad - 500089
          </Text>
        </View>

        <View>
          <Text style={tw`text-lg font-bold dark:text-white`}>Contact</Text>
          <TouchableOpacity onPress={() => Linking.openURL('tel:+919966819486')}>
            <Text style={tw`text-blue-500 mt-2`}>+91 9966819486</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={handleWhatsApp}>
            <Text style={tw`text-green-500 mt-2`}>WhatsApp Us</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleEmail}>
            <Text style={tw`text-blue-500 mt-2`}>stakesmen@gmail.com</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={tw`text-lg font-bold dark:text-white`}>Social Media</Text>
          <TouchableOpacity onPress={() => handleSocialLink('https://facebook.com/stakesmen')}>
            <Text style={tw`text-blue-500 mt-2`}>Facebook</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => handleSocialLink('https://linkedin.com/company/stakesmen')}>
            <Text style={tw`text-blue-500 mt-2`}>LinkedIn</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ContactUsContainer;

import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import tw from 'twrnc';
import { commonConstants } from '../commonConstants';

const RefundPolicyContainer = () => {
  const { appName, contactEmail } = commonConstants.compInfo;

  return (
    <ScrollView style={tw`flex-1 bg-white p-4`}>
      <View style={tw`mb-6`}>
        <Text style={tw`text-2xl font-bold text-gray-800 mb-4`}>Cancellation & Refund Policy</Text>
        
        <Text style={tw`text-gray-600 mb-6`}>
          This cancellation policy outlines about how you can cancel or seek a refund for a product / service that you have purchased through the Platform.
        </Text>

        <Text style={tw`text-gray-600 mb-6`}>
          Under this policy:
        </Text>

        <Text style={tw`text-gray-600 mb-6`}>
          Cancellations will only be considered if the request is made within 7 days of placing the order. However, cancellation request may not be entertained if the orders have been communicated to such sellers / merchant(s) listed on the Platform and they have initiated the process of shipping them, or the product is out for delivery. In such an event, you may choose to reject the product at the doorstep.
        </Text>

        <Text style={tw`text-gray-600 mb-6`}>
          {appName} does not accept cancellation requests for perishable items like flowers, eatables, etc. However, the refund / replacement can be made if the user establishes that quality of the product delivered is not good.
        </Text>

        <Text style={tw`text-gray-600 mb-6`}>
          In case of receipt of damaged or defective items, please report to our customer service team. The request would be entertained once the seller/ merchant listed on the Platform, has checked and determined the same at its own end. This should be reported within 48 hours of receipt of products.
        </Text>

        <Text style={tw`text-gray-600 mb-6`}>
          In case you feel that the product received is not as shown on the site or as per your expectations, you must bring it to the notice of our customer service within 48 hours of receiving the product. The customer service team after looking into your complaint will take an appropriate decision.
        </Text>

        <Text style={tw`text-gray-600 mb-6`}>
          In case of complaints regarding the products that come with a warranty from the manufacturers, please refer the issue to them.
        </Text>

        <Text style={tw`text-gray-600 mb-6`}>
          In case of any refunds approved by {appName}, it will take 5-7 business days for the refund to be processed to you.
        </Text>

        <View style={tw`bg-gray-50 p-4 rounded-lg`}>
          <Text style={tw`text-sm text-gray-500`}>
            For any queries regarding cancellations or refunds, please contact us at {contactEmail}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default RefundPolicyContainer;

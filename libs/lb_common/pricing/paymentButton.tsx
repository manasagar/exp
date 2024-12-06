import React, { useState } from 'react';
import { Text, Alert, TouchableOpacity, Platform } from 'react-native';
import { UI_CONFIG, PHONEPE_CONFIG, CALLBACK_URLS} from '../paymentGateways/phonepe/phonePeContainer';
import { WebView } from 'react-native-webview';

interface PlanDetails {
  id: string;
  name: string;
  discountedPrice: number;
  originalPrice: number;
  billingCycle: string;
  recommended: boolean;
  features: {
    available: string[];
    unavailable: string[];
  };
}

interface PaymentButtonProps {
  planDetails: PlanDetails;
}

const PaymentButton: React.FC<PaymentButtonProps> = ({ planDetails }) => {
  const [paymentUrl, setPaymentUrl] = useState<string | null>(null);
  const [showWebView, setShowWebView] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handlePaymentInitiation = async () => {
    if (Platform.OS === 'web') {
      // For web browsers, redirect to payment URL directly
      window.location.href = paymentUrl;
    } else {
      // For mobile, keep using WebView
      setShowWebView(true);
    }
  };

  const initiatePayment = async () => {
    setIsLoading(true);
    try {
      // First validate the plan details
      if (planDetails?.discountedPrice === undefined || planDetails?.discountedPrice === null) {
        Alert.alert('Invalid Plan', 'Please select a valid payment plan');
        return;
      }
      console.log(PHONEPE_CONFIG.BASE_URL+ PHONEPE_CONFIG.API_ENDPOINTS.INITIATE_PAYMENT , "testing the url ");
      console.log(PHONEPE_CONFIG.MERCHANT_ID, "testing the merchant id ");
      
  // Make a request to your API to initiate the payment
      const response = await fetch(`${PHONEPE_CONFIG.BASE_URL}${PHONEPE_CONFIG.API_ENDPOINTS.INITIATE_PAYMENT}`, {
        method: 'POST',
        // mode: 'no-cors', // Removed to allow proper CORS handling
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
          merchantId: PHONEPE_CONFIG.MERCHANT_ID,
          transactionId: `TXN_${PHONEPE_CONFIG.MERCHANT_ID + Date.now()}`,
          amount: planDetails.discountedPrice,
          planDetails: {
            planId: planDetails.id,
            name: planDetails.name,
            billingCycle: planDetails.billingCycle
          },
          callbackUrls: CALLBACK_URLS
        })
      });
      console.log('Initiate Payment URL:', `${PHONEPE_CONFIG.BASE_URL}${PHONEPE_CONFIG.API_ENDPOINTS.INITIATE_PAYMENT}`);
console.log('Request Body:', JSON.stringify({
  merchantId: PHONEPE_CONFIG.MERCHANT_ID,
  transactionId: `TXN_${PHONEPE_CONFIG.MERCHANT_ID + Date.now()}`,
  amount: planDetails.discountedPrice,
  planDetails: {
    planId: planDetails.id,
    name: planDetails.name,
    billingCycle: planDetails.billingCycle,
  },
  callbackUrls: CALLBACK_URLS,
}));
  
      const data = await response.json();
console.log('Payment API Response:', data);
if (!response.ok) {
    const errorMessage = await response.text();
    console.error('Error initiating payment:', errorMessage);
    Alert.alert('Payment Error', 'Unable to initiate payment. Please try again.');
    return;
}

      
      if (data.paymentUrl) {
        setPaymentUrl(data.paymentUrl);
        handlePaymentInitiation();
      } else {
        Alert.alert('Payment Error', 'Unable to initiate payment. Please try again.');
      }
    } catch (error) {
      Alert.alert('Error', 'Payment service is temporarily unavailable');
    } finally{
      setIsLoading(false);
    }
  };
  

  const handlePaymentComplete = (status: string) => {
    setShowWebView(false);
    setPaymentUrl(null);
  };

  return (
    <>
      <TouchableOpacity 
        style={{
          backgroundColor: UI_CONFIG.primaryColor,
          padding: 12,
          borderRadius: 8,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: isLoading ? 0.7 : 1,
        }}
        onPress={initiatePayment}
        disabled={isLoading}
        activeOpacity={0.7}
      >
        <Text style={{ color: UI_CONFIG.secondaryColor, fontSize: 16 }}>
          {isLoading ? 'Processing...':`${UI_CONFIG.buttonText} ₹${planDetails.discountedPrice}`}
        </Text>
      </TouchableOpacity>
      {showWebView && paymentUrl && Platform.OS !== 'web' &&(
        <WebView
          source={{ uri: paymentUrl }}
          style={{ flex: 1 }}
          onNavigationStateChange={(navState) => {
            // Handle navigation state changes
            if (navState.url.includes(CALLBACK_URLS.success)) {
              handlePaymentComplete('SUCCESS');
            } else if (navState.url.includes(CALLBACK_URLS.failure)) {
              handlePaymentComplete('FAILURE');
            }
          }}
        />
      )}
    </>
  );
};

export default PaymentButton;
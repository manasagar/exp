import React from 'react';
import { WebView, WebViewNavigation } from 'react-native-webview';
import { View, ActivityIndicator } from 'react-native';
import tw from 'twrnc';

interface PaymentWebViewProps {
  paymentUrl: string;
  onPaymentComplete: (status: string) => void;
}

const PaymentWebView: React.FC<PaymentWebViewProps> = ({ paymentUrl, onPaymentComplete }) => {
  const handleNavigationStateChange = (navState : WebViewNavigation) => {
    // Check for success/failure URLs
    if (navState.url.includes('/payment/success')) {
      onPaymentComplete('SUCCESS');
    } else if (navState.url.includes('/payment/failure')) {
      onPaymentComplete('FAILURE');
    }
  };

  return (
    <View style={tw`flex-1`}>
      <WebView
  source={{ uri: paymentUrl }}
  onNavigationStateChange={handleNavigationStateChange}
  onError={(syntheticEvent) => {
    const { nativeEvent } = syntheticEvent;
    console.warn('WebView error: ', nativeEvent);
    onPaymentComplete('ERROR');
  }}
  onHttpError={(syntheticEvent) => {
    const { nativeEvent } = syntheticEvent;
    console.warn('WebView HTTP error: ', nativeEvent);
    onPaymentComplete('ERROR');
  }}
  startInLoadingState={true}
  renderLoading={() => (
    <View style={tw`absolute inset-0 justify-center items-center`}>
      <ActivityIndicator size="large" color="#6739B7" />
    </View>
        )}
      />
    </View>
  );
};

export default PaymentWebView;

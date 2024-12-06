

// PhonePe API Configuration
export const PHONEPE_CONFIG = {
  BASE_URL: 'https://api-preprod.phonepe.com/apis/pg-sandbox',
  MERCHANT_ID: 'PGTESTPAYUAT', // From .env
  SALT_KEY: '099eb0cd-02cf-4e2a-8aca-3e6c6aff0399', // From .env
  SALT_INDEX: 1, // Ensure SALT_INDEX is a number
  ENV: 'UAT', // From .env
  API_ENDPOINTS: {
    INITIATE_PAYMENT: '/pg/v1/pay', // Endpoint paths remain static
    VERIFY_PAYMENT: '/pg/v1/verify-payment',
    PAYMENT_STATUS: '/pg/v1/payment-status',
  },
};

// Callback URLs
export const CALLBACK_URLS = {
  success: `http://localhost:4200/payment/phonepe/callback/success`, 
  failure: `http://localhost:4200/api/payments/phonepe/callback/failure`,
  cancel: `http://localhost:4200/api/payments/phonepe/callback/cancel`,
};

// Payment Status
export const PAYMENT_STATUS = {
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE',
  PENDING: 'PENDING',
};

// Transaction Types
export const TRANSACTION_TYPES = {
  DEBIT: 'DEBIT',
  CREDIT: 'CREDIT',
  UPI: 'UPI',
};

// Payment Options
export const PAYMENT_OPTIONS = {
  UPI: {
    mode: 'UPI',
    channels: ['UPI', 'UPIQR'],
  },
  CARD: {
    mode: 'CARD',
    channels: ['CREDIT', 'DEBIT'],
  },
  NETBANKING: {
    mode: 'NETBANKING',
    channels: ['NET_BANKING'],
  },
};

// Response Codes
export const RESPONSE_CODES = {
  SUCCESS: 'S00',
  PENDING: 'P00',
  FAILURE: 'F00',
};

// UI Configuration
export const UI_CONFIG = {
  primaryColor: '#6739B7', // Static UI settings
  secondaryColor: '#FFFFFF',
  buttonText: 'Pay with PhonePe',
};

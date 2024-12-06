const express = require('express');
const router = express.Router();
const crypto = require('crypto');

router.post('/initiate-payment', async (req, res) => {
  try {
    const {  userId, amount, productDetails, paymentType } = req.body;
    
    // Generate transaction ID
    const transactionId = `DHRONA_${userId}_${Date.now()}`;
    
    // Create payment payload for PhonePe
    const payload = {
      merchantId: PHONEPE_CONFIG.MERCHANT_ID,
      merchantTransactionId: transactionId,
      amount: amount * 100, // Convert to paise
      redirectUrl: CALLBACK_URLS.success,
      callbackUrl: CALLBACK_URLS.success,
      merchantUserId: userId,
      mobileNumber: productDetails.mobileNumber,
      deviceContext: {
        deviceOS: "ANDROID" // or "IOS" based on device
      },
      paymentInstrument: {
        type: paymentType || 'UPI_INTENT',
        targetApp: "com.phonepe.app" // Default PhonePe app
      },
      productInfo: {
        name: productDetails.name,
        description: productDetails.description,
        category: "EDUCATIONAL_SERVICES"
      }
    };

    const base64Payload = Buffer.from(JSON.stringify(payload)).toString('base64');

    // Generate checksum
    const payloadString = JSON.stringify(payload);
    const checksum = crypto
      .createHash('sha256')
      .update(`${base64Payload}/pg/v1/pay${PHONEPE_CONFIG.SALT_KEY}`)
      .digest('hex') + '###' + PHONEPE_CONFIG.SALT_INDEX;

    // Call PhonePe API
    const response = await fetch(`${PHONEPE_CONFIG.BASE_URL}/pg/v1/pay`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-VERIFY': checksum
      },
      body: JSON.stringify({
        request: base64Payload
      })
    });

    const data = await response.json();
    
    res.json({
      success: true,
      paymentUrl: data.data.instrumentResponse.redirectInfo.url,
      transactionId: transactionId
    });
    
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Payment initiation failed',
      details: error.message
    });
  }
});

module.exports = router;

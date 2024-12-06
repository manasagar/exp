import { Platform, ToastAndroid } from 'react-native';

export const sendNotification = (title: string, message: string) => {
    return new Promise<string>((resolve, reject) => {
        // Your notification logic here
        if (Platform.OS === 'web') {
            // Web notification logic
            if ('Notification' in window) {
                Notification.requestPermission().then(permission => {
                    if (permission === 'granted') {
                        new Notification(title, { body: message });
                        resolve('Notification sent.');

                    } else {
                        resolve('Notification permission denied.'); // Resolve with message
                    }
                });
            } else {
                reject(new Error('Notifications are not supported in this browser.'));
            }
        } else if (Platform.OS === 'ios') {

            // iOS notification logic
            const { UNUserNotificationCenter } = require('react-native');
            UNUserNotificationCenter.requestAuthorizationWithOptions(
                { alert: true, badge: true, sound: true },
                (granted: boolean, error: any) => {
                    if (granted) {
                        const request = {
                            title: title,
                            body: message,
                            sound: 'default',
                            badge: true,
                        };
                        
                        UNUserNotificationCenter.addNotificationRequest(request);
                        resolve('Notification sent.');
                    } else {
                        resolve('Notification permission denied.'); // Resolve with message
                    }
                }
            );
        } else if (Platform.OS === 'android') {
            // Android notification logic
            ToastAndroid.showWithGravity(
                message,
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
            );
            resolve('Notification sent.');
        } else {
            reject(new Error('Notifications are not supported on this platform.'));
        }
    });
};
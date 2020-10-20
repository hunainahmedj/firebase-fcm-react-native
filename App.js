import React, {Fragment, useEffect} from 'react';
import {View, Text, Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import messaging from '@react-native-firebase/messaging';

export default app = () => {
  useEffect(() => {
    requestUserPermission();
    // const unsubscribe = messaging().onMessage(async (remoteMessage) => {
    //   Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    // });

    // return unsubscribe;
  }, []);

  requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      getFcmToken();
      console.log('Authorization status: ', authStatus);
    }
  };

  getFcmToken = async () => {
    const fcmToken = await messaging().getToken();
    if (fcmToken) {
      console.log(fcmToken);
      console.log('Your Firebase Token is:', fcmToken);
    } else {
      console.log('Failed', 'No token received');
    }
  };

  return (
    <View>
      <Text>Hello World</Text>
    </View>
  );
};

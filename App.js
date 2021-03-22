import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignInScreen from './screens/SignInScreen.js';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen.js';
import ResetPasswordScreen from './screens/ResetPasswordScreen.js';
import SignUpScreen from './screens/SignUpScreen.js';
import GetCodeFromPhoneNumberScreen from './screens/GetCodeFromPhoneNumberScreen.js';
import CheckCodeFromPhoneNumberScreen from './screens/CheckCodeFromPhoneNumberScreen.js';
import AuthPhoneNumberScreen from './screens/AuthPhoneNumberScreen.js';
import IntroScreen from './screens/IntroScreen.js';
import TutorialScreen from './screens/TutorialScreen.js';
import WelcomeScreen from './screens/WelcomeScreen.js';
import SearchScreen from './screens/SearchScreen.js';
import HomeScreen from './screens/HomeScreen.js';
import SinglePodcastScreen from './screens/SinglePodcastScreen.js';
import SingleBookScreen from './screens/SingleBookScreen.js';
import MyLibraryScreen from './screens/MyLibraryScreen.js';
import ProfileScreen from './screens/ProfileScreen.js';


import { NavigationContainer } from '@react-navigation/native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>
		<NavigationContainer>
		  <Text style={styles.text}>Appjs</Text>
		</NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
	paddingTop: Constants.statusBarHeight
  },
  
  text: {
	color: 'black'
  },
  
});
import React, { Component } from 'react';
import { Alert, Button, Text, TouchableOpacity, TextInput, View, StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import firebase from 'firebase'

import Login from './src/Login'
import Main from './src/Main'
import NewUser from './src/NewUser'
import Password from './src/Password'

const App = createStackNavigator({
	Main: {screen: Main},
	Login:{screen:Login},
	NewUser: {screen: NewUser},
	Password: {screen: Password},
});

{/*Change to separate firebase.js file if issues occur*/}
const firebaseConfig = {
  apiKey: "AIzaSyBN0Va-Agm8vCEH7mBQsb6nhByWfKFx4EA",
  authDomain: "ios-swat.firebaseapp.com",
  databaseURL: "https://ios-swat.firebaseio.com",
  projectId: "ios-swat",
  storageBucket: "ios-swat.appspot.com",
  messagingSenderID: "1015403830821"
};
firebase.initializeApp(config);

export default firebase;
export default App;

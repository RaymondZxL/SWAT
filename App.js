import React, { Component } from 'react';
import { Alert, Button, Text, TouchableOpacity, TextInput, View, StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import firebase from './src/firebase'

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

export default App;


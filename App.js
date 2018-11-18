import React, { Component } from 'react';
import { Alert, Button, Text, TouchableOpacity, TextInput, View, StyleSheet, Image, KeyboardAvoidingView, Dimensions, Platform } from 'react-native';
import { createStackNavigator, StackNavigator, createBottomTabNavigator } from 'react-navigation';

import firebase from './src/firebase'

import Main from './src/Main'
import NewUser from './src/NewUser'
import Password from './src/Password'
import Password2 from './src/Password2'
import Home from './src/Home'

let screen = Dimensions.get('window');

const App = createStackNavigator({
	Main: {screen: Main},
	NewUser: {screen: NewUser},
	Password: {screen: Password},
	Password2: {screen: Password2},
	Home: {screen: Home},
});

export default App;

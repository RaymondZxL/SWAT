import React, { Component } from 'react';
import { Alert, Button, Text, TouchableOpacity, TextInput, View, StyleSheet, Image, KeyboardAvoidingView, Dimensions, Platform } from 'react-native';
import { createStackNavigator, StackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import firebase from './src/firebase'

import Main from './src/Main'
import NewUser from './src/NewUser'
import Password from './src/Password'
import Home from './src/Home'
import MyEvents from './src/MyEvents'
import CreateEvent from './src/CreateEvent'
import Profile from './src/Profile'

let screen = Dimensions.get('window');

const App = createStackNavigator({
	Main: {screen: Main},
	// Login: {screen:Login},
	NewUser: {screen: NewUser},
	Password: {screen: Password},
  	Home: {screen: Home},
});

export default App;

export const Tabs = createBottomTabNavigator({
	'Home': {
		screen: Home,
		navigationOptions: {
			tabBarLabel: 'Home',
			tabBarIcon: ({ tintColor }) => <Icon name="home" type="antdesign" size={28} color={tintColor} />
		},
	},
});

export const createRootNavigator = () => {
	return StackNavigator(
		{
			Tabs: {
				screen: Tabs,
				navigationOptions: {
					gesturesEnabled: false
				}
			}
		},
	);
};

import React, { Component } from 'react';
import { Alert, Button, Text, TouchableOpacity, TextInput, View, StyleSheet, Image, KeyboardAvoidingView, Dimensions, Platform } from 'react-native';
import { createStackNavigator, StackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import firebase from './src/firebase'

import Main from './src/Main'
import NewUser from './src/NewUser'
import Password from './src/Password'
import Password2 from './src/Password2'
import Home from './src/Home'
//import MyEvents from './src/MyEvents'
//import CreateEvent from './src/CreateEvent'
//import Profile from './src/Profile'

let screen = Dimensions.get('window');


const App = createStackNavigator({
	Main: {screen: Main},
	// Login: {screen:Login},
	NewUser: {screen: NewUser},
	Password: {screen: Password},
<<<<<<< HEAD
  Password2: {screen: Password2},
  Home: {screen: Home},
=======
	Home: {screen: Home},
>>>>>>> 8e07490592b9d20738b25990326209c04dc9cfc2
});

export default App;

export const Tabs = createBottomTabNavigator({
	'Home': {
		screen: Home,
		navigationOptions: {
			tabBarLabel: 'Home',
			tabBarIcon: ({ tintColor }) => <Icon name="home" type="entypo" size={28} color={tintColor} />
		},
	},
	/*
	'My Events': {
	screen: MyEvents,
	navigationOptions: {
	tabBarLabel: 'My Events',
	tabBarIcon: ({ tintColor }) => <Icon name="event" type="simplelineicons" size={28} color={tintColor} />
},
},
'Create Event': {
screen: CreateEvent,
navigationOptions: {
tabBarLabel: 'Create Event',
tabBarIcon: ({ tintColor }) => <Icon name="pluscircleo" type="antdesign" size={28} color={tintColor} />
},
},
'Profile': {
screen: Profile,
navigationOptions: {
tabBarLabel: 'Profile',
tabBarIcon: ({ tintColor }) => <Icon name="ios-person" type="ionicons" size={28} color={tintColor} />
},
},
*/
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

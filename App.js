import React, { Component } from 'react';
import { Alert, Button, Text, TouchableOpacity, TextInput, View, StyleSheet, Image, KeyboardAvoidingView, Dimensions, Platform } from 'react-native';
import { createStackNavigator, StackNavigator, TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Login from './src/Login'
import Main from './src/Main'
import NewUser from './src/NewUser'
import Password from './src/Password'

let screen = Dimensions.get('window');

const App = createStackNavigator({
	Main: {screen: Main},
	Login: {screen:Login},
	NewUser: {screen: NewUser},
	Password: {screen: Password},
});

export default App;

export const Tabs = TabNavigator({
	'Home': {
		screen: Home,
		navigationOptions: {
			tabBarLabel: 'Home',
			tabBarIcon: ({ tintColor }) => <Icon name="home" type="antdesign" size={28} color={tintColor} />
		},
	},
	'My Events': {
    screen: My_Events,
    navigationOptions: {
      tabBarLabel: 'My Events',
      tabBarIcon: ({ tintColor }) => <Icon name="event" type="simplelineicons" size={28} color={tintColor} />
    },
  },
	'Create Event': {
    screen: Create_Event,
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

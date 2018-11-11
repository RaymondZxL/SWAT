import React, { Component } from 'react';
import { Alert, Button, Text, TouchableOpacity, TextInput, View, StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Login from './src/Login'
import Main from './src/Main'

const App = createStackNavigator({
	Main: {screen: Main},
	Login: {screen: Login },
});

export default App;


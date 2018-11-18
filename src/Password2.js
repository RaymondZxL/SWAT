import React, { Component } from 'react';
import { Alert, Button, Text, TouchableOpacity, TextInput, View, StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import styles from '../src/Styles'

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {
				email: "",
				password: "",
				name: "",
				interests: [],
				accountCreationDate: 0
			}
		}
	}

	static navigationOptions = {
	    title: 'SWAT',
    };

	render(){
		return(
			<KeyboardAvoidingView style={styles.container} behavior="padding">
			<View style={styles.container}>
			<Text style={styles.title}>Sent email to {this.props.navigation.state.params.email}</Text>
			<TouchableOpacity
          	style={styles.button1}
			onPress={() =>
              {this.props.navigation.navigate('Main')}}
        	>
         	<Text style={styles.submitText}> Go To Main Page </Text>
       		</TouchableOpacity>
			</View>
			</KeyboardAvoidingView>
		)
	}
}

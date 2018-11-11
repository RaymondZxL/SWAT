import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity, TextInput, Keyboard, TouchableWithoutFeedback, FlatList } from 'react-native';
import { createStackNavigator, } from 'react-navigation';


export default class Login extends React.Component {
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
    	headerLeft: null,
    	title: 'CheriTree',
  	};

	render(){
		return(
			<Text> Something </Text>
		)
	}
}

const styles = StyleSheet.create({
  logo: {
  	height: 300
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  textBox: {
    fontFamily: 'Baskerville',
    fontSize: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText:{
    fontFamily: 'Baskerville',
    fontSize: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button1: {
    alignItems: 'center',
    backgroundColor: 'powderblue',
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 25,
    marginBottom: 10,
  },
  button2: {
    alignItems: 'center',
    backgroundColor: 'white',
    width: 150,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 25,
    marginBottom: 10,
  },
  buttonText:{
    fontFamily: 'Baskerville',
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    fontFamily: 'Baskerville',
    fontSize: 20,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
    marginVertical: 10,
  },
});
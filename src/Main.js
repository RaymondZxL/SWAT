import React, { Component } from 'react';
import { Alert, Button, Text, TouchableOpacity, TextInput, View, StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        email: '',
        password: '',
      }
    }
    
  
  
  onLogin() {
    const { email, password } = this.state;

    Alert.alert('Credentials', `email: ${email} + password: ${password}`);
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="position">
      <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/IMG_2197.jpg")}/>
      <Text style={styles.textBox}>Email:</Text>
        <TextInput
          value={this.state.email}
          keyboardType = 'email-address'
          onChangeText={(email) => this.setState({ email })}
          placeholder='example@ucsd.edu'
          placeholderTextColor = 'black'
          style={styles.input}
        />
        <Text style={styles.textBox}>Password:</Text>
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'example'}
          secureTextEntry={true}
          placeholderTextColor = 'black'
          style={styles.input}
        />
        
     
        <TouchableOpacity
          style={styles.button1}
          onPress={() =>
              {this.props.navigation.navigate('Login');}
            }
       >
         <Text style={styles.buttonText}>  Login </Text>
       </TouchableOpacity>

       <TouchableOpacity
          style={styles.button2}
          onPress={this.onLogin.bind(this) }
       >
         <Text style={styles.buttonText}> New user? </Text>
       </TouchableOpacity>

       <TouchableOpacity
          style={styles.button2}
          onPress={this.onLogin.bind(this)}
       >
         <Text style={styles.buttonText}> Forgot Password </Text>
       </TouchableOpacity>
        
      </View>
      </KeyboardAvoidingView>
    );
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

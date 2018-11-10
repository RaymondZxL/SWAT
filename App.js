import React, { Component } from 'react';
import { Alert, Button, Text, TouchableOpacity, TextInput, View, StyleSheet, Image, KeyboardAvoidingView } from 'react-native';

export default class App extends Component {

    state = {
      email: '',
      password: '',
    };


  onLogin() {
    const { email, password } = this.state;

    Alert.alert('Credentials', `email: ${email} + password: ${password}`);
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="position">
      <View style={styles.container}>
      <Image style={styles.logo} source={require("./assets/IMG_2197.jpg")}/>
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
          onPress={this.onLogin.bind(this)}
       >
         <Text style={styles.buttonText}> Sign Up / Login </Text>
       </TouchableOpacity>

<<<<<<< HEAD
=======
       <TouchableOpacity
          style={styles.button2}
          onPress={this.onLogin.bind(this)}
       >
         <Text style={styles.buttonText}> Forgot Password </Text>
       </TouchableOpacity>
        
>>>>>>> 4e5f759ce0d41593404387f701ec58fd12027605
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
    fontFamily: 'Roboto',
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
    fontFamily: 'Roboto',
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    fontFamily: 'Roboto',
    fontSize: 20,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
    marginVertical: 10,
  },
});

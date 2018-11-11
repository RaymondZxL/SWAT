import React, { Component } from 'react';
import { Alert, Button, Text, TouchableOpacity, TextInput, View, StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import styles from './Styles'

export default class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        user:{
          email: '',
          password: '',
          name: '',
          interests: [],
          birthday: '',
          re_password: '',
          accountCreationDate: 0
        },
        email: '',
        password: '',
      }
    }
    
    static navigationOptions = {
    headerLeft: null,
    title: 'SWAT',
    };
  
  onLogin() {
    const { email, password } = this.state;

    if(this.state.email === '' || this.state.password === ''){
      alert('empty');
    }
    else {
      const reg = /^\w+([\.-]?\w+)*@ucsd.edu$/;
      if (reg.test(this.state.email) === false){
        alert('UCSD email !!!');
      }else{
        user.email = this.state.email;
        user.password = this.state.password;
        this.props.navigation.navigate('Login', {user:this.state.user});
      }
    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="position">
      <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/IMG_2197.jpg")}/>
      <Text style={styles.textBox}>Email:</Text>
        <TextInput
          maxLength={40}
          value={this.state.email}
          keyboardType = 'email-address'
          onChangeText={(email) => this.setState({ email })}
          placeholder='example@ucsd.edu'
          placeholderTextColor = 'gray'
          style={styles.input}
        />
        <Text style={styles.textBox}>Password:</Text>
        <TextInput
          maxLength={40}
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'example'}
          secureTextEntry={true}
          placeholderTextColor = 'gray'
          style={styles.input}
        />
        
      
        <TouchableOpacity
          style={styles.button1}
          onPress={this.onLogin.bind(this) }
        >
         <Text style={styles.buttonText}>  Login </Text>
       </TouchableOpacity>

       <TouchableOpacity
          style={styles.button1}
          onPress={() =>
              {this.props.navigation.navigate('NewUser')}}
       >
         <Text style={styles.buttonText}> New user? </Text>
       </TouchableOpacity>

       <TouchableOpacity
          style={styles.button1}
          onPress={() =>
              {this.props.navigation.navigate('Password')}}
       >
         <Text style={styles.buttonText}> Forgot Password </Text>
       </TouchableOpacity>

       <View style={styles.spacing}></View>
        
      </View>
      </KeyboardAvoidingView>
    );
  }
}

import React, { Component } from 'react';
import { Alert, Button, Text, TouchableOpacity, TextInput, View, StyleSheet, Image, TouchableWithoutFeedback, KeyboardAvoidingView } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import firebase from 'firebase'
import styles from './Styles'
// import Icon from 'react-native-vector-icons/Ionicons';
const dismissKeyboard = require('dismissKeyboard');

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
      alert('Empty!');
    }
    else {
      const reg = /^\w+([\.-]?\w+)*@ucsd.edu$/;
      if (reg.test(this.state.email) === false){
        alert('UCSD email !!!');
      }else{
        this.state.user.email = this.state.email;
        this.state.user.password = this.state.password;
        this.props.navigation.navigate('Home', {user:this.state.user});
      }
    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
      <TouchableWithoutFeedback style={styles.container} behavior="position" onPress={()=>{dismissKeyboard()}}>
      <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/IMG_2197.jpg")}/>
      <View style={{flexDirection: 'row', justifyContent:'space-around', alignItems: 'center'}}>
        {/* add icon for email */}
        {/* <Icon name={'ios-mail'} size={20} /> */}
        <TextInput
        maxLength={35}
        value={this.state.email}
        keyboardType = 'email-address'
        onChangeText={(email) => this.setState({ email })}
        placeholder='example@ucsd.edu'
        textAlign='right'
        placeholderTextColor = 'gray'
        style={styles.inputMain}
        />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
        <TextInput
        maxLength={35}
        value={this.state.password}
        onChangeText={(password) => this.setState({ password })}
        placeholder={'password'}
        textAlign='right'
        secureTextEntry={true}
        placeholderTextColor = 'gray'
        style={styles.inputMain}
        />
      </View>

      <TouchableOpacity
      style={styles.button1}
      onPress={this.onLogin.bind(this) }
      >
      <Text style={styles.login}> LOGIN </Text>
      </TouchableOpacity>

      <TouchableOpacity
      // style={styles.button1}
        onPress={() =>
          {this.props.navigation.navigate('NewUser')}}
        >
        <Text style={styles.buttonText}> New User? </Text>
      </TouchableOpacity>

      <TouchableOpacity
        // style={styles.button1}
        onPress={() =>
          {this.props.navigation.navigate('Password')}}
      >
        <Text style={styles.buttonText}> Forgot Password? </Text>
      </TouchableOpacity>

    </View>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    );
  }
}

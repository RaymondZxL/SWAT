import React, { Component } from 'react';
import { Alert, Button, Text, TouchableOpacity, TextInput, View, Stylesheet, Image, KeyboardAvoidingView, ScrollView } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import styles from '../src/Styles'
import firebase from '../src/firebase'

export default class CreateEvent extends Component{
  render(){
    return(
      <View style={styles.container}>

        <View style={styles.spacing}></View>
        <Text>Create your event</Text>
        <View style={styles.spacing}></View>

      </View>
    )
  }
}

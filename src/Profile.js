import React, { Component } from 'react';
import { Alert, Button, Text, TouchableOpacity, TextInput, View, StyleSheet, Image, KeyboardAvoidingView, ScrollView } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import styles from '../src/Styles'
import firebase from '../src/firebase'

export default class Profile extends Component{
  render(){
    return(
      <View style={styles.container}>

        <View style={styles.spacing}></View>
        <Text>hiiiii</Text>
        <View style={styles.spacing}></View>

      </View>
    )
  }  
}
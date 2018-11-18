import React, { Component } from 'react';
import { Alert, Button, Text, TouchableOpacity, TextInput, View, StyleSheet, Image, KeyboardAvoidingView, ScrollView } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import styles from '../src/Styles'
import firebase from '../src/firebase'

export default class Profile extends Component{

  constructor(props){
    super(props);
    this.state = {
      text: ''
    };
  }

  render(){
    return(
      <View style={styles.containerVertical}>

        <View style={styles.containerBox}>
          <Image
            style={styles.avatar}
            source={require('../assets/Gary.jpg')}
          />
          <TouchableOpacity
              style={styles.button2}
              onPress={this.onPressButton}>
              <Text style={styles.buttonText}> Edit </Text>
            </TouchableOpacity>
        </View>
        
        <View style={styles.containerHorizontal}>
          <View style={styles.containerBox, styles.field}>
            <Text style={styles.fieldTitle}> Name: </Text>
          </View>
          <View style={styles.containerbox, styles.inField}>
            <Text style={styles.inputText}> Gary Gillespie </Text>
          </View>
        </View>

        <View style={styles.containerHorizontal}>
          <View style={styles.containerBox, styles.field}>
            <Text style={styles.fieldTitle}> Birthdate: </Text>
          </View>
          <View style={styles.containerbox, styles.inField}>
            <Text style={styles.inputText}> December 25, 1970 </Text>
          </View>
        </View>

        <View style={styles.containerHorizontal}>
          <View style={styles.containerBox, styles.field}>
            <Text style={styles.fieldTitle}> Email: </Text>
          </View>
          <View style={styles.containerbox, styles.inField}>
            <Text style={styles.inputText}> gg@ucsd.edu </Text>
          </View>
        </View>

        <View style={styles.containerHorizontal}>
          <View style={styles.containerBox, styles.field}>
            <Text style={styles.fieldTitle}> College: </Text>
          </View>
          <View style={styles.containerbox, styles.inField}>
            <Text style={styles.inputText}> Gillespie </Text>
          </View>
        </View>        

        <View style={styles.spacing}></View>

        <View style={styles.containerBox, styles.interest}>
          <Text style={styles.fieldTitle}> Interests: </Text>
          <Text style={styles.inputText}> Food, Socials, 21+, Study, Movies </Text>
        </View>
      </View>
    )
  }  
}

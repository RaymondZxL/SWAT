import React, { Component } from 'react';
import { Alert, Button, Text, TouchableOpacity, TextInput, View, StyleSheet, Image, KeyboardAvoidingView, ScrollView } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import styles from './Styles'
import firebase from './firebase'

export default class Home extends Component {
  static navigationOptions = {
    headerLeft: null,
    title: 'Discover',
  };

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Home
        </Text>
      </View>
    );
  }

}

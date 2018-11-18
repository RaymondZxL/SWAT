import React, { Component } from 'react';
import { Alert, Button, Text, TouchableOpacity, TextInput, View, StyleSheet, Image, KeyboardAvoidingView, ScrollView } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import DropDownMenu from 'react-native-dropdown-menu';

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
    var data = [["Games", "Food", "Movies", "Study", "Sports"], 
    ["Revelle", "Muir", "Marshall", "Warren", "Roosevelt", "Sixth"]];

    return(
      <View style={styles.containerVertical}>

        <View style={styles.containerHorizontal}>
          <View style={styles.containerBox}>
            <TouchableOpacity onPress={this._onPressButton}>
              <Image
                style={styles.avatar}
                source={require('../assets/Gary.jpg')}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.containerBox, styles.nameBday}>
            <Text style={styles.titleFields}> Name: Gary Gillespie</Text>
            <Text style={styles.titleFields}> Birthday: December 25 </Text>    
              <TouchableOpacity
                style={styles.button2}
                onPress={this.onPressButton}>
                <Text style={styles.buttonText}> Edit </Text>
              </TouchableOpacity>
          </View>
        </View>

        <View style={styles.containerBox, styles.emailPW}>
          <Text style={styles.titleFields}> Email: professionalismpoints@ucsd.edu</Text>
          <Text style={styles.titleFields}> Password: noWhispering </Text>
        </View>

        <View style={styles.containerBox, styles.dropDown}>
          <DropDownMenu 
            style= {{flex: 1}}
            bgColor={'white'}
            tintcolor={'#333333'}
            activityTintColor={'green'}
            handler={(selection, row) => this.setState({text: data[selection][row]})}
            data={data}>
          </DropDownMenu>
        </View>

      </View>
    )
  }  
}
import React, { Component } from 'react';
import { Alert, Button, Text, TouchableOpacity, TextInput, View, Stylesheet, Image, KeyboardAvoidingView, ScrollView } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import DatePicker from 'react-native-datepicker'

import styles from '../src/Styles'
import firebase from '../src/firebase'

export default class CreateEvent extends Component{
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      date: '',
      time: '',
      location: '',
    }
  }

  onSubmit(){
    const date_regex = /^\d{2}\/\d{2}\/\d{4}$/;
    if(this.state.title === '' || this.state.description === '' || this.state.date === '' || this.state.time === '' || this.state.location === ''){
      alert('Entries Cannot Be Empty!');
    }else{
      /*user.email = this.state.email;
      user.name = this.state.name;
      user.birthday = this.state.birthday;
      user.password = this.state.password;
      this.PushToFireBase();*/
      this.props.navigation.navigate('MyEvents');
    }
  }

  render(){
    return(
      <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView>
      <View style={styles.container}>
      <Text style={styles.CEtitle}> New Event </Text>
      <Text style={styles.textBox}>Upload Image:</Text>
      <Image style={styles.avatar} source={require('../assets/Gary.jpg')}/>
      <View style={styles.contaierRow}>
      <Text style={styles.textBox}>Title:</Text>
      <TextInput
      //maxLength={35}
      value={this.state.title}
      keyboardType = 'default'
      onChangeText={(title) => this.setState({ title })}
      placeholder='Event Title'
      placeholderTextColor='gray'
      style={styles.input}
      />
      <Text style={styles.textBox}>Description:</Text>
      <TextInput
      value={this.state.description}
      multiline
      keyboardType = 'default'
      onChangeText={(description) => this.setState({ description })}
      placeholder='What is your event about?'
      placeholderTextColor='gray'
      style={styles.description}
      />
      <Text style={styles.textBox}>Date:</Text>
      <DatePicker
      style={{width: 150}}
      date={this.state.date}
      mode="date"
      placeholder="select date"
      format="YYYY-MM-DD"
      confirmBtnText="Confirm"
      cancelBtnText="Cancel"
      customStyles={{
        dateIcon: {
          position: 'absolute',
          left: 0,
          top: 4,
          marginLeft: 0
        },
        dateInput: {
          marginLeft: 36
        }
      }}
      onDateChange={(date) => {this.setState({date: date})}}
      />
      <Text style={styles.textBox}>Time:</Text>
      <DatePicker
      style={{width: 150}}
      date={this.state.time}
      mode="time"
      placeholder="select time"
      format="HH:mm"
      confirmBtnText="Confirm"
      cancelBtnText="Cancel"
      minuteInterval={10}
      customStyles={{
        dateIcon: {
          position: 'absolute',
          left: 0,
          top: 4,
          marginLeft: 0
        },
        dateInput: {
          marginLeft: 36
        }
      }}
      onDateChange={(time) => {this.setState({time: time})}}
      />
      <Text style={styles.textBox}>Location:</Text>
      <TextInput
      //maxLength={25}
      value={this.state.location}
      keyboardType = 'default'
      onChangeText={(location) => this.setState({ location })}
      placeholder='E.g. 9500 Gilman Dr'
      placeholderTextColor='gray'
      style={styles.input}
      />
      <TouchableOpacity
      style={styles.button1}
      onPress={this.onSubmit.bind(this)}
      >
      <Text style={styles.submitText}> SUBMIT </Text>
      </TouchableOpacity>
      </View>
      </View>
      </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}

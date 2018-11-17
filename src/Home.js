import React, { Component } from 'react';
import { Alert, Button, Text, TouchableOpacity, TextInput, View, StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import TabNavigator from 'react-native-tab-navigator';

import styles from './Styles';
import MainPage from './MainPage';
import Profile from './Profile';
import MyEvents from './MyEvents';
import CreateEvent from './CreateEvent';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: "",
        password: "",
        name: "",
        interests: [],
        accountCreationDate: 0
      },
      selectedTab: 'home',
    }
  }

  static navigationOptions = {
    headerLeft: null,
    title: 'SWAT',
  };

  render(){
    return(

    <TabNavigator tabBarStyle={{backgroundColor:'white'}} style={{backgroundColor:'white'}}>
      <TabNavigator.Item
        title="Home"
        selected={this.state.selectedTab === 'home'}
        renderIcon={() => <Icon name={'md-home'} size={25}/>}
        renderSelectedIcon={() => <Icon name={'md-home'} size={25} color={'blue'}/>}
        onPress={() => this.setState({selectedTab: 'home'})}
      >
        <MainPage/>
        {/* <Text>fjeijf</Text> */}
      </TabNavigator.Item>
      <TabNavigator.Item
          title="My Events"
          selected={this.state.selectedTab === 'event'}
          renderIcon={()=> <Icon name={'md-calendar'} size={25}/>}
          renderSelectedIcon={()=> <Icon name={'md-calendar'} size={25} color={'blue'}/>}
          onPress={()=>this.setState({selectedTab: 'event'})}
        >
        <MyEvents/>
      </TabNavigator.Item>
      <TabNavigator.Item
        title="Create Event"
        selected={this.state.selectedTab === 'create'}
        renderIcon={() => <Icon name={'ios-add-circle-outline'} size={25}/>}
        renderSelectedIcon={()=> <Icon name={'ios-add-circle-outline'} size={25} color={'blue'}/>}
        onPress={()=>this.setState({selectedTab: 'create'})}
      >
        <CreateEvent/>
      </TabNavigator.Item>
      <TabNavigator.Item
        title="Profile"
        selected={this.state.selectedTab === 'profile'}
        renderIcon={() => <Icon name={'ios-person'} size={25}/>}
        renderSelectedIcon={()=> <Icon name={'ios-person'} size={25} color={'blue'}/>}
        onPress={()=> this.setState({selectedTab: 'profile'})}
      >
        <Profile/>
      </TabNavigator.Item>

    </TabNavigator>
    )
  }
}

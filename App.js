import React, { Component } from 'react'
import { StyleSheet,StatusBar } from 'react-native';
import AuthNavigation from './navigation/authNavigation';
import HomeNav from './navigation/homeNavigation';
import firebase from './config/firebaseConfig';


import { NavigationContainer } from '@react-navigation/native';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isAuth: true,
    }
    firebase.auth().onAuthStateChanged(this.userChanged)
  }

  userChanged = (user) => {
    this.setState({ isAuth: !!user });
  }


  render() {
    console.log(this.state.isAuth);
    
    return (
      <NavigationContainer >
        <StatusBar barStyle='light-content' backgroundColor='#003e42'/>
        {this.state.isAuth ? <HomeNav /> : <AuthNavigation />}
      </NavigationContainer>

    )
  }
}

const styles = StyleSheet.create({})

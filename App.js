import React, { Component } from 'react'
import { StyleSheet, StatusBar,Text } from 'react-native';
import AuthNavigation from './navigation/authNavigation';
import Home from './navigation/drawer/myDrawer';
import firebase from './config/firebaseConfig';
import * as Progress from 'react-native-progress';


import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native-animatable';

export default class App extends Component {
  clear
  constructor(props) {
    super(props)
    this.state = {
      isAuth: true,
      loading: true,
      inderterminate:true,
    }
    firebase.auth().onAuthStateChanged(this.userChanged)
  }

  userChanged = (user) => {
    this.setState({ isAuth: !!user });
  }

  componentDidMount() {
    this.animate();
  }

  animate() {
    let timeOut= Math.floor(Math.random() * (6 - 0 + 1))
      setTimeout(() => {
        this.setState({loading:false})
      },timeOut * 1000);

  }
  render() {
    console.log(this.state.isAuth);
    return (
    this.state.loading ?
    <View style={styles.container} >
      <Text style={{fontSize:20,marginLeft:10}} > Chargement .... </Text>
        <Progress.Bar
          color='#28696d'
          borderColor='#000'
          style={styles.progress}
          indeterminate={this.state.inderterminate}
        />
      </View>
    : 
      <NavigationContainer >
        <StatusBar barStyle='light-content' backgroundColor='#003e42' />
        {this.state.isAuth ? <Home /> : <AuthNavigation />}
      </NavigationContainer>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 20,
  },
  progress: {
    margin:10,
    width:150,
    
  },
})

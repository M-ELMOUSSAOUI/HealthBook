import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { appStyle } from '../styles/globalStyle';
import logo from '../assets/logo.png';
import * as Animatable from 'react-native-animatable';


export default class main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                <View style={{marginBottom:50}} >
                <Animatable.Image
                    source={logo}
                    animation="pulse"
                    easing="ease-out"
                    iterationCount="infinite" />
                </View>
                    <Text style={{fontSize:40,fontWeight:'100'}} > BIENVENUE! </Text>
                <TouchableOpacity style={appStyle.button} onPress={() => this.props.navigation.push('login')} >
                    <Text style={appStyle.btnText}> Se connecter </Text>
                </TouchableOpacity>
                <TouchableOpacity style={appStyle.button} onPress={() => this.props.navigation.push('Registre')} >
                    <Text style={appStyle.btnText}> inscrivez-vous </Text>
                </TouchableOpacity>

            </View>
        )
    }
}


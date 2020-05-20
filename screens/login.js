import React, { Component,useEffect } from 'react'
import {Text, Alert, StyleSheet, View, TouchableOpacity } from 'react-native';
import {Input} from 'react-native-elements'
import firebase from '../config/firebaseConfig';
import { appStyle } from '../styles/globalStyle';
import * as Animatable from 'react-native-animatable';
import logo from '../assets/logo.png';
import Spinner from 'react-native-loading-spinner-overlay';
import FontAwesome from '@expo/vector-icons/FontAwesome';



export default class login extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            showPass: true,
            press: false,
            spinner: false,
        }
    }

    showPass = () => {
        if (this.state.press == false) {
            this.setState({ showPass: false, press: true })
        }
        else {
            this.setState({ showPass: true, press: false })
        }
    }

    loginUser = () => {
        this.startProgress();
        firebase.auth().signInWithEmailAndPassword(this.state.email.trim(), this.state.password)
            .catch(err => Alert.alert('Error', err.message))
            .then(() => {this.stopProgress()})
            
    }

    startProgress = () => {
        this.setState({
            spinner: !this.state.spinner
        });
    }
    stopProgress = () => {
        this.setState({
            spinner: false
        });
    }

    //LifeCycle methodes
    componentDidMount(){

    }
    componentWillUnmount(){
        this.stopProgress();
    }
    render() {
        return (
            <View style={styles.container} >
                <Spinner
                    visible={this.state.spinner}
                    animation='fade'
                    textContent={'Chargement...'}
                    overlayColor='rgba(0, 0, 0, 0.5)'
                    textStyle={{fontSize:20,color:'#e5ffff'}}
                    color='#fff'
                />
                <View style={{ marginBottom: 50 }} >
                    <Animatable.Image
                        source={logo}
                        animation="pulse"
                        easing="ease-out"
                        iterationCount="infinite" />
                </View>
                    <Input
                    leftIcon={<FontAwesome name={'at'} size={28} color={'#28696d'} />}
                        style={appStyle.input}
                        label='Email'
                        placeholder='Example@exp.com'
                        autoCapitalize='none'
                        onChangeText={email => this.setState({ email })}
                    />
                    
                    <Input
                    containerStyle={{borderColor:'red',borderWidth:1}}
                        leftIcon={<FontAwesome name={'lock'} size={28} color={'#28696d'}  />}
                        rightIcon={
                            <TouchableOpacity 
                                onPress={this.showPass.bind(this)}>
                            <FontAwesome name={this.state.press == false ? 'eye' : 'eye-slash'} size={28} color={'#000'} />
                        </TouchableOpacity>
                        }
                        style={appStyle.input}
                        label='Password'
                        placeholder='Password'
                        secureTextEntry={this.state.showPass}
                        autoCapitalize='none'
                        onChangeText={password =>this.setState({password})}
                    />
                
                <TouchableOpacity style={appStyle.button} onPress={this.loginUser}>
                    <Text style={appStyle.btnText} > Se connecter </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ marginTop: 10 }}
                    onPress={() => Alert.alert('Todo', 'Coming soon')}
                >
                    <Text style={{ fontWeight: 'bold', fontSize: 16, textDecorationLine: 'underline', color: '#62aeb4' }} >
                        Mot de passe oublié ?
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

})


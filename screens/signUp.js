import React, { Component } from 'react'
import { TextInput,Text, Alert, StyleSheet, View, TouchableOpacity, Keyboard,Button } from 'react-native';
import { appStyle } from '../styles/globalStyle';
import Firebase from '../config/firebaseConfig';


export default class signUp extends Component {
    
    constructor(props){
        super(props);
        this.state={
            name:'',
            email:'',
            password:'',
        }
        
    }
    addUser =()=>{
        Firebase.auth().createUserWithEmailAndPassword(this.state.email.trim(),this.state.password)
        .then(userCrendtials=>{
            if(userCrendtials.user) {
                console.log('user updating.....!');
                return userCrendtials.user.updateProfile({
                    displayName:this.state.name,
                })
            }
        })
        .catch(err=>Alert.alert('Error',err.message))
        
    }
    render() {
        return (
            <View style={styles.container} >
          <TextInput
            keyboardType='default'
            autoCapitalize='none'
                placeholder='Full name'
                style={appStyle.input}
                value={this.state.name}
                onChangeText={name => this.setState({ name })}
            />
            <TextInput
            keyboardType='email-address'
            autoCapitalize='none'
                placeholder='email'
                style={appStyle.input}
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
            />
            <TextInput
                placeholder='Pass'
                style={appStyle.input}
                value={this.state.password}
                onChangeText={password => this.setState({ password })}
            />
           <TouchableOpacity style={appStyle.button} onPress={this.addUser}> 
               <Text> Login </Text>
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

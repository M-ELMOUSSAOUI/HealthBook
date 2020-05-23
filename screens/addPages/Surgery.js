import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity,TextInput } from 'react-native'
import logo from './addPageIcons/surgery.png';
import { appStyle } from '../../styles/globalStyle';
import { Input } from 'react-native-elements'
import * as Animatable from 'react-native-animatable';
export default class Surgery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nomchirurgie: '',
            faitle: '',
            endroit: '',
            pardocteur: ''
        } }

    render() {
        return (
            <View style={styles.container} >
               
       
             <View style={{ marginBottom: 20 }} >
             <Animatable.Image
                 source={logo}
                 animation="pulse"
                 easing="ease-out"
                 iterationCount="infinite" />
         </View>
         <Text> Nom de chirurgie: </Text>
             <TextInput
             style={appStyle.input}
             placeholder=''
             autoCapitalize='none'
             underlineColorAndroid='transparent'
             onChangeText={(nomchirurgie) => this.setState({nomchirurgie})}
             value={this.state.nomchirurgie}
         />
          <Text> Fait le : </Text>
          <TextInput
             style={appStyle.input}
             placeholder='jj/mm/aaaa'
             autoCapitalize='none'
             underlineColorAndroid='transparent'
             onChangeText={(faitle) => this.setState({faitle})}
             value={this.state.faitle}
         />
          <Text> a : </Text>
          <TextInput
             style={appStyle.input}
             placeholder=''
             autoCapitalize='none'
             underlineColorAndroid='transparent'
             onChangeText={(endroit) => this.setState({endroit})}
             value={this.state.endroit}
         />
        
         <Text> Par Docteur : </Text>
         <TextInput
             style={appStyle.input}
             placeholder=''
             autoCapitalize='none'
             underlineColorAndroid='transparent'
             onChangeText={(pardocteur) => this.setState({pardocteur})}
             value={this.state.pardocteur}
         />
         <TouchableOpacity style={appStyle.button} onPress={this.loginUser}>
                    <Text style={appStyle.btnText} > Enregistrer </Text>
                </TouchableOpacity>
                
              </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
})

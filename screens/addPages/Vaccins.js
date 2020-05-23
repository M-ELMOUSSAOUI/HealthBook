import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity,TextInput  } from 'react-native'
import logo from './addPageIcons/vaccine.png';
import { appStyle } from '../../styles/globalStyle';
import { Input } from 'react-native-elements'
import * as Animatable from 'react-native-animatable';
export default class Vaccins extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groupage: '',
            nomdevaccin: '',
            faitle: ''
        } }
    render() {
        return (
            <View style={styles.container} >
               
       
            <View style={{ marginBottom: 50 }} >
            <Animatable.Image
                source={logo}
                animation="pulse"
                easing="ease-out"
                iterationCount="infinite" />
        </View>
        <Text> Groupage de sang : </Text>
             <TextInput
             style={appStyle.input}
             placeholder=''
             autoCapitalize='none'
             underlineColorAndroid='transparent'
             onChangeText={(groupage) => this.setState({groupage})}
             value={this.state.groupage}
         />
          <Text> Nom de vaccin : </Text>
             <TextInput
             style={appStyle.input}
             placeholder=''
             autoCapitalize='none'
             underlineColorAndroid='transparent'
             onChangeText={(nomdevaccin) => this.setState({nomdevaccin})}
             value={this.state.nomdevaccin}
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
          <TouchableOpacity style={appStyle.button} onPress={this.Vaccins}>
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

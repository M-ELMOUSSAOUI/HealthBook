import React, { Component } from 'react'
import { Text, StyleSheet, View, button, TextInput, TouchableOpacity } from 'react-native'
import { appStyle } from '../../styles/globalStyle';
import { Input } from 'react-native-elements'
import * as Animatable from 'react-native-animatable';
import logo from './addPageIcons/radiology.png'
import { Ionicons, Entypo } from '@expo/vector-icons';

export default class Radio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nomradio: ''
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
                <Text> Nom de radiologie : </Text>
             <TextInput
             style={appStyle.input}
             placeholder=''
             autoCapitalize='none'
             underlineColorAndroid='transparent'
             onChangeText={(nomradio) => this.setState({nomradio})}
             value={this.state.nomradio}
         />
          <Text> Radiologie : </Text>
          
                    <TouchableOpacity onPress={() => this.props.navigation.push('')}>
                        <Ionicons name="md-add-circle" size={70} color="#28696d" />
                    </TouchableOpacity>
                 
                    <TouchableOpacity style={appStyle.button} onPress={this.Radio}>
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
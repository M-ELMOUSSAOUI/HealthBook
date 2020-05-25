import React, { Component } from 'react'
import { Text, StyleSheet, View, button, TextInput, TouchableOpacity  } from 'react-native'
import { appStyle } from '../../styles/globalStyle';
import { Input } from 'react-native-elements'
import * as Animatable from 'react-native-animatable';
import logo from './addPageIcons/doctor.png'
import { Ionicons, Entypo } from '@expo/vector-icons';
export default class Analysis extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nomanalyse: '',
            prix:''
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
                 <Text> Nom d'analyse : </Text>
             <TextInput
             style={appStyle.input}
             placeholder=''
             autoCapitalize='none'
             underlineColorAndroid='transparent'
             onChangeText={(nomanalyse) => this.setState({nomanalyse})}
             value={this.state.nomanalyse}
         />
          <Text> Prix : </Text>
             <TextInput
             style={appStyle.input}
             placeholder=''
             autoCapitalize='none'
             underlineColorAndroid='transparent'
             onChangeText={(prix) => this.setState({prix})}
             value={this.state.prix}
         />
         <Text> Bilans: </Text>
         <TouchableOpacity onPress={() => this.props.navigation.push('')}>
                        <Ionicons name="md-add-circle" size={70} color="#28696d" />
                    </TouchableOpacity>
                 
                    <TouchableOpacity style={appStyle.button} onPress={this.Analysis}>
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
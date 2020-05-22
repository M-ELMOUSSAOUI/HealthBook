import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
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
               
       
             <View style={{ marginBottom: 50 }} >
             <Animatable.Image
                 source={logo}
                 animation="pulse"
                 easing="ease-out"
                 iterationCount="infinite" />
         </View>
         <Text> Nom de chirurgie: </Text>
             <Input
             style={appStyle.input}
             label=''
             placeholder=''
             autoCapitalize='none'
             onChangeText={(nomchirurgie) => this.setState({nomchirurgie})}
             value={this.state.nomchirurgie}
         />
         <View style = {styles.InputCont}>
          <Text> Fait le : </Text>
             <Input
             style={appStyle.input}
             label=''
             placeholder=''
             autoCapitalize='none'
             onChangeText={(faitle) => this.setState({faitle})}
             value={this.state.faitle}
         />
          <Text> a : </Text>
             <Input
             style={appStyle.input}
             label=''
             placeholder=''
             autoCapitalize='none'
             onChangeText={(endroit) => this.setState({endroit})}
             value={this.state.endroit}
         />
         </View>
         <Text> Par Docteur : </Text>
             <Input
             style={appStyle.input}
             label=''
             placeholder=''
             autoCapitalize='none'
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
    },
    InputCont: {
        justifyContent: "space-between"
    }
})

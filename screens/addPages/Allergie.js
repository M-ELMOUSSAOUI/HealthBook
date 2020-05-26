import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity,Image } from 'react-native'
import { appStyle } from '../../styles/globalStyle';
import logo from './addPageIcons/allergy.png';
export default class Allergie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: '',
            duree: ''
        } }
    render() {
        return (
            <View style={styles.container} >
            <View style={{ marginBottom: 50 }} >
            <Image
                source={logo}
                />
            </View>
        <Text> Type d'allergie : </Text>
             <TextInput
             style={appStyle.input}
             placeholder=''
             autoCapitalize='none'
             underlineColorAndroid='transparent'
             onChangeText={(type) => this.setState({type})}
             value={this.state.type}
         />
         <View style={styles.txtConatiner} >
            <Text> Duree d'allergie : </Text>
         </View>
             <TextInput
             style={appStyle.input}
             placeholder=''
             autoCapitalize='none'
             underlineColorAndroid='transparent'
             onChangeText={(duree) => this.setState({duree})}
             value={this.state.duree}
         />
          <TouchableOpacity style={appStyle.button} onPress={this.Allergie}>
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

})

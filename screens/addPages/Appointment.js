import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, TextInput } from 'react-native'
import DateTimePicker from 'react-native-modal-datetime-picker';
import { appStyle } from '../../styles/globalStyle';
import logo from './addPageIcons/calendar.png';
import * as Animatable from 'react-native-animatable';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import moment from 'moment'
export default class Appointment extends Component {
    constructor(){
        super()
        this.state = {
            isVisible : false,
            chosenDate:'',
            titre:'',
            endroit:'',
            docteur:'',
            specialite:''
        }
    }
    handlePicker = (datetime) => {
        this.setState({
            isVisible: false,
            chosenDate: moment(datetime).format('MMMM, Do YYYY HH:mm')
        })
    }
    showPicker = () => {
        this.setState({
            isVisible: true
        })
    }
    hidePicker = () => {
        this.setState({
            isVisible: false
            
        })
    }
    render() {
        return (<View style={styles.container} >
            <View style={{ marginBottom: 50 }} >
            <Animatable.Image
                source={logo}
                animation="pulse"
                easing="ease-out"
                iterationCount="infinite" />
                 </View>
            <Text>
                {this.state.chosenDate}
            </Text>
                <TouchableOpacity style={appStyle.button} onPress = {this.showPicker}>
                    <Text>    Date Et Heure</Text>
                </TouchableOpacity>
                <DateTimePicker
                isVisible ={this.state.isVisible}
                onConfirm={this.handlePicker}
                onCancel={this.hidePicker}
                mode={'datetime'}
                is24Hour={false}
                />
                 <Text style= 'bold'> Notification </Text>
                 <TextInput
             style={appStyle.input}
             placeholder="Titre"
             autoCapitalize='none'
             underlineColorAndroid='transparent'
             onChangeText={(titre) => this.setState({titre})}
             value={this.state.titre}
         />
          <TextInput
             style={appStyle.input}
             placeholder="Endroit"
             autoCapitalize='none'
             underlineColorAndroid='transparent'
             onChangeText={(endroit) => this.setState({endroit})}
             value={this.state.endroit}
         />
         <TextInput
             style={appStyle.input}
             placeholder="Docteur"
             autoCapitalize='none'
             underlineColorAndroid='transparent'
             onChangeText={(docteur) => this.setState({docteur})}
             value={this.state.docteur}
         />
          <TextInput
             style={appStyle.input}
             placeholder="Specialite"
             autoCapitalize='none'
             underlineColorAndroid='transparent'
             onChangeText={(specialite) => this.setState({specialite})}
             value={this.state.specialite}
         />
          <TouchableOpacity style={appStyle.button} onPress={this.Appointment}>
                    <Text style={appStyle.btnText} > Enregistrer </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }
})

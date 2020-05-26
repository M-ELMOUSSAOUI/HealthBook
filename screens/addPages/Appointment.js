import React, { Component } from 'react'
import { StyleSheet, View, Image, TouchableWithoutFeedback, TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import { TextInput, Button, Text, Switch } from 'react-native-paper';

import DateTimePicker from 'react-native-modal-datetime-picker';
import logo from './addPageIcons/calendar.png';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import moment from 'moment'
export default class Appointment extends Component {

    constructor() {
        super()
        this.state = {
            isVisible: false,
            Date: 'jj/mm/aaaa',
            time: 'hh:mm',
            titre: '',
            endroit: '',
            docteur: '',
            specialite: '',
            isSwitchOn: false,
        }
    }
    handlePicker = (datetime) => {
        this.setState({
            isVisible: false,
            chosenDate: moment(datetime).format('HH:mm')
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
    _onToggleSwitch = () => this.setState(state => ({ isSwitchOn: !state.isSwitchOn }));
    render() {
        const { isSwitchOn } = this.state;
        return (
            <KeyboardAvoidingView style={{flex:1}}>
            <TouchableWithoutFeedback>
                <View style={styles.container}>
                    <View style={{ alignItems: 'center' }}>
                        <Image
                            source={logo} width={60}
                        />
                    </View>

                    <View style={styles.dateTimeContainer}>
                        <View style={{ alignItems: 'center' }}>
                            <Text> Date </Text>
                            <TouchableOpacity>
                                <FontAwesome name='calendar' size={35} />
                            </TouchableOpacity>
                            <Text> {this.state.Date}</Text>
                        </View>
                        <View style={{ alignItems: 'center', position: 'absolute', right: 5 }}>
                            <Text> Temps </Text>
                            <TouchableOpacity>
                                <FontAwesome5 name='clock' size={35} />
                            </TouchableOpacity>
                            <Text> {this.state.time}</Text>
                        </View>
                    </View>

                    <View style={styles.notificationCont}>
                        <Text style={{ fontSize: 20 }}> Notifcation </Text>
                        <Switch
                            style={{ scaleX: 1.5, scaleY: 1.5, marginHorizontal: 10 }}
                            color='#28696d'
                            value={isSwitchOn}
                            onValueChange={this._onToggleSwitch}
                        />
                    </View>
                    
                   
                        <View styles={{}}>
                        <TextInput
                            mode='outlined'
                            label='Titre'   
                        />
                        </View>
                        <View styles={{}}>
                        <TextInput
                            mode='outlined'
                            label='Titre'   
                        />
                        </View>

                

                </View>
            </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,

    },
    dateTimeContainer: {
        flexDirection: 'row',
        borderWidth: 3,
    },
    notificationCont: {
        flexDirection: 'row',
        borderWidth: 2,
        marginVertical: 10,
        padding: 10,
        alignItems: 'center',
    },
    input:{
        borderWidth:2,
        flex:1,
        paddingHorizontal:10,
    }
})

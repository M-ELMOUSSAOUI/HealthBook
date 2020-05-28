import React, { Component } from 'react'
import { StyleSheet, View, Image, ScrollView, TouchableOpacity, KeyboardAvoidingView, Dimensions } from 'react-native';
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
            mode: '',
            titre: '',
            endroit: '',
            docteur: '',
            specialite: '',
            isSwitchOn: false,
            _isLoading:false,
        }
    }
    handlePicker = (datetime) => {
        if (this.state.mode == 'date') {
            this.setState({
                isVisible: false,
                Date: moment(datetime).format('DD/MMM/YYYY')
            })
        }
        else {
            this.setState({
                isVisible: false,
                time: moment(datetime).format('HH:mm')
            })
        }
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
    saveEvent = ()=>{
            this.setState({_isLoading:true})
            //Firebase stuf
    }
    render() {
        const { isSwitchOn } = this.state;
        return (

            <ScrollView>
                <DateTimePicker
                    isVisible={this.state.isVisible}
                    onConfirm={this.handlePicker}
                    onCancel={this.hidePicker}
                    mode={this.state.mode}
                    is24Hour={true}
                    onChange={() => this.handlePicker}

                />
                <View style={styles.container}>
                    <View style={{ alignItems: 'center' }}>
                        <Image
                            source={logo} width={60}
                        />
                    </View>

                    <View style={styles.dateTimeContainer}>
                        <View style={{ alignItems: 'center' }}>
                            <Text> Date </Text>
                            <TouchableOpacity onPress={() => {
                                this.setState({ mode: 'date' });
                                this.showPicker()
                            }}>
                                <FontAwesome name='calendar' size={35} />
                            </TouchableOpacity>
                            <Text> {this.state.Date}</Text>
                        </View>
                        <View style={{ alignItems: 'center', position: 'absolute', right: 5 }}>
                            <Text> Temps </Text>
                            <TouchableOpacity onPress={()=>{
                                this.setState({mode:'time'})
                                this.showPicker()
                            }}>
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
                    <View style={styles.input} >
                        <View style={{ alignItems: 'center', marginBottom: 10, flexDirection: 'row' }}>
                            <TextInput
                                style={styles.txt}
                                mode='flat'
                                label='Titre'
                                theme={{ colors: { primary: '#28696d' } }}

                            />

                        </View>
                        <View style={{ alignItems: 'center', marginBottom: 10, flexDirection: 'row' }}>
                            <TextInput
                                style={styles.txt}
                                mode='flat'
                                label='Endroit'
                                theme={{ colors: { primary: '#28696d' } }}

                            />
                            <TouchableOpacity style={{ position: 'absolute', right: 15 }} >
                                <FontAwesome name='search' size={35} color='#28696d' />
                            </TouchableOpacity>
                        </View>
                        <View style={{ alignItems: 'center', marginBottom: 10, flexDirection: 'row' }}>
                            <TextInput
                                style={styles.txt}
                                theme={{ colors: { primary: '#28696d' } }}
                                mode='flat'
                                label='Docteur'
                            />
                            <TouchableOpacity style={{ position: 'absolute', right: 15 }} >
                                <FontAwesome name='search' size={35} color='#28696d' />
                            </TouchableOpacity>
                        </View>
                        <View style={{ alignItems: 'center', marginBottom: 10, flexDirection: 'row' }}>
                            <TextInput
                                style={styles.txt}
                                theme={{ colors: { primary: '#28696d' } }}
                                mode='flat'
                                label='Specialité'
                            />
                            <TouchableOpacity style={styles.searchIcon}>
                                <FontAwesome name='search' size={35} color='#28696d' />
                            </TouchableOpacity>
                        </View>

                        <Button
                            style={{ width: '50%', borderRadius: 40, marginTop: 30 }}
                            mode='contained'
                            loading={this.state._isLoading}
                            theme={{ colors: { primary: '#28696d' } }}
                            onPress={() => this.saveEvent()}
                        >
                            Enregistrer
                        </Button>
                    </View>
                </View>
            </ScrollView>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',

    },
    dateTimeContainer: {
        flexDirection: 'row',
    },
    notificationCont: {
        flexDirection: 'row',
        marginVertical: 10,
        padding: 10,
        alignItems: 'center',
    },
    input: {
        flex: 1,
        padding: 10,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    txt: {
        width: '100%',
        height: 50
    },
    searchIcon: {
        position: 'absolute',
        right: 15,
    }
})

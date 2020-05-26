import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import logo from './addPageIcons/surgery.png';
import { appStyle } from '../../styles/globalStyle';
import { AntDesign } from '@expo/vector-icons';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { TextInput, Button,Provider } from 'react-native-paper'
import moment from 'moment'
import { DefaultTheme } from '@react-navigation/native';


export default class Surgery extends Component {
     _isLoading;
     event
    constructor(props) {
        super(props);
        this.state = {
            nomchirurgie: '',
            date: '',
            time: '',
            mode: '',
            show: false,
            endroit: '',
            pardocteur: '',
            _isLoading:false

        }
    }
    

    handlePicker = (datetime) => {
        this.setState({
            show: false,
            date: moment(datetime).format('DD/MM/YYYY'),
            time: moment(datetime).format('HH:mm'),

        })
    }
    showDatePicker = () => {
        this.setState({
            show: true,
            mode: 'datetime'
        })
    }
    showTimePicker = () => {
        this.setState({
            show: true,
            mode: 'time'
        })
    }
    hidePicker = () => {
        this.setState({
            show: false
        })
    }

    saveEvent = ()=>{
            this.setState({_isLoading:true})
            if(this.state.nomchirurgie.length>0) 
            {
                this.event = {
                    nome:this.state.nomchirurgie,
                    date:this.state.date,
                    time:this.state.time,
                    doc:this.state.pardocteur
                }
            }
    }

    render() {
        return (
            
            <View style={styles.container} >
                <View style={{ marginTop: -100, alignItems: 'center' }} >
                    <Image source={logo} />

                    <DateTimePicker
                        isVisible={this.state.show}
                        onConfirm={this.handlePicker}
                        onCancel={this.hidePicker}
                        mode={this.state.mode}
                        is24Hour={true}
                        onChange={() => this.handlePicker}
                    />
                </View>

                <TextInput
                    style={{ marginTop: 30 }}
                    label='Nom de chirurgie'
                    mode='outlined'
                    autoCapitalize='none'
                    onChangeText={(nomchirurgie) => this.setState({ nomchirurgie })}
                    value={this.state.nomchirurgie}
                    theme={{ colors: { primary: '#28696d', } }}
                />

                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
                    <Text style={styles.txt}> Fait le : </Text>
                    <TextInput
                        style={{
                            width: 110, height: 35, borderColor: '#28696d', borderWidth: 1,
                            borderRadius: 6, marginHorizontal: 1, marginVertical: 20, fontSize: 15
                        }}
                        placeholder='jj/mm/aa'
                        value={this.state.date}
                        placeholderTextColor='rgba(0,0,0,0.5)'
                        editable={false}
                    />
                    <TouchableOpacity onPress={(date) => { this.showDatePicker(date) }}>
                        < AntDesign name="calendar" size={35} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.txt} > à : </Text>
                    <TextInput
                        style={{ width: 80, height: 35, borderColor: '#28696d', borderWidth: 1, borderRadius: 6, marginRight: 3 }}
                        placeholder='hh:mm'
                        value={this.state.time}
                        placeholderTextColor='rgba(0,0,0,0.5)'
                        editable={false}
                    />
                    <TouchableOpacity onPress={(time) => { this.showTimePicker(time) }}>
                        < AntDesign name="clockcircleo" size={35} color="black" />
                    </TouchableOpacity>

                </View>

                <TextInput
                    style={{ marginBottom: 30 }}
                    label='Par Docteur'
                    mode='outlined'
                    underlineColorAndroid='transparent'
                    onChangeText={(pardocteur) => this.setState({ pardocteur })}
                    value={this.state.pardocteur}
                    theme={{ colors: { primary: '#28696d', } }}
                />
                <View style={{alignItems:'center'}}>
                <Button
                    style={{width:'50%',borderRadius:40}}
                    mode='contained'
                    loading={this.state._isLoading}
                    title='test'
                    theme={{ colors: { primary: '#28696d'}}}
                    onPress={()=>this.saveEvent()}
                >
                    Enregistrer
                </Button>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        
    },
    txt: {
        fontSize: 18,

    }
})

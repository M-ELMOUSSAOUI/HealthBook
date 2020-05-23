import React, { Component } from 'react'
import { StyleSheet, View, Button, Alert, Text, TouchableOpacity } from 'react-native';
import fb from '../config/firebaseConfig';
import { Ionicons, Entypo } from '@expo/vector-icons';

export default class home extends Component {

    _unSubscribe;
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            
        }
    }

   

    

    render() {
        return (
            <View style={styles.container} >

                <Text> {this.state.name} </Text>
                <Button title='log out' onPress={this.logout} />

                <View style={styles.addBtn}>
                    <TouchableOpacity onPress={() => this.props.navigation.push('add')}>
                        <Ionicons name="md-add-circle" size={70} color="#28696d" />
                    </TouchableOpacity>
                    
                    <TouchableOpacity  onPress={() => this.props.navigation.push('add')}>
                        <Entypo name='mail' size={70} color='#28696d' />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addBtn: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 20,
        right: 15,

    }

})

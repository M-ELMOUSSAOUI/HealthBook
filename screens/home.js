import React, { Component } from 'react'
import { StyleSheet, View, Button, Alert, Text, TouchableOpacity } from 'react-native';
import fb from '../config/firebaseConfig';
import Spinner from 'react-native-loading-spinner-overlay';
import { Ionicons, Entypo } from '@expo/vector-icons';

export default class home extends Component {

    _unSubscribe;
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            spinner: false,
        }
    }

    logout = () => {
        this.setState({ spinner: true })
        setTimeout(() => {
            fb.auth()
                .signOut()
                .catch(err => Alert.alert('tt', err.message))
        }, 2000);

    }

    componentDidMount() {

        this.setState({ spinner: true });
        this._unSubscribe = fb.auth().onAuthStateChanged((user) => {
            if (user != null) {
                this.setState({ spinner: false, name: user.displayName });
            }
        })
    }

    componentWillUnmount() {
        this._unSubscribe();
        this.setState({ spinner: false });
    }



    render() {
        return (
            <View style={styles.container} >
                <Spinner
                    visible={this.state.spinner}
                    animation='fade'
                    textContent={'Chargement...'}
                    overlayColor='rgba(0, 0, 0, 0.5)'
                    textStyle={{ fontSize: 20, color: '#e5ffff' }}
                    color='#fff'
                />
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

import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Appointment extends Component {
    render() {
        return (
            <View style={styles.container} >
                <Text> Rendez-vous </Text>
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

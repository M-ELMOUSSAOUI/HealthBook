import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class foods extends Component {
    render() {
        return (
            <View style={styles.container} >
            <Text> Foods Page </Text>
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


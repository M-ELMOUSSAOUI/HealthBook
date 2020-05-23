import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class tab4 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> TAB 4  </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#f0932b',
    },
    txt:{
     fontSize:20,

    }
});

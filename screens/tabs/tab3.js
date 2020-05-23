import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class tab3 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> TAB 3  </Text>
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
        backgroundColor:'#7ed6df',
    },
    txt:{
     fontSize:20,

    }
});

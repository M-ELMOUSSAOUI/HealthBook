import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'

export default class tab1 extends Component {
    render() {
        
        return (
            <View style={styles.container}>
                
                <Text> TAB 1   </Text>
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
        backgroundColor:'#badc58',
    },
    txt:{
     fontSize:20,

    }
});


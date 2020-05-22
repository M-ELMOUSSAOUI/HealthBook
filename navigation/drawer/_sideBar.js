import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer';

export default _sideBar = props => {
    return (
            <View style={styles.header} >
                <Text> Side bar test </Text>
            </View>
        )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header:{
        backgroundColor:'#2ecc71',
        height:200,
    }
})

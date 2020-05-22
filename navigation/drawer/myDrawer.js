import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import home from '../homeNavigation';

const drawer = createDrawerNavigator();

export default class myDrawer extends Component {
    render() {
        return (
            <drawer.Navigator initialRouteName={home}>
                <drawer.Screen name='main' component={home} options={{title:'Acceuil'}} />
            </drawer.Navigator>
        )
    }
}

const styles = StyleSheet.create({})

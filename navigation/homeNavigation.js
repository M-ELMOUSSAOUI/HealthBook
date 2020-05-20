import React, { Component } from 'react'
import { Text, View } from 'react-native'
import home from '../screens/home';

import {createStackNavigator} from '@react-navigation/stack';
const stack = createStackNavigator();
export default class homeNavigation extends Component {
    render() {
        return (
            <stack.Navigator screenOptions={{
                headerStyle:{
                  backgroundColor:'#28696d',
                  
                },
                headerTitleAlign:'center',
                headerTintColor:'#fff',
                headerTitleStyle:{
                 fontWeight:'100',
                  
                }
                
              }} >
            <stack.Screen name='home' component={home}/>
            </stack.Navigator>
        )
    }
}

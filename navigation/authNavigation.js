import React, { Component } from 'react'
import { Text, View } from 'react-native'
import login from '../screens/login';
import signUp from '../screens/signUp';
import main from '../screens/main'
import { createStackNavigator } from '@react-navigation/stack';

const stack = createStackNavigator();

export default class authNavigation extends Component {
    render() {
        return (
            <stack.Navigator
                screenOptions={{
                    headerStyle: { backgroundColor: '#28696d',},
                    headerTitleAlign: 'center',
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: '100',
                    }
                }}
            >
                <stack.Screen options={{headerShown:false}} name="main" component={main} />
                <stack.Screen name="login" component={login} />
                <stack.Screen name="Registre" component={signUp} />
            </stack.Navigator>
        )
    }
}

import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import home from '../screens/home';
import Add from '../screens/add';
import Appotmnt from '../screens/Appointment';

import { MaterialIcons } from '@expo/vector-icons';


import { createStackNavigator } from '@react-navigation/stack';

const stack = createStackNavigator();
export default class homeNavigation extends Component {
  render() {
    return (
      <stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#28696d',

        },
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: '100',

        }

      }} >
        <stack.Screen  name='home'  component={home}
          options={
            {
              title: 'Acceuil',
              headerRight: () =>
                (

                  <View style={{ flexDirection: 'row' }} >
                    <TouchableOpacity style={{ marginRight: 10 }} >
                      <MaterialIcons name='search' size={35} color='#fff' />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginRight: 10 }} >
                      <MaterialIcons name='settings' size={30} color='#fff' />
                    </TouchableOpacity>

                  </View>
                )
            }
          } 
          />

          <stack.Screen name='add' component={Add} options={{title:'Ajouter'}} />
          <stack.Screen name='Appotmnt' component={Appotmnt} options={{title:'Rendez-vous'}} />
      </stack.Navigator>
    )
  }
}

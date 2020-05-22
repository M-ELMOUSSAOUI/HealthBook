import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import home from '../screens/home';
import Add from '../screens/addPages/_add';
import Appotmnt from '../screens/addPages/Appointment';
import All from '../screens/addPages/Allergie';
import Analy from '../screens/addPages/Analysis';
import Cons from '../screens/addPages/Consultaion';
import Med from '../screens/addPages/Medicament';
import Mes from '../screens/addPages/Mesures';
import Radio from '../screens/addPages/Radio';
import Sur from '../screens/addPages/Surgery';
import Vacc from '../screens/addPages/Vaccins';

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
          <stack.Screen name='Analysis' component={Analy} options={{title:'Analyses-vous'}} />
          <stack.Screen name='Allergie' component={All} options={{title:'Allergie'}} />
          <stack.Screen name='Consultation' component={Cons} options={{title:'Consultation'}} />
          <stack.Screen name='Medicament' component={Med} options={{title:'Médicament'}} />
          <stack.Screen name='Mesures' component={Mes} options={{title:'Mesures'}} />
          <stack.Screen name='Radio' component={Radio} options={{title:'Radiologie'}} />
          <stack.Screen name='Surgery' component={Sur} options={{title:'Chirurgies'}} />
          <stack.Screen name='Vaccins' component={Vacc} options={{title:'Vaccins'}} />
      </stack.Navigator>
    )
  }
}

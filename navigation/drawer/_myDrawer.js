import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import { MaterialCommunityIcons, FontAwesome, Fontisto, SimpleLineIcons, FontAwesome5 } from '@expo/vector-icons';


import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import user from '../../assets/user.png';
import firebase from '../../config/firebaseConfig';

//tabs
import tab1 from '../../screens/tabs/tab1';
import tab2 from '../../screens/tabs/tab2';
import tab3 from '../../screens/tabs/tab3';
import tab4 from '../../screens/tabs/tab4';
import tab5 from '../../screens/tabs/tab5';
import tab6 from '../../screens/tabs/tab6';
import tab7 from '../../screens/tabs/tab7';
import tab8 from '../../screens/tabs/tab8';

//drawer screens
import Add from '../../screens/addPages/_add';
import ResMes from './resMesures';
import sports from './sports';
import food from './foods';
import profiles from './profiles';
import exportdata from './exportData';

import home from '../homeNavigation';
const drawer = createDrawerNavigator();
const topTab = createMaterialTopTabNavigator();

export default class _myDrawer extends Component {
    _unSub;
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            userName: '',
            spinner: false,
        }
    }
    logout = () => {
        this.setState({ spinner: true })
        setTimeout(() => {
            firebase.auth()
                .signOut()
                .catch(err => Alert.alert('tt', err.message))
        }, 2000);

    }
    componentDidMount() {

        var user = firebase.auth().currentUser;
        if (user) this.setState({ email: user.email, userName: user.displayName })
    }
    tabs = () => {
        return (
    
          <topTab.Navigator backBehavior='initialRoute' tabBarOptions={{
            showIcon: true,
            showLabel: false,
            scrollEnabled: true,
            tabStyle: { width: 60, alignItems: 'center' }
          }}
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused }) => {
                let color
                focused ? color = '#28696d' : color = 'black';
                switch (route.name) {
                  case 'tab1': return <FontAwesome name='calendar' size={25} color={color} />
    
                  case 'tab2': return <Fontisto name='drug-pack' size={25} color={color} />
    
                  case 'tab3': return <FontAwesome5 name='notes-medical' size={25} color={color} />
    
                  case 'tab4': return <Fontisto name="test-tube" size={24} color={color} />
    
                  case 'tab5': return <Fontisto name="surgical-knife" size={24} color={color} />
    
                  case 'tab6': return <FontAwesome5 name="x-ray" size={20} color={color} />
    
                  case 'tab7': return <FontAwesome5 name="allergies" size={25} color={color} />
    
                  case 'tab8': return <FontAwesome5 name="syringe" size={24} color={color} />
    
                }
    
              }
            })
            }
          >
            <topTab.Screen name='tab1' component={tab1} initialParams={{ title: 'Rendez-vous' }} />
            <topTab.Screen name='tab2' component={tab2} initialParams={{ title: 'Medicaments' }} />
            <topTab.Screen name='tab3' component={tab3} initialParams={{ title: 'Consultations' }} />
            <topTab.Screen name='tab4' component={tab4} initialParams={{ title: 'Analayses' }} />
            <topTab.Screen name='tab5' component={tab5} initialParams={{ title: 'Chirurgies' }} />
            <topTab.Screen name='tab6' component={tab6} initialParams={{ title: 'Radiologies' }} />
            <topTab.Screen name='tab7' component={tab7} initialParams={{ title: 'Allergies' }} />
            <topTab.Screen name='tab8' component={tab8} initialParams={{ title: 'Vaccines' }} />
          </topTab.Navigator>
        )
    
      }
    drawercontent = (props) => {
        return (
            <DrawerContentScrollView {...props}
            >
                
                <Spinner
                    visible={this.state.spinner}
                    animation='fade'
                    textContent={'Chargement...'}
                    overlayColor='rgba(0, 0, 0, 0.5)'
                    textStyle={{ fontSize: 20, color: '#e5ffff' }}
                    color='#fff'
                />
                <View style={styles.sideBarConatainer}>
                    <View style={styles.sideBar}>
                        <View style={styles.userInfo}>
                            <Text style={styles.sideBarTxt} > Bonjour, {this.state.userName}!</Text>
                            <Image source={user} style={styles.img} />
                            <Text style={styles.sideBarTxt}> {this.state.email}  </Text>
                        </View>
                    </View>
                </View>
                <DrawerItemList  
                {...props}
                />

               
            </DrawerContentScrollView>
        )
    }
    render() {
        return (
            <drawer.Navigator
                drawerContent={props => this.drawercontent(props)}
                initialRouteName={'home'}
                drawerContentOptions={{
                    labelStyle:{color:'black',fontWeight:'bold'}                    
                }}
                >
                 <drawer.Screen name='Add' component={home} options={{ title: 'Ajouter',drawerIcon:()=><FontAwesome5 name="plus" size={24} color="black" />}} />
                <drawer.Screen name='home' children={this.tabs} options={{ title: 'Consulter',drawerIcon:()=><MaterialCommunityIcons name="file-eye" size={24} color="black" />}} />
                <drawer.Screen name='mes' component={ResMes} options={{ title: 'Mesures',drawerIcon:()=><SimpleLineIcons name="graph" size={24} color="black" />}}  />
                <drawer.Screen name='sport' component={sports} />
                <drawer.Screen name='foods' component={food} options={{ title: 'Regime',drawerIcon:()=><MaterialCommunityIcons name="food-apple" size={24} color="black" />}}  />
                <drawer.Screen name='profiles' component={profiles} options={{ title: 'Profiles',drawerIcon:()=><FontAwesome5 name="users" size={23} color="black" />}} />
                <drawer.Screen name='export' component={exportdata} />

            </drawer.Navigator>
        )
    }
}

const styles = StyleSheet.create({
    sideBarConatainer: {
        marginTop: -8,
    },
    sideBar: {
        height: 250,
        paddingTop: 20,
        borderWidth: 1,
        backgroundColor: '#67b7bc',
    },
    userInfo: {
        alignItems: "center",
        justifyContent: 'center',

    },
    img: {
        borderRadius: 60,
        borderWidth: 2,
        borderColor: "#fff",
    },
    sideBarTxt: {
        fontSize: 20,
        fontWeight: '100',
        margin: 10
    }

})

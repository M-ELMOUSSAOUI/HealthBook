import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import user from '../../assets/user.png';
import firebase from '../../config/firebaseConfig';

//tabs
import tab1 from '../../screens/tabs/tab1';
import tab2 from '../../screens/tabs/tab2';
import tab3 from '../../screens/tabs/tab3';
import tab4 from '../../screens/tabs/tab4';

//drawer screens
import resMesures from './resMesures';
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
        this.setState({ email: user.email, userName: user.displayName })
    }
    tabs = () => {
        return (
            <topTab.Navigator backBehavior='initialRoute'>
                <topTab.Screen name='tab1' component={tab1} />
                <topTab.Screen name='tab2' component={tab2} />
                <topTab.Screen name='tab3' component={tab3} />
                <topTab.Screen name='tab4' component={tab4} />
            </topTab.Navigator>
        )

    }
    drawercontent = (props) => {
        return (
            <DrawerContentScrollView {...props}>
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
                            <Text style={styles.sideBarTxt} > {this.state.userName}</Text>
                            <Image source={user} style={styles.img} />
                            <Text style={styles.sideBarTxt}> {this.state.email}  </Text>
                        </View>
                    </View>
                </View>
                <DrawerItem
                    itemStyle={{borderWidth:2}}
                    label='Accueil'
                    onPress={()=>props.navigation.navigate('home')}
                />
                <DrawerItem
                    itemStyle={{borderWidth:2}}
                    label='Votre mésures'
                    onPress={()=>props.navigation.navigate('mes')}
                />
                <DrawerItem
                    itemStyle={{borderWidth:2}}
                    label='Régimes Alimentaire'
                    onPress={()=>props.navigation.navigate('foods')}
                />
                <DrawerItem
                    itemStyle={{borderWidth:2}}
                    label='Activités sportives'
                    onPress={()=>props.navigation.navigate('sport')}
                />
                <DrawerItem
                    itemStyle={{borderWidth:2}}
                    label='Profiles'
                    onPress={()=>props.navigation.navigate('profiles')}
                />
                <DrawerItem
                    itemStyle={{borderWidth:2}}
                    label='Exporter vers PDF'
                    onPress={()=>props.navigation.navigate('export')}
                />
                <DrawerItem
                    itemStyle={{borderWidth:2}}
                    label='Deconnexion'
                    onPress={()=>this.logout()}
                />
            </DrawerContentScrollView>
        )
    }
    render() {
        return (
            <drawer.Navigator
                drawerContent={props => this.drawercontent(props)}
                initialRouteName={'home'} >
                <drawer.Screen name='home' component={home} options={{ title: 'Acceuil' }} />
                <drawer.Screen name='mes' component={this.tabs} />
                <drawer.Screen name='sport' component={sports} />
                <drawer.Screen name='foods' component={food} />
                <drawer.Screen name='profiles' component={profiles} />
                <drawer.Screen name='export' component={exportdata} />

            </drawer.Navigator>
        )
    }
}

const styles = StyleSheet.create({
    sideBarConatainer: {
        borderWidth: 1,
        margin: -8,
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

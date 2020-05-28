import React, { Component } from 'react'
import { Text, StyleSheet, View,TouchableOpacity } from 'react-native';
import { Ionicons,FontAwesome5 } from '@expo/vector-icons';


export default class tab7 extends Component {
    render() {
        return (
            <View style={styles.container} >
                <Text style={styles.title}> {this.props.route.params.title} </Text>
                <View style={styles.addBtn}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Allergie')}>
                    <FontAwesome5 name="allergies" size={45} color='white' />
                    <Ionicons style={{ position: 'absolute', top: -3,left:-9 }} name="md-add" size={30} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
        container:{
            flex:1,
            alignItems:'center'
        },
        addBtn: {
            width: 70,
            height: 70,
            borderColor:'powderblue',
            borderWidth: 2,
            borderRadius: 50,
            flexDirection: 'row',
            position: 'absolute',
            bottom: 20,
            right: 13,
            backgroundColor: '#28696d',
            justifyContent:'center',
            alignItems:'center'
        },
        title:{
            fontSize:25,
            fontWeight:'bold',
            marginTop:10,
        }
})

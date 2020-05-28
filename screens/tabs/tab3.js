import React, { Component } from 'react'
import { Text, StyleSheet, View,TouchableOpacity } from 'react-native';
import { Ionicons,FontAwesome5 } from '@expo/vector-icons';


export default class tab3 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}> {this.props.route.params.title} </Text>
                <View style={styles.addBtn}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Consultation')}>
                    <FontAwesome5 style={{marginLeft:10}} name='notes-medical' size={39} color={'white'} />
                    <Ionicons style={{ position: 'absolute',left:'-25%'}} name="md-add" size={29} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    title:{
        fontSize:25,
        fontWeight:'bold',
        marginTop:10,
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
});

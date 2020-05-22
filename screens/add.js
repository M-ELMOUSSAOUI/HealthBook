import React, { Component } from 'react'
import { Text, StyleSheet, View,Button,FlatList } from 'react-native'
import { TextInput } from 'react-native-paper'

export default class add extends Component {
    _renderItem = ({item,index})=>{
        return(
            <View>
                <Text> this._getItemText </Text>
            </View>
        )
    }

    _getItemText = (index)=>{
        return 'Rendez-vous2';
    }
    render() {
        return (
            <View style={styles.container} >
                <Button title='Rendez-vous pages -->' onPress={()=>this.props.navigation.push('Appotmnt')} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

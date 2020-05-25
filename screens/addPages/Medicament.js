import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity} from 'react-native'
import logo from './addPageIcons/medicine.png';
import { appStyle } from '../../styles/globalStyle';
import { Input } from 'react-native-elements'
import * as Animatable from 'react-native-animatable';
import FontAwesome from '@expo/vector-icons/FontAwesome';


export default class Medicament extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nommedicament: '',
            unite:'',
            apartir:'',
            jusqua:'',
            nbunite:'',
            horaire:''
        } }
    render() {
        return (
            <View style={styles.container} >
            <View style={{ marginBottom: 30 }} >
            <Animatable.Image
                source={logo}
                animation="pulse"
                easing="ease-out"
                iterationCount="infinite" />
                 </View>
                 <TextInput
             style={appStyle.input}
             placeholder='Nom de medicament'
             autoCapitalize='none'
             underlineColorAndroid='transparent'
             onChangeText={(nommedicament) => this.setState({nommedicament})}
             value={this.state.nommedicament}
         />
<TextInput
             style={appStyle.input}
             placeholder='Unite'
             autoCapitalize='none'
             underlineColorAndroid='transparent'
             onChangeText={(unite) => this.setState({unite})}
             value={this.state.unite}
         />
         <TextInput
             style={appStyle.input}
             rightIcon={<FontAwesome name={'calendar'} size={28} color={'#28696d'} />}
             placeholder='A partir le jj/mm/aaaa'
             autoCapitalize='none'
             underlineColorAndroid='transparent'
             onChangeText={(apartir) => this.setState({apartir})}
             value={this.state.apartir}
         />
          <TextInput
             style={appStyle.input}
             rightIcon={<FontAwesome name={'calendar'} size={28} color={'#28696d'} />}
             placeholder="Jusqu'a le jj/mm/aaaa"
             autoCapitalize='none'
             underlineColorAndroid='transparent'
             onChangeText={(jusqua) => this.setState({jusqua})}
             value={this.state.jusqua}
         />
         <TextInput
             style={appStyle.input}
             placeholder="Nombre d'unite"
             autoCapitalize='none'
             underlineColorAndroid='transparent'
             onChangeText={(nbunite) => this.setState({nbunite})}
             value={this.state.nbunite}
         />
         <TextInput
             style={appStyle.input}
             rightIcon={<FontAwesome name={'time'} size={28} color={'#28696d'} />}
             placeholder="Horaire de prendre"
             autoCapitalize='none'
             underlineColorAndroid='transparent'
             onChangeText={(horaire) => this.setState({horaire})}
             value={this.state.horaire}
         />
          <Text style= 'bold'> Notification </Text>
          <TouchableOpacity style={appStyle.button} onPress={this.Medicament}>
                    <Text style={appStyle.btnText} > Enregistrer </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    
   
})

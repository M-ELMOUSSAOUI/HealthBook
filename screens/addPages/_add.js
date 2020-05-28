import React, { Component } from 'react'
import { Text, StyleSheet, View,TouchableOpacity,FlatList, Image } from 'react-native'
//import icon
import cal from './addPageIcons/calendar.png';
import cons from './addPageIcons/doctor.png';
import analy from './addPageIcons/hospital.png';
import radio from './addPageIcons/radiology.png';
import surg from './addPageIcons/surgery.png';
import vacc from './addPageIcons/vaccine.png';
import med from './addPageIcons/medicine.png';
import mes from './addPageIcons/calories.png';
import all from './addPageIcons/allergy.png';



const pageList=[
    {name:'Appotmnt',title:'Rendez-vous',icon:cal,key:'1'},
    {name:'Consultation',title:'Consultation',icon:cons,key:'2'},
    {name:'Analysis',title:'Analyses',icon:analy,key:'3'},
    {name:'Radio',title:'Radiologie',icon:radio,key:'4'},
    {name:'Surgery',title:'Chirurgie',icon:surg,key:'5'},
    {name:'Vaccins',title:'Vaccins',icon:vacc,key:'6'}, 
    {name:'Medicament',title:'Médicament',icon:med,key:'7'}, 
    {name:'Allergie',title:'Allergie',icon:all,key:'8'},
    {name:'Mesures',title:'Mesures',icon:mes,key:'9'},
]
export default class _add extends Component {
    render() { 
        return (
            <View style={styles.container}>
                 <View style={styles.gridContainer}>
                <FlatList 
                    numColumns={3}
                    data={pageList}
                    renderItem={({item})=>(
                            <TouchableOpacity style={styles.item} 
                            onPress={()=>this.props.navigation.push(item.name)}>
                                <Image source={item.icon} style={styles.image} />
                                <Text style={styles.txtItem}> {item.title} </Text>
                            </TouchableOpacity>
                    )
                }
                />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
    },
    item:{
        marginVertical:50,
        marginHorizontal:15,
        width:90,
        height:90,
        alignItems:'center',
        justifyContent:'center'
    },
    gridContainer:{
        marginTop:30,
        
    },
    txtItem:{
        color:'#28696d',
        fontWeight:'bold',
        position:'absolute',
        bottom:0
    },
    image:{
        width:80,
        height:80,
        position:'absolute',
        top:-8,
    }
})

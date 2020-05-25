import {StyleSheet, Dimensions} from 'react-native';
const {width : WIDTH} = Dimensions.get('window');

export const appStyle = StyleSheet.create({
    input:{
        width: WIDTH - 55,
        height: 30,
        borderRadius: 6,
        fontSize: 16,
        paddingLeft: 45,
        borderWidth:1,
        marginHorizontal: 25,
        borderColor:'#28696d',
        margin:10
    },
    inputContainer:{
        marginTop: 10
    },
    button:{
        width: WIDTH - 200,
        height: 45,
        borderRadius: 25,
        backgroundColor: '#28696d',
        justifyContent:'center',
        marginTop: 20
    },
    btnText:{
        fontSize:20,
        color:'#fff',
        textAlign:'center'
    },
    inputIcon:{
        position:'absolute',
        top: 20,
        left: 37
    },
    logo:{
        width: 120,
        height: 120
    },
    btnEye:{
        position:'absolute',
        top: 18,
        right: 37
      },

})
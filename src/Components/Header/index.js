import React, { Component } from 'react'
//import {  } from '../../Components'
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    Image,
    ActivityIndicator,
    StatusBar
} from 'react-native'
const Header = ({
    title = "Header Title"
}) =>{
        return(
            <View style = {{
                width : '100%',
                backgroundColor : 'white',
                elevation : 2
            }}>
                <Text style = {{fontSize : 20, padding : 17, textAlign : "center"}}>{title}</Text>
            </View>
            )
        }
export default Header

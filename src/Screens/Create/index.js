import React, { Component } from 'react'
import { Header } from '../../Components'
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    Image,
    ActivityIndicator,
    StatusBar,
    TextInput
} from 'react-native'

import axios from 'axios'

export default class Create extends Component {
    state = {
        name : '',
        quote : ''
    }

    create = () => {
        const quotesPack = {
            name : this.state.name,
            quote : this.state.quote
        }

        axios.post('http://192.158.22.103:5000/quotes/create', quotesPack)
        .then(res => alert(res.data));
    }

    render(){
       
        return(
            <View>   
                <Header title = "Create"/>             
                <TextInput placeholder = "Name" onChangeText = {
                    (name)=>{this.setState({name})}
                }/>
                <TextInput placeholder = "Quote" onChangeText = {
                    (quote)=>{this.setState({quote})}
                }/>
                <TouchableOpacity style = {{borderRadius : 50, backgroundColor : 'lightblue',}} onPress = {this.create}>
                    <Text style = {{
                        fontSize : 20,
                        textAlign : "center",
                        padding : 10,
                        color : 'white',
                        fontWeight : "bold"
                    }}>
                        Add
                    </Text>
                </TouchableOpacity>
                
            </View>
            )
        }
    }
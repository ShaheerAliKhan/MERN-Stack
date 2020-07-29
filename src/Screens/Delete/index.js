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
    TextInput
} from 'react-native'
import axios from 'axios'

export default class Delete extends Component {
    state = {
        quote : ""
    }
    delete = () => {
        const quotesPack = {
            quote : this.state.quote,
        }

        axios.post('http://192.158.22.103:5000/quotes/delete', quotesPack)
        .then(res => alert(res.data));
    }
    render(){
        console.log(this.state.quote)
        return(
            <View>
                <Header title = "Delete"/>
                <TextInput placeholder = "Quote" onChangeText = {
                    (quote)=>{this.setState({quote})}
                }/>
                <TouchableOpacity style = {{borderRadius : 50, backgroundColor : 'lightblue',}}  onPress = {this.delete}>
                    <Text style = {{
                        fontSize : 20,
                        textAlign : "center",
                        padding : 10,
                        color : 'white',
                        fontWeight : "bold"
                    }}>
                        Delete
                    </Text>
                </TouchableOpacity>
            </View>
            )
        }
    }
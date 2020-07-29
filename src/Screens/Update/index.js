import React, { Component } from 'react'
import {  Header} from '../../Components'
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

export default class Update extends Component {
    state = {
        oldVal : '',
        newVal : ''
    }

    update = () => {
        const quotesPack = {
            oldQuote : this.state.oldVal,
            newQuote : this.state.newVal
        }

        axios.post('http://192.158.22.103:5000/quotes/update', quotesPack)
        .then(res => alert(res.data));
    }
    render(){
        return(
            <View>
                <Header title = {"Update"} />
                <TextInput placeholder = "Old Quote" onChangeText = {
                    (oldVal)=>{this.setState({oldVal})}
                }/>
                <TextInput placeholder = "New Quote" onChangeText = {
                    (newVal)=>{this.setState({newVal})}
                }/>
                <TouchableOpacity style = {{borderRadius : 50, backgroundColor : 'lightblue',}} onPress = {this.update}>
                    <Text style = {{
                        fontSize : 20,
                        textAlign : "center",
                        padding : 10,
                        color : 'white',
                        fontWeight : "bold"
                    }}>
                        Update
                    </Text>
                </TouchableOpacity>
            </View>
            )
        }
    }
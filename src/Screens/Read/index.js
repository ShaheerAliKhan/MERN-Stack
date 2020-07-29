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
    FlatList,
    Dimensions
} from 'react-native'
export default class Read extends Component {
    state = {
        data : []
    }

list = () => {
    fetch('http://192.158.22.103:5000/quotes/read',{
        method : "GET",
        header : {
            'Accept' : 'application/json',
            'Content-type' : 'application/json'
            }
         })
    .then((response)=>response.json())
    .then((responseJson)=>{
        this.setState({data : responseJson})
        // console.log(responseJson)
    })
    return this.state.data.map((data)=>{
        return(
       
                
                <ScrollView>
                    <View style = {{textAlign :"center", borderStyle : "solid",borderColor : "#707070", borderWidth : 1}}>
                        <View style = {{flexDirection : "row", flex : 1}}>
                            <View style = {{flex : 0.5}}>
                                <Text style = {{
                                    fontSize : 20, 
                                }}>{data.name}</Text>
                            </View>
                            <View style = {{flex : 0.5}}>
                                <Text style = {{
                                    fontSize : 20,
                                }}>{data.quote}</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
      
        )
    })
}
    render(){
        return(
            <View>
                <Header title = "Read"/>
                <View style = {{marginBottom : 10}}></View>
                {this.list()}
            </View>
            )
        }
    }
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Create from './src/Screens/Create'
import Read from './src/Screens/Read'
import Update from './src/Screens/Update'
import Delete from './src/Screens/Delete'


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerRoutes() {
  return (
      <Drawer.Navigator>
        <Drawer.Screen name = "Create" component = { Create }/>
        <Drawer.Screen name = "Read" component = { Read }/>
        <Drawer.Screen name = "Update" component = { Update }/>
        <Drawer.Screen name = "Delete" component = { Delete }/>
      </Drawer.Navigator>
  );
}


export default class App extends Component {
  render(){
    return (
        <NavigationContainer>
          <View style={{flex: 1,backgroundColor: '#fff'}}>
            <Stack.Navigator headerMode = {"none"}>
              <Stack.Screen name = "Create" component = {DrawerRoutes}/>
            </Stack.Navigator>
          </View>
        </NavigationContainer>
     )
  } 
}


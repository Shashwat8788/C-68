import { StyleSheet, Text, View } from 'react-native';
import React,{Component} from 'react';  
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Searchscr from '../screens/search';
import Transactionscr from '../screens/transaction';

const Tab = createBottomTabNavigator();

export default class BottomNavigator extends Component {
  render(){
    return (
      <View>
        <NavigationContainer> 
          <Tab.Navigator>  
            <Tab.Screen name = 'Search' component = 'Searchscr'/>
            <Tab.Screen name = 'Transaction' component = 'Transactionscr'/>
          </Tab.Navigator>

        </NavigationContainer>
      </View>
    );

  }
  
}
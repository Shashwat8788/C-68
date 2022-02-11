import { StyleSheet, Text, View } from 'react-native';
import React,{Component} from 'react';  
import BottomNavigator from './Component/bottomtab';

export default class App extends Component {
  render(){
    return (
      <View style = {styles.container}>
        <Text> Wily App </Text>
        <BottomNavigator/>
      </View>
    );

  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  }});
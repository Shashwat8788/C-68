import { StyleSheet, Text, View } from 'react-native';
import React,{Component} from 'react';  

export default class Transactionscr extends Component {
  render(){
    return (
      <View style = {styles.container}>
        <Text style = {styles.textstyle}> Transaction Screen </Text>
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
  }, 
  textstyle: {
     fontSize:20,
     color:'orange'

  }

});
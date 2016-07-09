import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  Text,
} from 'react-native';
module.exports = {
  LeftButton(route, navigator, index, navState) {
    if(index > 0) {
      return (
      <TouchableHighlight style={{marginTop: 10}} onPress={() => {
            if (index > 0) {
              navigator.pop();
            } 
        }}>
       <Text>Back</Text>
     </TouchableHighlight>
   )} else {
   return null}
   },
   RightButton(route, navigator, index, navState) {
      return null;
   },
   Title(route, navigator, index, navState) {
      return <Text style={ styles.navBarText }>Hello From My App!</Text>
   }
};

const styles = StyleSheet.create({
  navBarText: {
    fontSize: 16,
    marginVertical: 10,
  },
});

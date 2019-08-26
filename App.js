import React, { Component } from 'react';
import {View} from 'react-native';
import Navigation from './src/screens/Navigation';
import Header from "./src/components/Header";
export default class App extends Component{
  render() {
    return (
        <View style={{flex:1}}>
          <Header/>
          <Navigation/>
        </View>
    );
  }
}

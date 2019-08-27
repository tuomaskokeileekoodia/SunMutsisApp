import React, { Component } from 'react';
import {View} from 'react-native';
import HomeScreen from "./src/screens/HomeScreen";
import Navigation from "./src/screens/Navigation";

export default class App extends Component{
  render() {
      const {navigate} = this.props.navigation;
      const dbclient = this.props.navigation.getParam('dbclient');
      console.log("AppJS", dbclient);
    return (
        <View style={{flex:1}}>
            <Navigation screenProps={{dbclient:dbclient}} dbclient={dbclient} />
        </View>
    );
  }
}

import React, {Component} from 'react';
import { StyleSheet, View, Button, BackHandler} from 'react-native';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Main from "../components/Main";

export default class HomeScreen extends Component {

    render() {
        const {navigate}=this.props.navigation;
        const tasks = this.props.navigation.getParam('tasks','ei tullu mitään');
        const testi =  'testi';
    return (
        <View>
            <Main tasks={tasks} {...this.props}/>
            <Footer testi={testi} {...this.props} />
        </View>
    );
}};

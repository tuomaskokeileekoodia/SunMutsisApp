import React, {Component} from 'react';
import { StyleSheet, View, Button, BackHandler} from 'react-native';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Main from "../components/Main";

export default class HomeScreen extends Component {

    render() {
        const {navigate}=this.props.navigation;
        const tasks = this.props.navigation.getParam('tasks','ei tullu mitään');
        const insertTask =  this.props.navigation.getParam('insertTask');
        const deleteTask =  this.props.navigation.getParam('deleteTask');
    return (
        <View>
            <NavBar/>
            <Main tasks={tasks} deleteTask={deleteTask} {...this.props}/>
            <Footer {...this.props} insertTask={insertTask}/>
        </View>
    );
}};
//etsi style joka hävittää buttonin
//
const styles = StyleSheet.create({
    text:{
        fontSize: 30
    },
    saatanallinenTeksti:{
        fontSize: 50,
        color: 'red'
    }
});





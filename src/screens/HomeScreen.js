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
            <NavBar/>
            <Main tasks={tasks} {...this.props}/>
            {/*<Text style={styles.saatanallinenTeksti}>Ystävä</Text>*/}
            <Footer testi={testi} {...this.props} />
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





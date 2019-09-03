import { Stitch, AnonymousCredential, StitchAppClientConfiguration, RemoteMongoClient } from 'mongodb-stitch-react-native-sdk';
const MongoDB = require('mongodb-stitch-react-native-services-mongodb-remote');
import RNCommunityAsyncStorage from "../RNCommunityAsyncStorage";
import React, {Component} from 'react';
import {View, Button, StyleSheet, ImageBackground, TouchableOpacity, Text} from 'react-native';




class LoginScreen extends Component {
    state = {};
    componentDidMount() {
        this.loadClient();
    }


    loadClient = () => {
        Stitch.initializeDefaultAppClient(
            "sunmutsisapp-zcbch", new StitchAppClientConfiguration.Builder().withStorage(new RNCommunityAsyncStorage()).build()).then(
            client => {
                this.setState( { client });
                const dbClient = client.getServiceClient(RemoteMongoClient.factory, "sunmutsisservice");
                this.setState({db : dbClient.db("sunmutsisdatabase")});
            })};
    authenticate() {
        return Stitch.defaultAppClient.auth.loginWithCredential(new AnonymousCredential())
            .then(user => {
                console.log(`Logged in as anonymous user with id: ${user.id}`);
                return user.id;
            })
            .catch(err=>console.error(err));
    }

    render() {

        const {navigate} = this.props.navigation;
        return (

                <View>
                    <ImageBackground source={require('../assets/mutsit.jpg')} style={{width: '100%', height: '100%', resizeMethod: 'cover', opacity: 0.8, zIndex: 1}}>
                    </ImageBackground>
                    <View style={styles.button}>
                        <TouchableOpacity onPress={
                            () => this.authenticate().then(
                                () => navigate('App', {dbclient: this.state.db}))} title={'KIRJAUDU SISÄÄN'}>
                            <Text style={styles.text}>
                                Aloita
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
        );
    }
}
const styles = StyleSheet.create({
    button: {
        //zIndex: 22
        flex: 1,
        marginTop: 300,
        position: 'absolute',
        alignItems: 'center',
        borderColor: '#46529c',
        //borderWidth: 5,
        width: 150,
        height: 75,
        //width: '80%',
        borderRadius: 10,
        //marginHorizontal: '50%',
        //bottom: '25%',
        //top: 0,
        left: 132,
        //right: '50%',
        zIndex: 21,
        justifyContent: 'center',
        backgroundColor: '#46529c',
    },
    text: {
        position: 'relative',
        alignItems: 'center',
        fontFamily: 'monospace',
        color: '#FFF',
        textAlign: 'center',
        //justifyContent: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    }
});

export default LoginScreen;
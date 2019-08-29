import { Stitch, AnonymousCredential, StitchAppClientConfiguration, RemoteMongoClient } from 'mongodb-stitch-react-native-sdk';
const MongoDB = require('mongodb-stitch-react-native-services-mongodb-remote');
import RNCommunityAsyncStorage from "../RNCommunityAsyncStorage";
import React, {Component} from 'react';
import { View,Button, StyleSheet } from 'react-native';




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

            <View style={styles.button}>

                    <Button onPress={this.authenticate} title={'AUTENTIKOI'}/>
                    <Button onPress={
                    () => this.authenticate().then(
                        () => navigate('App', {dbclient: this.state.db}))} title={'KIRJAUDU SISÄÄN'}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    button: {
        marginTop: 300,
    },
});

export default LoginScreen;
//hakee käyttäjän nykyisen sijainnin koordinaatit jsonina, Getlocation React-nativen oma metodi.
// nyt toimii buttonilla, lienee tarve muuttaa (sanna)

import React, { Component } from 'react';
import GetLocation from 'react-native-get-location';
import {StyleSheet, Text, View, Button, Alert, ActivityIndicator,} from 'react-native';

export default class GetCurrentLocation extends Component{
    state = {
        location: null,
        loading: false,
    }

    requestLocation = () => {
        this.setState({ loading: true, location: null });

        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 150000,
        })
            .then(location => {
                this.setState({location, loading: false,});
            })
            .catch(ex => {
                const { code, message } = ex;
                console.warn(code, message);
                if (code === 'SIJAINTI EI SAATAVILLA') {
                    Alert.alert('sijainnin haku ei mahdollista juuri nyt');
                }
                this.setState({
                    location: null,
                    loading: false,
                });
            });
    }

    render() {
        const { location, loading } = this.state;
        return (
            <View style={styles.container}>
                <Text style={styles.instructions}>Hae nykyinen sijainti:</Text>
                <View style={styles.button}>
                    <Button disabled={loading} title="sijainti" onPress={this.requestLocation}/>
                </View>
                {loading ? (
                    <ActivityIndicator />
                ) : null}
                {location ? (
                    <Text style={styles.location}>
                        {JSON.stringify(location.longitude)}
                {'\n'}
                {JSON.stringify(location.latitude)}
                    </Text>
                ) : null}
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    location: {
        color: '#333333',
        marginBottom: 5,
    },
    button: {
        marginBottom: 8,
    }
});
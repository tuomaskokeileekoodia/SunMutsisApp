//Headerin Menubuttonia painettaessa esiin tuleva valikko. (Sanna)
//Toiminnot: Esittää vaihtoehdot logout, lisää paikka, vaihda paikka yms.. ja navigoi vaihtoehtoa klikatessa valittuun näkymään. (Sanna)

import React, {Component} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

export default class HomeScreen extends React.Component {

    render() {
        const {navigate}=this.props.navigation;
        return (
            <View>
                <Text>TOIMIIKO NAVIGAATIO?</Text>
            </View>
        );
    }}



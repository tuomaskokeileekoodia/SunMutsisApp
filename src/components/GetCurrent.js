import React, { Component } from 'react';
import GetLocation from 'react-native-get-location';
import {Alert} from 'react-native';
//funktio joka palauttaa nykyisen sijainnin
export const GetCurrent = () => {

    return GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 150000,
    })
        .then(location => {
            return location;
        })
        .catch(ex => {
            const {code, message} = ex;
            console.warn(code, message);
            if (code === 'SIJAINTI EI SAATAVILLA') {
                Alert.alert('sijainnin haku ei mahdollista juuri nyt');
            }})};
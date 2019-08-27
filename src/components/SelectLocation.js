//Vetovalikko, josta voi valita sijainnin uudelle taskille (sanna )

import React, { Component } from 'react';
import { Dropdown } from 'react-native-material-dropdown';

export default class SelectLocation extends Component {
    render() {
        let data = [{
            value: 'Koti',
        }, {
            value: 'Työ',
        }, {
            value: 'wtf',
        }];

        return (
            <Dropdown label='Valitse sijainti' data={data}/>
        );
    }
}




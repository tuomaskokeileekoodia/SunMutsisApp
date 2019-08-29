import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, CheckBox} from 'react-native';
import { Icon } from "react-native-elements";  // tätä käytetään TOuchableOpacity/deletemetodissa, pitäisi näkyä roskakori ( samu )

// Propseina todo:n päivämäärä, "nimi" sekä delete-näppäin (Tuomas)
export default class Task extends React.Component {
    //Constructor luotu pelkästään CheckBoxin toiminnallisuuden toteuttamisen vuoksi.
    // CheckBoxin klikkaaminen toteuttaa "checkBoxText"-funktion.
    // Funktio tarkistaa CheckBoxin tämänhetkisen staten, ja muuttaa sen käänteiseksi,
    // eli Truesta False ja Falsesta True. (Tuomas)

    constructor() {
        super();
        this.state = {
            checked: false
        }
    }
    checkBoxTest() {
        this.setState({
            checked:!this.state.checked
        });
        this.props.updateTask({_id: this.props.val._id},{aihe: this.props.val.aihe,
            kuvaus: this.props.val.kuvaus,
            deadline: this.props.val.deadline,
            sijainti: this.props.val.sijainti,
            checked: !this.state.checked});
    };

    render() {
        const {navigate}=this.props.navigation;
        const showSaveAndAddPlaceButton = false;
        return (

            <View key={this.props.keyval} style={styles.note}>


                <CheckBox style={styles.checkbox} value={this.state.checked} onChange={()=> this.checkBoxTest() } />

                <TouchableOpacity onPress={() => navigate('AddTask',{id: JSON.stringify(this.props.val._id), task: this.props.val.aihe,
                    showSaveAndAddPlaceButton: showSaveAndAddPlaceButton, updateTask: this.props.updateTask, taskId: this.props.val._id})} >
                    <Text style={this.state.checked ? styles.noteTextCompleted : styles.noteText}>{this.props.val.aihe}</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
                    <Icon style={styles.noteDeleteText}
                          name="delete"
                          color='#46529c'
                          opacity={0.5}
                    />
                </TouchableOpacity>
            </View>



        );
    }
}

const styles = StyleSheet.create({
    note: {
        position: 'relative',
        flexDirection: 'row',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth: 2,
        borderBottomColor: '#46529c',
    },
    noteText: {
        paddingLeft: 10,
        fontSize: 18,
    },
    noteTextCompleted: {
        paddingLeft: 10,
        fontSize: 18,
        color:'#000',
        opacity:.30,
    },
    noteDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'blue',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10,
    },
    noteDeleteText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
    checkbox: {
        // backgroundColor: 'red',
    }
});
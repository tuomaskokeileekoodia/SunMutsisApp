import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, CheckBox} from 'react-native';


// Propseina todo:n päivämäärä, "nimi" sekä delete-näppäin (Tuomas)
export default class Task extends React.Component {

    //Constructor luotu pelkästään CheckBoxin toiminnallisuuden toteuttamisen vuoksi.
    // CheckBoxin klikkaaminen toteuttaa "checkBoxText"-funktion.
    // Funktio tarkistaa CheckBoxin tämänhetkisen staten, ja muuttaa sen käänteiseksi,
    // eli Truesta False ja Falsesta True. (Tuomas)

    constructor() {
        super();
        this.state = {
            check: false
        }
    }

    checkBoxTest() {
        this.setState({
            check:!this.state.check
        })
    }


    render() {
        const {navigate}=this.props.navigation;
        const showSaveAndAddPlaceButton = false;
        return (

            <View key={this.props.keyval} style={styles.note}>


                <CheckBox style={styles.checkbox} value={this.state.check} onChange={()=> this.checkBoxTest() } />

                  <TouchableOpacity onPress={() => navigate('AddTask',{id: JSON.stringify(this.props.val._id), task: this.props.val.task,
                      showSaveAndAddPlaceButton: showSaveAndAddPlaceButton})} >
                <Text style={styles.noteText}>{JSON.stringify(this.props.val._id)}</Text>
                <Text style={styles.noteText}>{this.props.val.task}</Text>
                  </TouchableOpacity>


                <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
                    <Text style={styles.noteDeleteText}>X</Text>
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
        borderBottomColor: '#ededed',
    },
    noteText: {
        paddingLeft: 10,
    },
    noteDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
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
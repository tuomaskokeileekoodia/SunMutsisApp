import React from 'react';
import {Text, View, TextInput, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';


// Main- ja Task -luokat korvaavat aiemman MainComponent -luokan (Tuomas)
// Task.js:ssä propseina näytettävien todo:n päivämäärä, "nimi" sekä delete-näppäin (Tuomas)
import Task from './Task';

export default class Main extends React.Component {


    render() {
        const tasks = this.props.tasks.map((val, key) => {
            return <Task key={key} keyval={key} val={val} deleteTask={this.props.deleteTask} updateTask={this.props.updateTask}{...this.props}/>
        });



        return (
            <View>
                <ScrollView style={styles.scrollContainer}>
                    {tasks}
                </ScrollView>

            </View>
        );
    }

    onPressDeleteButton() {
        alert('You DELETED a task! Did you really complete it? Be honest!')
    }

}

const styles = StyleSheet.create({
    scrollContainer: {
        // flex: 1,
        marginBottom: 100,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        // zIndex: 10,
    },
    textInput: {
        alignSelf: 'stretch',
        color: '#fff',
        padding: 20,
        backgroundColor: '#252525',
        borderTopWidth: 2,
        borderTopColor: '#ededed',
    },
    addButton: {
        position: 'absolute',
        // zIndex: 11,
        right: 20,
        bottom: 0,
        backgroundColor: 'black',
        width: 60,
        height: 60,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        // elevation: 8,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 32,
    },
});
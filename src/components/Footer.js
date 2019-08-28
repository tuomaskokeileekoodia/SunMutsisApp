import React, {Component}  from 'react';
import {Text, StyleSheet, View, TouchableHighlight, Button, TouchableOpacity} from 'react-native';

export default class Footer extends Component{
    render() {
        const { navigate } = this.props.navigation;
        const showEditButton = false;
        return (
            <View>
                <TouchableOpacity style={styles.addButton} underlayColor='#ff7043' onPress={()=>navigate('AddTask', {insertTask: this.props.insertTask})}>
                    <Text style={{fontSize: 50, color: 'white'}}>+</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    addButton: {
        backgroundColor: '#ff9f00',
        borderColor: '#9c4646',
        borderWidth: 1,
        height: 60,
        width: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 40,
        // left: 0,
        right: 10,
        zIndex: 20,
        // top: 480,
        // left: 290,
        shadowColor: "#9c4646",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0
        }
    },
});

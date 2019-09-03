import React, {Component}  from 'react';
import {Text, StyleSheet, View, TouchableHighlight, Button, TouchableOpacity} from 'react-native';
import { Icon} from "react-native-elements";

export default class Footer extends Component{
    render() {
        const { navigate } = this.props.navigation;
        const showEditButton = false;
        return (
            <View>
                <TouchableOpacity style={styles.addButton} onPress={()=>navigate('AddTask', {insertTask: this.props.insertTask})}>
                    <Icon
                        raised
                        reverse
                        borderWidth={1}
                        name='add-circle'
                        color='#f48e10'
                        size={30}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    addButton: {
        backgroundColor: 'transparent',
      //  borderColor: '#f48e10',
        //borderWidth: 1,
        // height: 60,
        //width: 60,
        borderRadius: 30,
        //alignItems: 'flex-end',
        //justifyContent: 'flex-end',
        //borderTopWidth: 0,
        //borderBottomWidth: 1,
        position: 'absolute',
        bottom: 100,
        left: '80%',
        //right: '10%',
        zIndex: 21,
        justifyContent: 'flex-end',
        // top: 480,
        // left: 290,
        //shadowColor: "#9c4646",
        //shadowOpacity: 0.8,
        //shadowRadius: 2,
        //shadowOffset: {
        //height: 1,
        //width: 0
        //}
    },
});

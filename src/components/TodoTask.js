import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View
} from 'react-native';

export default class TodoTask extends Component {
    render() {
        return(
            <View style={styles.rowContainer}>
                <View style={styles.rowText}>
                    <Text style={styles.nimi} numberOfLines={2} ellipsizeMode ={'tail'}>
                        {this.props.nimi}
                    </Text>
                    <Text style={styles.sisalto} numberOfLines={1} ellipsizeMode ={'tail'}>
                        {this.props.sisalto}
                    </Text>
                    <Text style={styles.deadline} numberOfLines={1} ellipsizeMode ={'tail'}>
                        {this.props.deadline}
                    </Text>
                    <Text style={styles.sijainti} numberOfLines={1} ellipsizeMode ={'tail'}>
                        {this.props.sijainti}
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row',
        backgroundColor: '#FFF',
        height: 100,
        padding: 10,
        marginRight: 10,
        marginLeft: 10,
        marginTop: 10,
        borderRadius: 4,
        shadowOffset:{  width: 1,  height: 1,  },
        shadowColor: '#CCC',
        shadowOpacity: 1.0,
        shadowRadius: 1
    },
    nimi: {
        paddingLeft: 10,
        paddingTop: 5,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#777'
    },
    sisalto: {
        paddingLeft: 10,
        marginTop: 5,
        fontSize: 14,
        color: '#777'
    },
    deadline: {
        paddingLeft: 10,
        marginTop: 5,
        fontSize: 14,
        color: '#777'
    },
    sijainti: {
        paddingLeft: 10,
        marginTop: 5,
        fontSize: 14,
        color: '#777'
    },
    rowText: {
        flex: 1,
        flexDirection: 'column'
    }
});

import React, {Component} from 'react';
import {StyleSheet, View, Button, BackHandler, Alert} from 'react-native';
import Footer from "../components/Footer";
import Main from "../components/Main";
import Header from "../components/Header";
import {CompareLocationRadius} from "../components/CompareLocationRadius";
import Geolocation from "react-native-geolocation-service";



export default class HomeScreen extends Component {
    state = {tasks:[],
    longitude: 'unknown',
    latitude: 'unknown',
    };
    watchId: ?number = null;
    componentDidMount() {
        this.loadCollection();
        this.Sijainninhaku();

        this.watchId = Geolocation.watchPosition(
            position => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    error: null,
                }), console.log('asema muuttuu. uusi sijainti: ', this.state.latitude, this.state.longitude)
            },
            (error) => this.setState({error: error.message}),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 0},);
        console.log('watch sijainti: ', this.state.latitude, this.state.longitude)
    }

    loadCollection = () => {
        const collection = this.props.screenProps.dbclient.collection("sunmutsiscollection");
            collection.find({}).toArray().then(foundTask => {
            if (foundTask) {
                //foundTask.forEach(console.log);
                this.setState({tasks: foundTask });
            } else {
                console.log("ei löytyny mitää")
            }
        })};
    insertTask = (task) => {
        const collection = this.props.screenProps.dbclient.collection("sunmutsiscollection");
        return collection.insertOne(task).then(result => {
            console.log(`Successfully inserted item with _id: ${result.insertedId}`);
            this.loadCollection();
            return result.insertedId;
        })
            .catch(err => console.error(`Failed to insert item: ${err}`))
    };
    updateTask = (id, task) => {
        const collection = this.props.screenProps.dbclient.collection("sunmutsiscollection");
        return collection.updateOne(id,task).then(result => {
            if (result.modifiedCount === 1) {
                console.log(`Successfully updated ${result.modifiedCount} row`);
                this.loadCollection();
                return result.modifiedCount;
            } else {
                console.log(`No tasks found with _id: ${id}`);
                return result.modifiedCount;

            }

        })
            .catch(err => console.error(`Failed to update item: ${err}`))
    };
    deleteTask = (id) => {
        const collection = this.props.screenProps.dbclient.collection("sunmutsiscollection");
        collection.deleteOne( { _id: id}).then(result => {
            if (result.deletedCount === 1) {
                console.log(`Succesfully deleted ${result.deletedCount} row`);
                this.loadCollection();
                return result.deletedCount;
            } else {
                console.log("No rows deleted");
                return result.deletedCount;
            }
        })
            .catch(err => console.error(`Failed to delete task: ${err}`))
    };
    Sijainninhaku = () => {
        new CompareLocationRadius(this.state);
    };

    render() {

        const {navigate}=this.props.navigation;
        this.Sijainninhaku();

    return (
        <View>
            <Header/>
            <Main tasks={this.state.tasks} deleteTask={this.deleteTask} updateTask={this.updateTask} {...this.props}/>
            <Footer {...this.props} insertTask={this.insertTask}/>
        </View>
    );
}};

const styles = StyleSheet.create({
    text:{
        fontSize: 30
    },
});




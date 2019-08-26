import { Stitch, AnonymousCredential, StitchAppClientConfiguration, RemoteMongoClient } from 'mongodb-stitch-react-native-sdk';
const MongoDB = require('mongodb-stitch-react-native-services-mongodb-remote');
import RNCommunityAsyncStorage from "../RNCommunityAsyncStorage";
import React, {Component} from 'react';
import { View,Button, StyleSheet } from 'react-native';


class LoginScreen extends Component {
    state = {tasks: []};
    componentDidMount() {
        this.watcher = this.watcher.bind(this);
        this.loadClient();

    }
    loadClient = () => {
        Stitch.initializeDefaultAppClient(
            "sunmutsisapp-zcbch", new StitchAppClientConfiguration.Builder().withStorage(new RNCommunityAsyncStorage()).build()).then(
            client => {
                this.setState( { client });
                const dbClient = client.getServiceClient(RemoteMongoClient.factory, "sunmutsisservice");
                this.setState({db : dbClient.db("sunmutsisdatabase")});
            })};
    authenticate() {
        return Stitch.defaultAppClient.auth.loginWithCredential(new AnonymousCredential())
            .then(user => {
                console.log(`Logged in as anonymous user with id: ${user.id}`);
                return user.id;
            })
            .catch(err=>console.error(err));
    }
    loadCollection = () => {
        const collection = this.state.db.collection("sunmutsiscollection");
        return collection.find({}).toArray().then(foundTask => {
            if (foundTask) {
                //    foundTask.forEach(console.log);
                this.setState({tasks: foundTask });
                return 2
            } else {
                console.log("ei löytyny mitää")
            }
        })}
    insertTask = (task) => {
        const collection = this.state.db.collection("sunmutsiscollection");
        return collection.insertOne(task).then(result => {
            console.log(`Successfully inserted item with _id: ${result.insertedId}`);
            return result.insertedId;
        })
            .catch(err => console.error(`Failed to insert item: ${err}`))
    };

    deleteTask = (id) => {
        const collection = this.state.db.collection("sunmutsiscollection");
        collection.deleteOne( { _id: id}).then(result => {
            if (result.deletedCount === 1) {
                console.log(`Succesfully deleted ${result.deletedCount} row`);
                setTimeout(this.loadCollection, 200);
                return result.deletedCount;
            } else {
                console.log("No rows deleted");
                return result.deletedCount;
            }
        })
            .catch(err => console.error(`Failed to delete task: ${err}`))
    };

    async watcher() {
        const collection = this.state.db.collection("sunmutsiscollection");
        console.log(collection);
        const stream = await collection.watch();
        /*  stream.onNext((event) => {
              console.log(event.fullDocument);
          })};*/
    }
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.button}>
                <Button onPress={this.loadClient} title={'LOAD CLIENT'}/>
                <Button onPress={this.authenticate} title={'AUTHENTICATE'}/>
                <Button onPress={this.loadCollection} title={'LOAD COLLECTION'}/>
                <Button onPress={this.watcher} title={'WATCH COLLECTION'}/>
                <Button onPress={
                    () => this.authenticate().then(
                        () => this.loadCollection().then(
                            () => navigate('Home', {tasks: this.state.tasks, insertTask: this.insertTask, deleteTask: this.deleteTask})))} title={'LOGIN'}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    button: {
        marginTop: 300,
    },
});
export default LoginScreen;
//Täällä kattonavigointi kaikkien screenien välillä. (sanna)
import React from 'react';
import {createStackNavigator, createAppContainer, createBottomTabNavigator} from "react-navigation";
import HomeScreen from "./HomeScreen";
import MenuScreen from "./MenuScreen";
import AddTaskScreen from "./AddTaskScreen";
import Mapview from "./Mapview";


//Tuomaan kokeilu alkaa
const Navigation = createBottomTabNavigator(
    {
        AllTasks: {
            screen: (props) => <HomeScreen {...props}  dbclient={props}/>,
        },
        WorkTasks: {
            screen: (props) => <HomeScreen {...props}  dbclient={props}/>,
            },
        HomeTasks: {
            screen: MenuScreen,
        },
        AddNewTask: {
            screen: (props) => <AddTaskScreen {...props} dbclient={props}/>,
        },
    },
    {
        initialRouteName: 'AllTasks',
        //headerMode hävittää täältä tuon backbuttonin, mutta tekee sen nyt kaikilla sivuilla ja ei estä fyysisen backbuttonin painamista.
        headerMode: "Menu"
        /*  defaultNavigationOptions:{
            title: 'Sun Mutsis',
              headerLeft: <Button onPress={() => props.navigation.navigate('tähän halutun screenin nimi')} title= "HOME?BACK?" />,
              headerRight:<Button onPress={() => props.navigation.navigate('Menu')}title="MENU"/>
            //  headerRight:<Button onPress={() =>alert('You tapped the button!')}title="MENU"/>
          } */
    }
);
export default createAppContainer(Navigation);
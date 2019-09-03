//Täällä kattonavigointi kaikkien screenien välillä. (sanna)
import React from 'react';
import {createStackNavigator, createAppContainer, createBottomTabNavigator} from "react-navigation";
import HomeScreen from "./HomeScreen";
import MenuScreen from "./MenuScreen";
import AddTaskScreen from "./AddTaskScreen";
// import Mapview from "./Mapview";
import MapviewWork from "./MapviewWork";
import {CompareLocationRadius} from "../components/CompareLocationRadius";
// import MapviewHome from "./MapviewHome";
// import GetcurrentLocation from "./GetCurrentLocation";


const Navigation = createStackNavigator(

    {
        Home: {
            screen: (props) => <HomeScreen {...props}  dbclient={props}/>,
        },
        Menu: {
            screen: MenuScreen,
        },
        WorkTasks: {
            screen: (props) => <HomeScreen {...props}  dbclient={props}/>,
            },

        HomeTasks: {

            screen: MenuScreen,
        },

        AddTask: {
            screen: AddTaskScreen,
        },
        MapviewWork: {
            screen: MapviewWork,
        }

    },
    {
        initialRouteName: 'Home',
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
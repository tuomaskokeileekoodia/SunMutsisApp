//Täällä kattonavigointi kaikkien screenien välillä. (sanna)
import React from 'react';
import {createStackNavigator, createAppContainer, createBottomTabNavigator} from "react-navigation";
import HomeScreen from "./HomeScreen";
import MenuScreen from "./MenuScreen";
import AddTaskScreen from "./AddTaskScreen";
import { Icon } from 'react-native-elements';

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
            screen: (props) => <HomeScreen {...props} dbclient={props}/>,
            navigationOptions: {
                tabBarLabel: 'Työtehtävät',
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name="important-devices"
                        color={tintColor}
                        size={25}/>
                ),
                tabBarOptions: {
                    activeTintColor: '#46529c'
                }
            }
        },

        HomeTasks: {

            screen: MenuScreen,
            navigationOptions: {
                tabBarLabel: 'Kotitehtävät',
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name="home"
                        color={tintColor}
                        size={25}/>
                ),
                tabBarOptions: {
                    activeTintColor: '#46529c'
                }
            }
        },

        MapviewWork: {
            screen: MapviewWork,
            navigationOptions: {
                tabBarLabel: 'Karttanäkymä',
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name="map"
                        color={tintColor}
                        size={25}/>
                ),
                tabBarOptions: {
                    activeTintColor: '#46529c'
                }
            }
        },
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
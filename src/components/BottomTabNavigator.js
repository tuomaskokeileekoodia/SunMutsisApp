// import React, { Component } from 'react';
// import {createBottomTabNavigator} from "react-navigation";
// import LoginScreen from "../screens/LoginScreen";
// import MenuScreen from "../screens/MenuScreen";
// import AddTaskScreen from "../screens/AddTaskScreen";
// import {Image} from "react-native";
// import {View} from "react-native-web";
// import HomeScreen from "../screens/HomeScreen";
//
// export default class BottomTabNavigator extends Component {
//     render() {
//
//         const BottomNavigator = createBottomTabNavigator(
//             {
//                 AllTasks: MenuScreen,//tähän perään saa valumaan propseja. Selvitä.
//                 HomeTasks: HomeScreen,
//                 Worktasks: AddTaskScreen,
//             },
//             {
//                 initialRouteName: 'AllTasks',
//             },
//
//             {
//                 defaultNavigationOptions: ({navigation}) => ({
//                     tabBarIcon: ({focused, horizontal, tintColor}) => {
//                         const {routeName} = navigation.state;
//                         if (routeName === 'AllTasks') {
//                             return (
//                                 <Image
//                                     source={require('C:\\Academy\\Viikko11\\UusSunMutsis\\SunMutsisApp\\assets\\settings.png')}
//                                     style={{width: 20, height: 20,}}/>
//                             );
//                         } else if (routeName === 'HomeTasks') {
//                             return (
//                                 <Image
//                                     source={require('C:\\Academy\\Viikko11\\UusSunMutsis\\SunMutsisApp\\assets\\home.png')}
//                                     style={{width: 20, height: 20,}}/>
//                             );
//                         } else {
//                             return (
//                                 <Image
//                                     source={require('C:\\Academy\\Viikko11\\UusSunMutsis\\SunMutsisApp\\assets\\work.png')}
//                                     style={{width: 20, height: 20}}/>
//                             );
//                         }
//                     },
//                 }),
//                 tabBarOptions: {
//                     activeTintColor: '#FF6F00',
//                     inactiveTintColor: '#263238',
//                 },
//             }
//         );
//     return (
//         <View>
//             <BottomNavigator></BottomNavigator>
//         </View>
//     );
//     }
// }

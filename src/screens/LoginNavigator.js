import React from 'react';
import {createAppContainer, createStackNavigator} from "react-navigation";
import App from "../../App";
import LoginScreen from "./LoginScreen";

const Navigation = createStackNavigator(
    {
        Login: LoginScreen,
        App: App,
    },
    {
        initialRouteName: 'Login',
        headerMode: "none"
    }
);

const appContainer = createAppContainer(Navigation);
export default appContainer;
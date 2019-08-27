/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import LoginScreen from "./src/screens/LoginScreen";
import appContainer from './src/screens/LoginNavigator'

AppRegistry.registerComponent(appName, () => appContainer);

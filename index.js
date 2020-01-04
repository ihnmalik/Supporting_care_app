/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import Splash from './SourceFiles/Components/Splash/Splash';
import Clientinital from './SourceFiles/Components/Clientinital/Clientinital';
import Login from './SourceFiles/Components/Login/Login';
import Register from './SourceFiles/Components/Register/Register';

AppRegistry.registerComponent(appName, () => Clientinital);

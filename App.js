import * as React from "react";
//import { StyleSheet, Text, View } from 'react-native';

// //screens
// import Login from './screens/Login';
// import Signup from './screens/Signup';
// import Welcome from './screens/Welcome';
//import Home from "./screens/Home";

//Bottom navigation
import BottomNavigation from './navigators/MainContainer';

import Tabs from "./components/Tabs";

//react navigation stack
import RootStack from "./navigators/RootStack";
import MainContainer from "./navigators/MainContainer";

export default function App() {
  //return <RootStack />; 
  return (
     <MainContainer />
   );
}

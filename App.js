import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
//import { StyleSheet, Text, View } from 'react-native';

// //screens
// import Login from './screens/Login';
// import Signup from './screens/Signup';
// import Welcome from './screens/Welcome';
//import Home from "./screens/Home";

import Tabs from "./components/Tabs";

//react navigation stack
import RootStack from "./navigators/RootStack";

const BtmTab = createBottomTabNavigator;
const StkTab = createStackNavigator;

// export default function App() {
//   return <RootStack />;
// }

const App = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};
export default App;

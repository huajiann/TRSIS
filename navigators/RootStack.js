import React from "react";

import { Colors } from "./../components/style";
const { primary, tertiary, secondary } = Colors;

//react navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//bottom
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//screens
import Login from "./../screens/Login";
import Signup from "./../screens/Signup";
import Home from "./../screens/Home";
import Rewards from "../screens/Rewards";
import Scan from "../screens/Scan";
import Profile from "../screens/Profile";
import MainContainer from "./MainContainer";

//Screen names
const homeName = "Home";
const rewardsName = "Rewards";
const profileName = "Profile";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerMode: "screen",
          headerStyled: {
            backgroundColor: "transparent",
          },
          headerTintColor: tertiary,
          headerTransparent: true,
          headerTitle: "",
          headerLeftContainerStyle: {
            paddingLeft: 20,
          },
        }}
        initialRouteName="Login"
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        {/* <Stack.Screen options={{ headerTintColor: primary }} name="Welcome" component={Welcome} /> */}
        <Stack.Screen
          options={{ headerTintColor: "#000", headerTitle: "Home", headerLeft: false }}
          name="Home"
          component={Home}
        />
        <Stack.Screen options={{ headerTintColor: "#000", headerTitle: "Scan" }} name="Scan" component={Scan} />
        {/* <Stack.Screen
          options={{ headerTintColor: "#000", headerTitle: "Rewards" }}
          name="Rewards"
          component={Rewards}
        />
        <Stack.Screen
          options={{ headerTintColor: "#000", headerTitle: "Profile" }}
          name="Profile"
          component={Profile}
        /> */}

      
      </Stack.Navigator>
      
    </NavigationContainer>
    
    


  );
};

export default RootStack;

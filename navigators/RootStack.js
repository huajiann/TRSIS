import React from "react";

import { Colors } from "./../components/style";
const { primary, tertiary } = Colors;

//react navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import Login from "./../screens/Login";
import Signup from "./../screens/Signup";
import Welcome from "./../screens/Welcome";
import Home from "./../screens/Home";
import Tabs from "./../components/Tabs";
import Rewards from "../screens/Rewards";

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerMode: "screen",
          headerShown: false,
          // headerStyled: {
          //   backgroundColor: "transparent",
          // },
          // headerTintColor: tertiary,
          // headerTransparent: true,
          // headerTitle: "",
          // headerLeftContainerStyle: {
          //   paddingLeft: 20,
          // },
        }}
        initialRouteName="Login"
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        {/* <Stack.Screen options={{ headerTintColor: primary }} name="Welcome" component={Welcome} /> */}
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="Rewards" component={Rewards} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;

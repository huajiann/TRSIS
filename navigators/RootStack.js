import React from "react";

import { Colors, LeftIcon, RightIcon } from "./../components/style";
const { primary, tertiary, secondary } = Colors;

//react navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import Login from "./../screens/Login";
import Signup from "./../screens/Signup";
// import Home from "./../screens/Home";
// import Rewards from "../screens/Rewards";
// import Scan from "../screens/Scan";
// import Profile from "../screens/Profile";
import Tabs from "../components/Tabs";
import Home from "../screens/Home";

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    // <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerMode: "screen",
        headerStyled: {
          backgroundColor: "transparent",
          // headerShown: false,
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
      <Stack.Screen name="Home" component={Tabs} options={{ headerShown: false, headerTitle: false }} />
    </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default RootStack;

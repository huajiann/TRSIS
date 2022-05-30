import React from "react";

import { Colors, LeftIcon, RightIcon } from "./../components/style";
const { primary, tertiary, secondary } = Colors;

//react navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import LeaderboardProfiles from "./../screens/LeaderboardProfiles";
import Signup from "./../screens/Signup";
// import Home from "./../screens/Home";
// import Rewards from "../screens/Rewards";
// import Scan from "../screens/Scan";
// import Profile from "../screens/Profile";
import Tabs from "../components/Tabs";
import Home from "../screens/Home";

const LeaderboardStack = createStackNavigator();

const Stack = createStackNavigator();

const QAStack = () => {
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
      initialRouteName="LeaderboardProfiles"
    >
      <Stack.Screen
        name="LeaderboardProfiles"
        component={LeaderboardProfiles}
        options={{ headerShown: false, headerTitle: false }}
      />
      <Stack.Screen name="Home" component={Tabs} options={{ headerShown: false, headerTitle: false }} />
    </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default QAStack;

const LeaderboardStackScreen = ({ navigation, route }) => (
  <LeaderboardStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#A2E4B8",
        elevation: 0,
        shadowColor: "#A2E4B8",
      },
      headerTintColor: "#000",
      headerTintStyle: { fontWeight: "bold" },
      headerLeft: false,
    }}
  >
    <LeaderboardStack.Screen
      name="LeaderboardProfiles"
      component={LeaderboardProfiles}
      // initialParams={{ userName: route.params.userName, bin: route.params.paramKey }}
      options={{
        headerShown: false,
      }}
    />
  </LeaderboardStack.Navigator>
);

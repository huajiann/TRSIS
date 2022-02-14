//import * as React from 'react';
import React, { useState, useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
//import React from "react";

import { Colors } from "./../components/style";
const { primary, tertiary, secondary } = Colors;

//react navigation
import { createStackNavigator } from "@react-navigation/stack";


// Screens
// //screens
import Home from './../screens/Home'
import Rewards from '../screens/Rewards'
import Profile from '../screens/Profile'
import Scan from "../screens/Scan";
import Login from "./../screens/Login";
import Signup from "./../screens/Signup";
//import RootStack from "./RootStack";

//const [useremail] = useState();

//Screen names
const homeName = "Home";
const rewardsName = "Rewards";
const profileName = "Profile";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === rewardsName) {
              iconName = focused ? 'gift' : 'gift-outline';

            } else if (rn === profileName) {
              iconName = focused ? 'person' : 'person-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 3, fontSize: 10 },
          style: { padding: 10, height: 80}
        }}>

        <Tab.Screen name={homeName} component={Home} />
        <Tab.Screen name={rewardsName} component={Rewards} />
        <Tab.Screen name={profileName} component={Profile} />


        
      </Tab.Navigator>
      
    </NavigationContainer>
    
  );
}

// function RootStack() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         screenOptions={{
//           headerMode: "screen",
//           headerStyled: {
//             backgroundColor: "transparent",
//           },
//           headerTintColor: tertiary,
//           headerTransparent: true,
//           headerTitle: "",
//           headerLeftContainerStyle: {
//             paddingLeft: 20,
//           },
//         }}
//         initialRouteName="Login"
//       >
//         <Stack.Screen name="Login" component={Login} />
//         <Stack.Screen name="Signup" component={Signup} />
//         {/* <Stack.Screen options={{ headerTintColor: primary }} name="Welcome" component={Welcome} /> */}
//         <Stack.Screen
//           options={{ headerTintColor: "#000", headerTitle: "Home", headerLeft: false }}
//           name="Home"
//           component={Home}
//         />
//         <Stack.Screen options={{ headerTintColor: "#000", headerTitle: "Scan" }} name="Scan" component={Scan} />
//         {/* <Stack.Screen
//           options={{ headerTintColor: "#000", headerTitle: "Rewards" }}
//           name="Rewards"
//           component={Rewards}
//         />
//         <Stack.Screen
//           options={{ headerTintColor: "#000", headerTitle: "Profile" }}
//           name="Profile"
//           component={Profile}
//         /> */}

      
//       </Stack.Navigator>
      
//     </NavigationContainer>
    
    


//   );
// }

export default MainContainer;

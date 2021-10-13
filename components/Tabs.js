import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import Home from "../screens/Home";
import Scan from "../screens/Scan";
import Profile from "../screens/Profile";
import EditProfile from "../screens/Profile";

import Icon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      justifyContent: "center",
      alignItems: "center",
      ...styles.shadow,
    }}
    onPress={onPress}
  >
    <View
      style={{
        width: 75,
        height: 75,
        borderRadius: 45,
        backgroundColor: "#e32f45",
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);

const Tabs = ({ route }) => {
  const name = route.params.name;
  const email = route.params.email;
  const bin = route.params.paramKey;
  console.log(bin);
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "white",
          borderRadius: 15,
          height: 80,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        initialParams={{ userName: name, bin: bin }}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center", top: 5 }}>
              <Image
                source={require("../assets/icons/house.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "#748c94",
                }}
              />
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Scan"
        component={Scan}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/icons/scan-regular-240.png")}
              resizeMode="contain"
              style={{
                width: 35,
                height: 35,
                tintColor: "#fff",
              }}
            />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        initialParams={{ userName: name, userEmail: email }}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center", top: 5 }}>
              <Image
                source={require("../assets/icons/user.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "#748c94",
                }}
              />
            </View>
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const HomeStackScreen = ({ navigation, route }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "aquamarine",
        elevation: 0,
        shadowColor: "aquamarine",
      },
      headerTintColor: "#000",
      headerTintStyle: { fontWeight: "bold" },
      headerLeft: false,
    }}
  >
    <HomeStack.Screen
      name="Home"
      component={Home}
      initialParams={{ userName: route.params.userName, bin: route.params.paramKey }}
    />
  </HomeStack.Navigator>
);

const ProfileStackScreen = ({ navigation, route }) => (
  <ProfileStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "aquamarine",
        elevation: 0,
        shadowColor: "aquamarine",
      },
      headerTintColor: "#000",
      headerTintStyle: { fontWeight: "bold" },
      headerLeft: false,
    }}
  >
    <ProfileStack.Screen
      name="Profile"
      component={Profile}
      initialParams={{ name: route.params.userName, email: route.params.userEmail }}
    />
    <ProfileStack.Screen
      name="EditProfile"
      options={{
        title: "Edit Profile",
      }}
      component={EditProfile}
    ></ProfileStack.Screen>
  </ProfileStack.Navigator>
);

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#5de9f0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default Tabs;

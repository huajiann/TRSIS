import React, { useState, useEffect } from "react";
import { View, Image, Text } from "react-native";
import { ScrollView, TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { PageTitle, SubTitle, InnerContainer } from "./../components/style";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import axios from "axios";
const Stack = createStackNavigator();
const Home = ({ navigation, route }) => {
  const [binID, setbinID] = useState();
  const [status, setStatus] = useState();

  const [username, setUsername] = useState();
  const [id, setId] = useState();

  const getUserData = async () => {
    try {
      const userID = await AsyncStorage.getItem("id");
      if (userID !== null) {
        // value previously stored
        setId(userID);
        handleUserData(userID);
        const value2 = await AsyncStorage.getItem("BinID");
        if (value2 !== null) {
          // value previously stored
          setbinID(value2);
          setStatus("Status : Normal");
          console.log("checked");
        } else {
          setbinID("No Bin Detected!");
        }
      }
    } catch (e) {
      // error reading value
    }
  };

  const handleUserData = (userID) =>{
    const url = "https://blooming-brushlands-85049.herokuapp.com/user/user/" + userID;
    
    try {
      axios
        .get(url)
        .then(async (response) => {
          const name = response.data.name;
          setUsername(name);
        })
    } catch (e){
      console.log("Error : " + e);
    }
  }

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("BinID");
      if (value !== null) {
        // value previously stored
        setbinID(value);
        setStatus("Status : Normal");
      } else {
        setbinID("No Bin Detected!");
      }
    } catch (e) {
      // error reading value
      console.log(e);
    }
  };

  const removeValue = async () => {
    try {
      await AsyncStorage.removeItem("BinID");
      setbinID("No Bin Detected!");
      setStatus("Click to Refresh");
    } catch (e) {
      // remove error
      console.log(e);
    }

    console.log("Done.");
  };

  useEffect(() => {
    getUserData();
  }, []);

  //const { name, email } = route.params;
  return (
    <>
      {/* <NavigationContainer> */}
      {/* <Stack.Navigator> */}
      <StatusBar style="dark" />
      <InnerContainer>
        <View
          style={{
            backgroundColor: "#fff",
            flex: 1,
          }}
        >
          <View
            style={{
              backgroundColor: "#A2E4B8",
              height: "30%",
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              justifyContent: "center",
              paddingHorizontal: 45,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 25,
                width: "100%",
              }}
            >
              <View style={{ width: "100%" }}>
                <PageTitle welcome={true}>Hi! {username || "My name :,)"}</PageTitle>
                <SubTitle>Have you recycled today?</SubTitle>
              </View>
            </View>
          </View>
          <LinearGradient
            colors={["#A2E4B8", "transparent"]}
            style={{
              left: 0,
              right: 0,
              height: 50,
              marginTop: -20,
            }}
          ></LinearGradient>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
              width: "100%",
              alignItems: "center",
            }}
          >
            <View style={{ width: "50%" }}>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 18,
                  color: "#28495c",
                }}
              >
                Quick Actions
              </Text>
            </View>
          </View>

          <View style={{ height: 150 }}>
            <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("LeaderboardProfiles")} //to be change
                style={{
                  height: 110,
                  elevation: 3,
                  backgroundColor: "#FFF",
                  marginTop: 15,
                  borderRadius: 15,
                  marginBottom: 10,
                  width: 100,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon name="qr-code-outline" color="#28495c" size={50} />
                <View
                  style={{
                    flexDirection: "row",
                    paddingTop: 7,
                    paddingHorizontal: 10,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "normal",
                    }}
                  >
                    Leaderboard
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate("Rewards")} //to be change
                style={{
                  height: 110,
                  elevation: 3,
                  backgroundColor: "#FFF",
                  marginLeft: 25,
                  marginTop: 15,
                  borderRadius: 15,
                  marginBottom: 10,
                  width: 100,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon name="gift-outline" color="#28495c" size={50} />
                <View
                  style={{
                    flexDirection: "row",
                    paddingTop: 7,
                    paddingHorizontal: 10,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "normal",
                    }}
                  >
                    Rewards
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("Profile")}
                style={{
                  height: 110,
                  elevation: 3,
                  backgroundColor: "#FFF",
                  marginLeft: 25,
                  marginTop: 15,
                  borderRadius: 15,
                  marginBottom: 10,
                  width: 100,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon name="person-circle-outline" color="#28495c" size={50} />
                <View
                  style={{
                    flexDirection: "row",
                    paddingTop: 7,
                    paddingHorizontal: 10,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "normal",
                    }}
                  >
                    Profile
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                marginLeft: 20,
                marginEnd: 20,
                borderBottomColor: "darkgrey",
                borderBottomWidth: 1,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
              width: "100%",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <View style={{ width: "50%" }}>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 18,
                  color: "#28495c",
                }}
              >
                Smart Bin
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => removeValue()}
              style={{
                height: 30,
                justifyContent: "space-evenly",
                width: "100%",
                alignContent: "center",
                paddingLeft: 90,
              }}
            >
              <View>
                <View
                  style={{
                    backgroundColor: "red",
                    paddingHorizontal: 20,
                    paddingVertical: 5,
                    borderRadius: 15,
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 12,
                      color: "#fff",
                    }}
                  >
                    Unlink
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => getData()}
            style={{
              height: 130,
              elevation: 3,
              backgroundColor: "#FFF",
              marginLeft: 25,
              marginEnd: 25,
              marginTop: 15,
              borderRadius: 15,
              marginBottom: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                alignItems: "center",
                paddingTop: 7,
                paddingHorizontal: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "normal",
                }}
              >
                {binID || "No Bin Detected"}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "normal",
                }}
              >
                {status}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </InnerContainer>
      {/* </Stack.Navigator> */}
      {/* </NavigationContainer> */}
    </>
  );
};

export default Home;

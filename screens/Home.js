import React from "react";
import { View, Image, Text } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/Ionicons";

import { PageTitle, SubTitle, InnerContainer } from "./../components/style";

const Home = ({ navigation, route }) => {
  const { name, email } = route.params;
  console.log(route.params);
  return (
    <>
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
              backgroundColor: "aquamarine",
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
                <PageTitle welcome={true}>Hi! {name || "My name :,)"}</PageTitle>
                <SubTitle>What are you going to do today?</SubTitle>
              </View>
            </View>
          </View>
          <LinearGradient
            colors={["rgba(127,255,212,1)", "transparent"]}
            style={{
              left: 0,
              right: 0,
              height: 50,
              marginTop: -45,
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
                  color: "#3d3d3d",
                }}
              >
                Quick Actions
              </Text>
            </View>
          </View>

          <View style={{ height: 150 }}>
            <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Scan")} //to be change
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
                <Icon name="qr-code-outline" color="#000" size={50} />
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
                    Scan
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
                <Icon name="gift-outline" color="#000" size={50} />
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
                onPress={() => navigation.navigate("Profile", { profName: name, profEmail: email })}
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
                <Icon name="person-circle-outline" color="#000" size={50} />
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
                  color: "#3d3d3d",
                }}
              >
                Smart Bin
              </Text>
            </View>
            <View style={{ width: "50%", alignItems: "flex-end" }}>
              <View
                style={{
                  backgroundColor: "#00a46c",
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
                  More
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={{
              height: 220,
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
                {route.params.paramKey || "No Bin Detected"}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </InnerContainer>
    </>
  );
};

export default Home;

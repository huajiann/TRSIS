import React from "react";
import { View, Image, Text } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

const Home = ({ navigation }) => {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
      }}
    >
      <View
        style={{
          backgroundColor: "aquamarine",
          height: "20%",
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          paddingHorizontal: 30,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
            width: "100%",
          }}
        >
          <View style={{ width: "75%" }}>
            <Text
              style={{
                fontSize: 30,
                color: "black",
                fontWeight: "bold",
              }}
            >
              Hi! Hua Jian
            </Text>
          </View>
        </View>
        <View style={{ width: "100%" }}>
          <Text
            style={{
              fontSize: 16,
              color: "black",
            }}
          >
            What are you going to do today?
          </Text>
        </View>
      </View>
      <LinearGradient
        colors={["rgba(127,255,212,1)", "transparent"]}
        style={{
          left: 0,
          right: 0,
          height: 90,
          marginTop: -45,
        }}
      >
        <View
          style={{
            backgroundColor: "#FFF",
            paddingVertical: 15,
            paddingHorizontal: 20,
            marginHorizontal: 20,
            borderRadius: 15,
            marginTop: 15,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TextInput
            placeholder="Search"
            placeholderTextColor="#b1e5d3"
            style={{
              fontWeight: "bold",
              fontSize: 18,
              width: 315,
            }}
          />
          <Image source={require("../../assets/icons/search.png")} style={{ height: 20, width: 20 }} />
        </View>
      </LinearGradient>
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
              Edit
            </Text>
          </View>
        </View>
      </View>

      <View style={{ height: 150 }}>
        <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Details")} //to be change
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
            <Image source={require("../../assets/icons/maps.png")} style={{ height: 50, width: 50 }} />
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
                Find
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Details")} //to be change
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
            <Image source={require("../../assets/icons/histogram.png")} style={{ height: 50, width: 50 }} />
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
            onPress={() => navigation.navigate("Details3")} //to be change
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
            <Image source={require("../../assets/icons/checked.png")} style={{ height: 50, width: 50 }} />
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
                Reports
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
        onPress={() => navigation.navigate("Details4")} //to be change
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
        <Image source={require("../../assets/icons/line-chart.png")} style={{ height: 50, width: 50 }} />
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
            No Bin Detected
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

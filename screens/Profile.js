import React from "react";
import { View, SafeAreaView, Button, StyleSheet, Platform, StatusBar } from "react-native";
import { Avatar, Title, Caption, Text, TouchableRipple } from "react-native-paper";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
const Profile = ({ navigation, route }) => {
  const { name, email } = route.params;
  console.log("Profile : " + name);
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <Avatar.Image source={require("./../assets/icons/betteruser.png")} size={80} backgroundColor={"#7FFFD4"} />
          <View style={{ marginLeft: 20 }}>
            <Title
              style={[
                styles.title,
                {
                  marginTop: 15,
                  marginBottom: 5,
                },
              ]}
            >
              {name || "Your Name"}
            </Title>
            <Caption style={styles.caption}>Recycling is fun!</Caption>
          </View>
        </View>
      </View>
      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#616161" size={20} />
          <Text style={{ color: "#616161", marginLeft: 10 }}>Kuala Lumpur, Malaysia</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#616161" size={20} />
          <Text style={{ color: "#616161", marginLeft: 10 }}>{email || "my.email@gmail.com"}</Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: "#fff",
          height: "100%",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          elevation: 30,
          flex: 1,
        }}
      >
        <View style={styles.infoBoxWrapper}>
          <View
            style={[
              styles.infoBox,
              {
                borderRightColor: "darkgrey",
                borderRightWidth: 2,
                marginTop: 15,
                marginBottom: 15,
              },
            ]}
          >
            <Title>420</Title>
            <Caption>Points Earned</Caption>
          </View>
          <View style={styles.infoBox}>
            <Title>69</Title>
            <Caption>Trash Recycled</Caption>
          </View>
        </View>
        <View style={styles.menuWrapper}>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <Icon name="recycle" color="#FF0000" size={25} />
              <Text style={styles.menuItemText}>Recycled Items</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <Icon name="share-outline" color="#FF0000" size={25} />
              <Text style={styles.menuItemText}>Tell Your Friends</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <Icon name="account-question-outline" color="#FF0000" size={25} />
              <Text style={styles.menuItemText}>Support</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <Icon name="cog" color="#FF0000" size={25} />
              <Text style={styles.menuItemText}>Settings</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => navigation.navigate("Login")}>
            <View style={styles.menuItem}>
              <Icon name="logout" color="#FF0000" size={25} />
              <Text style={styles.menuItemText}>Logout</Text>
            </View>
          </TouchableRipple>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  infoBoxWrapper: {
    flexDirection: "row",
    height: 100,
  },
  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: "row",
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  menuItemText: {
    color: "#777777",
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "aquamarine",
    //paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
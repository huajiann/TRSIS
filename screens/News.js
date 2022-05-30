import React, { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  Button,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  Modal,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Avatar, Title, Caption, Text, TouchableRipple } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

//API Client
// import axios from "axios";

//colors
import { Colors } from "./../components/style";
import { Entypo } from "@expo/vector-icons";

import {
  // Header,
  // IconButton,
  ClaimRewardButton,
  NewsTitle,
  NewsImage,
  NewsContainer,
  VoucherPoints,
  NewsDes,
  NewsDetailsBox,
  HeaderTitle,
  Line,
  ButtonText,
  StyledButton,
} from "./../components/style";
import { createIconSetFromFontello } from "react-native-vector-icons";
import { ScrollView } from "react-native-gesture-handler";

//Colors
const { brand, darkLight, primary } = Colors;

const ModalPop = ({ visible, children }) => {
  const [showModal, setShowModal] = useState(visible);

  useEffect(() => {
    toggleModal();
  }, [visible]);

  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  };
  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>{children}</View>
      </View>
    </Modal>
  );
};

const News = ({ navigation }) => {
  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: "#A2E4B8",
          height: "5%",
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
          <View style={{ width: "40%" }}></View>
          <HeaderTitle>News</HeaderTitle>
        </View>
      </View>
      <SafeAreaView style={styles.AndroidSafeArea}>
        {/*from below here it shall start duplicating :3*/}
        <View style={styles.menuWrapper}>
          <NewsContainer onPress={() => navigation.navigate("Home")}>
            <NewsImage
              resizeMode="cover"
              source={require("./../assets/img/img2.png")}
              style={{
                position: "relative",
                marginLeft: 0,
                marginTop: 10,
                borderRadius: 30,
              }}
            />
            <NewsDetailsBox>
              <NewsTitle>Understanding Recycling </NewsTitle>
              <NewsDes>In now days, Malaysia is encountering ....</NewsDes>
            </NewsDetailsBox>
          </NewsContainer>
        </View>
        {/*below here also duplicate*/}
        <View style={styles.menuWrapper}>
          <NewsContainer onPress={() => navigation.navigate("Home")}>
            <NewsImage
              resizeMode="cover"
              source={require("./../assets/img/img2.png")}
              style={{
                position: "relative",
                marginLeft: 0,
                marginTop: 10,
                borderRadius: 30,
              }}
            />
            <NewsDetailsBox>
              <NewsTitle>Understanding Recycling </NewsTitle>
              <NewsDes>In now days, Malaysia is encountering ....</NewsDes>
            </NewsDetailsBox>
          </NewsContainer>
        </View>
        {/*another duplicates aih*/}
        <View style={styles.menuWrapper}>
          <NewsContainer onPress={() => navigation.navigate("Home")}>
            <NewsImage
              resizeMode="cover"
              source={require("./../assets/img/img2.png")}
              style={{
                position: "relative",
                marginLeft: 0,
                marginTop: 10,
                borderRadius: 30,
              }}
            />
            <NewsDetailsBox>
              <NewsTitle>Understanding Recycling </NewsTitle>
              <NewsDes>In now days, Malaysia is encountering ....</NewsDes>
            </NewsDetailsBox>
          </NewsContainer>
        </View>
        <View style={styles.menuWrapper}>
          <NewsContainer onPress={() => navigation.navigate("Home")}>
            <NewsImage
              resizeMode="cover"
              source={require("./../assets/img/img2.png")}
              style={{
                position: "relative",
                marginLeft: 0,
                marginTop: 10,
                borderRadius: 30,
              }}
            />
            <NewsDetailsBox>
              <NewsTitle>Understanding Recycling </NewsTitle>
              <NewsDes>In now days, Malaysia is encountering ....</NewsDes>
            </NewsDetailsBox>
          </NewsContainer>
        </View>
        {/*below here also duplicate*/}
        <View style={styles.menuWrapper}>
          <NewsContainer onPress={() => navigation.navigate("Home")}>
            <NewsImage
              resizeMode="cover"
              source={require("./../assets/img/img2.png")}
              style={{
                position: "relative",
                marginLeft: 0,
                marginTop: 10,
                borderRadius: 30,
              }}
            />
            <NewsDetailsBox>
              <NewsTitle>Understanding Recycling </NewsTitle>
              <NewsDes>In now days, Malaysia is encountering ....</NewsDes>
            </NewsDetailsBox>
          </NewsContainer>
        </View>
        {/*another duplicates aih*/}
        <View style={styles.menuWrapper}>
          <NewsContainer onPress={() => navigation.navigate("Home")}>
            <NewsImage
              resizeMode="cover"
              source={require("./../assets/img/img2.png")}
              style={{
                position: "relative",
                marginLeft: 0,
                marginTop: 10,
                borderRadius: 30,
              }}
            />
            <NewsDetailsBox>
              <NewsTitle>Understanding Recycling </NewsTitle>
              <NewsDes>In now days, Malaysia is encountering ....</NewsDes>
            </NewsDetailsBox>
          </NewsContainer>
        </View>
        {/*ok duplicate ends here HAHAH*/}
        {/* </View> */}
      </SafeAreaView>
    </ScrollView>
  );
};

export default News;

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
    fontWeight: "bold",
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
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  menuWrapper: {
    marginTop: 15,
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
    backgroundColor: "#A2E4B8",
    //paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingBottom: 30,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },
  modalHeader: {
    width: "100%",
    height: 40,
    alignItems: "flex-end",
    justifyContent: "center",
  },
});

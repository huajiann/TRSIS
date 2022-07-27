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
import axios from "axios";

//colors
import { Colors } from "./../components/style";
import { Entypo } from "@expo/vector-icons";

import {
  // Header,
  // IconButton,
  ClaimRewardButton,
  VoucherName,
  RewardsImage,
  RewardContainer,
  VoucherPoints,
  VoucherDes,
  RewardsDetailsBox,
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

const Rewards = ({ navigation }) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [points, setPoints] = useState();
  const [userId, setUserId] = useState();

  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);

  const [message, setMessage] = useState();
  const [messageType, setMessageType] = useState();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const getUserData = async () => {
    try {
      const userID = await AsyncStorage.getItem("id");
      if (userID !== null) {
        // value previously stored
        handleUserData(userID);
      }
    } catch (e) {
      // error reading value
    }
  };

  const handleUserData = (user) =>{
    const url = "https://blooming-brushlands-85049.herokuapp.com/user/user/" + user;
    
    try {
      axios
        .get(url)
        .then(async (response) => {
          const name = response.data.name;
          const points = response.data.points;
          const email = response.data.email;
          setUsername(name);
          setPoints(points.toString());
          setEmail(email);
        })
    } catch (e){
      console.log("Error : " + e);
    }
  }

  const combined = (value) => {
    setLoading(true);
    handleUpdatePoints(value);
    setTimeout(() => {
      setLoading(false);
      setVisible(false);
    }, 3000);
  };

  const handleUpdatePoints = (pointsValue) => {
    try {
      //something must be done here..
      const userPoints = parseInt(points);
      if (userPoints < pointsValue) {
        //do modal here?
      } else {
        const newUserPoints = userPoints - pointsValue;
        newUserPoints.toString();
        updateData(newUserPoints);
      }
    } catch (e) {
      //error goes here
      console.log(e);
    }
  };

  const updateData = (point) => {
    handleMessage(null);
    const url = "https://blooming-brushlands-85049.herokuapp.com/user/updatePoints";
    const creds = { email: email, points: point };
    const pointStr = point.toString();
    try {
      axios
        .put(url, creds)
        .then(async (response) => {
          const result = response.data;
          const { success } = result;

          if (success !== true) {
            handleMessage("An error occurred! Please try again.");
          } else {
            await AsyncStorage.setItem("points", pointStr);
            setPoints(pointStr);
            console.log("Success!");
            setVisible1(true);
            setSuccess(true);
            //do modal here too
          }
        })
        .catch((error) => {
          console.log(error);
          handleMessage("An error occurred! Please check your network and try again.");
        });
    } catch (e) {
      // saving error
      console.log("Error" + e);
    }
  };

  const handleMessage = (message, type = "FAILED") => {
    setMessage(message);
    setMessageType(type);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <ScrollView>
      <SafeAreaView style={styles.AndroidSafeArea}>
        <View style={styles.userInfoSection}>
          <View style={{ flexDirection: "row", marginTop: 100 }}>
            <Avatar.Image source={require("./../assets/icons/betteruser.png")} size={80} backgroundColor={"#A2E4B8"} />
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
                {username || "Your Name"}
              </Title>
              <Caption style={styles.caption}>Points : {points || "00"}</Caption>
            </View>
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
          {/* You may start coding here. :D*/}

          <View style={styles.menuWrapper}>
            <ModalPop visible={visible}>
              <View style={{ alignItems: "center" }}>
                <View style={styles.modalHeader}>
                  <TouchableOpacity onPress={() => setVisible(false)}>
                    <Entypo name="cross" size={24} color="black" />
                  </TouchableOpacity>
                </View>
              </View>

              {loading ? (
                <ActivityIndicator
                  //visibility of Overlay Loading Spinner
                  visible={loading}
                  //Text with the Spinner
                  textContent={"Verifying..."}
                  size="large"
                  color={brand}
                />
              ) : (
                <>
                  <Image
                    source={require("./../assets/img/shopee.png")}
                    style={{ marginBottom: 15, height: 70, width: 70 }}
                  />
                  <Text style={{ fontSize: 28, textAlign: "left", fontWeight: "bold" }}>Redeem Voucher</Text>
                  <Text style={{ marginVertical: 30, fontSize: 20, textAlign: "left" }}>
                    Redeem RM5 Shopee Voucher for 10 Pts?
                  </Text>
                  <Button
                    title="REDEEM NOW"
                    color={brand}
                    onPress={() => {
                      combined(10);
                    }}
                  />
                </>
              )}
            </ModalPop>
            <ModalPop visible={visible1}>
              <View style={{ alignItems: "center" }}>
                <View style={styles.modalHeader}>
                  <TouchableOpacity onPress={() => setVisible1(false)}>
                    <Entypo name="cross" size={24} color="black" />
                  </TouchableOpacity>
                </View>
              </View>

              {success ? (
                <>
                  <Image
                    source={require("./../assets/img/shopee.png")}
                    style={{ marginBottom: 15, height: 70, width: 70 }}
                  />
                  <Text style={{ fontSize: 28, textAlign: "left", fontWeight: "bold" }}>Successful Redeem!</Text>
                  <Text style={{ marginVertical: 30, fontSize: 20, textAlign: "left" }}>Code : QWER-TYUI-1244</Text>
                  <Button title="COPY CODE" color={brand} />
                </>
              ) : (
                <>
                  <Image
                    source={require("./../assets/img/shopee.png")}
                    style={{ marginBottom: 15, height: 70, width: 70 }}
                  />
                  <Text style={{ fontSize: 28, textAlign: "left", fontWeight: "bold" }}>Not Enough Points</Text>
                  <Text style={{ marginVertical: 30, fontSize: 20, textAlign: "left" }}>
                    Opps! It seems you have insufficient points! Earn more points by recycling!
                  </Text>
                  <Button title="GOT IT" color={brand} />
                </>
              )}
            </ModalPop>
            <RewardContainer>
              <RewardsImage
                resizeMode="cover"
                source={require("./../assets/img/shopee.png")}
                style={{
                  position: "relative",
                  marginLeft: 0,
                  marginTop: 10,
                  borderRadius: 30,
                }}
              />
              <RewardsDetailsBox>
                <VoucherName>Shopee</VoucherName>
                <VoucherDes>RM5.00 Shopee Voucher</VoucherDes>
              </RewardsDetailsBox>
              <VoucherPoints>10 Pts</VoucherPoints>
              <ClaimRewardButton onPress={() => setVisible(true)}>
                <Entypo name="ticket" color={primary} size={25} />
                <ButtonText ticket={true}> Claim </ButtonText>
              </ClaimRewardButton>
            </RewardContainer>
          </View>
          {/*from below here it shall start duplicating :3*/}
          <View style={styles.menuWrapper}>
            <RewardContainer>
              <RewardsImage
                resizeMode="cover"
                source={require("./../assets/img/social-Lazada-Logo.png")}
                style={{
                  position: "relative",
                  marginLeft: 0,
                  marginTop: 10,
                  borderRadius: 30,
                }}
              />
              <RewardsDetailsBox>
                <VoucherName>Lazada</VoucherName>
                <VoucherDes>RM3.00 Lazada Voucher</VoucherDes>
              </RewardsDetailsBox>
              <VoucherPoints>10 Pts</VoucherPoints>
              <ClaimRewardButton>
                <Entypo name="ticket" color={primary} size={25} />
                <ButtonText ticket={true}> Claim </ButtonText>
              </ClaimRewardButton>
            </RewardContainer>
          </View>
          {/*below here also duplicate*/}
          <View style={styles.menuWrapper}>
            <RewardContainer>
              <RewardsImage
                resizeMode="cover"
                source={require("./../assets/img/Zalora_sg.jpg")}
                style={{
                  position: "relative",
                  marginLeft: 0,
                  marginTop: 10,
                  borderRadius: 30,
                }}
              />
              <RewardsDetailsBox>
                <VoucherName>Zalora</VoucherName>
                <VoucherDes>RM10.00 Zalora Voucher</VoucherDes>
              </RewardsDetailsBox>
              <VoucherPoints>30 Pts</VoucherPoints>
              <ClaimRewardButton>
                <Entypo name="ticket" color={primary} size={25} />
                <ButtonText ticket={true}> Claim </ButtonText>
              </ClaimRewardButton>
            </RewardContainer>
          </View>
          {/*another duplicates aih*/}
          <View style={styles.menuWrapper}>
            <RewardContainer>
              <RewardsImage
                resizeMode="cover"
                source={require("./../assets/img/grab.png")}
                style={{
                  position: "relative",
                  marginLeft: 0,
                  marginTop: 10,
                  borderRadius: 30,
                }}
              />
              <RewardsDetailsBox>
                <VoucherName>Grab Food</VoucherName>
                <VoucherDes>Free Delivery Voucher</VoucherDes>
              </RewardsDetailsBox>
              <VoucherPoints>50 Pts</VoucherPoints>
              <ClaimRewardButton>
                <Entypo name="ticket" color={primary} size={25} />
                <ButtonText ticket={true}> Claim </ButtonText>
              </ClaimRewardButton>
            </RewardContainer>
          </View>
          {/*ok duplicate ends here HAHAH*/}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Rewards;

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
    paddingBottom: 18,
    //paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
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

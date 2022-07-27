import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, Image, Alert } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { ActivityIndicator } from "react-native-web";

const Scan = ({ navigation, route }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [loading, setLoading] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [scannedBin, setScannedBin] = useState(false);
  const [scanPoints, setScanPoints] = useState(false);

  const [points, setPoints] = useState(); 
  const [text, setText] = useState("Not yet scanned!");

  const [message, setMessage] = useState();
  const [messageType, setMessageType] = useState();

  const askForCameraPemission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status == "granted");
    })();
  };

  useEffect(() => {
    askForCameraPemission();
  }, []);

  // What happened when we scan the qrcode
  const handleBarCodeScanned = ({ type, data }) => {

    //setText(data);
    const data_obj = JSON.parse(data);
    //console.log("Type : " + type + "\nData : " + data_obj);
    const data_id = data_obj.id;
    const check_id = data_id.slice(0,5);

    if(check_id == "TRSIS") {
      setScanned(true);
      setScannedBin(true);
      setText("TRSIS Bin found : " + data_id);
    } else if(check_id == "POINT"){
      setScanned(true);
      //setScanPoints(true);
      confirmPoints(data_obj.points)
      setPoints(data_obj.points);

      setText("Points : " + data_obj.points + "pts");
    } else {
      setScanned(true);
      setText("Error, Please scan again.")
    }
  };

  // Check permissions
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>
    );
  }

  // Check permissions
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to the camera</Text>
        <Button title={"Allow Camera"} onPress={() => askForCameraPemission()} />
      </View>
    );
  }

  const confirmPoints = (points) => {
    Alert.alert(
      "Thank you for recycling!",
      `You have ${points} points to be collected! Click "Confirm" to add into your account.` ,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Confirm", onPress: () => addPoints(points) }
      ]
    )
  }

  const addPoints = async (newPoints) => {
    try {
      const userData = await AsyncStorage.getItem("userData");
      if(userData !== null){
        const data = JSON.parse(userData);
        const currentPoints = parseInt(data.points);
        const updatingPoints = currentPoints + parseInt(newPoints);
        updatePoints(data.email, updatingPoints);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const updatePoints = (userEmail, userPoints) => {
    handleMessage(null);
    const url = "https://blooming-brushlands-85049.herokuapp.com/user/updatePoints";
    const creds = { email: userEmail, points: userPoints };
    const pointStr = userPoints.toString();
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
            navigation.navigate("Home");
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


  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("BinID", value);
      setScanned(false);
      setText("Not yet scanned!");
      navigation.push("Home");
    } catch (e) {
      // saving error
      console.log(e);
    }
  };

  const handleMessage = (message, type = "FAILED") => {
    setMessage(message);
    setMessageType(type);
  };

  return (
    <View style={styles.container}>
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        <View style={styles.buttonContainer}>
          {scanned && <Button title={"Scan again?"} onPress={() => {setScanned(false); setScannedBin(false); setScanPoints(false); setText("")}} color="#167e64" />}
          <View style={styles.button}>
            {scannedBin && <Button title={"Connect"} onPress={() => storeData(text)} color="#167e64" />}
          </View>
        </View>
      </View>
    </View>
  );
};

export default Scan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#A2E4B8",
  },

  barcodebox: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: 1000,
    width: 1000,
    overflow: "hidden",
    borderRadius: 30,
    backgroundColor: "#A2E4B8",
  },
  maintext: {
    fontSize: 16,
    margin: 20,
  },
  buttonContainer: {
    width: "40%",
    alignSelf: "center",
  },
  button: {
    width: "100%",
    alignSelf: "center",
    margin: 20,
  },
});

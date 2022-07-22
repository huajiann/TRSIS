import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Scan = ({ navigation, route }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [scannedBin, setScannedBin] = useState(false);
  const [text, setText] = useState("Not yet scanned!");

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

  return (
    <View style={styles.container}>
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 400, width: 400 }}
        />
      </View>
      <Text style={styles.maintext}>{text}</Text>
      <View style={styles.buttonContainer}>
        {scanned && <Button title={"Scan again?"} onPress={() => {setScanned(false); setScannedBin(false); setText("")}} color="#167e64" />}
        <View style={styles.button}>
          {scannedBin && <Button title={"Connect"} onPress={() => storeData(text)} color="#167e64" />}
        </View>
      </View>
    </View>
  );
};

export default Scan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#A2E4B8",
  },

  barcodebox: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    width: 300,
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

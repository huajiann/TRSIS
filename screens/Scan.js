import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

const Scan = ({ navigation, route }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
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
    setScanned(true);
    setText(data);
    console.log("Type : " + type + "\nData : " + data);
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

  return (
    <View style={styles.container}>
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 400, width: 400 }}
        />
      </View>
      <Text style={styles.maintext}>{text}</Text>
      {scanned && <Button title={"Scan again?"} onPress={() => setScanned(false)} color="blue" />}

      <Button
        style={{ margin: 10 }}
        title={"Connect"}
        onPress={() =>
          navigation.navigate("Home", {
            paramKey: text,
          })
        }
        color="blue"
      />
    </View>
  );
};

export default Scan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "aquamarine",
  },

  barcodebox: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    width: 300,
    overflow: "hidden",
    borderRadius: 30,
    backgroundColor: "aquamarine",
  },
  maintext: {
    fontSize: 16,
    margin: 20,
  },
});

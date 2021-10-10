import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Scan = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>This is the Scan Screen!</Text>
      <Button title="Click Here" onPress={() => alert("Button Clicked!")} />
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
});

import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Settings = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>This is the Settings Screen!</Text>
      <Button title="Click Here" onPress={() => alert("Button Clicked!")} />
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#A2E4B8",
  },
});

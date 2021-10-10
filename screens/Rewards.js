import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Rewards = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>This is the Rewards Screen!</Text>
      <Button title="Click Here" onPress={() => alert("Button Clicked!")} />
    </View>
  );
};

export default Rewards;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "aquamarine",
  },
});

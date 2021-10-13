import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const FindBin = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>This is the Find Bin Screen!</Text>
      <Button title="Click Here" onPress={() => alert("Button Clicked!")} />
    </View>
  );
};

export default FindBin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "aquamarine",
  },
});

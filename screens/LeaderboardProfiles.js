import React, { Component } from "react";
import { View, Alert, Image, Text } from "react-native";

import Leaderboard from "react-native-leaderboard";

export default class LeaderboardProfiles extends Component {
  state = {
    data: [
      { userName: "Joe", highScore: 52 },
      { userName: "Jenny", highScore: 120 },
      //...
    ], //can also be an object of objects!: data: {a:{}, b:{}}
  };

  renderHeader() {
    return (
      <View
        colors={["#1da2c6", "#1695b7"]}
        style={{
          backgroundColor: "#A2E4B8",
          padding: 15,
          paddingTop: 40,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            color: "black",
          }}
        >
          Leaderboard
        </Text>
      </View>
    );
  }

  render() {
    // const props = {
    //   data: this.state.data,
    //   sortBy: "highScore",
    //   labelBy: "userName",
    // };
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        {this.renderHeader()}
        <Leaderboard data={this.state.data} sortBy="highScore" labelBy="userName" />
      </View>
    );
  }
}

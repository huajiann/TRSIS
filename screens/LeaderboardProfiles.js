import React, { Component, useState } from "react";
import { View, Alert, Image, Text } from "react-native";

import Leaderboard from "react-native-leaderboard";

// const getUserData = async () => {
//   try {
//     const userID = await AsyncStorage.getItem("id");
//     if (userID !== null) {
//       // value previously stored
//       handleUserData(userID);
//     }
//   } catch (e) {
//     // error reading value
//   }
// };

class LeaderboardProfiles extends Component {
  handleUserData = (user) => () => {
    const [username, setUsername] = useState();
    const [points, setPoints] = useState();
    const url = "https://blooming-brushlands-85049.herokuapp.com/user/usersList";

    try {
      axios.get(url).then(async (response) => {
        const name = response.data.name;
        const points = response.data.points;
        setUsername(name);
        setPoints(points.toString());
      });
    } catch (e) {
      console.log("Error : " + e);
    }

    // return <div> {username}</div>;
  };

  state = {
    data: [
      { userName: "Lei Ting", points: 1170 },
      { userName: "Hwan Woong", points: 826 },
      { userName: "Ravn", points: 732 },
      { userName: "Ming Hao", points: 50 },

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
    // const Listt = this.handleUserData();
    // const props = {
    //   data: [username, points],
    //   sortBy: "points",
    //   labelBy: "username",
    // };
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        {this.renderHeader()}
        {/* <div>{username}</div> */}
        <Leaderboard data={this.state.data} sortBy="points" labelBy="userName" />
      </View>
    );
  }
}

export default LeaderboardProfiles;

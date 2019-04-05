import React, { Component } from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

const chillImage = require("./assets/beach.png");

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate("Quotes")}
        >
          <Image source={chillImage} style={styles.buttonImage} />
        </TouchableOpacity>
        <Text style={styles.readyText}>I'm ready to chill...</Text>
      </View>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#efefef"
  },
  readyText: {
    fontSize: 20,
    fontStyle: "italic",
    color: "#fff"
  },
  button: {
    backgroundColor: "#859a9b",
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    shadowColor: "#303838",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35
  },
  buttonImage: {
    width: 200,
    height: 200
  }
});

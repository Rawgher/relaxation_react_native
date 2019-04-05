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
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#889dad",
      shadowColor: "transparent",
      borderBottomWidth: 0,
      elevation: 0
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate("Quotes")}
        >
          <Image source={chillImage} style={styles.buttonImage} />
          <Text style={styles.readyText}>I'm ready to chill...</Text>
        </TouchableOpacity>
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
    backgroundColor: "#889dad"
  },
  readyText: {
    fontSize: 22,
    fontStyle: "italic",
    color: "#040404",
    marginTop: 20,
    paddingLeft: 15,
    alignItems: "center"
  },
  button: {
    backgroundColor: "#889dad",
    borderRadius: 20,
    padding: 10,
    marginBottom: 20
  },
  buttonImage: {
    width: 200,
    height: 200
  }
});

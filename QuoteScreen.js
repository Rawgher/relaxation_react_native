import React, { Component } from "react";
import { Platform, StyleSheet, View } from "react-native";
import Quote from "./Quote";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

class QuoteScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Quote quoteText="what?" quoteSource=" -- This guy" />
      </View>
    );
  }
}

export default QuoteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#efefef"
  }
});

import React, { Component } from "react";
import { ImageBackground, Platform, StyleSheet, View } from "react-native";
import Quote from "./Quote";

const bgImg = require("./assets/cool_sky.jpg");
const { quotes } = require("./quotes.json");

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

class QuoteScreen extends Component {
  render() {
    const quote = quotes[2];
    return (
      <ImageBackground source={bgImg} style={styles.backgroundContainer}>
        <View style={styles.container}>
          <Quote quoteText={quote.text} quoteSource={quote.source} />
        </View>
      </ImageBackground>
    );
  }
}

export default QuoteScreen;

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    resizeMode: "cover",
    width: undefined,
    height: undefined
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 15
  }
});

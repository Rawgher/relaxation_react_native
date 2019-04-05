import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

class Quote extends Component {
  render() {
    return (
      <View style={styles.quoteContainer}>
        <Text style={styles.quoteText}>"{this.props.quoteText}"</Text>
        <Text style={styles.sourceText}>- {this.props.quoteSource}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  quoteContainer: {
    flex: 1,
    justifyContent: "center"
  },
  quoteText: {
    fontFamily: Platform.OS === "ios" ? "AvenirNext-Bold" : "Roboto",
    fontSize: 30,
    color: "#000066",
    marginVertical: 30
  },
  sourceText: {
    fontFamily: Platform.OS === "ios" ? "AvenirNext-Italic" : "Roboto",
    fontSize: 20,
    color: "#00008A",
    textAlign: "right",
    fontStyle: "italic"
  }
});

export default Quote;

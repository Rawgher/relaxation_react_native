import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

class NextQuoteButton extends Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={this.props.onNextQuotePress}
      >
        <Text style={styles.buttonText}>Next Thought</Text>
      </TouchableOpacity>
    );
  }
}

export default NextQuoteButton;

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderColor: "#00003D",
    borderRadius: 15,
    padding: 10,
    marginBottom: 20
  },
  buttonText: {
    color: "#00003D",
    fontSize: 18
  }
});

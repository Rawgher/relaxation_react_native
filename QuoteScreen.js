import React, { Component } from "react";
import {
  ImageBackground,
  LayoutAnimation,
  Platform,
  StyleSheet,
  UIManager,
  View
} from "react-native";
import QuoteButton from "./NextQuoteButton";
import Quote from "./Quote";

const bgImg = require("./assets/cool_sky.jpg");

const { quotes } = require("./quotes.json");

const tranquil = {
  duration: 500,
  create: {
    duration: 1000,
    delay: 300,
    type: LayoutAnimation.Types.easeIn,
    property: LayoutAnimation.Properties.opacity
  },
  update: {
    type: LayoutAnimation.Types.easeInEaseOut,
    property: LayoutAnimation.Properties.opacity
  },
  delete: {
    duration: 200,
    type: LayoutAnimation.Types.easeOut,
    property: LayoutAnimation.Properties.opacity
  }
};

// have to add to make animations work for android
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

class QuoteScreen extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#2980B9",
      shadowColor: "transparent",
      borderBottomWidth: 0,
      elevation: 0,
      shadowRadius: 0
    }
  };

  constructor(props) {
    super(props);

    this.state = {
      quoteIndex: 0
    };

    this._incrementQuoteIndex = this._incrementQuoteIndex.bind(this);
  }

  _incrementQuoteIndex() {
    let newIndex;

    if (this.state.quoteIndex + 1 === quotes.length) {
      newIndex = 0;
    } else {
      newIndex = this.state.quoteIndex + 1;
    }

    this.setState({
      quoteIndex: newIndex
    });
  }

  componentWillUpdate() {
    LayoutAnimation.configureNext(tranquil);
  }

  render() {
    const quote = quotes[this.state.quoteIndex];
    return (
      <ImageBackground source={bgImg} style={styles.backgroundContainer}>
        <View style={styles.container}>
          <Quote
            key={this.state.quoteIndex}
            quoteText={quote.text}
            quoteSource={quote.source}
          />
          <QuoteButton onNextQuotePress={this._incrementQuoteIndex} />
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

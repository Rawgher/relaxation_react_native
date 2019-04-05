import React, { Component } from "react";
import { Platform, StyleSheet } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";
import HomeScreen from "./HomeScreen";
import QuoteScreen from "./QuoteScreen";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Quotes: QuoteScreen
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(AppNavigator);

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

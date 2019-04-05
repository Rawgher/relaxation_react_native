import React, { Component } from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import HomeScreen from "./HomeScreen";
import QuoteScreen from "./QuoteScreen";

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

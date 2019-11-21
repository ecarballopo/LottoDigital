import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Login from "./src/components/Login";
import Register from "./src/components/Register";
import TabNavigator from "./src/components/MainTabNavigator";
import Information from "./src/components/Information";

const LoginNavigator = createStackNavigator({
  Information: {
    screen: Information,
    navigationOptions: {
      title: "LOTTO"
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      title: "LOTTO"
    }
  },
  Register: {
    screen: Register,
    navigationOptions: {
      title: "LOTTO"
    }
  },
  TabNavigator: {
    screen: TabNavigator,
    navigationOptions: {
      title: "LOTTO"
    }
  }
});

export default createAppContainer(LoginNavigator);

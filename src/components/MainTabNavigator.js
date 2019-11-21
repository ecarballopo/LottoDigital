import React from "react";
import { Button, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Icon } from "native-base";

import HomeScreen from "./Home";
import HistoryScreen from "./History";
import ProfileScreen from "./Profile";

console.disableYellowBox = true;

const TabNavigator = createBottomTabNavigator({
  Inicio: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: () => <Icon name="md-home" />
    }
  },
  Historial: {
    screen: HistoryScreen,
    navigationOptions: {
      tabBarIcon: () => <Icon name="md-bookmarks" />
    }
  },
  Perfil: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarIcon: () => <Icon name="md-person" />
    }
  }
});

export default createAppContainer(TabNavigator);

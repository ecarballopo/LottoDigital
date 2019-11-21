import React from "react";
import { Button, Text, View } from "react-native";
import Carousel from "react-native-carousel-control";

class Information extends React.Component {
  render() {
    return (
      <Carousel>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>First!</Text>
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Second!</Text>
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Third!</Text>
          <Button
            title="Continuar"
            onPress={() => this.props.navigation.navigate("Login")}
          />
        </View>
      </Carousel>
    );
  }
}

export default Information;

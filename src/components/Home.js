import React, { Component } from "react";
import {
  StyleSheet,
  FlatList,
  View,
  Alert,
  KeyboardAvoidingView
} from "react-native";
import { Container, Content, Text, ListItem } from "native-base";
import { AsyncStorage } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import Games from "./LocationGame";

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storeUser: "",
      locationArray: [
        { idLocation: "1", location: "San Jose" },
        { idLocation: "2", location: "Alajuela" },
        { idLocation: "3", location: "Cartago" }
      ]
    };
  }

  getUser = () => {
    alert(this.state.storeUser);
  };

  /*Desplegar modal con información tomada juegos de la lista de locaciones*/
  open = () => {
    // for (i = 0; i < this.state.locationArray.length; i++) {
    //   if (this.state.locationArray[i].idLocation == key) {
    //     this.myModal.openModal(
    //       this.state.locationArray[i].idLocation,
    //       this.state.locationArray[i].location,
    //       1
    //     );

    //   }
    // }
    this.myModal.show();
  };

  displayData = async () => {
    Alert.alert(await AsyncStorage.getItem("pruebaArray"));
    return (locationArray = JSON.parse(
      await AsyncStorage.getItem("pruebaArray")
    ));
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.keyboard} behavior="padding">
        <Container>
          <Content contentContainerStyle={styles.content}>
            <FlatList
              data={this.state.locationArray}
              keyExtractor={item => item.idLocation}
              extraData={this.state}
              renderItem={({ item }) => (
                <LocationRow
                  parentComponent={this}
                  location={item.location}
                  idLocation={item.idLocation}
                />
              )}
            />
            <Games
              ref={modal => (this.myModal = modal)}
              parentComponent={this}
            />
          </Content>
        </Container>
      </KeyboardAvoidingView>
    );
  }
}

const LocationRow = ({ location, idLocation, parentComponent }) => (
  <View>
    <TouchableOpacity onLongPress={() => parentComponent.open()}>
      <ListItem>
        <View style={styles.View}>
          <Text style={styles.itemTitle}>{location}</Text>
        </View>
      </ListItem>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  textCenter: {
    textAlign: "center",
    width: "100%"
  },
  content: {
    flex: 1,
    padding: 20
  },
  loadingApp: {
    textAlign: "center",
    width: "100%",
    justifyContent: "center"
  },
  button: {
    marginLeft: "38%"
  },
  container: {
    backgroundColor: "white"
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 15
  },
  itemValue: {
    color: "gray",
    fontSize: 15,
    position: "absolute",
    right: 15,
    alignSelf: "flex-end"
  },
  keyboard: {
    flex: 1
  },
  View: {
    flex: 1,
    flexDirection: "row"
  }
});

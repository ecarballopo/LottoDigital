import React, { Component } from "react";
import { Text, Dimensions, StyleSheet, Picker } from "react-native";
import { View, CardItem, Body, Item, Input } from "native-base";
import Modal from "react-native-modalbox";
import Button from "react-native-button";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

export default class Games extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idWeight: "",
      itemType: "",
      weightLimit: "1",
      storeUser: "",
      GamesArray: []
    };
  }

  show = () => {
    this.myModal.open();
  };

  openModal = (idWeight, itemType, weightLimit) => {
    this.setState({ idWeight, itemType, weightLimit });
    this.myModal.open();
  };

  render() {
    return (
      <Modal
        ref={modal => (this.myModal = modal)}
        position="center"
        backdrop={true}
        style={styles.modal}
      >
        <View>
          <Text style={styles.titulo}>Juegos</Text>
          <CardItem bordered>
            <Body>
              <Item inlineLabel>
                <FontAwesome name="barcode" size={20}></FontAwesome>
                <Input
                  keyboardType="numeric"
                  placeholder="Juego"
                  onChangeText={text => this.setState({ idWeight: text })}
                  value={this.state.idWeight}
                />
              </Item>
              <Item inlineLabel>
                <FontAwesome name="balance-scale" size={20}></FontAwesome>
                <Input
                  placeholder="Numero"
                  onChangeText={text => this.setState({ itemType: text })}
                  value={this.state.itemType}
                />
              </Item>
              <Item inlineLabel last>
                <MaterialCommunityIcons
                  name="scale"
                  size={20}
                ></MaterialCommunityIcons>
                <Input
                  onChangeText={text => this.setState({ weightLimit: text })}
                  placeholder="Monto"
                  //value={this.state.weightLimit}
                />
              </Item>
            </Body>
          </CardItem>
          <Button
            onPress={() => {
              if (this.state.idWeight.length == 0) {
                alert("No puede haber campos vacios");
                return;
              } else {
                this.sendData();
              }
            }}
          >
            OK
          </Button>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    justifyContent: "center",
    shadowRadius: 10,
    width: Dimensions.get("screen").width - 30,
    height: 310,
    borderRadius: 20
  },
  titulo: {
    textAlign: "center",
    width: "100%",
    justifyContent: "center",
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 30
  }
});

import React, { Component } from "react";
import {
  StyleSheet,
  FlatList,
  View,
  Alert,
  KeyboardAvoidingView
} from "react-native";
import { Container, Content, Text, ListItem, Item } from "native-base";
import { AsyncStorage } from "react-native";

export default class HistoryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storeUser: "",
      TransactionArray: [
        {
          idTransaction: "1",
          GameDate: "21/11/19",
          Transaction: "Lotto",
          Amount: "200"
        },
        {
          idTransaction: "2",
          GameDate: "21/11/19",
          Transaction: "Loteria",
          Amount: "200"
        },
        {
          idTransaction: "3",
          GameDate: "21/11/19",
          Transaction: "Chances",
          Amount: "200"
        }
      ]
    };
  }

  getUser = () => {
    alert(this.state.storeUser);
  };

  displayData = async () => {
    Alert.alert(await AsyncStorage.getItem("pruebaArray"));
    return (TransactionArray = JSON.parse(
      await AsyncStorage.getItem("pruebaArray")
    ));
  };

  renderTransaction = id => {
    if (id == "/board_1/weight_1") {
      return this.state.message_placa1;
    }
    if (id == "/board_1/weight_2") {
      return this.state.message_placa2;
    }
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.keyboard} behavior="padding">
        <Container>
          <Content contentContainerStyle={styles.content}>
            <FlatList
              data={this.state.TransactionArray}
              keyExtractor={item => item.idTransaction}
              extraData={this.state}
              renderItem={({ item }) => (
                <HistoryRow
                  parentComponent={this}
                  GameDate={item.GameDate}
                  Transaction={item.Transaction}
                  Amount={item.Amount}
                  idTransaction={item.idTransaction}
                />
              )}
            />
          </Content>
        </Container>
      </KeyboardAvoidingView>
    );
  }
}

const HistoryRow = ({
  Transaction,
  Amount,
  GameDate,
  idTransaction,
  parentComponent
}) => (
  <View>
    <ListItem>
      <View style={styles.View}>
        <Text style={styles.itemTitleDate}>{GameDate}</Text>
        <Text style={styles.itemTitle}>{Transaction}</Text>
        <Text style={styles.itemValue}>{Amount} Colones</Text>
      </View>
    </ListItem>
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
    marginLeft: 30
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

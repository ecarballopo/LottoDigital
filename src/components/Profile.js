import React from "react";
import { FlatList, Text, View, Image, StyleSheet } from "react-native";
import { Container, Content } from "native-base";

export default class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileArray: [
        {
          idUser: "1",
          User: "Erick Carballo",
          idNumber: "12345",
          Credit: "10000"
        }
      ]
    };
  }

  render() {
    return (
      <Container>
        <Content>
          <View>
            <Image
              style={{
                flex: 1,
                alignSelf: "center",
                alignItems: "center",
                margin: 20
              }}
              source={require("../../assets/icon.png")}
            />
          </View>
          <FlatList
            data={this.state.profileArray}
            keyExtractor={item => item.idUser}
            extraData={this.state}
            renderItem={({ item }) => (
              <ProfileRow
                User={item.User}
                idNumber={item.idNumber}
                Credit={item.Credit}
              />
            )}
          />
        </Content>
      </Container>
    );
  }
}

const ProfileRow = ({ User, idNumber, Credit }) => (
  <View>
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Text style={styles.titulo}>{User}</Text>
      <Text style={styles.titulo}>Cédula: {idNumber}</Text>
      <Text style={styles.titulo}>Crédito: {Credit}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  titulo: {
    textAlign: "center",
    width: "100%",
    justifyContent: "center",
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 10
  }
});

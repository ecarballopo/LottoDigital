import React from "react";
import { FlatList, Text, View, Image } from "react-native";
import { Container, Content } from "native-base";

export default class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileArray: [
        { idUser: "1", User: "San Jose", idNumber: "12345", Credit: "10000" }
      ]
    };
  }

  render() {
    return (
      <Container>
        <Content>
          <Image source={require("../../assets/icon.png")} />
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
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{User}</Text>
      <Text>{idNumber}</Text>
      <Text>{Credit}</Text>
    </View>
  </View>
);

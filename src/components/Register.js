import React, { Component } from "react";
import {
  StyleSheet,
  Alert,
  ToastAndroid,
  KeyboardAvoidingView
} from "react-native";
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Button,
  Item,
  Input
} from "native-base";
import { FontAwesome } from "@expo/vector-icons";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      userText: "",
      emailText: "",
      passwordText: "",
      response: ""
    };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto_medium: require("../../node_modules/native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }

  /*Registro de datos de usuario para ingresar a la aplicación*/
  register = () => {
    if (
      this.state.userText === "" ||
      this.state.emailText === "" ||
      this.state.passwordText === ""
    ) {
      Alert.alert(
        "Por favor llenar todos los campos para poder registrar un nuevo usuario"
      );
    } else {
      console.log(
        "Nombre " +
          this.state.emailText +
          " Cédula " +
          this.state.userText +
          " Contraseña " +
          this.state.passwordText
      );
      this.props.navigation.navigate("Inicio");
    }
  };

  render() {
    if (this.state.loading) {
      return <Text style={styles.loadingApp}>Cargando Aplicacion</Text>;
    }
    return (
      <KeyboardAvoidingView style={styles.keyboard} behavior="padding">
        <Container style={styles.container}>
          <Content padder contentContainerStyle={styles.content}>
            <Card>
              <CardItem header bordered>
                <Text style={styles.textCenter}>Registro de usarios</Text>
              </CardItem>
              <CardItem bordered>
                <Body>
                  <Item inlineLabel>
                    <FontAwesome name="user-circle" size={20}></FontAwesome>
                    <Input
                      placeholder="Nombre Completo"
                      onChangeText={emailText =>
                        this.setState({ emailText: emailText })
                      }
                    />
                  </Item>
                  <Item inlineLabel>
                    <FontAwesome name="credit-card" size={20}></FontAwesome>
                    <Input
                      keyboardType="numeric"
                      placeholder="Cédula"
                      onChangeText={userText =>
                        this.setState({ userText: userText })
                      }
                    />
                  </Item>
                  <Item inlineLabel last>
                    <FontAwesome name="lock" size={20}></FontAwesome>
                    <Input
                      secureTextEntry={true}
                      placeholder="Contraseña"
                      onChangeText={passwordText =>
                        this.setState({ passwordText: passwordText })
                      }
                    />
                  </Item>
                </Body>
              </CardItem>
              <CardItem footer>
                <Button primary style={styles.button} onPress={this.register}>
                  <Text>Registrarse</Text>
                </Button>
              </CardItem>
            </Card>
          </Content>
        </Container>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  textCenter: {
    textAlign: "center",
    width: "100%"
  },
  content: {
    flex: 1,
    justifyContent: "center"
  },
  loadingApp: {
    textAlign: "center",
    width: "100%",
    justifyContent: "center"
  },
  button: {
    marginLeft: "55%"
  },
  container: {
    backgroundColor: "white"
  },
  keyboard: {
    flex: 1
  }
});

export default Register;

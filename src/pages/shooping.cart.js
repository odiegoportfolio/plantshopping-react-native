import React from "react";
import { Container, Header, Footer, FooterTab, Button, Icon } from 'native-base'
import {StyleSheet} from "react-native";
import Plants from "../components/plants";
export default class ShoppingCart extends React.Component{

  render() {
    return(
      <Container>
          <Content>

            <Text>Nova pagina</Text>

          </Content>
      </Container>
      
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor:"#2E8B57"
  },
  footer:{
    backgroundColor:"#2E8B57"
  }
});
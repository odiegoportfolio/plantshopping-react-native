import React from "react";
import { Container, Header, Footer, FooterTab, Button, Icon } from 'native-base'
import {StyleSheet} from "react-native";
import Plants from "../components/plants";
export default class HomeScreen extends React.Component{

  render() {
    return(
      <Container>
          <Header style={styles.header} />
          <Plants/>
          <Footer>
            <FooterTab style={styles.footer}>
            <Button>
                <Icon name="user-circle" type="FontAwesome"/>
              </Button>
              <Button>
                <Icon name="camera" type="FontAwesome"/>
              </Button>
              <Button>
                <Icon active name="search" type="FontAwesome"/>
              </Button>
              <Button>
                <Icon name="shopping-cart" type="FontAwesome"/>
              </Button>
            </FooterTab>
          </Footer>
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
import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import {connect} from "react-redux";
class Cart extends React.Component{

  renderItem =({item})=>{
     return (
          <View style={styles.itemContainer}>
            <View style={styles.imagesContainer}>
              <Image style={styles.images} source={item.value.image}/>
            </View>
            <View style={styles.itemNameContainer}>
              <Text style={styles.itemName}>{item.value.name}</Text>
            </View>
        </View>
          
        )
    }
  render() {
    return(
      <View style={styles.container}>
            <FlatList style={{marginBottom : 5}}
                data={this.props.cartItems}
                renderItem={this.renderItem} 
                numColumns={"2"}
                keyExtractor={(item) => item.key}/>
          </View> 
      
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    backgroundColor: "white"
  },
  itemContainer:{
    width:  250,
    height: 320,
    margin: 5,
    backgroundColor: "white",
    borderRadius:10,
    padding: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  imagesContainer:{
    alignItems: "center",
    padding: 0
  },
  images:{
    width: 250,
    height: 250,
  },
  itemNameContainer:{
    marginTop: 5,
    marginLeft: 5
  },
  itemName:{
    fontWeight: "bold",
    fontSize: 23
  },
  itemPriceContainer:{
    marginTop: 5,
    marginLeft: 5
  },
  itemPrice:{
    fontWeight: "bold",
    color: 'grey',
    fontSize: 20
  },
});

const mapStateToPros = (state) =>{
  return {
    cartItems: state.cartReducer.cartItems
  }
}
export default  connect(mapStateToPros)(Cart);
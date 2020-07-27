import React from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
import NumberFormat from 'react-number-format';
import {connect} from "react-redux";
class Cart extends React.Component{

  renderItem =({item})=>{
     return (
            <View style={styles.itemContainer}>
              <View style={styles.imagesContainer}>
                <Image style={styles.images} source={item.value.image}/>
              </View>
              <View style={styles.containerColumn}>
                <View style={styles.containerRow}>
                  <View style={styles.itemNameContainer}>
                    <NumberFormat value={item.value.price} displayType={'text'} thousandSeparator={true}
                          fixedDecimalScale={true} thousandSeparator={'.'} decimalSeparator={','} decimalScale={2} prefix={'€'} 
                          renderText={
                              value => <Text style={styles.itemPrice}>{value}</Text>
                          }/>
                    <Text style={styles.itemName}>{item.value.name}</Text>
                  </View>
                  <View style={styles.itemCloseContainer}>
                    <TouchableOpacity  style={styles.itemClose} onPress={()=> {}}>
                      <Icon style={[{color: "#800000", marginTop: 4}]} size={30} name={'close-outline'}/>
                    </TouchableOpacity>      
                  </View>
                </View> 
                <View style={styles.amountContainer}>
                    <View style={{width: "50%"}}><Text style={styles.amountField}>Amout:</Text></View>
                    <View style={{width: "50%",  marginTop: 25, alignItems: "flex-end"}}>
                    <View style={{flexDirection: "row"}}>
                      <TouchableOpacity onPress={()=> {}}>
                        <Icon style={[{color: "#800000", marginRight: 10}]} size={35} name={'chevron-back-outline'}/>
                      </TouchableOpacity>  
                      <Text style={styles.amount}>1</Text>
                      <TouchableOpacity  onPress={()=> {}}>
                        <Icon style={[{color: "#800000", marginLeft: 10}]} size={35} name={'chevron-forward-outline'}/>
                      </TouchableOpacity>    
                    </View>
                          
                    </View>
                </View>  
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
                keyExtractor={item => item.key.toString()}/>
          </View> 
      
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "white",
    padding: 20
  },
  containerRow:{
    flexDirection: 'row', 
    width: "100%", 
    height: "100%",
    paddingRight: 10
  },
  containerColumn:{
    flexDirection: 'column', 
    width: "70%", 
    height: "50%"
  },
  itemContainer:{
    margin: 5,
    marginTop: 20,
    backgroundColor: "white",
    padding: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row',
    height: 150
  },
  imagesContainer:{
    alignItems: "flex-start",
    flexDirection: "column",
    padding: 0,
    width: "30%"
  },
  images:{
    width: 150, 
    height: 150,
  },
  itemNameContainer:{
    marginTop: 5,
    width: "50%"
  },
  itemCloseContainer:{
    marginTop: 5,
    alignItems: "flex-end",
    width: "50%"
  },
  itemClose:{
    width: 40,
    height: 40,
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  itemName:{
    fontWeight: "bold",
    fontSize: 17,
    marginTop: 10,
    color: '#696969'
  },
  amountContainer:{
    width: "95%", 
    height: "100%", 
    borderTopWidth: 2, 
    borderTopColor: "#DCDCDC",
    flexDirection: 'row'
  },
  amountField:{
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 25,
    fontWeight: "bold",
    color: '#696969'
  },
  amount:{
    fontWeight: "bold",
    fontSize: 30,
    marginTop: -2,
    fontWeight: "bold",
    color: '#696969'
  },
  itemPriceContainer:{
    marginTop: 5,
    marginLeft: 5
  },
  itemPrice:{
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 20
  },
});

const mapStateToPros = (state) =>{
  return {
    cartItems: state.cartReducer.cartItems
  }
}
export default  connect(mapStateToPros)(Cart);
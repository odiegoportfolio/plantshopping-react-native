import React  from 'react';
import {View, Text, Image, StyleSheet, TouchableHighlight } from 'react-native';
import NumberFormat from 'react-number-format';
//import '../common/global';
export default function PlantDetail({ route, navigation }){
    const { item } = route.params;
    const onPress = () =>{
      //global.plantsInTheCart.push(item);
    };
    return (
        <View style={styles.container}>
            <View style={styles.imagesContainer}>
                 <Image style={styles.images} source={item.image}/>
            </View>
            <View style={styles.itemName}>
              <Text style={styles.itemName}>{item.name}</Text>  
            </View>
            <View style={styles.itemPriceContainer}>
              <NumberFormat 
                    value={item.price} 
                    displayType={'text'} 
                    thousandSeparator={true}
                    fixedDecimalScale={true}
                    thousandSeparator={'.'} 
                    decimalSeparator={','}
                    decimalScale={2} 
                    prefix={'€'} 
                    renderText={
                        value => <Text style={styles.itemPrice}>{value}</Text>
                    }/>
            </View>
            <View style={styles.itemDescriptionContainer}>
              <Text style={styles.itemDescription}>{item.description}</Text>
            </View>
            <View style={styles.buttonContainer}>

              <TouchableHighlight  style={styles.button} onPress={onPress}>
                  <Text style={styles.textButton}>Add to Cart</Text>
              </TouchableHighlight >
            </View>

        </View>

    );
}


const styles = StyleSheet.create({
    container:{
      flex: 1,
      padding: 20,
      backgroundColor: "white"
    },
    imagesContainer:{
      alignItems: "center",
      padding: 0
    },
    images:{
      width: 500,
      height: 500
    },
    itemNameContainer:{
      marginTop: 5,
      marginLeft: 5,
      alignItems: 'flex-start'
    },
    itemName:{
      fontWeight: "bold",
      fontSize: 35
    },
    itemPriceContainer:{
      marginTop: 5
    },
    itemPrice:{
      fontWeight: "bold",
      color: '#4F4F4F',
      fontSize: 25
    },
    itemDescriptionContainer:{
      marginTop: 15
    },
    itemDescription:{
      color: '#808080',
      fontSize: 20
    },
    buttonContainer:{
      marginTop: 45 ,
      alignItems: "center"
    },
    button:{
      backgroundColor: "#2E8B57",
      color: "white",
      height: 55,
      width: 450,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5


    },
    textButton: {
      marginTop: 14,
      color: "white",
      fontSize: 20,
      fontWeight: "bold"
    }
  });
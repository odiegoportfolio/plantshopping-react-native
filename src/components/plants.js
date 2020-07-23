import React,{Component} from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
import PlantsService from "../services/plants.service.js";
import NumberFormat from 'react-number-format';
import { NavigationContext } from '@react-navigation/native';
import {connect} from "react-redux";
import {setPlant} from "../actions/plant";

class Plants extends Component {
    static contextType = NavigationContext;
    renderItem =({item})=>{
      const navigation = this.context;
       return (
            

            <TouchableOpacity onPress={()=> {
                this.props.setPlant(item);
                navigation.navigate('PlantDetail');
              }}>
                <View style={styles.itemContainer}>
                  <View style={styles.imagesContainer}>
                    <Image style={styles.images} source={item.image}/>
                  </View>
                  <View style={styles.itemNameContainer}>
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
                              } 
                        />
                  </View>
              </View>
          </TouchableOpacity>
            
          )
      }
      render(){
        return (
          <View style={styles.container}>
            <FlatList style={{marginBottom : 5}}
                data={PlantsService.getPlants()}
                renderItem={this.renderItem} 
                numColumns={"2"}
                keyExtractor={(item) => item.id}/>
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


  const mapDispatchToPros = (dispatch) =>{
    return {
      setPlant: (plant) => dispatch(setPlant(plant))
    }
  }

  export default connect(null, mapDispatchToPros)(Plants);
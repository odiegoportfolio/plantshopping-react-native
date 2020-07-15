import React,{Component} from "react";

import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import PlantsService from "../services/plants.service.js";

export default class Plants extends Component {

    renderItem =({item})=>{
       return (
            <View style={styles.itemContainer}>
                <Image source={require('../images/plant.jpg')} style={styles.images}/>
                <Text>{item.name}</Text>
            </View>
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
      flex: 1
    },
    itemContainer:{
      alignItems: "center",
      marginHorizontal: 5,
      marginVertical: 5,
      width: 196,
      height: 250,
      backgroundColor: "white",
      borderRadius:5
    },
    images:{
      width: 180,
      height: 150,
    }
  });
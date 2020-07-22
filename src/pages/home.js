import React,{Component} from "react";
import Plants from "../components/plants";
import PlantDetail from "../components/plant-detail";
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
export default class HomeScreen extends Component {
  render(){
    return (
        <Stack.Navigator initialRouteName="Plants">
          <Stack.Screen name="Plants" component={Plants} />
          <Stack.Screen name="PlantDetail" component={PlantDetail} />
        </Stack.Navigator>
    );
  }
}
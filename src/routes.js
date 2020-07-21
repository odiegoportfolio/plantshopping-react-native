import * as React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from './pages/home';
function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();
const Home = HomeScreen;

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
         initialRouteName="Home"
         activeColor="#f0edf6"
         inactiveColor="#a2a2a2"
         barStyle={{ backgroundColor: '#045e17' }}>
        
          <Tab.Screen name="Profile" component={SettingsScreen} options={{
                tabBarIcon: ({ color }) => (
                  <Icon style={[{color: color}]} size={27} name={'person-outline'}/>
                )
              }}/>
          <Tab.Screen name="Search" component={SettingsScreen} options={{
              tabBarIcon: ({ color }) => (
                <Icon style={[{color: color}]} size={27} name={'search-outline'}/>
              )
            }}/>

            <Tab.Screen name="Camera" component={Home} 
              options={{
                tabBarIcon: ({ color }) => (
                  <Icon style={[{color: color}]} size={27} name={'camera-outline'}/>
                  
                )
          }}/>

          <Tab.Screen name="Home" component={Home} 
              options={{
                tabBarIcon: ({ color }) => (
                  <Icon style={[{color: color}]} size={27} name={'home-outline'}/>
                  
                )
          }}/>

          <Tab.Screen name="Shopping Cart" component={SettingsScreen} options={{
              tabBarIcon: ({ color }) => (
                <Icon style={[{color: color}]} size={27} name={'cart-outline'}/>
              )
            }}/>     
      </Tab.Navigator>
    </NavigationContainer>
  );
}

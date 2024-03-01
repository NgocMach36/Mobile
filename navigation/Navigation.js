import React, { Component } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from "@react-navigation/drawer";
import Ionicons from "@expo/vector-icons/Ionicons";


import HomeScreen from "./../screens/HomeScreen";
import ProductsScreen from "./../screens/ProductsScreen";
import DetailScreen from "./../screens/DetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FilterScreen from "../screens/FilterScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator(); 
const Drawer = createDrawerNavigator();
const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false}}> 
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
      <Stack.Screen name='ProductsScreen' component={ProductsScreen} />
      <Stack.Screen name='DetailScreen' component={DetailScreen} />
        </Stack.Navigator>
  )
}
const FavStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false}}> 
      <Stack.Screen name='FavoritesScreen' component={FavoritesScreen} /> 
    </Stack.Navigator>
  )
}
const FilterStack =() => {
  return (
    <Stack.Navigator> 
      <Stack.Screen name='FilterScreen' component={ FilterScreen} />
    </Stack.Navigator>
  )
}
const HomeTab = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="HomeTab" component = {MainStack } options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size}) => (
          <Ionicons name="home" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="Favorite" component={FavStack} options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name= "heart" color={color} size={size} />
        ),
      }} />
    </Tab.Navigator>
  )
}
export default function Navigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeTab} />
        <Drawer.Screen name="Filter" component={FilterStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

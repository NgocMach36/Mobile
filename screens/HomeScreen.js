import React, { Component, useEffect } from "react";
import { StatusBar } from "react-native";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import CATEGORIES from "./../data/categories";

const HomeScreen = (props) => {
  useEffect(() => {
    props.navigation.setOptions({
      title: 'Home Screen', 
      headerTitleStyle: {alignSelf: 'center'},
      headerLeft: () => ( 
        <View style={styles.header}>
          <TouchableOpacity 
          onPress={() => navigation.openDrawer()}>
            <Ionicons name={'ios-menu'} size={50} 
            style={styles.icon} />
          </TouchableOpacity>
        </View>

      )
    })
  })
    return (
      <FlatList
        style={{ marginTop: StatusBar.currentHeight }}
        data={CATEGORIES}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate("ProductsScreen", {
                categoryId: item.id,
              })
            }
          >
            <View style={[styles.view, { backgroundColor: item.color }]}>
              <Text style={styles.text}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    );
  }


const styles = StyleSheet.create({
  view: {
    margin: 10,
    paddingTop: 25,
    paddingBottom: 25,
    borderRadius: 10,
  },
  text: {
    textAlign: "center",
    fontSize: 24,
  },
});

export default HomeScreen;

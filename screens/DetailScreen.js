import React, { Component, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import PRODUCTS from "../data/products";
import { useSelector} from "react-redux";
import { useCallback } from 'react';
import { useDispatch } from "react-redux";

const DetailScreen = (props) => {
  const { productId } = props.route.params;
  const availableProducts = useSelector (state => state.products)
  const product = availableProducts.find(item => item.id === productId);
  const dispatch = useDispatch(); 
  const addToFav = () => {
    dispatch({type: 'TOGGLE_FAVORITE', productId: productId})
  };
  useEffect(()=>{
    props.navigation.setOptions({
      headerRight: () => (
        <View>
          <TouchableOpacity
            onPress={() => addToFav()}>
            <Ionicons name={"ios-star"} size={35} style={styles.icon}></Ionicons>
          </TouchableOpacity></View>
      ),
    });
  }, [props.navigation])
  return (
    <View style={styles.view}>
      <Text style={styles.text}>{product.name}</Text>
      <Image style={styles.image} source={{ uri: product.image }}></Image>
      <Text style={styles.description}>
        Mô tả chi tiết về sản phẩm. Mô tả chi tiết về sản phẩm. Mô tả chi tiết
        về sản phẩm. Mô tả chi tiết về sản phẩm. Mô tả chi tiết về sản phẩm. Mô
        tả chi tiết về sản phẩm. Mô tả chi tiết về sản phẩm. Mô tả chi tiết về
        sản phẩm. Mô tả chi tiết về sản phẩm. Mô tả chi tiết về sản phẩm. Mô tả
        chi tiết về sản phẩm. Mô tả chi tiết về sản phẩm. Mô tả chi tiết về sản
        phẩm.{" "}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 22,
  },
  image: {
    width: 300,
    height: 300,
    marginVertical: 20,
  },
  description: {},
  icon:{

  }
});

export default DetailScreen;

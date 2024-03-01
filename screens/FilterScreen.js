import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Switch,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, {useCallback, useState} from 'react';
import { TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { useEffect } from "react";


export default function FilterScreen(props) {
const [isBrandOn, setIsBrandOn] = useState(false);
const [isSaleOn, setIsSaleOn] = useState(false);
const dispatch = useDispatch();
const saveFilter = useCallback(() => {
  const filters = {
    isBrand: isBrandOn,
    isSale: isSaleOn,
  }
  dispatch ({ types: 'SET_FILTER', filers: filters})
}, [dispatch, isBrandOn, isSaleOn]);
 useEffect (() => {
  props.navigation.setOptions ({
    headerRight: () => (
      <View style ={styles.header}>
        <TouchableOpacity 
        onPress={() => saveFilter()}
        >
          <Ionicons name={'ios-save'}
          size={35} style={styles.icon} />
        </TouchableOpacity>
      </View>
    )
  })
})

  return (
    <View style={styles.container}>
        <Text style={styles.title}> Chọn bộ lọc </Text>
        <View style={styles.view}>
            <Text style={styles.text}> Hàng mới </Text>
            <Switch styles={styles.switch} 
            value={isBrandOn}
            onValueChange={newValue => setIsBrandOn(newValue)}/> 
        </View>
        <View style={styles.view}>
            <Text style={styles.text}> Hàng khuyến mãi </Text>
            <Switch styles={styles.switch} 
            value={isSaleOn}
            onValueChange={newValue => setIsSaleOn(newValue)}/> 
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
  },
  text: {
    fontSize: 16,
  },

});

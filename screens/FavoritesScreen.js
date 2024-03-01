import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Touchable,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import PRODUCTS from "./../data/products";
import { useSelector} from "react-redux";


export default function FavoritesScreen(props) {
  const favProducts = useSelector(state => state.favProducts)
  const data =favProducts.filter( item => item.isFav === true)
  if (favProducts.length !== 0) {
  return (
    <View> 
        <Text styles={styles.text}> Danh Sách Sản Phẩm Yêu Thích</Text>
    <FlatList
      data={data}
      keyExtractor={item =>item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate("DetailScreen", { productId: item.id })
          }
        >
          <View style={[styles.view, { backgroundColor: item.color }]}>
            <Text style={styles.text}>{item.name}</Text>
            <Image style={styles.image} source={{ uri: item.image }} />
          </View>
        </TouchableOpacity>
      )}
    ></FlatList>
    </View>
  );
}
else return (<Text style={styles.text}> Nothing found!</Text>);
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    borderRadius: 16,
    paddingVertical: 10,
  },
  text: {
    fontSize: 16,
  },
  image: {
    width: 100,
    height: 100,
  },
});

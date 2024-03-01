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
import PRODUCTS from "./../data/products";
import { useSelector} from "react-redux";


export default function ProductsScreen(props) {
  const { categoryId } = props.route.params;
  const availableProducts  = useSelector((state) => state.filterProducts)
  console.log(availableProducts)
  const data = availableProducts.filter(item => item.categoryId === categoryId)
  return (
    <FlatList
      data={data}
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
  );
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

import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import products from "./Products.json";
import Card from "./Components/Product/Card";
import { useState } from "react";
export default function App() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.store_name}>PATIKASTORE</Text>
        <TextInput
          style={styles.input}
          placeholder="Ara.."
          onChange={(e) => setSearch(e.nativeEvent.text)}
        />
        <FlatList
          data={filteredProducts}
          renderItem={({ item }) => <Card product={item} />}
          keyExtractor={(item) => item.id}
          numColumns={2}
        />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  input: {
    height: 48,
    borderWidth: 1,
    margin: 12,
    borderColor: "#e1e1e1",
    backgroundColor: "#ECEFF1",
    borderRadius: 8,
    padding: 2,
  },
  store_name: {
    color: "#800080",
    fontWeight: "800",
    fontSize:27,
    marginLeft:10 ,
    marginTop:10,
  },
});

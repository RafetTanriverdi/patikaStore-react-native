import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  card_container: {
    flex: 1,
    backgroundColor: "#ECEFF1",
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  product_image: {
    height: Dimensions.get("window").height / 3,
    borderRadius: 10,
  },
  product_name: {},
  product_price: {
    color: "#828282",
  },
  product_status: {
    color: "#FF0000",
    fontWeight:"600"
  },
});

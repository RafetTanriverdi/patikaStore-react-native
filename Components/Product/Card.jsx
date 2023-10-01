import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./Card.style";

export default function Card({ product }) {
  console.log(product);
  return (
    <View style={styles.card_container}>
      <Image style={styles.product_image} source={{ uri: product.imgURL }} resizeMode="contain" />
        
      <Text style={styles.product_name}>{product.title}</Text>
      <Text style={styles.product_price}>{product.price}</Text>
      {!product.inStock?<Text style={styles.product_status}>STOKTA YOK</Text>:null}
    </View>
  );
}

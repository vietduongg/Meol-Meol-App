import React from "react";
import { View, Text, Image } from "react-native";
import { Divider } from "react-native-elements";

import About from "../components/RestaurantDetail/About";
import RestaurantMenu from "../components/RestaurantDetail/RestaurantMenu";

export default function RestaurantDetail({ route, navigation }) {
  return (
    <View>
      <About route={route} />
      <Divider />
      <RestaurantMenu />
    </View>
  );
}

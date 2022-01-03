import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { Divider } from "react-native-elements";

import SearchBar from "../components/Home/SearchBar";
import Category from "../components/Home/Category";
import RestaurantItem from "../components/Home/RestaurantItem";
import { localRestaurants } from "../data/data";
import BottomTab from "../components/Home/BottomTab";

export default function Home({ navigation }) {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState("");

  const findListRestaurant = () => {
    var place = city;
    console.log("-------------------------");
    let array = [];
    var obj = {};
    for (let loop in localRestaurants) {
      if (localRestaurants[loop].place.indexOf(place) != -1) {
        obj = localRestaurants[loop];
        array.push(obj);
      }
    }
    setRestaurantData(array);
  };

  useEffect(() => {
    findListRestaurant();
  }, [city]);
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "#A3E4DB", padding: 15 }}>
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showVerticalScrollIndicator={false}>
        <Category />
        <RestaurantItem
          restaurantData={restaurantData}
          navigation={navigation}
        />
      </ScrollView>
      <Divider width={1} />
      <BottomTab />
    </SafeAreaView>
  );
}

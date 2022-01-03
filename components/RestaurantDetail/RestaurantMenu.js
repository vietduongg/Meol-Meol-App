import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Divider } from "react-native-elements";

const food = [
  {
    title: "Bún thịt nướng",
    desc: "Bún thịt nướng là một món ăn phổ biến và được yêu thích của cả 3 miền đất nước, mỗi nơi đều giữ cho mình một hương vị đặc trưng riêng tùy theo khẩu vị từng miền Bắc, Trung, Nam.",
    price: "30000",
    image:
      "https://media.phunutoday.vn/files/upload_images/2016/03/28/cach-lam-bun-thit-nuong-2-phunutoday_vn.jpg",
  },
  {
    title: "Bún thịt nướng 2",
    desc: "Bún thịt nướng là một món ăn phổ biến và được yêu thích của cả 3 miền đất nước, mỗi nơi đều giữ cho mình một hương vị đặc trưng riêng tùy theo khẩu vị từng miền Bắc, Trung, Nam.",
    price: "30000",
    image:
      "https://media.phunutoday.vn/files/upload_images/2016/03/28/cach-lam-bun-thit-nuong-2-phunutoday_vn.jpg",
  },
  {
    title: "Bún thịt nướng 3",
    desc: "Bún thịt nướng là một món ăn phổ biến và được yêu thích của cả 3 miền đất nước, mỗi nơi đều giữ cho mình một hương vị đặc trưng riêng tùy theo khẩu vị từng miền Bắc, Trung, Nam.",
    price: "30000",
    image:
      "https://media.phunutoday.vn/files/upload_images/2016/03/28/cach-lam-bun-thit-nuong-2-phunutoday_vn.jpg",
  },
  {
    title: "Bún thịt nướng 4",
    desc: "Bún thịt nướng là một món ăn phổ biến và được yêu thích của cả 3 miền đất nước, mỗi nơi đều giữ cho mình một hương vị đặc trưng riêng tùy theo khẩu vị từng miền Bắc, Trung, Nam.",
    price: "30000",
    image:
      "https://media.phunutoday.vn/files/upload_images/2016/03/28/cach-lam-bun-thit-nuong-2-phunutoday_vn.jpg",
  },
  {
    title: "Bún thịt nướng 5",
    desc: "Bún thịt nướng là một món ăn phổ biến và được yêu thích của cả 3 miền đất nước, mỗi nơi đều giữ cho mình một hương vị đặc trưng riêng tùy theo khẩu vị từng miền Bắc, Trung, Nam.",
    price: "30000",
    image:
      "https://media.phunutoday.vn/files/upload_images/2016/03/28/cach-lam-bun-thit-nuong-2-phunutoday_vn.jpg",
  },
  {
    title: "Bún thịt nướng 6",
    desc: "Bún thịt nướng là một món ăn phổ biến và được yêu thích của cả 3 miền đất nước, mỗi nơi đều giữ cho mình một hương vị đặc trưng riêng tùy theo khẩu vị từng miền Bắc, Trung, Nam.",
    price: "30000",
    image:
      "https://media.phunutoday.vn/files/upload_images/2016/03/28/cach-lam-bun-thit-nuong-2-phunutoday_vn.jpg",
  },
];
export default function RestaurantMenu() {
  return (
    <ScrollView showVerticalScrollIndicator={false}>
      {food.map((foods, index) => (
        <View key={index}>
          <View style={styled.menuItem}>
            <FoodInfo food={foods} />
            <FoodImage food={foods} />
          </View>
          <Divider
            width={0.5}
            orientation="vertical"
            style={{ marginHorizontal: 20 }}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const FoodInfo = (props) => (
  <View style={{ width: 240, justifyContent: "space-evenly" }}>
    <Text style={styled.title}>{props.food.title}</Text>
    <Text style={styled.desc}>{props.food.desc}</Text>
    <Text style={styled.price}>{props.food.price} VNĐ</Text>
  </View>
);

const FoodImage = (props) => (
  <View>
    <Image
      source={{ uri: props.food.image }}
      style={{ width: 100, height: 100, borderRadius: 8 }}
    />
  </View>
);
const styled = StyleSheet.create({
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },

  title: {
    fontSize: 17,
    fontWeight: "bold",
  },

  desc: {
    fontSize: 10,
    fontWeight: "200",
    fontStyle: "italic",
  },

  price: {
    fontWeight: "900",
    fontSize: 15,
  },
});

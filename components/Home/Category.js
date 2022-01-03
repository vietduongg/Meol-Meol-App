import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

const items = [
  {
    image: require("../../assets/images/bag-dynamic-gradient.png"),
    text: "Hàng hóa",
  },
  {
    image: require("../../assets/images/Coffee_perspective_matte.png"),
    text: "Nước giải khát",
  },
  {
    image: require("../../assets/images/Cake_perspective_matte.png"),
    text: "Bánh ngọt",
  },
  {
    image: require("../../assets/images/French_fries_perspective_matte_s.png"),
    text: "Đồ ăn nhanh",
  },
];
export default function Category() {
  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingLeft: 20,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/* Khởi tạo vòng lặp */}
        {items.map((item, index) => (
          <View key={index} style={{ alignItems: "center", marginRight: 30 }}>
            <Image
              source={item.image}
              style={{ width: 50, height: 40, resizeMode: "contain" }}
            />
            <Text style={{ fontSize: 13, fontWeight: "bold" }}>
              {item.text}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

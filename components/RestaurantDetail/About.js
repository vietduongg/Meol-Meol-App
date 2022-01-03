import React from "react";
import { View, Text, Image } from "react-native";

const restaurantInfo = {
  name: "Nhà háng số 1 Việt nam",
  image:
    "https://image-us.eva.vn/upload/2-2020/images/2020-04-07/cach-lam-bun-thit-nuong-don-gian-nhung-cuc-ky-ngon-mieng-1-1586254271-356-width600height400.jpg",
  review: "13242",
  price: "$$",
  rating: 4.6,
  categories: [{ title: "Thai" }, { title: "Vietnam" }],
};

const { name, image, price, review, rating, categories } = restaurantInfo;

export default function About(props) {
  const { name, image, price, review, rating, categories } = props.route.params;

  const formattedCategories = categories
    .map((value) => value.title)
    .join(" & ");

  const desc = `${formattedCategories} ${
    price ? " - " + price : ""
  } - ${rating} - ${review}`;

  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantTitle title={name} />
      <RestaurantDesc desc={desc} />
    </View>
  );
}

const RestaurantImage = (props) => (
  <>
    <Image
      source={{ uri: props.image }}
      style={{ width: "100%", height: 180 }}
    />
  </>
);

const RestaurantTitle = (props) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.title}
  </Text>
);

const RestaurantDesc = (props) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: "400",
      fontSize: 15.5,
    }}
  >
    {props.desc}
  </Text>
);

import React from "react";
import styled from "styled-components/native";
import { Image } from "react-native";
import { CompactRestaurantInfo } from "../../../components/restaurant/compact-restaurant-info.component";

const MyText = styled.Text``;

export const MapCallout = ({ restaurant }) => {
  return (
    // <>
    //   <Image
    //     style={{ height: 50, width: 100 }}
    //     source={{ uri: `${restaurant.photos}` }}
    //   />
    //   <MyText>{restaurant.name}</MyText>
    // </>
    <CompactRestaurantInfo isMap restaurant={restaurant} />
  );
};

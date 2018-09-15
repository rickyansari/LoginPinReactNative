// https://medium.com/reactnative/tab// https://medium.com/reactnative/tabbing-through-input-fields-ef283f923ab1
// https://stackoverflow.com/questions/51794354/react-native-how-to-either-a-clear-a-text-input-or-b-disable-the-text-that-is
// https://github.com/rickyansari/react-native-autofocus/blob/master/text-input.js

import React, { Component } from "react";
import { AsyncStorage, Dimensions, Text, View, Button } from "react-native";

var { height, width } = Dimensions.get("window");
type Props = {};
import { COLORS } from "src/config/ENV";
const ItemList = [
  {
    id: "345",
    foodName: "pizza",
    count: 1,
    cost: "150"
  },
  {
    id: "346",
    foodName: "Burger",
    count: 2,
    cost: "100"
  }
];
export default class Store extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  async addItemToBasket(item) {
    let basketItems = await this.getBasketItems();
    console.log("Current basket", basketItems);
    basketItems.push(item);
    console.log("Updated basket", basketItems);
    await AsyncStorage.setItem("basket", JSON.stringify(basketItems));
  }

  async getBasketItems() {
    let currentBasket = await AsyncStorage.getItem("basket");
    console.log("currentBasket", currentBasket);
    return currentBasket ? JSON.parse(currentBasket) : [];
  }

  checkingTheCompilation() {
    console.log("2323");
    console.log("2323");
  }

  componentDidMount() {}

  render() {
    return (
      <View
        style={{
          width: width,
          height: height,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: COLORS.backgroundColor
        }}
      >
        <Button
          title="callAddItem"
          onPress={() => {
            this.addItemToBasket(ItemList[0]);
          }}
        />
      </View>
    );
  }
}

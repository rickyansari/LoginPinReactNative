// https://github.com/oblador/react-native-animatable

import React, { Component } from "react";
import {
  FlatList,
  Dimensions,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import { COLORS } from "src/config/ENV";
var { height, width } = Dimensions.get("window");
type Props = {};

export default class Splash extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      showSpinner: true,
      availableScreens: [
        {
          key: "OnClickDeleteFromArray",
          screen: "OnClickDeleteFromArray",
          showDetails: false
        },
        { key: "LoginPin", screen: "LoginPin", showDetails: false },
        { key: "AsyncStorage", screen: "AsyncStorage", showDetails: false },
        {
          key: "multipleButtons",
          screen: "multipleButtons",
          showDetails: false
        },
        {
          key: "VerticalAlignText",
          screen: "VerticalAlignText",
          showDetails: false
        },
        { key: "Store", screen: "Store", showDetails: false }
      ]
    };
  }

  renderItem(item, index) {
    var { navigate } = this.props.navigation;

    return (
      <TouchableOpacity
        style={{
          flex: 1,
          marginVertical: 10,
          marginHorizontal: 20,
          backgroundColor: "rgba(52, 52, 52, 0.1)"
        }}
        onPress={() => navigate(item.screen)}
      >
        <Text style={{ alignSelf: "center", color: "#34416B" }}>
          {" "}
          {item.screen}
        </Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View
        style={{
          width: width,
          height: height,
          backgroundColor: COLORS.backgroundColor,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <FlatList
          data={this.state.availableScreens}
          renderItem={({ item, index }) => this.renderItem(item, index)}
        />
      </View>
    );
  }
}

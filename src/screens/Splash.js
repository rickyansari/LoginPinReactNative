import React, { Component } from 'react';
import {
  Dimensions,
  Text,
  View,
} from 'react-native';

var { height, width } = Dimensions.get('window');
type Props = {};

export default class Splash extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      showSpinner: true
    }
  }
  render() {
    return (
      <View style={{width:width, height:height, backgroundColor:"blue"}}>
        <Text> "HI"</Text>
      </View>  
    )
  }
}

//https://stackoverflow.com/questions/52011743/keep-two-text-values-vertically-aligned-in-react-native/52015937#52015937

import React, { Component } from 'react';
import {
  View,
  Button,
  Text,
} from 'react-native';
import {COLORS} from 'src/config/ENV';


export default class VerticalAlignText extends Component {

  constructor(props: Object) {
    super(props);
    this.state =
      {
        data: [
          { "id": "1", "lable": "Latest", "value": "6M" },
          { "id": "2", "lable": "Old", "value": "10" },
          { "id": "3", "lable": "New", "value": "20K" },
        ]
      }
  };

  renderData() {
    return ( 
      <View 
        style={{flex:1, flexDirection:'row',}}>
        {this.state.data.map((item) =>
          <View
            key={item.id}
            style={{
              flex:1,
              alignItems:"center"
            }}>
            <Text> {item.lable}</Text>
            <Text> {item.value}</Text>
          </View>
        )}
      </View>
    )
  }
   
  handleOnPress(){
    let clonedData = this.state.data.slice();
    clonedData.map((item)=>{
      if(item.lable === "Latest"){
        item.value = item.value === "50K" ? "6M" : "50K";
      }
      return item;
    })
    this.setState({data: clonedData});
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "COLORS.backgroundColor" }}>
        {this.state.data.length ? this.renderData() : null}
        <Button
          onPress={()=> this.handleOnPress()}
          title={"changeLatest"}
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

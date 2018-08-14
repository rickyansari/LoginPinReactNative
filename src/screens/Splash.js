import React, { Component } from 'react';
import {
  FlatList,
  Dimensions,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

var { height, width } = Dimensions.get('window');
type Props = {};

export default class Splash extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      showSpinner: true,
      availableScreens:[
        { key:"onClickDeleteFromArray", screen:"onClickDeleteFromArray"},
        { key:"LoginPin", screen:"LoginPin"},
        { key:"AsynStorage", screen:"AsynStorage"},
      ]
    }    
  }

  renderItem(item, index){
    var {navigate} = this.props.navigation;
    return(
      <TouchableOpacity 
        onPress={()=> navigate(item.screen)}>
        <Text> {item.screen}</Text>
      </TouchableOpacity>
    )
  }

  render() {
   
    return (
      <View style={{width:width, height:height, backgroundColor:"blue"}}>
        <FlatList
          data={this.state.availableScreens}
          renderItem={({item, index})=>this.renderItem(item, index)}
        />        
      </View>  
    )
  }
}

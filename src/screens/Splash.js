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
        { key:"OnClickDeleteFromArray", screen:"OnClickDeleteFromArray"},
        { key:"LoginPin", screen:"LoginPin"},
        { key:"AsyncStorage", screen:"AsyncStorage"},
      ]
    }    
  }

  renderItem(item, index){
    var {navigate} = this.props.navigation;
    console.log("navigate", navigate)

    return(
      <TouchableOpacity 
        style={{marginVertical:10,}}
        onPress={()=> { console.log(item.screen); navigate(item.screen)}}>
        <Text style={{alignSelf:'center', color:"#34416B"}}> {item.screen}</Text>
      </TouchableOpacity>
    )
  }
  
  render() {
   
    return (
      <View style={{
        width:width, 
        height:height, 
        backgroundColor:"#0d98ba" , 
        alignItems:'center', 
        justifyContent:'center'}}>
        <FlatList
          data={this.state.availableScreens}
          renderItem={({item, index})=>this.renderItem(item, index)}
        />        
      </View>  
    )
  }
}

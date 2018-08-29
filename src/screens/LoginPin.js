// https://medium.com/reactnative/tabbing-through-input-fields-ef283f923ab1
// https://stackoverflow.com/questions/51794354/react-native-how-to-either-a-clear-a-text-input-or-b-disable-the-text-that-is
// https://github.com/rickyansari/react-native-autofocus/blob/master/text-input.js

import React, { Component } from 'react';
import { 
  Dimensions,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS} from 'src/config/ENV';
import * as Animatable from 'react-native-animatable';

var {height, width} = Dimensions.get('window');
type Props = {};

export default class LoginPin extends Component<Props> {
  constructor(props) {
    super(props);
    this.inputs = {};
    this.state={
      value:"",
      PINLength:6,
      matched: false,
    }   
  }

  componentDidMount(){
    this.inputs['one'].focus()
  }
  componentDidUpdate(){
    this.inputs['one'].focus()
}

  renderSymbols(symbol, iterationCount){
    let symbols = [];
    let remainingWidth = (width - 60);
    let fontSize = remainingWidth/this.state.PINLength-10;

    for(let index = 0; index < this.state.PINLength ; index++){
      let color = (index >= iterationCount) ? "white" : "blue";
      symbols.push(
        <Text key={index} style={{fontSize:fontSize, color:color}}> {symbol} </Text>
      )
    }
    return <TouchableOpacity 
            style={{flexDirection:"row",}}
            onPress={()=> this.inputs['one'].focus()}>
            {symbols}
           </TouchableOpacity>
  }

  handleOnChangeText(value){
    this.setState({value: value}, ()=>{
      if(this.state.value === '260791'){
        // navigate to next scree
        this.setState({matched: true})
      }else{
        this.setState({matched: false})
      }
    })
  }

  renderTextInput(params) {
    return <TextInput
            blurOnSubmit={true}
            value={this.state.value}
            onChangeText={(value) => this.handleOnChangeText(value)}
            maxLength={this.state.PINLength}
            returnKeyType={"next"}
            style={{  height: 0, width:0,color:'transparent', fontSize:0,}}
            ref={input => { this.inputs[params.refereneKey] = input }}
          />
  }
  render() {
    return (
      <View style={{width:width, height:height, justifyContent:'center', alignItems:'center', backgroundColor:COLORS.backgroundColor}}>
        {this.state.value.length == 6 && !this.state.matched 
          ? <Animatable.View animation="wobble" style={{flex:2,  justifyContent:'center', alignItems:'center'}}>
              {this.renderTextInput({refereneKey:"one",})}
              {this.renderSymbols("*", this.state.value.length)}
              {this.renderSymbols("_", this.state.PINLength)}
            </Animatable.View >
          : <View style={{flex:2,  justifyContent:'center', alignItems:'center',}}>
              {this.renderTextInput({refereneKey:"one",})}
              {this.renderSymbols("*", this.state.value.length)}
              {this.renderSymbols("_", this.state.PINLength)}
            </View>
        }
        <View style={{flex:1}}/>
      </View>
    );
  };
}
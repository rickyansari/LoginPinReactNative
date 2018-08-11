// https://medium.com/reactnative/tabbing-through-input-fields-ef283f923ab1
// https://stackoverflow.com/questions/51794354/react-native-how-to-either-a-clear-a-text-input-or-b-disable-the-text-that-is
// https://github.com/rickyansari/react-native-autofocus/blob/master/text-input.js
import React, { Component } from 'react';
import { 
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

var {height, width} = Dimensions.get('window');
type Props = {};

export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.inputs = {};
    this.state={
      value:"",
      PINLength:6
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
      if(this.state.value.length === this.state.PINLength){
        alert("match the pin with stored one")
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
      <View style={{width:width, height:width, justifyContent:'center', alignItems:'center'}}>
        {this.renderTextInput({refereneKey:"one",})}
        {this.renderSymbols("*", this.state.value.length)}
        {this.renderSymbols("_", this.state.PINLength)}
      </View>
    );
  };
}

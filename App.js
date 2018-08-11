// https://medium.com/reactnative/tabbing-through-input-fields-ef283f923ab1

import React, { Component } from 'react';
import { TextInput, Platform, StyleSheet, Text, View } from 'react-native';

type Props = {};
const LASTINPUT = "lastInput"
export default class App extends Component<Props> {
  constructor(props) {
    super(props);

    this.focusNextField = this.focusNextField.bind(this);
    this.inputs = {};
    this.state={
      value:""
    }
   
  }

  focusNextField(id) {
    this.inputs[id].focus();
  }
 
  
  onChange(event){
    this.setState({value:9})
    Object.values(event).map((item)=>{console.log(item)})
    console.log("onChange",event.target)    
    console.log("ASDASD");
  }
  
  componentDidMount(){
    this.focusNextField("one");
  }

  onKeyPress(event){
    console.log("onKeyPress", Object.keys(event).toString()) 
    console.log("ASDSA")  
  }
  renderTextInput(params) {
    return (
      <View style={{ height: 80, width:80}}>
        <TextInput
          placeholder="*"
          blurOnSubmit={false}
          value={this.state.value}
          onChangeText={(value) => {
            // if(params.refereneKey !== LASTINPUT){
            //   this.focusNextField(params.nextField);
            // }else{
            //   alert("handle submit Logic")
            // }
          this.setState({value: value})

          }}
          onChange={(e)=>{
             this.onChange(e);
          }}
          maxLength={20}
          returnKeyType={"next"}
          style={styles.textInput}
          ref={input => {
            if(params.refereneKey){
              this.inputs[params.refereneKey] = input;
            }
          }}
        />
        <View style={{alignSelf:'center', width:40, height:1, backgroundColor:"black"}}/> 
      </View>)
    

  }
  render() {
    return (
      <View style={{width:300, height:300}}>
         <TextInput
          placeholder="dummy"
          blurOnSubmit={false}
          value={this.state.value}
          style={{width:200, height:40}}
        />
        <View style={styles.outerContainer}>
          {this.renderTextInput({nextField:"two", refereneKey:"one",})}
          {this.renderTextInput({nextField:"three", refereneKey:"two"})}
          {this.renderTextInput({nextField:"LASTINPUT", refereneKey:"three"})}
          {this.renderTextInput({nextField:"", refereneKey:"LASTINPUT"})}
        </View>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    paddingTop: 60,
    alignItems: 'center',
    flexDirection: 'row',
  },
  textInput: {
    // alignSelf: 'stretch',
    // borderRadius: 5,
    // borderWidth: 1,
    height: 0,
    paddingHorizontal: 10,
    marginHorizontal: 20,
  },
});
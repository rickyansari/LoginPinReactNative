// https://medium.com/reactnative/tab// https://medium.com/reactnative/tabbing-through-input-fields-ef283f923ab1
// https://stackoverflow.com/questions/51794354/react-native-how-to-either-a-clear-a-text-input-or-b-disable-the-text-that-is
// https://github.com/rickyansari/react-native-autofocus/blob/master/text-input.js

import React, { Component } from 'react';
import {
  AsyncStorage,
  Dimensions,
  Text,
  View,
  Button,
} from 'react-native';

var {height, width} = Dimensions.get('window');
type Props = {};
import {COLORS} from 'src/config/ENV';

export default class OnClickDeleteFromArray extends Component<Props> {
  constructor(props) {
    super(props);
    this.state={
      fetchingData: true,
      data: [],
    }   
  }


  storeData = async (restaurants) => {
    try {
      await AsyncStorage.setItem('restaurants', JSON.stringify(restaurants))
    } catch (error) {
      console.log("Error", error);
    }
  }

  getData =  async()=>{
    try {
      let restaurantData = await AsyncStorage.getItem('restaurants');
      console.log("set restaurantData", JSON.parse(restaurantData))
      if(data){
        this.setState({fetchingData: false , data:JSON.parse(restaurantData)})
      }
    } catch(error){
       console.log(error)
    }
  }
  
  componentDidMount(){
    data = [
      {
        name: 'MacD ',
        time: "Morning"
      },
      {
        name: 'PizzaHouse',
        time: "Evening"
      }
    ]
    this.storeData(data);
    this.getData();
  }

  renderRestaurant(){
    console.log("Data fetched");
    return this.state.data.map((item, index, restaurants) => {
      console.log("index", index)
      return (
        <View key={index} style={{backgroundColor:"#841584", alignItems: 'center'}}>
          <Text> {item.name} </Text>
          <Text> {item.time} </Text>
          <Button 
            title = 'cancel' 
            onPress = {() => {
              let restaurantListWithoutCurrentRestaurant = restaurants.filter((restaurant)=> restaurant.name !== item.name);
              this.storeData(restaurantListWithoutCurrentRestaurant);
              this.getData();   
            }}/>
        </View>
      )
    })
  
  }  
  render() {
    return (
      <View style={{
        width:width, 
        height:height, 
        justifyContent:'center', 
        alignItems:'center', 
        backgroundColor: COLORS.backgroundColor}}>
        {this.state.data.length ? this.renderRestaurant(): null}
      </View>
    );
  };
}

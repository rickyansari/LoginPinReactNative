// https://medium.com/reactnative/tab// https://medium.com/reactnative/tabbing-through-input-fields-ef283f923ab1
// https://stackoverflow.com/questions/51794354/react-native-how-to-either-a-clear-a-text-input-or-b-disable-the-text-that-is
// https://github.com/rickyansari/react-native-autofocus/blob/master/text-input.js

import React, { Component } from 'react';
import {
  AsyncStorage,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';

var {height, width} = Dimensions.get('window');
type Props = {};

export default class OnClickDeleteFromArray extends Component<Props> {
  constructor(props) {
    super(props);
    this.state={
      fetchingData: true,
      data: [],
      cachedCart:[],
      cart:["tv", "laptop", "ac", "monitor"],
      deletedIndex: 0
    }   
  }


  storeData = async (restaurants) => {
    try {
     await AsyncStorage.setItem('restaurants', JSON.stringify(restaurants))

     let selection = this.state.Selection;
    } catch (error) {
      console.log("Error", error);
    }
  }

  getData =  async()=>{
    try {
      data = await AsyncStorage.getItem('restaurants');
      if(data){
        this.setState({fetchingData: false , data:JSON.parse(data)});
      }
    } catch(error){
       console.log(error)
    }
  }
  
  componentDidMount(){
    var data ={ 
      restaurants: [
       {
         name: 'MacD ',
         time: "Morning"
       },
       {
         name: 'PizzaHouse',
         time: "Evening"
       }
     ]
    }
    this.storeData(data.restaurants);
    this.getData();
  }

  

  delete(index){
    console.log("state", this.state);

    // Cloning the cart to updatedCart
    let updatedCart = this.state.cart.slice();
    // Removing the index element
    updatedCart.splice(index,1);
    
    this.setState({deletedIndex:index, cachedCart:this.state.cart, cart: updatedCart },
        ()=>{
          console.log("state", this.state);
    });

}
  renderRestaurant(){
    return this.state.data.map((item, index, restaurants) => {
      return (
        <View key={index}>
          <Text> {item.name} </Text>
          <Text> {item.time} </Text>
          <Button 
            title = 'cancel' 
            onPress = {() => {
              let restaurantListWithoutCurrentRestaurant = restaurants.filter((restaurant)=> restaurant.name !== item.name);
              this.storeData(restaurantListWithoutCurrentRestaurant);
              this.getData();   
              this.delete(1);    
            }}/>
        </View>
      )
    })
  
  }  
  render() {
    return (
      <View style={{width:width, height:height, justifyContent:'center', alignItems:'center', backgroundColor:"blue"}}>
        {this.state.fetchingData ? null : this.renderRestaurant()}
      </View>
    );
  };
}



import React, { Component } from 'react'; 
import { ActivityIndicator, Dimensions, ListView, Image, Platform, Text, TouchableOpacity, View } 
from 'react-native'; 
import AppNavigator  from 'src/screens/AppNavigation'; 
const prefix = Platform.OS == 'android' ? 'openMyApp://android/' : 'openMyApp://';

export default class App extends Component<{}> { 
  render() { 
    return (<AppNavigator  uriPrefix={prefix}/>) 
  } 
}


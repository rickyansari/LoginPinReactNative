import {
  Animated,
  Easing
} from 'react-native';
import { 
  createStackNavigator, 
} from 'react-navigation';

import Splash from 'src/screens/Splash';
import OnClickDeleteFromArray from 'src/screens/OnClickDeleteFromArray';

var transitionConfig = () => ({
  transitionSpec: {
    duration: 300,
    easing: Easing.out(Easing.poly(4)),
    timing: Animated.timing,
  },
  screenInterpolator: sceneProps => {
    const { layout, position, scene } = sceneProps;
    const { index } = scene;

    const height = layout.initHeight;
    const width = layout.initWidth;
    const translateX = position.interpolate({
      inputRange: [index - 1, index, index + 1],
      outputRange: [height, 0, 0],
    });

    const opacity = position.interpolate({
      inputRange: [index - 1, index - 0.99, index],
      outputRange: [0, 1, 1],
    });

    return { opacity, transform: [{translateX} ] };
  },
});


export default AppNavigator = 
 createStackNavigator({
   Splash: { screen: Splash },
   OnClickDeleteFromArray: { screen: OnClickDeleteFromArray }
  },{
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: false,
    },
    transitionConfig: transitionConfig,
  });


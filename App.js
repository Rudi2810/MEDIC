import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';

import Loginscreen from './screens/Loginscreen';
import SearchScreen from './screens/SearchScreen';
import { AppDrawerNavigator } from './components/AppDrawerNavigator'



export default function App() {
  return (
    <AppContainer/>
  );
}


const switchNavigator = createSwitchNavigator({
  Loginscreen:{screen: Loginscreen},
  Drawer:{screen:AppDrawerNavigator},
  Search:{screen:SearchScreen}
})

const AppContainer =  createAppContainer(switchNavigator);
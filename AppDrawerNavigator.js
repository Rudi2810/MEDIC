import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import SearchScreen from '../screens/SearchScreen';
import CustomSideBarMenu  from './CustomSideBarMenu';
import SettingScreen from '../screens/SettingScreen';


export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : SearchScreen
    },
  setting:{
    screen : SettingScreen
  },
  },
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })
import React from 'react';
import {StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Home from './Home';
import Reviews from './Reviews';
import About from './About';
import {colors} from './styles/colors';
const Tab = createMaterialTopTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {backgroundColor: colors.GREY, height: 3},
      }}
      tabBarOptions={{
        //other properties
        labelStyle: {
          color: colors.WHITE,
        },
        pressColor: colors.GREY,
        //for click (ripple) effect color
        style: {
          backgroundColor: colors.BLACK,
          activeTintColor: colors.WHITE, //color you want to change
        },
      }}>
      <Tab.Screen name="Items" component={Home} />
      <Tab.Screen name="Reviews" component={Reviews} />
      <Tab.Screen name="About" component={About} />
    </Tab.Navigator>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

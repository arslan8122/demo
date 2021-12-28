import React from 'react';
import {StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Home from './Home';
import Reviews from './Reviews';
import About from './About';

const Tab = createMaterialTopTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {backgroundColor: 'gray', height: 3},
      }}
      tabBarOptions={{
        //other properties
        labelStyle: {
          color: 'white',
        },
        pressColor: 'gray',
        //for click (ripple) effect color
        style: {
          backgroundColor: 'rgba(34,36,40,1)',
          activeTintColor: 'white', //color you want to change
        },
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Reviews" component={Reviews} />
      <Tab.Screen name="About" component={About} />
    </Tab.Navigator>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

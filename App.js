import React from 'react';
import {Image, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/components/HomeScreen';
import Favorites from './src/components/Favorites';
import Updates from './src/components/Updates';
import You from './src/components/You';
import Cart from './src/components/Cart';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerTitleStyle: {color: 'white'},
          headerStyle: {
            backgroundColor: 'rgba(34,36,40,1)',
          },
          tabBarStyle: {
            backgroundColor: 'rgba(34,36,40,1)',
          },
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = require('./assets/home.png');
            } else if (route.name === 'Updates') {
              iconName = require('./assets/bell.png');
            } else if (route.name === 'You') {
              iconName = require('./assets/user.png');
            } else if (route.name === 'Cart') {
              iconName = require('./assets/cart.png');
            } else if (route.name === 'Favorites') {
              iconName = require('./assets/heart.png');
            }
            // You can return any component that you like here!

            return (
              // <MaterialCommunityIcons name="rocket" />
              <View>
                <Image
                  source={iconName}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? 'white' : 'grey',
                  }}
                />
              </View>
            );
          },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'gray',
        })}
        tabBarOptions={{
          showLabel: true,
          showIcon: true,

          keyboardHidesTabBar: true,
        }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Updates" component={Updates} />
        <Tab.Screen name="You" component={You} />
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="Favorites" component={Favorites} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

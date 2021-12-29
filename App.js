import React from 'react';
import {Image, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/components/HomeScreen';
import Favorites from './src/components/Favorites';
import Updates from './src/components/Updates';
import You from './src/components/You';
import Cart from './src/components/Cart';
import {home, bell, heart, user, cart} from './assetsImport.js';
import {colors} from './src/components/styles/colors';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerTitleStyle: {color: colors.WHITE},
          headerStyle: {
            backgroundColor: colors.BLACK,
          },
          tabBarStyle: {
            backgroundColor: colors.BLACK,
          },
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = home;
            } else if (route.name === 'Updates') {
              iconName = bell;
            } else if (route.name === 'You') {
              iconName = user;
            } else if (route.name === 'Cart') {
              iconName = cart;
            } else if (route.name === 'Favorites') {
              iconName = heart;
            }
            // You can return any component that you like here!

            return (
              <View>
                <Image
                  source={iconName}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? colors.WHITE : colors.GREY,
                  }}
                />
              </View>
            );
          },
          tabBarActiveTintColor: colors.WHITE,
          tabBarInactiveTintColor: colors.GREY,
        })}
        tabBarOptions={{
          showLabel: true,
          showIcon: true,

          keyboardHidesTabBar: true,
        }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Favorites" component={Favorites} />
        <Tab.Screen name="Updates" component={Updates} />
        <Tab.Screen name="You" component={You} />
        <Tab.Screen name="Cart" component={Cart} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

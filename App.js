import React from 'react';
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
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Updates" component={Updates} />
        <Tab.Screen name="You" component={You} />
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="Favorites" component={Favorites} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

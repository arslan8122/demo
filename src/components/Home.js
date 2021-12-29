import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
const Home = () => {
  let isAdded = useSelector(state => state.data.Items);
  console.log(isAdded);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Text>Home</Text>
      <Text>{isAdded[0]}</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});

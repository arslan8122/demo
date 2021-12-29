// import React from 'react';
// import {Text} from 'react-native';

// export const ItemView = ({item}) => {
//   return (
//     // Flat List Item
//     <Text onPress={() => getItem(item)}>
//       {item.id}
//       {'.'}
//       {item.title.toUpperCase()}
//     </Text>
//   );
// };
import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {width, height} from 'react-native-dimension';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from './styles/colors';

export const ItemView = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.card_template}>
        <Image
          style={styles.card_image}
          source={{
            uri: 'https://i.picsum.photos/id/881/700/700.jpg?hmac=-JqTJ4_Ped2jYmjiaDgYZOAGzvC0CybCKbROT3GJgZc',
          }}
        />
        <View style={styles.text_container}>
          {/* <Text style={styles.card_title}>Some Textt</Text> */}
          <Icon name="heart-o" size={16} color={colors.BLACK} />
        </View>
      </View>
      <Text style={{fontSize: 16, fontWeight: '400', color: colors.WHITE}}>
        Sample Text
      </Text>
      <Text style={{fontSize: 16, fontWeight: '600', color: colors.WHITE}}>
        $11.0
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  card_template: {
    width: width(48),
    height: height(20),
    boxShadow: '10px 10px 17px -12px rgba(0,0,0,0.75)',
  },
  card_image: {
    width: width(48),
    height: height(20),
  },
  text_container: {
    position: 'absolute',
    padding: 5,
    top: 15,
    right: 10,
    backgroundColor: 'white',
    borderRadius: 50,
    width: 26,
    height: 26,
    borderRadius: 26 / 2,

    // backgroundColor: 'rgba(0,0,0, 0.3)',
    // borderBottomLeftRadius: 10,
    // borderBottomRightRadius: 10,
  },
  card_title: {
    color: 'white',
  },
});

import * as React from 'react';
import {Text, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from './styles/colors';
import style from './styles/style';

export const ItemView = ({item}) => {
  return (
    <View style={style.container}>
      <View style={style.card_template}>
        <Image
          style={style.card_image}
          source={{
            uri: 'https://i.picsum.photos/id/881/700/700.jpg?hmac=-JqTJ4_Ped2jYmjiaDgYZOAGzvC0CybCKbROT3GJgZc',
          }}
        />
        <View style={style.text_container}>
          {/* <Text style={styles.card_title}>Some Textt</Text> */}
          <Icon name="heart-o" size={16} color={colors.BLACK} />
        </View>
      </View>
      <Text style={style.card_text}>Sample Text</Text>
      <Text style={style.price_text}>$11.0</Text>
    </View>
  );
};

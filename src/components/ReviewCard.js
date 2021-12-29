import React from 'react';
import {Image, Text, View} from 'react-native';
import style from './styles/style';
import {profile} from '../../assetsImport';
import StarRating from 'react-native-star-rating';
export const ReviewCard = ({item}) => {
  return (
    <View style={style.review_margin}>
      <View style={style.containerBackground}>
        <View style={style.search}>
          <View style={style.review_image}>
            <Image
              source={profile}
              resizeMode="cover"
              style={style.review_imageD}
            />
          </View>
          <View style={style.review_title}>
            <Text style={style.card_title}>niriall</Text>
            <Text style={style.review_date}>Dec 11, 2021</Text>
          </View>
        </View>
      </View>
      <View style={style.review_star}>
        <StarRating
          disabled={false}
          containerStyle={{width: 50}}
          maxStars={5}
          rating={5}
          starSize={14}
          starStyle={style.card_title}
        />
      </View>
      <View style={{flex: 1}}>
        <Text style={style.review_color}>
          Beautiful Quality. was a hit when i put it in a long little box like
          real ones
        </Text>
      </View>

      <View style={style.card_design}>
        <View style={style.continerFlex}>
          <Image source={profile} resizeMode="cover" style={style.imageWidth} />
        </View>
        <View style={style.imageFlex}>
          <Text style={style.review_date}>
            Set of 6 Felt Macarons Dessert Catinp Cat Toy
          </Text>
        </View>
      </View>
    </View>
  );
};

import React from 'react';
import {Image, Text, View} from 'react-native';
import style from './styles/style';
import {profile} from '../../assetsImport';
import StarRating from 'react-native-star-rating';
export const ReviewCard = ({item}) => {
  return (
    <View style={{marginTop: 20}}>
      <View style={style.containerBackground}>
        <View style={style.search}>
          <View style={style.review_image}>
            <Image
              source={profile}
              resizeMode="cover"
              style={{width: 40, height: 40, borderRadius: 20}}
            />
          </View>
          <View style={style.review_title}>
            <Text style={{color: 'white'}}>niriall</Text>
            <Text style={{color: 'white', fontSize: 10}}>Dec 11, 2021</Text>
          </View>
        </View>
      </View>
      <View style={{flex: 1, paddingLeft: 10, marginTop: 10}}>
        <StarRating
          disabled={false}
          containerStyle={{width: 50}}
          maxStars={5}
          rating={5}
          starSize={14}
          starStyle={{color: 'white'}}
          // selectedStar={(rating) => this.onStarRatingPress(rating)}
        />
      </View>
      <View style={{flex: 1}}>
        <Text style={{color: 'white', paddingLeft: 10}}>
          Beautiful Quality. was a hit when i put it in a long little box like
          real ones
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          paddingLeft: 10,
          marginTop: 20,
        }}>
        <View style={{flex: 1}}>
          <Image
            source={profile}
            resizeMode="cover"
            style={{width: 25, height: 25}}
          />
        </View>
        <View style={{flex: 9}}>
          <Text style={{color: 'white', fontSize: 10}}>
            Set of 6 Felt Macarons Dessert Catinp Cat Toy
          </Text>
        </View>
      </View>
    </View>
  );
};

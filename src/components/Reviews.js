import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
// import all the components we are going to use
import {SafeAreaView, Text, View, FlatList, Image} from 'react-native';
import {width, height} from 'react-native-dimension';
import StarRating from 'react-native-star-rating';
import {ReviewCard} from './ReviewCard';
import style from './styles/style';
import {profile} from '../../assetsImport';
import {colors} from './styles/colors';

const Reviews = () => {
  let isAdded = useSelector(state => state.data.Items);

  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(responseJson => {
        setMasterDataSource(responseJson);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  const ratingCompleted = rating => {
    console.log('Rating is: ' + rating);
  };
  const FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: colors.BLACK,
        }}
      />
    );
  };

  return (
    <SafeAreaView style={style.continerFlex}>
      <View style={style.containerBackground}>
        <View style={style.search}>
          <View style={style.review_image}>
            <Image
              source={profile}
              resizeMode="cover"
              style={style.image_Style}
            />
          </View>
          <View style={style.review_title}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              PetsPettostore{' '}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View style={{flex: 1}}>
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
              <View style={{flex: 3}}>
                <Text style={{color: 'white'}}>25 Reviews</Text>
              </View>
            </View>
          </View>
        </View>
        <FlatList
          data={masterDataSource}
          keyExtractor={(item, index) => index.toString()}
          renderItem={ReviewCard}
          ItemSeparatorComponent={FlatListItemSeparator}
        />
      </View>
    </SafeAreaView>
  );
};

export default Reviews;

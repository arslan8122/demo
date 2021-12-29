import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import StarRating from 'react-native-star-rating';
import {ReviewCard} from './ReviewCard';
import style from './styles/style';
import {profile} from '../../assetsImport';

const Reviews = () => {
  let data = useSelector(state => state.data.Items);

  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    setMasterDataSource(data);
  });
  const FlatListItemSeparator = () => {
    return <View style={style.list_seprator} />;
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
            <Text style={style.fontBold}>PetsPettostore </Text>
            <View style={style.review_Flex}>
              <View style={style.continerFlex}>
                <StarRating
                  disabled={false}
                  containerStyle={{width: 50}}
                  maxStars={5}
                  rating={5}
                  starSize={14}
                  starStyle={style.card_title}
                />
              </View>
              <View style={style.review_dflex}>
                <Text style={style.card_title}>25 Reviews</Text>
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

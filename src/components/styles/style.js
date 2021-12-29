import {StyleSheet} from 'react-native';
import {colors} from './colors';
import {width, height} from 'react-native-dimension';
export default StyleSheet.create({
  Center: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  continerFlex: {flex: 1},
  searchFlex: {flex: 10},
  containerBackground: {
    backgroundColor: colors.BLACK,
  },
  search: {
    width: width(100),
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputStyle: {
    backgroundColor: colors.BLACK,
    borderColor: 'grey',
    borderWidth: 1,
    borderBottomWidth: 1,
    borderRadius: 35,
  },
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
    backgroundColor: colors.WHITE,
    borderRadius: 50,
    width: 26,
    height: 26,
    borderRadius: 26 / 2,
  },
  card_title: {
    color: colors.WHITE,
  },
  card_text: {fontSize: 16, fontWeight: '400', color: colors.WHITE},
  price_text: {fontSize: 16, fontWeight: '600', color: colors.WHITE},
  review_image: {flex: 1, padding: 12},
  image_Style: {
    width: 50,
    height: 50,
  },
  review_title: {flex: 8, padding: 12},
});

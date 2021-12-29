import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
// import all the components we are going to use
import {SafeAreaView, Text, StyleSheet, View, FlatList} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {colors} from './styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ItemView} from './ItemView';
import style from './styles/style';
const Home = () => {
  let isAdded = useSelector(state => state.data.Items);
  console.log(isAdded);
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(responseJson => {
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const searchFilterFunction = text => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  return (
    <SafeAreaView style={style.continerFlex}>
      <View style={style.containerBackground}>
        <View style={style.search}>
          <View style={style.searchFlex}>
            <SearchBar
              containerStyle={style.containerBackground}
              inputContainerStyle={style.inputStyle}
              round
              searchIcon={{size: 22}}
              onChangeText={text => searchFilterFunction(text)}
              onClear={text => searchFilterFunction('')}
              placeholder="Search all 28 items"
              value={search}
              style={style.containerBackground}
            />
          </View>
          <View style={style.continerFlex}>
            <Icon name="filter" size={26} color={colors.GREY} />
          </View>
        </View>
        <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          renderItem={ItemView}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {width} from 'react-native-dimension';
// import all the components we are going to use
import {SafeAreaView, Text, StyleSheet, View, FlatList} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {colors} from './styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ItemView} from './ItemView';
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

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  const getItem = item => {
    // Function for click on an item
    alert('Id : ' + item.id + ' Title : ' + item.title);
  };
  return (
    // <View
    //   style={{
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: 'white',
    //   }}>
    //   <Text>Home</Text>
    //   <Text>{isAdded[0]}</Text>
    // </View>
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View
          style={{
            width: width(100),
            backgroundColor: 'black',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{flex: 10}}>
            <SearchBar
              containerStyle={{backgroundColor: colors.BLACK}}
              inputContainerStyle={{
                backgroundColor: colors.BLACK,
                borderColor: 'grey',
                borderWidth: 1,
                borderBottomWidth: 1,
                borderRadius: 35,
              }}
              round
              searchIcon={{size: 22}}
              onChangeText={text => searchFilterFunction(text)}
              onClear={text => searchFilterFunction('')}
              placeholder="Search all 28 items"
              value={search}
              style={{backgroundColor: colors.BLACK}}
            />
          </View>
          <View style={{flex: 1}}>
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.BLACK,
  },
  itemStyle: {
    padding: 10,
  },
});

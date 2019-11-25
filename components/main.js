import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text, Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';


import Stocks from './stocks'


import SearchInput, { createFilter } from 'react-native-search-filter';

const KEYS_TO_FILTERS = ['stock.name'];

const data = require('../data/eventstocks.json')

export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: data.event_stocks,
      searchTerm: '',

    }
  }

  searchUpdated = (term) => {
    this.setState({ searchTerm: term })
  }

  render() {
//for search user data
    const searchData = this.state.data
    const filtered = searchData.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));
    console.log(filtered);

    return(


      <View>





      <SearchInput
      onChangeText={(term) => { this.searchUpdated(term) }}
      style={styles.searchInput}
      placeholder="Search by player name"

      />



      <View style={{flex: 1, }}>
      <Stocks data={filtered} />
      </View>

      </View>


    )
  }
}

const styles =  StyleSheet.create({
  searchInput:{
    padding: 10,
    borderColor: '#CCC',
    borderWidth: 1,
    height: 60,
    color: 'blue',
    fontSize: 20,
  },

})

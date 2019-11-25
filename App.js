/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow
*/

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';



import Main from './components/main'

const App: () => React$Node = () => {

  return (
    <>
    <StatusBar />
    <SafeAreaView>
      <ScrollView>

        <View>

          <Main />
        </View>


      </ScrollView>
    </SafeAreaView>
    </>
);
};



export default App;

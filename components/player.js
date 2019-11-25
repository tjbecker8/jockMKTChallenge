import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text, Image,
  Dimensions,
} from 'react-native';


const screenWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({

})

 const Stock = (props) => {


   return (
     <View style={styles.container}>
      <Image
          style={{width: screenWidth * .35, height: screenWidth * .35}}
          source={{uri: props.image}}
          />


        <Text style={styles.nameText}>{props.name}</Text>

      




     </View>
   )
 }

 export default Stock

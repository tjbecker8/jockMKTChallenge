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
  container: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: 'black',
    padding: 10,
    width: screenWidth,
  },
  infoView: {
    flexDirection: 'column',
    marginLeft: 15,
  },
  nameView: {
    flexDirection: 'row',
    padding: 5,
    marginBottom: 10,
  },
  pointsView: {

  },
  nameText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginRight: 10,
  },
  pointsNum: {
    fontSize: 30,
    marginLeft: 15,

  },
  pointText: {
    fontSize: 16,
  },
  textView: {
    flexDirection: 'row',
  },
  priceNum: {
    fontSize: 25,
    marginLeft: 10,
  },
  priceView: {

  }
})

 const Stock = (props) => {

   
   return (
     <View style={styles.container}>
      <Image
          style={{width: screenWidth * .35, height: screenWidth * .35}}
          source={{uri: props.image}}
          />


      <View style={styles.infoView}>

        <Text style={styles.nameText}>{props.name}</Text>



       <View style={styles.pointsView}>

        <View style={styles.textView}>
          <View>
            <Text style={styles.pointText}>Projected</Text>
            <Text style={styles.pointText}>Points</Text>
          </View>
          <Text style={styles.pointsNum}>{props.projectedPoints}</Text>
         </View>

         <View style={styles.textView}>
          <View>
            <Text style={styles.pointText}>Actual</Text>
            <Text style={styles.pointText}>Points</Text>
          </View>
          <Text style={styles.pointsNum} >{props.actualPoints}</Text>
         </View>

         <View style={styles.textView}>
            <View>
            <Text style={styles.pointText}>Last Trade</Text>
            <Text style={styles.pointText}>Price</Text>
          </View>
          <View style={styles.priceView}>
            <Text style={styles.priceNum} >${props.lastTradePrice}</Text>
          </View>
         </View>

        </View>
        </View>
     </View>
   )
 }

 export default Stock

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

import Stock from './stock'

 import Dialog, { DialogFooter, DialogButton, DialogContent } from 'react-native-popup-dialog';

export default class Stocks extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      dialogVisible: false,
      update: false,
    }
}

componentWillReceiveProps(nextProps) {
  this.setState({ data: nextProps.data });
}


sort = (type) => {
  const array = this.state.data
  if (type === 'projected') {
    var sort = array.sort((a, b) => {
      return b.fantasy_points_projected - a.fantasy_points_projected
    })
    this.setState({
      data: sort,
      dialogVisible: false,
    })
  } else if (type === 'actual') {
    var sort = array.sort((a, b) => {
      return b.fantasy_points_scored - a.fantasy_points_scored
    })
    this.setState({
      data: sort,
      dialogVisible: false
    })
  } else if (type === 'price') {
    var sort = array.sort((a, b) => {
      return b.last_price - a.last_price
    })
    this.setState({
      data: sort,
      dialogVisible: false
    })
  }
}

// can be added to set back to default
// removeSort = () => {
//   this.setState({data: data.event_stocks})
// }



render() {
  console.log('please', this.props.data);
  return(


<View>

<View style={{flex: 1}}>
  <TouchableOpacity
  onPress={() => this.setState({dialogVisible: true})}
  >
    <Text style={styles.touchText}>Sort Items</Text>
  </TouchableOpacity>

</View>


<Dialog
visible={this.state.dialogVisible}
width={0.8}
footer={
  <DialogFooter>
  <DialogButton
  text="Sort by Projected Points"
  onPress={() => {this.sort('projected')}}
  />
  <DialogButton
  text="Sort by Actual Points"
  onPress={() => {this.sort('actual')}}
  />
  <DialogButton
  text="Sort by Last Trade Price"
  onPress={() => {this.sort('price')}}
  />
  <DialogButton
  text="Cancel"
  onPress={() => {this.setState({dialogVisible: false})}}
  />
  </DialogFooter>
}
>
<DialogContent>
<Text style={styles.dialogText}>Sort</Text>
</DialogContent>
</Dialog>

    <FlatList
        data={this.state.data}
        renderItem={({ item }) =>
        <Stock
          name={item.stock.name}
          lastTradePrice={item.last_price}
          projectedPoints={item.fantasy_points_projected}
          actualPoints={item.fantasy_points_scored || 0}
          image={item.stock.image_url}
          />}
        keyExtractor={item => item.id}
      />
</View>


  )
}
}

const styles =  StyleSheet.create({

  dialogText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 15,
  },
  touchText: {
    color: 'blue',
    textAlign: 'right',
    paddingTop: 20,
    fontSize: 22,
  }
})

import React, {Component} from 'react';
import {View, Text} from 'react-native';

// Search bar
//import FBSearchBar from './searchBar';
import FBSearchBar from './searchBarHook';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1, paddingTop: 100}}>
        <FBSearchBar />
        <Text style={{alignSelf: 'center'}}> Content </Text>
      </View>
    );
  }
}

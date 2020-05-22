import React from 'react';
import {View, Text} from 'react-native';

// Search bar
//import FBSearchBar from './searchBar';
import FBSearchBar from './searchBarHook';

const App = () => {
  return (
    <View style={{flex: 1, paddingTop: 100}}>
      <FBSearchBar />
      <Text style={{alignSelf: 'center'}}> Content </Text>
    </View>
  );
};

export default App
import {View, Text} from 'react-native';
import React from 'react';
import HomeScreen from './src/components/Home/HomeScreen';
import SearchResults from './src/components/SearchResults/Main';

const App = () => {
  return (
    <View>
      <HomeScreen />
      {/* <SearchResults /> */}
    </View>
  );
};

export default App;

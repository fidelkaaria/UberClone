import {View, Text, Dimensions} from 'react-native';
import React from 'react';
import styles from './stylehome';
import Map from '../Map/map';
import CovidMessage from '../HomeScreenUse/covid';
import HomeSearch from '../HomeSearch/HomeSearch';

const HomeScreen = () => {
  return (
    <View>
      <Map />
      {/* covid message */}
      <CovidMessage
        style={{height: Dimensions.get('window').height - 600, width: '100%'}}
      />
      {/* HomeSearch component */}
      <HomeSearch />

      {/* previous destination */}

      {/* home destination */}
    </View>
  );
};

export default HomeScreen;

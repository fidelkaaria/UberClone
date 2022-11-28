import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import Map from '../Map/map';
import UberTypes from '../uberTypes/Main';
import data from '../../assets/data/types';

const SearchResults = () => {
  const confirm = () => {
    console.warn('confirm please');
    console.log('clicked confirm');
  };

  return (
    <View>
      <Map />
       

      {data.map(item => {
        return <UberTypes key={item.id} item={item} />
      })}
      <Pressable
        style={{
          width: '100%',
          backgroundColor: 'black',
          padding: 10,
          margin: 30,
          alignItems: 'center'
         
        }}
        onPress={confirm}>
        <Text>Confirm Search</Text>
      </Pressable>
    </View>
  );
};

export default SearchResults;

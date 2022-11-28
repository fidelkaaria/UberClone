import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import UberTypeRows from '../uberTypeRows/Main';
// import {Ionicons} from '@expo/vector-icons';

const UberTypes = ({item}) => {
  const getImage = () => {
    if (item.type === 'UberX') {
      return require('../../assets/images/UberX.jpeg');
    }
    if (item.type === 'UberXL') {
      return require('../../assets/images/Comfort.jpeg');
    }
    if (item.type === 'Comfort') {
      return require('../../assets/images/UberXL.jpeg');
    }
  };

  return (
    <View style={styles.container}>
      {/* image */}

      <Image style={styles.image} source={getImage()} />

      {/* middlecontainer */}
      <View style={styles.middleContainer}>
        <Text style={styles.type}>{item.type}</Text>
        <Text style={styles.time}>8.30 am Drop Off</Text>
      </View>

      {/* rightcontainer */}

      <View style={styles.rightContainer}>
        {/* <Ionicons name="pricetag" size={24} color="green" /> */}
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </View>
  );
};

export default UberTypes;

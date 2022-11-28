import {View, Text} from 'react-native';
import React from 'react';
import styles from './stylehomeuse'

const CovidMessage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel only if necessary</Text>
      <Text style={styles.text}>
        The virus can spread from an infected person’s mouth or nose in small
        liquid particles when they cough, sneeze, speak, sing or breathe. These
        particles range from larger respiratory droplets to smaller aerosols
      </Text>
      <Text style={styles.learnMore}>Learn More about Covid</Text>
    </View>
  );
};

export default CovidMessage;

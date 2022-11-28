import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';

const HomeSearch = () => {
  return (
    <View style={styles.inputBox}>
      <Text style={styles.inputText}> Where To ?</Text>
      <View style={styles.timeContainer}>
        <AntDesign name={'clockcircle'} size={20} color={'black'} />
        <Text> New</Text>
        <AntDesign name={'caretdown'} size={20} color={'black'} />
      </View>
      {/* <View style={styles.row}>
        <View style={styles.iconContainer}>
          <AntDesign name={'caretdown'} size={20} color={'black'} />
        </View>

        <Text style={styles.destinationText}>Home</Text>
      </View>
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <AntDesign name={'caretdown'} size={20} color={'black'} />
        </View>
      </View> */}
    </View>
  );
};

export default HomeSearch;

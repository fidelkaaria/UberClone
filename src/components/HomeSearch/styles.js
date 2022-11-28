import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  inputBox: {
    backgroundColor: 'grey',
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  inputText: {
    fontWeight: '600',
    fontSize: 30,
    color: '#fff',
    // justifyContent: 'space-between',
    padding: 10,
  },
  timeContainer: {
    width: 150,
    padding: 20,
    margin: 30,
    borderRadius: 50,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: 'grey',
    padding: 10,
    borderRadius: 25,
  },
  destinationText: {
    marginLeft: 10,
    fontWeight: 600,
    fontSize: 26,
    borderBottomWidth: 1,
    borderColor: 'grey',
  },
});

export default styles;

import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {useState} from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const DestinationSearch = () => {
  const [fromText, setFromText] = useState('');
  const [destinationText, setDestinationText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={fromText}
        onChangeText={setFromText}
        placeholder="Where from"
        placeholderTextColor={'lightblue'}
      />
      <TextInput
        value={destinationText}
        onChangeText={setDestinationText}
        style={styles.textInput}
        placeholder="Where to"
      />

      <GooglePlacesAutocomplete
        placeholder="Where from"
        onPress={(data, details = null) => {
          setFromText({data, details});
          console.log(data, details);
        }}
        fetchDetails
        query={{
          key: 'AIzaSyB9EF-tW6UZoa83huKdMtrfVzdGtBGtPDA',
          language: 'en',
        }}
      />
      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details = null) => {
          console.log(data, details);
          setDestinationText({details, data});
              }}
              fetchDetails
        query={{
          key: 'AIzaSyB9EF-tW6UZoa83huKdMtrfVzdGtBGtPDA',
          language: 'en',
        }}
      />
    </View>
  );
};

export default DestinationSearch;

import {View, Text, Dimensions} from 'react-native';
import React from 'react';

import {Marker} from 'react-native-maps';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const map = () => {
  return (
    <MapView
      style={{height: Dimensions.get('window').height - 400, width: '100%'}}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  );
};

export default map;

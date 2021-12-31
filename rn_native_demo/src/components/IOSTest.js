import React, {useEffect, useState} from 'react';
import {Button, TextInput, View} from 'react-native';
import MapView from './native/MapView.js';

const regionVal = {
  latitude: 37.48,
  longitude: -122.16,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
};
export default function IOSTest() {
  const onRegionChange = event => {
    console.log('event: ', event);
    // Do stuff with event.region.latitude, etc.
  };

  const [region, setRegion] = useState(regionVal);
  const [longitude, setLongitude] = useState(-122.16);
  const [latitude, setLatitude] = useState(37.48);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setRegion({
  //       latitude: 38.48,
  //       longitude: -122.16,
  //       latitudeDelta: 0.3,
  //       longitudeDelta: 0.3,
  //     });
  //   }, 2000);
  // }, []);
  return (
    <>
      <TextInput
        style={{width: 200, marginLeft: 20}}
        onChange={({nativeEvent: {eventCount, target, text}}) => {
          setLongitude(+text);
        }}
        placeholder="input longitude"
      />
      <TextInput
        style={{width: 200, marginLeft: 20}}
        onChange={({nativeEvent: {eventCount, target, text}}) => {
          setLatitude(+text);
        }}
        placeholder="input Latitude"
      />
      <Button
        title="前往"
        onPress={() =>
          setRegion({
            ...regionVal,
            longitude,
            latitude,
          })
        }
      />
      <Button
        title="来到储能"
        onPress={() =>
          setRegion({
            ...regionVal,
            longitude: 113.951524,
            latitude: 22.543488,
          })
        }
      />
      <MapView
        region={region}
        zoomEnabled={true}
        style={{flex: 1}}
        onRegionChange={onRegionChange}
      />
    </>
  );
}

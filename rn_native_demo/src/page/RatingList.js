import React from 'react';
import {View, Text, Button} from 'react-native';

export default function RatingList({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Ranging List</Text>

      <Button
        title="纯RN实现，走不通富文本"
        onPress={() => navigation.navigate('Rating')}
      />
      <Button
        title="RN + WebView"
        onPress={() => navigation.navigate('RatingWithWebView')}
      />
      <Button
        title="RN + Native"
        onPress={() => navigation.navigate('RatingNative')}
      />
    </View>
  );
}

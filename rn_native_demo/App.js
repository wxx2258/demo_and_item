import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MapDemo from './src/page/MapDemo';
import Rating from './src/page/Rating';
import RatingList from './src/page/RatingList';
import RatingWithWebView from './src/page/RatingWithWebView';
import RatingNative from './src/page/RatingNative';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to MapDemo"
        onPress={() => navigation.navigate('MapDemo')}
      />
      <Button
        title="Go to RatingList"
        onPress={() => navigation.navigate('RatingList')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MapDemo" component={MapDemo} />
        <Stack.Screen name="Rating" component={Rating} />
        <Stack.Screen name="RatingList" component={RatingList} />
        <Stack.Screen name="RatingWithWebView" component={RatingWithWebView} />
        <Stack.Screen name="RatingNative" component={RatingNative} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

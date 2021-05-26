import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card } from 'react-native-paper';

import FixedDimensionsBasics from './components/Sizes';
import Playoffs from './components/Playoffs';
import Game from './components/Tic';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app! </Text>
      <StatusBar style="auto" />
      <Image source={require('./assets/favicon.png')} /> */}
      <Card>
        <Playoffs />
      </Card>        

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

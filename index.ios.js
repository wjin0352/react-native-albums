// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component 
// Scrolling effect requires flex: 1 which tells it to give it as much space as it can
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'}/>
    <AlbumList/>
  </View>  
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
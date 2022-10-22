import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { } from 'react-native';
import Search from './src/components/Search';
import About from './src/components/About';
import Form from './src/components/Form';
import Navigation from './src/Navigation/Navigation';
// import { TabNavigator } from 'react-navigation';


// const Tabs = TabNavigator({
//   Search: {screen: Search},
//   About: {screen: About}
// })

export default function App() {
  return (
    // <Form />
    <Navigation />
  );
}

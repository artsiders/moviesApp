import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import About from './components/About';
// import { TabNavigator } from 'react-navigation';


// const Tabs = TabNavigator({
//   Search: {screen: Search},
//   About: {screen: About}
// })

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>art sider app</Text>
      <StatusBar style="auto" />
      <About />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    textTransform: "capitalize",
  },
});

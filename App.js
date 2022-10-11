import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import About from './src/components/About';
import Form from './src/components/Form';
// import { TabNavigator } from 'react-navigation';


// const Tabs = TabNavigator({
//   Search: {screen: Search},
//   About: {screen: About}
// })

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>art sider app</Text> */}
      <Form />
      <StatusBar style="auto" />
      {/* <About /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    textTransform: "capitalize",
  },
});

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { PrimaryButton } from './components/buttons/primary-button/primary-button';

export default function App() {
  return (
  <>
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <PrimaryButton title="Prosseguir"/>
    </View>
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {

      backgroundColor: 'white',
      border: '#58D7F2 1pz solid',
      color: '#1788A6',
  
  }
});

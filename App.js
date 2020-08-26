import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Register } from './pages/cadastro/register.page';

export default function App() {
  return (
    <View style={styles.container}>
      <Register />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1788A6',
    alignItems: 'center',
    justifyContent: 'center',

  },
});

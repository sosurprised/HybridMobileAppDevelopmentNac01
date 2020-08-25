import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Cadastro } from './pages/cadastro/cadastro.page';

export default function App() {
  return (
    <View style={styles.container}>
      <Cadastro />
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

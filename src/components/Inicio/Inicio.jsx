import React from 'react';
import { View, Text, Button } from 'react-native';

const Inicio = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text style={{ fontSize: 22, marginBottom: 16 }}>Bem Vindo!!</Text>
    <Button title='Acesse suas aulas' onPress={() => navigation.navigate('AulaLista')} />
  </View>
);

export default Inicio;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from './components/Inicio/Inicio';
import AulaLista from './components/Aulas/AulaLista';

const Stack = createStackNavigator();
const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={Inicio} />
      <Stack.Screen
        name='AulaLista'
        component={AulaLista}
        options={{
          title: 'AULAS',
          headerStyle: { backgroundColor: '#004897' },
          headerTintColor: '#FFF',
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
export default App;

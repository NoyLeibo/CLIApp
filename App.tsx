import React, {useEffect, useState} from 'react';
import {StyleSheet, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import TodosScreen from './src/screens/TodosScreen';
import stacks from './Stacks';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {stacks.map(stack => (
          <Stack.Screen
            key={stack.name}
            name={stack.name}
            component={stack.component}
            options={stack.options}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;

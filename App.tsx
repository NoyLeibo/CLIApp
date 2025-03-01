import React from 'react';
import stacks from './Stacks';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

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

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import SampleUI from '../CalcUI/source/SampleUI';


const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="SampleUI" component={SampleUI} options={{ title: 'Calculator' }}/>
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
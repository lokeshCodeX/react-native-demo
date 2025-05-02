import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AadhaarVerification from './src/screens/AadhaarVerification';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AadhaarVerification"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2196F3',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="AadhaarVerification"
          component={AadhaarVerification}
          options={{
            title: 'Aadhaar Verification',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


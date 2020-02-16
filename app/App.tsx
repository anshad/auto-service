import * as React from 'react';
import { Button, View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import AppointmentsScreen from './src/screens/AppointmentsScreen';
import LoginScreen from './src/screens/LoginScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import RegisterAppointmentScreen from './src/screens/RegisterAppointmentScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import ServiceCentersScreen from './src/screens/ServiceCentersScreen';
import ServiceHistoryScreen from './src/screens/ServiceHistoryScreen';
import SlotScreen from './src/screens/SlotScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen
          name="AppointmentsScreen"
          component={AppointmentsScreen}
        />
        <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
        <Stack.Screen
          name="BookAppointments"
          component={RegisterAppointmentScreen}
        />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="ServiceCenters" component={ServiceCentersScreen} />
        <Stack.Screen name="ServiceHistory" component={ServiceHistoryScreen} />
        <Stack.Screen name="Slots" component={SlotScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

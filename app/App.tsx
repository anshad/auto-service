import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import AppointmentsScreen from './src/screens/AppointmentsScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
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
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="AppointmentsScreen"
          component={AppointmentsScreen}
          options={{ title: 'Appointments' }}
        />
        <Stack.Screen
          name="DashboardScreen"
          component={DashboardScreen}
          options={{ title: 'Dashboard' }}
        />
        <Stack.Screen
          name="BookAppointmentScreen"
          component={RegisterAppointmentScreen}
          options={{ title: 'Book Appointment' }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ title: 'Sign Up' }}
        />
        <Stack.Screen
          name="ServiceCenterScreen"
          component={ServiceCentersScreen}
          options={{ title: 'Service Centers' }}
        />
        <Stack.Screen
          name="ServiceHistory"
          component={ServiceHistoryScreen}
          options={{ title: 'Service History' }}
        />
        <Stack.Screen
          name="SlotScreen"
          component={SlotScreen}
          options={{ title: 'Appointment Slots' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

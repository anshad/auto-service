import * as React from 'react';
import {Button, View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';
import LoginScreen from './src/screens/LoginScreen';
import MyAppointmentsScreen from './src/screens/MyAppointmentsScreen';
import MyProfileScreen from './src/screens/MyProfileScreen';
import MyVehicleScreen from './src/screens/MyVehicleScreen';
import RegisterAppointmentScreen from './src/screens/RegisterAppointmentScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import ServiceCentersScreen from './src/screens/ServiceCentersScreen';
import ServiceHistoryScreen from './src/screens/ServiceHistoryScreen';
import ServicesScreen from './src/screens/ServicesScreen';
import SlotScreen from './src/screens/SlotScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailScreen} />
        <Stack.Screen name="MyAppointments" component={MyAppointmentsScreen} />
        <Stack.Screen name="MyProfile" component={MyProfileScreen} />
        <Stack.Screen name="MyVehicle" component={MyVehicleScreen} />
        <Stack.Screen
          name="BookAppointments"
          component={RegisterAppointmentScreen}
        />
        <Stack.Screen name="RegisterUser" component={RegisterScreen} />
        <Stack.Screen name="ServiceCenters" component={ServiceCentersScreen} />
        <Stack.Screen name="ServiceHistory" component={ServiceHistoryScreen} />
        <Stack.Screen name="Services" component={ServicesScreen} />
        <Stack.Screen name="Slots" component={SlotScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

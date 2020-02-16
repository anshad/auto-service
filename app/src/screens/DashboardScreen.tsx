import React, { Component } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import { Navigation } from '../types';
import { BottomNavigation, Text } from 'react-native-paper';
import ServiceCentersScreen from './ServiceCentersScreen';
import ServiceHistoryScreen from './ServiceHistoryScreen';
import AppointmentsScreen from './AppointmentsScreen';

export default class DashboardScreen extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'sellers', title: 'Sellers', icon: 'wrench' },
      {
        key: 'services',
        title: 'My Services',
        icon: 'car'
      },
      {
        key: 'appointments',
        title: 'My Appointments',
        icon: 'file'
      }
    ]
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    sellers: ServiceCentersScreen,
    services: ServiceHistoryScreen,
    appointments: AppointmentsScreen
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}

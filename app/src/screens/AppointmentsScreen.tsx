import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SectionGrid, FlatGrid } from 'react-native-super-grid';
import { API_URI } from 'react-native-dotenv';

export default class AppointmentsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <View style={this.styles.gridView}></View>;
  }

  styles = StyleSheet.create({
    gridView: {
      marginTop: 20,
      flex: 1
    }
  });
}

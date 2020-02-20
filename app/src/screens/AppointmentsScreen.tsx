import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class AppointmentsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <View style={this.styles.gridView} />;
  }

  styles = StyleSheet.create({
    gridView: {
      marginTop: 20,
      flex: 1
    }
  });
}

import AsyncStorage from '@react-native-community/async-storage';
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { API_URI } from 'react-native-dotenv';
import { Card, Chip, Paragraph } from 'react-native-paper';
import { FlatGrid } from 'react-native-super-grid';

export default class SlotScreen extends Component {
  constructor(props) {
    super(props);

    const { id, name } = props.route.params;
    this.state = {
      sellerId: id,
      sellerName: name,
      token: '',
      slots: [],
      errors: []
    };

    this.renderChips = this.renderChips.bind(this);
    this.requestAppointment = this.requestAppointment.bind(this);
  }

  requestAppointment(slot) {
    this.props.navigation.navigate('BookAppointmentScreen', {
      slot: slot,
      sellerId: this.state.sellerId
    });
  }

  componentDidMount() {
    AsyncStorage.getItem('token').then(token => {
      this.setState({ token });

      const options = {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.state.token}`
        }
      };

      fetch(`${API_URI}slots/default-slots/${this.state.sellerId}`, options)
        .then(res => {
          if (!res.ok) {
            return Promise.reject(res);
          }
          return res.json();
        })
        .catch(async res => {
          const error = await res.json().then(text => text);
          return Promise.reject(error);
        })
        .then(res => {
          this.setState({ slots: res.data });
        })
        .catch(err => {
          this.setState({ errors: err.errors });
        });
    });
  }

  renderChips(items) {
    return items.map((item, i) => {
      return (
        <Chip
          icon="calendar"
          onPress={() => this.requestAppointment(item)}
          key={i}
          mode="outlined"
          style={this.styles.chip}
        >
          {item.date}
        </Chip>
      );
    });
  }

  render() {
    return (
      <View style={this.styles.gridView}>
        {/* <Text style={this.styles.header}>
          {this.state.sellerName} - Open Slots
        </Text> */}
        <FlatGrid
          itemDimension={250}
          items={this.state.slots}
          renderItem={({ item, index }) => (
            <Card key={index}>
              <Card.Title title={item.time} titleStyle={this.styles.header} />

              <Card.Content>
                <Paragraph>Select a date to book appointment</Paragraph>
                {this.renderChips(item.openSlots)}
              </Card.Content>
            </Card>
          )}
        />
      </View>
    );
  }

  styles = StyleSheet.create({
    gridView: {
      marginTop: 20,
      flex: 1
    },
    header: {
      textTransform: 'uppercase'
    },
    chip: {
      width: 150,
      marginBottom: 5
    }
  });
}

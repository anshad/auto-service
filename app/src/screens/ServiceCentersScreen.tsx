import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SectionGrid, FlatGrid } from 'react-native-super-grid';
import {
  Searchbar,
  Avatar,
  Button,
  Card,
  Title,
  Paragraph
} from 'react-native-paper';
import { API_URI } from 'react-native-dotenv';
import AsyncStorage from '@react-native-community/async-storage';

import serviceImg from '../assets/service.png';
import garageImg from '../assets/garage.jpg';

export default class ServiceCentersScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      sellers: [],
      errors: [],
      token: ''
    };
  }

  updateSearch = search => {
    console.log(search);
    this.setState({ search });
  };

  componentDidMount() {
    AsyncStorage.getItem('token').then(token => {
      this.setState({ token });

      let options = {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.state.token}`
        }
      };

      fetch(API_URI + 'sellers', options)
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
          this.setState({ sellers: res.data });
        })
        .catch(err => {
          this.setState({ errors: err.errors });
        });
    });
  }

  selectSeller(seller) {
    console.log(seller);
  }

  render() {
    return (
      <View style={this.styles.gridView}>
        <Searchbar
          placeholder="Search"
          onChangeText={this.updateSearch}
          value={this.state.search}
          style={this.styles.search}
        />
        <FlatGrid
          itemDimension={250}
          items={this.state.sellers}
          renderItem={({ item, index }) => (
            <Card>
              <Card.Title titleStyle={this.styles.itemName} title={item.name} />
              <Card.Cover source={garageImg} />
              <Card.Content>
                <Paragraph>
                  {item.building ? item.building + ', ' : ''}
                  {item.street ? item.street + ', ' : ''}
                  {item.city ? item.city + ', ' : ''}
                  {item.province}, {item.country}
                </Paragraph>
                <Paragraph>Email: {item.email}</Paragraph>
                <Paragraph>Phone: {item.phonePrimary}</Paragraph>
                <Paragraph>
                  Open Hours: {item.openingTime} - {item.closingTime}
                </Paragraph>
              </Card.Content>

              <Card.Actions>
                <Button>Book Appointment</Button>
              </Card.Actions>
            </Card>
          )}
        />
      </View>
    );
  }

  styles = StyleSheet.create({
    hidden: { display: 'none' },
    itemDetails: {
      flex: 1.5,
      alignSelf: 'center'
    },
    image: {
      flex: 1,
      alignItems: 'flex-start',
      alignSelf: 'center'
    },
    search: {
      margin: 10
    },
    gridView: {
      marginTop: 20,
      flex: 1
    },
    itemContainer: {
      backgroundColor: '#4B8BF5',
      justifyContent: 'flex-end',
      borderRadius: 5,
      padding: 10,
      height: 250
    },
    itemName: {
      textTransform: 'capitalize'
    }
  });
}

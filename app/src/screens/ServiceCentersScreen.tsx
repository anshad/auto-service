import AsyncStorage from '@react-native-community/async-storage';
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { API_URI } from 'react-native-dotenv';
import { Button, Card, Paragraph, Searchbar } from 'react-native-paper';
import { FlatGrid } from 'react-native-super-grid';

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

    this.updateSearch = this.updateSearch.bind(this);
    this.findSlots = this.findSlots.bind(this);
  }

  updateSearch = search => {
    this.setState({ search });

    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.state.token}`
      },
      body: JSON.stringify({ text: search })
    };

    fetch(`${API_URI}sellers/search`, options)
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
  };

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

      fetch(`${API_URI}sellers`, options)
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

  findSlots(seller) {
    this.props.navigation.navigate('SlotScreen', {
      id: seller._id,
      name: seller.name
    });
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
            <Card key={index}>
              <Card.Title titleStyle={this.styles.itemName} title={item.name} />
              <Card.Cover source={garageImg} />
              <Card.Content>
                <Paragraph>
                  {item.building ? `${item.building}, ` : ''}
                  {item.street ? `${item.street}, ` : ''}
                  {item.city ? `${item.city}, ` : ''}
                  {item.province},{item.country}
                </Paragraph>
                <Paragraph>
                  Email:
                  {item.email}
                </Paragraph>
                <Paragraph>
                  Phone:
                  {item.phonePrimary}
                </Paragraph>
                <Paragraph>
                  Open Hours: {item.openingTime} - {item.closingTime}
                </Paragraph>
              </Card.Content>

              <Card.Actions>
                <Button
                  onPress={() => {
                    this.findSlots(item);
                  }}
                >
                  Check Available Slots
                </Button>
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

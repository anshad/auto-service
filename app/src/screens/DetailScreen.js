import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SectionGrid, FlatGrid } from 'react-native-super-grid';
import { Searchbar } from 'react-native-paper';
import { API_URI } from 'react-native-dotenv';

import serviceImg from '../images/service.png';

export default class DetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      sellers: []
    };
  }

  updateSearch = search => {
    this.setState({ search });
  };

  componentDidMount() {
    fetch(API_URI + 'sellers')
      .then(response => response.json())
      .then(json => {
        this.setState({ sellers: json.data });
      })
      .catch(error => {
        console.error(error);
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
            <TouchableOpacity
              style={this.styles.itemContainer}
              onPress={() => {
                this.selectSeller(item);
              }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'stretch'
                }}>
                <Image
                  source={serviceImg}
                  style={this.styles.image}
                  resizeMode="contain"
                />
                <View style={this.styles.itemDetails}>
                  <Text style={this.styles.itemName}>{item.name}</Text>
                  {item.building ? (
                    <Text style={this.styles.itemCode}>{item.building}</Text>
                  ) : (
                    <Text style={this.styles.hidden}></Text>
                  )}
                  {item.street ? (
                    <Text style={this.styles.itemCode}>{item.street}</Text>
                  ) : (
                    <Text style={this.styles.hidden}></Text>
                  )}
                  {item.city ? (
                    <Text style={this.styles.itemCode}>{item.city}</Text>
                  ) : (
                    <Text style={this.styles.hidden}></Text>
                  )}
                  <Text style={this.styles.itemCode}>{item.province}</Text>
                  <Text style={this.styles.itemCode}>{item.country}</Text>
                  <Text style={this.styles.itemCode}>Email: {item.email}</Text>
                  {item.phonePrimary ? (
                    <Text style={this.styles.itemCode}>
                      Phone: {item.phonePrimary}
                    </Text>
                  ) : (
                    <Text style={this.styles.hidden}></Text>
                  )}
                  <Text style={this.styles.itemCode}>
                    Open Hours: {item.openingTime} - {item.closingTime}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
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
      textTransform: 'capitalize',
      fontSize: 20,
      color: '#fff',
      fontWeight: 'bold'
    },
    itemCode: {
      fontWeight: '600',
      fontSize: 13,
      color: '#fff'
    }
  });
}

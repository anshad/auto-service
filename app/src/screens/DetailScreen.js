import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {SectionGrid, FlatGrid} from 'react-native-super-grid';
import {Searchbar} from 'react-native-paper';

export default class DetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }

  updateSearch = search => {
    this.setState({search});
  };

  items = [
    {name: 'TURQUOISE', code: '#1abc9c'},
    {name: 'EMERALD', code: '#2ecc71'},
    {name: 'PETER RIVER', code: '#3498db'},
    {name: 'AMETHYST', code: '#9b59b6'},
    {name: 'WET ASPHALT', code: '#34495e'},
    {name: 'GREEN SEA', code: '#16a085'},
    {name: 'NEPHRITIS', code: '#27ae60'},
    {name: 'BELIZE HOLE', code: '#2980b9'},
    {name: 'WISTERIA', code: '#8e44ad'},
    {name: 'MIDNIGHT BLUE', code: '#2c3e50'},
    {name: 'SUN FLOWER', code: '#f1c40f'},
    {name: 'CARROT', code: '#e67e22'},
    {name: 'ALIZARIN', code: '#e74c3c'},
    {name: 'CLOUDS', code: '#ecf0f1'},
    {name: 'CONCRETE', code: '#95a5a6'},
    {name: 'ORANGE', code: '#f39c12'},
    {name: 'PUMPKIN', code: '#d35400'},
    {name: 'POMEGRANATE', code: '#c0392b'},
    {name: 'SILVER', code: '#bdc3c7'},
    {name: 'ASBESTOS', code: '#7f8c8d'},
  ];

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
          itemDimension={190}
          items={this.items}
          renderItem={({item, index}) => (
            <TouchableOpacity
              style={[this.styles.itemContainer, {backgroundColor: item.code}]}
              onPress={() => {
                console.log('pressed');
              }}>
              <Text style={this.styles.itemName}>{item.name}</Text>
              <Text style={this.styles.itemCode}>{item.code}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }

  styles = StyleSheet.create({
    search: {
      margin: 10,
    },
    gridView: {
      marginTop: 20,
      flex: 1,
    },
    itemContainer: {
      justifyContent: 'flex-end',
      borderRadius: 5,
      padding: 10,
      height: 150,
    },
    itemName: {
      fontSize: 16,
      color: '#fff',
      fontWeight: '600',
    },
    itemCode: {
      fontWeight: '600',
      fontSize: 12,
      color: '#fff',
    },
  });
}

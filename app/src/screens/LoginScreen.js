import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Logo from '../components/Logo';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={this.styles.viewStyle}>
        <Logo />
        <TextInput
          style={this.styles.input}
          placeholder="Mobile No."
          keyboardType="numeric"
          maxLength={12}
        />
        <TextInput
          style={this.styles.input}
          placeholder="Password"
          secureTextEntry={true}
          returnKeyType={'done'}
          autoCapitalize={'none'}
          autoCorrect={false}
        />
        <TouchableOpacity
          style={this.styles.button}
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={this.styles.text}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
  DEVICE_WIDTH = Dimensions.get('window').width;
  DEVICE_HEIGHT = Dimensions.get('window').height;
  MARGIN = 40;

  styles = StyleSheet.create({
    viewStyle: {flex: 1, alignItems: 'center', justifyContent: 'center'},
    input: {
      backgroundColor: '#ccc',
      width: this.DEVICE_WIDTH - 40,
      height: 40,
      marginHorizontal: 20,
      marginVertical: 10,
      paddingLeft: 45,
      color: '#555',
    },
    text: {
      color: 'white',
      backgroundColor: 'transparent',
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#E44E21',
      height: this.MARGIN,
      width: this.DEVICE_WIDTH - 40,
      marginTop: 10,
    },
  });
}

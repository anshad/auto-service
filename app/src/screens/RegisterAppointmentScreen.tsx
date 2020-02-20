import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';

import Background from '../components/Background';
import Button from '../components/Button';
import TextInput from '../components/TextInput';

export default class RegisterAppointmentScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vehicleType: { value: '', error: '' },
      regNumber: { value: '', error: '' },
      note: { value: '', error: '' },
      model: { value: '', error: '' }
    };

    this.bookAppointment = this.bookAppointment.bind(this);
  }

  bookAppointment() {
    //
  }

  render() {
    const data = [
      {
        value: 'Two Wheeler'
      },
      {
        value: 'Four Wheeler'
      }
    ];
    return (
      <Background>
        <Dropdown
          label="Vehicle Type"
          data={data}
          containerStyle={this.styles.dropdown}
          onChangeText={text => {
            this.setState({
              vehicleType: { value: text, error: '' }
            });
          }}
        />
        <TextInput
          label="Registration Number"
          returnKeyType="next"
          value={this.state.regNumber.value}
          onChangeText={text =>
            this.setState({
              regNumber: { value: text, error: '' }
            })
          }
          error={!!this.state.regNumber.error}
          errorText={this.state.regNumber.error}
          autoCapitalize="none"
        />
        <TextInput
          label="Model"
          returnKeyType="next"
          value={this.state.model.value}
          onChangeText={text =>
            this.setState({
              model: { value: text, error: '' }
            })
          }
          error={!!this.state.regNumber.error}
          errorText={this.state.regNumber.error}
          autoCapitalize="none"
        />
        <TextInput
          label="Note"
          returnKeyType="done"
          multiline={true}
          style={this.styles.textArea}
          value={this.state.note.value}
          numberOfLines={4}
          onChangeText={text => {
            this.setState({ note: { value: text, error: '' } });
          }}
          error={!!this.state.note.error}
          errorText={this.state.note.error}
          autoCapitalize="none"
        />
        <Button mode="contained" onPress={this.bookAppointment}>
          Request Appointment
        </Button>
      </Background>
    );
  }

  styles = StyleSheet.create({
    gridView: {
      marginTop: 20,
      flex: 1
    },
    textArea: {},
    dropdown: {
      width: '100%'
    }
  });
}

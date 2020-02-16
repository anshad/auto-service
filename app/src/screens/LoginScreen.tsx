import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { API_URI } from 'react-native-dotenv';
import { Snackbar } from 'react-native-paper';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import { theme } from '../core/theme';
import { emailValidator, passwordValidator } from '../core/utils';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: { value: '', error: '' },
      password: { value: '', error: '' },
      errors: []
    };

    this.onLoginPressed = this.onLoginPressed.bind(this);
  }

  componentDidMount() {
    AsyncStorage.getItem('token').then(token => {
      if (token !== null) {
        this.props.navigation.navigate('ServiceCenterScreen');
      }
    });
  }

  onLoginPressed() {
    const emailError = emailValidator(this.state.email.value);
    const passwordError = passwordValidator(this.state.password.value);

    if (emailError || passwordError) {
      this.setState({
        email: { value: this.state.email.value, error: emailError }
      });
      this.setState({
        password: { value: this.state.password.value, error: passwordError }
      });
      return;
    }

    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.email.value,
        password: this.state.password.value
      })
    };

    fetch(`${API_URI}auth/login`, options)
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
      .then(async res => {
        await AsyncStorage.setItem('token', res.data.token);
        this.props.navigation.navigate('ServiceCenterScreen');
      })
      .catch(err => {
        if (typeof err.errors !== 'undefined') {
          this.setState({ errors: err.errors });
        } else {
          this.setState({ errors: [{ message: 'API server not accessible' }] });
        }
      });
  }

  render() {
    return (
      <Background>
        <BackButton
          goBack={() => this.props.navigation.navigate('HomeScreen')}
        />

        <Logo />

        <Header>Auto Service</Header>

        <TextInput
          label="Email"
          returnKeyType="next"
          value={this.state.email.value}
          onChangeText={text =>
            this.setState({ email: { value: text, error: '' } })
          }
          error={!!this.state.email.error}
          errorText={this.state.email.error}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />

        <TextInput
          label="Password"
          returnKeyType="done"
          value={this.state.password.value}
          onChangeText={text =>
            this.setState({ password: { value: text, error: '' } })
          }
          error={!!this.state.password.error}
          errorText={this.state.password.error}
          secureTextEntry
        />

        {/* <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ForgotPasswordScreen')}>
          <Text style={styles.label}>Forgot your password?</Text>
        </TouchableOpacity>
      </View> */}

        <Button mode="contained" onPress={this.onLoginPressed}>
          Login
        </Button>

        <View style={this.styles.row}>
          <Text style={this.styles.label}>Don’t have an account? </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('RegisterScreen')}
          >
            <Text style={this.styles.link}>Sign up</Text>
          </TouchableOpacity>
        </View>
        {this.renderSnackBar()}
      </Background>
    );
  }

  renderSnackBar() {
    if (this.state.errors.length > 0) {
      return (
        <Snackbar
          visible={this.state.errors.length > 0}
          onDismiss={() => {
            this.setState({ errors: [] });
          }}
        >
          {this.state.errors[0].message
            ? this.state.errors[0].message
            : this.state.errors[0].msg}
        </Snackbar>
      );
    }
  }

  styles = StyleSheet.create({
    forgotPassword: {
      width: '100%',
      alignItems: 'flex-end',
      marginBottom: 24
    },
    row: {
      flexDirection: 'row',
      marginTop: 4
    },
    label: {
      color: theme.colors.secondary
    },
    link: {
      fontWeight: 'bold',
      color: theme.colors.primary
    }
  });
}

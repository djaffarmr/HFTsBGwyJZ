import React, { Component } from 'react';
import { View,
         Text,
         TouchableWithoutFeedback } from 'react-native';

import { Card,
         CardItem,
         Button,
         EditText,
         Loading } from '../../components/';

import Daftar from './Daftar';

import { color_primary,
         white,
         persian_red } from '../../styles/Palette';

import { fire } from '../../../App';

export default class Masuk extends Component {

  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isLoading: false,
      error: ''
    }
  }

  onMasukPressed() {

    this.setState({
      isLoading: true,
      error: ''
    });

    const { email, password } = this.state;

    fire.auth().signInWithEmailAndPassword(email, password)
      .then(this.onAuthSuccess.bind(this))
      .catch(this.onAuthFail.bind(this));
  }

  onDaftarPressed() {
    this.setState({ error: '' });
    this.props.navigation.navigate('Daftar');
  }

  onRenderButton() {

    const { loadingContainer } = styles;

    if (this.state.isLoading) {
      return(
        <View style = { loadingContainer }>
          <Loading
            color = { white }
            size = 'small' />
        </View>
      );
    } else {
      return(
        <Button onPress = { this.onMasukPressed.bind(this) }>
          Masuk
        </Button>
      );
    }
  }

  onAuthSuccess() {
    this.setState({
      email: '',
      password: '',
      isLoading: false,
      error: ''
    });
  }

  onAuthFail() {
    this.setState({
      isLoading: false,
      error: 'Otentikasi gagal'
    });
  }

  render() {

    const { container,
            daftarContainer,
            daftarText,
            errorText } = styles;

    return(
      <View style = { container }>

        <Text style = { errorText }>
          { this.state.error }
        </Text>

        <Card>
          <CardItem>
            <EditText
              label = 'Email'
              placeholder = 'user@gmail.com'
              value = { this.state.email }
              onChangeText = { email => this.setState({ email: email }) } />
          </CardItem>

          <CardItem>
            <EditText
              label = 'Password'
              placeholder = 'password'
              value = { this.state.password }
              secureTextEntry = { true }
              onChangeText = { password => this.setState({ password: password }) } />
          </CardItem>

          <CardItem>
            { this.onRenderButton() }
          </CardItem>
        </Card>

        <TouchableWithoutFeedback onPress = { this.onDaftarPressed.bind(this) }>
          <View style = { daftarContainer }>
            <Text>
              Belum punya akun?
            </Text>
            <Text style = { daftarText }>
               Daftar disini.
            </Text>
          </View>
        </TouchableWithoutFeedback>

      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  daftarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8
  },
  daftarText: {
    fontWeight: 'bold',
    marginLeft: 4
  },
  errorText: {
    color: persian_red,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 8
  },
  loadingContainer: {
    backgroundColor: color_primary,
    flex: 1,
    height: 45,
    width: undefined,
    justifyContent: 'center',
    alignItems: 'center'
  }
}

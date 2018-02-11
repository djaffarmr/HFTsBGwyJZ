import React, { Component } from 'react';
import { View,
         Text,
         TouchableWithoutFeedback } from 'react-native';

import { Card,
         CardItem,
         Button,
         EditText,
         Loading } from '../../components/';

import { color_primary,
         white,
         persian_red } from '../../styles/Palette';

import { fire } from '../../../App';

export default class Daftar extends Component {

  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isLoading: false,
      error: ''
    }
  }

  onDaftarPressed() {

    this.setState({
      isLoading: true,
      error: ''
    });

    const { email, password } = this.state;

    fire.auth().createUserWithEmailAndPassword(email, password)
      .then(this.onAuthSuccess.bind(this))
      .catch(this.onAuthFail.bind(this));
  }

  onMasukPressed() {
    this.setState({ error: '' });
    this.props.navigation.navigate('Masuk');
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
        <Button onPress = { this.onDaftarPressed.bind(this) }>
          Daftar
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
            masukContainer,
            masukText,
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
              placeholder = 'password. minimal 6 karakter.'
              value = { this.state.password }
              secureTextEntry = { true }
              onChangeText = { password => this.setState({ password: password }) } />
          </CardItem>

          <CardItem>
            { this.onRenderButton() }
          </CardItem>
        </Card>

        <TouchableWithoutFeedback onPress = { this.onMasukPressed.bind(this) }>
          <View style = { masukContainer }>
            <Text>
              Sudah punya akun?
            </Text>
            <Text style = { masukText }>
               Masuk disini.
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
  masukContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8
  },
  masukText: {
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


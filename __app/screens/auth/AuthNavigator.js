import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import Masuk from './Masuk';
import Daftar from './Daftar';

const AuthRouter = StackNavigator({
  Masuk: { screen: Masuk },
  Daftar: { screen: Daftar }
}, {
  headerMode: 'none'
});

export default class AuthNavigator extends Component {

  render() {

    console.log('from auth router');

    return <AuthRouter />
  }
}

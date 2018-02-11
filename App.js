import React, { Component } from 'react';
import { View } from 'react-native';

import firebase from 'firebase';

import { CardItem,
         Button,
         Loading } from './__app/components';

import AuthNavigator from './__app/screens/auth/AuthNavigator';
import Navigator from './__app/screens/Navigator';

const firebaseConfig = {
  apiKey: 'AIzaSyAg5E4F6xjlD3gkn-YDEfTpkOfktuMCRyA',
  authDomain: 'futsalin-159b8.firebaseapp.com',
  databaseURL: 'https://futsalin-159b8.firebaseio.com',
  projectId: 'futsalin-159b8',
  storageBucket: 'futsalin-159b8.appspot.com',
  messagingSenderId: '852870201559'
}

const fire = null;

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      loggedIn: null
    }
  }

  componentWillMount() {

    const firebaseApp = firebase.initializeApp(firebaseConfig);

    fire = firebaseApp;

    fire.auth().onAuthStateChanged((user) =>{
      if (user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    });
  }

  onRenderAuth() {

    switch (this.state.loggedIn) {
      case true:
        return <Navigator />
      case false:
        return <AuthNavigator />
      default:
        return <Loading size = 'large' />
    }
  }

  render() {

    const { container } = styles;

    return(
      <View style = { container }>
        { this.onRenderAuth() }
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1
  }
}

export { fire }

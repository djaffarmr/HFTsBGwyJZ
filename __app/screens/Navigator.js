import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';

import Beranda from './Beranda';
import Peringkat from './Peringkat';
import Pertandingan from './Pertandingan';
import Notifikasi from './Notifikasi';
import Profil from './Profil';

import { color_primary,
         white,
         silver } from '../styles/Palette';

const Router = TabNavigator({
  Beranda: { screen: Beranda },
  Peringkat: { screen: Peringkat },
  Pertandingan: { screen: Pertandingan },
  Notifikasi: { screen: Notifikasi },
  Profil: { screen: Profil }
}, {
  tabBarPosition: 'bottom',
  animationEnabled: false,
  swipeEnabled: false,
  tabBarOptions: {
    activeTintColor: color_primary,
    inactiveTintColor: silver,
    style: {
      backgroundColor: white,
    },
    indicatorStyle: {
      backgroundColor: null
    }
  }
});

export default class Navigator extends Component {
  render() {
    return <Router />
  }
}

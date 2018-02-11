import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { color_primary,
         white,
         silver } from '../styles/Palette';

const Toolbar = (props) => {

  const { container, title } = styles;

  return (
    <View style = { container }>
      <Text style = { title }>
        { props.toolbarTitle }
      </Text>

    </View>
  );
}

const styles = {
  container: {
    backgroundColor: color_primary,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    borderBottomWidth: 1,
    borderColor: silver
  },
  title: {
    color: white,
    fontSize: 16,
    fontWeight: 'bold'
  }
}

export { Toolbar }

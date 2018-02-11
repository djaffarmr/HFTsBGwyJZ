import React from 'react';
import { View } from 'react-native'

import { silver } from '../styles/Palette';

const Card = (props) => {

  const { container } = styles;

  return(
    <View style = { container }>
      { props.children }
    </View>
  );

}

const styles = {
  container: {
    borderWidth: 1,
    borderColor: silver,
    borderRadius: 4,
    marginTop: 2,
    marginRight: 4,
    marginBottom: 2,
    marginLeft: 4
  }
}

export { Card }

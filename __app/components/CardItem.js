import React from 'react';
import { View , Text } from 'react-native';

import { silver } from '../styles/Palette';

const CardItem = (props) => {

  const { container } = styles;

  return(
    <View style = { container }>
      { props.children }
    </View>
  );
}

const styles = {
  container: {
    borderBottomWidth: 1,
    padding: 8,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: silver,
    position: 'relative'
  }
}

export { CardItem }

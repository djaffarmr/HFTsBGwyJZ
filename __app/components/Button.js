import React from 'react';
import { View,
         Text,
         TouchableHighlight
} from 'react-native';

import { color_primary, white } from '../styles/Palette';

const Button = ({ onPress, children }) => {

  const { container, text } = styles;

  return(
    <TouchableHighlight
      underlayColor = { 'rgba(0, 0, 0, 0.1)' }
      onPress = { onPress }
      style = { container }>
        <Text style = { text }>
          { children }
        </Text>
    </TouchableHighlight>
  );
}

const styles = {
  container: {
    backgroundColor: color_primary,
    flex: 1,
    height: 45,
    width: undefined,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: white
  }
}

export { Button }

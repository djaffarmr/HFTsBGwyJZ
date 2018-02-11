import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import { color_primary } from '../styles/Palette';

const Loading = ({ color, size }) => {

  const { container } = styles;

  return(
    <View style = { container }>
      <ActivityIndicator
        color = { color || color_primary }
        size = { size  || 'large'} />
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export { Loading }

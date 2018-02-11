import React from 'react';
import { View, Text, TextInput } from 'react-native';

import { transparent,
         silver,
         mine_shaft } from '../styles/Palette';

const EditText = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {

  const { container,
          labelStyle,
          field } = styles;

  return(
    <View style = { container }>
      <Text style = { labelStyle }>
        { label }
      </Text>
      <TextInput
        autoCapitalize = 'none'
        autoCorrect = { false }
        placeholder = { placeholder}
        placeholderTextColor = { silver }
        underlineColorAndroid = { transparent }
        value = { value }
        onChangeText = { onChangeText }
        secureTextEntry = { secureTextEntry }
        style = { field } />
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    height: 36,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 4,
    paddingRight: 4
  },
  labelStyle: {
    fontSize: 16,
    color: mine_shaft,
    flex: 1
  },
  field: {
    color: mine_shaft,
    fontSize: 16,
    height: 40,
    width: undefined,
    paddingLeft: 4,
    // lineHeight: 16,
    flex: 3
  }
}

export { EditText }

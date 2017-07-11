import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>
        { children }
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    borderWidth: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderColor: '#007aff',
    borderRadius: 5,
    padding: 7,
    shadowColor: '#efefef',
    shadowOffset: { width: 1, height: 1 }
  },
  textStyle: {
    color: '#007aff',
    fontWeight: '600'
  }
};

export { Button };

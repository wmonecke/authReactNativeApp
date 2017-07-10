import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = styles; // === const textStyle = styles.textStyle

  return (
      <View style={viewStyle}>
        <Text style={textStyle}> { props.headerText } </Text>
      </View>
  );
};

const styles = {
  viewStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    backgroundColor: '#efefef',
    height: '10%',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },

  textStyle: {
    position: 'relative',
    top: '8%',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    textShadowColor: 'white',
    textShadowOffset: {
      width: 0.5,
      height: 0.5
    },
    letterSpacing: 1
  }
};

export { Header };

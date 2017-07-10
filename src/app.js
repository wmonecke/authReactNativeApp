import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common';

class App extends Component {

  render() {
    return (
      <View style={styles.viewContainer}>
        <Header headerText={'auth'} />
        <Text> App.js </Text>
      </View>
    );
  }

}

const styles = {
  viewContainer: {
    height: '100%'
  }
};

export default App;

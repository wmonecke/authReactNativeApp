import React, { Component } from 'react';
import firebase from 'firebase';

import { View } from 'react-native';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = {
    loggedIn: null
  }

  componentWillMount() {
    console.log(this.state);

    firebase.initializeApp({
      apiKey: 'AIzaSyB4YTQAkin5epZ4nCl8kJSNhQdBn9c8tbY',
      authDomain: 'auth-79bfa.firebaseapp.com',
      databaseURL: 'https://auth-79bfa.firebaseio.com',
      projectId: 'auth-79bfa',
      storageBucket: 'auth-79bfa.appspot.com',
      messagingSenderId: '1089451858009'
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    console.log('within renderContent and this is state', this.state);

    switch (this.state.loggedIn) {
      case true:
        return (
          <Button
            onPress={() => firebase.auth().signOut()}
          >Log Out</Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View style={styles.viewContainer}>
        <Header headerText={'Authentication'} />
        {this.renderContent()}
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

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import firebase from 'firebase';
import { Header, Button, Card } from './src/component/common';
import LoginForm from './src/component/loginForm';
import RegisterForm from './src/component/registerForm';

export default class App extends Component {
  state = { loggedIn: null };

  componentDidMount() {
    const config = {
      apiKey: "AIzaSyDNKbpJAUfs5no6rARqB5kxGaSsPBobjWo",
      authDomain: "samplereactnative-ebaa9.firebaseapp.com",
      databaseURL: "https://samplereactnative-ebaa9.firebaseio.com",
      projectId: "samplereactnative-ebaa9",
      storageBucket: "",
      messagingSenderId: "86863743038"
    };
    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderFormLogin() {
    if (this.state.loggedIn == true) {
      return (<View>
        <Header headerText='Welcome' />
        <Card>
          <Text style={styles.textEmailStyle}>{firebase.auth().currentUser.email}</Text>
          <Button onPress={() => firebase.auth().signOut()}>Logout</Button>
        </Card>
      </View>);
    } else {
      return (<View>
        <Header headerText='Login' />
        <LoginForm />
      </View>);
    }
  }

  render(props) {
    return (
    <View>
      {this.renderFormLogin()}
        <RegisterForm/>
    </View>);
  }
}

const styles = {
  textEmailStyle: {
    fontSize: 18,
    alignSelf: 'center',
    marginBottom: 6,
  }
}



import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import firebase from 'firebase';
import { Header } from './src/component/common';
import LoginForm from './src/component/loginForm';

export default class App extends Component {
  componentDidMount() {
    const config = {
      apiKey: "AIzaSyBFH8V2pP-yza611OKXhweEQ2jisJmIhLk",
      authDomain: "react-native-93455.firebaseapp.com",
      databaseURL: "https://react-native-93455.firebaseio.com",
      projectId: "react-native-93455",
      storageBucket: "react-native-93455.appspot.com",
      messagingSenderId: "943681050634"
    };
    firebase.initializeApp(config);
  }

  render(props) {
    return (<View>
      <Header headerText='Login' />
      <LoginForm />
    </View>);
  }
}
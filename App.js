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
import RegisterForm from './src/component/registerForm'

export default class App extends Component {
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
  }

  render(props) {
    return (<View>
      <Header headerText='Smart Dental Clinic' />
      <LoginForm />
      <RegisterForm />
    </View>);
  }
}
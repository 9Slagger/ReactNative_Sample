import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import { Card, Button } from './common';
import firebase from 'firebase';

class registerForm extends Component {
    state = { email: '', password: '' };

    onLoginButtonPress = () => {
        const { email, password } = this.state;
        firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password)
            .then(() => { alert("Register Successful , " + email + " " + password); })
            .catch((msgError) => { alert(msgError.message); });
    }

    render() {
        return (
            <View>
                <Card>
                    <View style={coinDetailStyle.containerMain}>

                        <View style={coinDetailStyle.containerInput}>
                            <Text style={coinDetailStyle.textForm}>Email</Text>
                            <TextInput style={coinDetailStyle.textInputEmail}
                                autoCorrect={false}
                                placeholder='Email'
                                value={this.state.email}
                                onChangeText={str => this.setState({ email: str })}>
                            </TextInput>
                        </View>
                        <View style={coinDetailStyle.containerInput}>
                            <Text style={coinDetailStyle.textForm}>Password</Text>
                            <TextInput style={coinDetailStyle.textInputPassword}
                                autoCorrect={false}
                                placeholder='Password'
                                secureTextEntry={true}
                                value={this.state.password}
                                onChangeText={str => this.setState({ password: str })}>
                            </TextInput>
                        </View>
                        <Button style={coinDetailStyle.buttonLogin} onPress={this.onLoginButtonPress.bind(this)}>Register</Button>

                    </View>

                </Card>
            </View>
        );
    }

}

const coinDetailStyle = {
    containerMain: {
        flexDirection: 'column'
    },
    containerInput: {
        flexDirection: 'row',
        marginBottom: 6,
    },
    textForm: {
        fontSize: 18,
        flex: 1,
    },
    textInputEmail: {
        padding: 4,
        fontSize: 18,
        height: 30,
        width: 100,
        borderColor: '#DDDDDD',
        borderWidth: 1,
        flex: 2,
    },
    textInputPassword: {
        padding: 4,
        fontSize: 18,
        height: 30,
        width: 100,
        borderColor: '#DDDDDD',
        borderWidth: 1,
        flex: 2
    },
    buttonLogin: {
        marginTop: 20,
        fontSize: 20,
        alignContent: 'center',
    }

};
// export to render
export default registerForm;

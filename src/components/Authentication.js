import React, { Component } from 'react'
import { Text, View } from 'react-native';
import {getOauthLoginUrl} from '../services/google/apis'
import { Button } from 'react-native-elements';

const googleLoginUrl = getOauthLoginUrl();
class Authentication extends Component {
  googleClick = () => {
    console.log('google login click');
  }
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <View>
          <Button onPress={this.googleClick} title="Login With Google" />
        </View>
      </View>
    )
  }
}

Authentication.propTypes = {
}

export default Authentication;

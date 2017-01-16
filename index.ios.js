import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import Main from './src'

export default class FaceblockApp extends Component {
  render() {
    return (
      <Main />
    );
  }
}

AppRegistry.registerComponent('FaceblockApp', () => Main);

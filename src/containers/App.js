import React, { Component } from 'react';
import { Text, View } from 'react-native';

class App extends Component {
  render() {
    return (
      <View>
        <Text>Hello world!</Text>
        <Text>{process.env.NODE_ENV}</Text>
      </View>
    );
  }
}

export default App;
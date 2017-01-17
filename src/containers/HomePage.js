import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux'

class HomePage extends Component {
  componentDidMount() {
  }
  render() {
    return (
      <View>
        <Text>I am HomePage.</Text>
      </View>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
  }
}

export default connect(mapStateToProps, {
})(HomePage);

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux'

class MyPage extends Component {
  componentDidMount() {
  }
  render() {
    return (
      <Text> I am MyPage. </Text>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
  }
}

export default connect(mapStateToProps, {
})(MyPage);

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux'
import SideBarIos from '../components/SideBarIos'

class App extends Component {
  componentDidMount() {
  }
  render() {
    return (
      <SideBarIos />
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
  }
}

export default connect(mapStateToProps, {
})(App);

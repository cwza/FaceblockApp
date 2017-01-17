import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux'
import postsActions from '../actions/postsActions'
import {AsyncStorage} from 'react-native';

class App extends Component {
  componentDidMount() {
    this.props.fetchPostsStart('queryStr test', 'requestId test');
    AsyncStorage.getItem('redux').then((res) => console.log(res));
  }
  render() {
    return (
      <View>
        <Text>Hello world!</Text>
        <Text>{process.env.NODE_ENV}</Text>
      </View>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
  }
}

export default connect(mapStateToProps, {
  fetchPostsStart: postsActions.fetchPostsStart,
})(App);

import React, { Component } from 'react';
import { Text, View, NavigatorIOS, Platform } from 'react-native';
import Drawer from 'react-native-drawer';
import Menu from '../components/Menu';
import HomePage from '../containers/HomePage'
import MyPage from '../containers/MyPage'
import {extend} from 'lodash'

const navHelper = (scene) => {
    var componentMap = {
        'HomePage': {
            title: 'HomePage',
            name: 'HomePage',
            component: HomePage
        },
        'MyPage': {
            title: 'MyPage',
            name: 'MyPage',
            component: MyPage
        }
    }
    var component = componentMap[scene];
    var params = Platform.OS === 'ios' ? { passProps: scene.params } : scene.params;
    return extend(component, params);
}
class SideBarIos extends Component {
  componentDidMount() {
  }
  navigate = (route) => {
    this._navigator.push(navHelper(route));
    this._drawer.close();
  }
  render() {
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        type="overlay"
        content={<Menu navigate={(route) => { this.navigate(route)} }/>}
        tapToClose={true}
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        closedDrawerOffset={-3}
        styles={{
          drawer: {shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
          main: {paddingLeft: 3}
        }}
        tweenHandler={(ratio) => ({
          main: { opacity:(2-ratio)/2 }
        })}>
        <NavigatorIOS
          ref={(ref) => this._navigator = ref}
          style={{flex: 1}}
          initialRoute={{
            title: 'HomePage',
            component: HomePage,
            leftButtonTitle: 'Menu',
            onLeftButtonPress: () => { this._drawer.open() }
        }}/>
      </Drawer>
    );
  }
}

export default SideBarIos;

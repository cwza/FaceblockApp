import React, { Component } from 'react';
import { ListView, Text, View } from 'react-native';
import { Button } from 'react-native-elements'


class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })
    };
  }
  componentDidMount() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(['HomePage', 'MyPage', 'Login'])
    });
  }
  onItemSelect = (item) => {
    this.props.navigate(item)
    // Add the code to push a scene in navigation stack, we’ll do it in a few
  }
  renderMenuItem = (item) => {
    return(
      <Button
        onPress={()=> this.onItemSelect(item)}
        title={item}
        icon={{name: 'envira', type: 'font-awesome'}}/>
    );
  }
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(item) => this.renderMenuItem(item)}
        />
      </View>
    );
  }
}

Menu.propTypes = {
  navigate: React.PropTypes.func,
}

export default Menu;

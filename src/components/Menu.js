import React, { Component } from 'react';
import { ListView } from 'react-native';
import Button from 'react-native-button';


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
      dataSource: this.state.dataSource.cloneWithRows(['HomePage', 'MyPage'])
    });
  }
  onItemSelect = (item) => {
    this.props.navigate(item)
    // Add the code to push a scene in navigation stack, we’ll do it in a few
  }
  renderMenuItem = (item) => {
    return(
      <Button onPress={()=> this.onItemSelect(item)}>{item}</Button>
    );
  }
  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(item) => this.renderMenuItem(item)}
      />
    );
  }
}

Menu.propTypes = {
  navigate: React.PropTypes.func,
}

export default Menu;

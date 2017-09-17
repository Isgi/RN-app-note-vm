import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

class FloatActionButton extends Component {
  render () {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={styles.container}>
          {this.props.children}
        </View>
      </TouchableOpacity>
    )
  }
}

export default FloatActionButton;

const styles = StyleSheet.create({
  container: {
    position:'absolute',
    bottom:20,
    right:20,
    width:60,
    height:60,
    borderRadius:30,
    backgroundColor: '#333',
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
    alignItems: 'center',
    justifyContent: 'center',
  },
});

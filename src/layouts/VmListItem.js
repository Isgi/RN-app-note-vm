import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity
} from 'react-native';

class VmListItem extends Component {
  render() {
    const { vm_name, ip_address, port, responsible, onPress, onLongPress } = this.props
    return (
      <TouchableOpacity onPress={onPress} onLongPress={onLongPress}>
        <View style={{marginLeft:10, borderBottomWidth:1, borderBottomColor:"#eee"}}>
          <Text style={{fontWeight:'bold', fontSize:16, marginLeft:15, marginBottom:5,marginTop:10}}>{`${vm_name} / ${responsible}`}</Text>
          <Text style={{color:'#333', fontSize:12, marginLeft:15, marginBottom:10}}>{`${ip_address}:${port}`}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default VmListItem;

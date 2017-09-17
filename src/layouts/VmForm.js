import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TextInput, ScrollView, Button } from 'react-native';

import { newVm } from '../actions/Vm';

class VmForm extends React.Component {
  constructor() {
    super();
    this.state = {
      vm_name: '',
      os: '',
      ip_address: '',
      port: '',
      user: '',
      password: '',
      app_name: '',
      responsible: '',
      vlan: ''
    };
  }
  handleSave = () => {
    this.props.newVm(this.state)
  }
  disabledSave = () => {
    const { vm_name, os, ip_address, port, user, password, app_name, responsible, vlan } = this.state;
    if (vm_name == '' || os == '' || ip_address == ''|| port == '' || user == '' || password == '' || app_name == ''|| responsible == ''|| vlan == '') {
      return true
    }
    return false
  }
  render() {
    const { vm_name, os, ip_address, port, user, password, app_name, responsible, vlan } = this.state
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.containerForm}>
            <Text style={{fontWeight:'bold'}}>Vm name</Text>
            <TextInput
              style={{height: 30, borderColor: 'gray', borderWidth: 1, padding: 5, borderRadius:3  }}
              onChangeText={(text) => this.setState({vm_name:text})}
              autoFocus={true}
              value={vm_name}
              underlineColorAndroid="#eee"
              returnKeyType='next'
            />
          </View>
          <View style={styles.containerForm}>
            <Text style={{fontWeight:'bold'}}>OS</Text>
            <TextInput
              style={{height: 30, borderColor: 'gray', borderWidth: 1, padding: 5, borderRadius:3  }}
              onChangeText={(text) => this.setState({os:text})}
              value={this.state.os}
              underlineColorAndroid="#eee"
              returnKeyType='next'
            />
          </View>
          <View style={styles.containerForm}>
            <Text style={{fontWeight:'bold'}}>Ip Address</Text>
            <TextInput
              style={{height: 30, borderColor: 'gray', borderWidth: 1, padding: 5, borderRadius:3  }}
              onChangeText={(text) => this.setState({ip_address:text})}
              value={this.state.ip_address}
              underlineColorAndroid="#eee"
              returnKeyType='next'
            />
          </View>
          <View style={styles.containerForm}>
            <Text style={{fontWeight:'bold'}}>Port</Text>
            <TextInput
              style={{height: 30, borderColor: 'gray', borderWidth: 1, padding: 5, borderRadius:3  }}
              onChangeText={(text) => this.setState({port:text})}
              value={this.state.port}
              underlineColorAndroid="#eee"
              returnKeyType='next'
            />
          </View>
          <View style={styles.containerForm}>
            <Text style={{fontWeight:'bold'}}>User</Text>
            <TextInput
              style={{height: 30, borderColor: 'gray', borderWidth: 1, padding: 5, borderRadius:3  }}
              onChangeText={(text) => this.setState({user:text})}
              value={this.state.user}
              underlineColorAndroid="#eee"
              returnKeyType='next'
            />
          </View>
          <View style={styles.containerForm}>
            <Text style={{fontWeight:'bold'}}>Password</Text>
            <TextInput
              style={{height: 30, borderColor: 'gray', borderWidth: 1, padding: 5, borderRadius:3  }}
              onChangeText={(text) => this.setState({password:text})}
              value={this.state.password}
              underlineColorAndroid="#eee"
              returnKeyType='next'
            />
          </View>
          <View style={styles.containerForm}>
            <Text style={{fontWeight:'bold'}}>App Name</Text>
            <TextInput
              style={{height: 30, borderColor: 'gray', borderWidth: 1, padding: 5, borderRadius:3  }}
              onChangeText={(text) => this.setState({app_name:text})}
              value={this.state.app_name}
              underlineColorAndroid="#eee"
              returnKeyType='next'
            />
          </View>
          <View style={styles.containerForm}>
            <Text style={{fontWeight:'bold'}}>Responsible</Text>
            <TextInput
              style={{height: 30, borderColor: 'gray', borderWidth: 1, padding: 5, borderRadius:3  }}
              onChangeText={(text) => this.setState({responsible:text})}
              value={this.state.responsible}
              underlineColorAndroid="#eee"
              returnKeyType='next'
            />
          </View>
          <View style={styles.containerForm}>
            <Text style={{fontWeight:'bold'}}>Vlan</Text>
            <TextInput
              style={{height: 30, borderColor: 'gray', borderWidth: 1, padding: 5, borderRadius:3  }}
              onChangeText={(text) => this.setState({vlan:text})}
              value={this.state.vlan}
              underlineColorAndroid="#eee"
              returnKeyType='done'
            />
          </View>
          <View style={styles.containerForm}>
            <Button title="Save" disabled={this.disabledSave()} onPress={this.handleSave}/>
          </View>
        </ScrollView>
      </View>
    );
  }
}

VmForm.navigationOptions = {
  title : "New VM"
}

const mapStateToProps = ({vm}) => {
  return {
    status: vm.status,
    loading: vm.loading
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  containerForm: {
    backgroundColor:'#eee',
    padding:10,
    marginBottom:10,
    marginLeft:10,
    marginRight:10,
    borderRadius:5
  }
});

export default connect(mapStateToProps,{newVm})(VmForm)

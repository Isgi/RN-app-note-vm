import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { fetchListVm } from '../actions/Vm';
import { FloatActionButton, ModalAction } from '../components';
import VmListItem from './VmListItem';

class VmList extends React.Component {
  state = {
    modalVisible:false,
    dataUpdate : null
  }
  componentDidMount() {
    this.props.fetchListVm();
  }
  render() {
    const { vms, loading, navigation } = this.props;
    return (
      <View style={styles.container}>
        {loading ? <ActivityIndicator style={{marginTop:20}} animating={loading}/> : (
          <FlatList
            data={vms}
            keyExtractor={(item, index) => item.id}
            renderItem={({item}) => (
              <VmListItem
                {...item}
                onPress={()=>navigation.dispatch({type:'VmDetail', params:item})}
                onLongPress={()=>{this.setState({modalVisible:true, dataUpdate:item})}}/>
            )}/>
        )}
        <FloatActionButton onPress={()=>navigation.dispatch({type:'VmForm'})}>
          <Text style={{color:"#fff"}}>New</Text>
        </FloatActionButton>
        <ModalAction {...this.state}
          handleVisible={visible => this.setState({modalVisible:visible})}
          handleUpdate={dataUpdate => navigation.dispatch({type:'VmForm', param: dataUpdate})}/>
      </View>
    );
  }
}

VmList.navigationOptions = ({navigation}) => {
  return {
    title: 'VM LIST',
  }
};

const mapStateToProps = ({vm}) => {
  return {
    vms: vm.vms,
    loading: vm.loading
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({ fetchListVm }, dispatch)
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

export default connect(mapStateToProps, { fetchListVm })(VmList)

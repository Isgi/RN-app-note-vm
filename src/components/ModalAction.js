import React, { Component } from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from 'react-native';

const WINDOW_HEIGHT = Dimensions.get('window').height;
const WINDOW_WIDTH = Dimensions.get('window').width;

class ModalAction extends Component {
  render() {
    const { modalVisible, dataUpdate } = this.props;
    return (
      <Modal
        animationType={"fade"}
        transparent={true}
        visible={this.props.modalVisible}
        onRequestClose={() => {alert("Modal has been closed.")}}>
         <View style={styles.container}>
          <View style={styles.contentModal}>
            <TouchableOpacity style={styles.itemModal} onPress={()=>this.props.handleUpdate(dataUpdate)}>
              <Text style={{fontSize:18}}>Update</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemModal} onPress={()=>this.props.handleVisible(false)}>
              <Text style={{fontSize:18, color:'red'}}>Detele</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemModal} onPress={()=>this.props.handleVisible(false)}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
         </View>
      </Modal>
    )
  }
}

export default ModalAction;

const styles = StyleSheet.create({
  container : {
    height : WINDOW_HEIGHT,
    width : WINDOW_WIDTH,
    backgroundColor:"rgba(0, 0, 0, 0.7)",
    justifyContent: "center",
    alignItems: "center",
    position : "absolute"
  },
  contentModal : {
    width:230,
    height:149,
    backgroundColor:"#fff",
    borderRadius:10,
    padding:10,
    alignItems: "center",
    justifyContent:"center"
  },
  itemModal : {
    // borderTopWidth : 1,
    borderBottomWidth : 1,
    borderColor : '#333',
    height : 50,
    width : '100%',
    justifyContent : 'center',
    alignItems : 'center'
  }
});

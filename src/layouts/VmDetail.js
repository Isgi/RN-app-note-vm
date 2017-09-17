import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class VmDetail extends React.Component {
  render() {
    const { params } = this.props.navigation.state
    return (
      <View style={styles.container}>
        {Object.keys(params).map((key, index) => (
          <View key={index} style={{marginLeft:20, marginTop:5, marginBottom:5, borderBottomWidth:1, borderBottomColor:"#eee"}}>
            <Text style={{fontWeight:'bold', fontSize:16}}>{key.replace('_', ' ').toUpperCase()}</Text>
            <Text>{params[key]}</Text>
          </View>
        ))}
      </View>
    );
  }
}

VmDetail.navigationOptions = ({navigation}) => {
  return {
    title: 'VM DETAIL',
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default VmDetail

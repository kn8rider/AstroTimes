import {Text, View, Image, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';

export default class ErrorPage extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: 'white',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../assets/media/error.jpg')}
          style={{height: 200, width: 200}}
          resizeMode="cover"
        />
        <TouchableOpacity
          style={{
            width: 150,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: '#FABD0B',
            borderWidth: 1,
            borderRadius: 20,
            elevation: 10,
            marginTop: 50,
            backgroundColor: 'white',
          }}
          onPress={() => this.props.navigation.goBack()}>
          <Text style={{color: 'black', fontWeight: '500', fontSize: 18}}>
            Retry
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

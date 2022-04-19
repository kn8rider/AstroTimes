import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Appbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AIcon from 'react-native-vector-icons/Ionicons';
import color from '../GlobalVariables';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: color.primary}}>
        <Appbar style={{backgroundColor: color.primary}}>
          <Icon
            name={'arrow-left'}
            size={30}
            color={color.secondary}
            style={{marginLeft: 10}}
            onPress={() => this.props.navigation.goBack()}
          />
          <TextInput
            style={{
              width: '90%',
              color: color.secondary,
              fontSize: 17,
              marginLeft: 20,
              fontWeight: '400',
            }}
            onChangeText={text => this.setState({search: text})}
            value={this.state.search}
            placeholder="Search astrologers, astromail products"
            placeholderTextColor={'grey'}
            underlineColorAndroid={color.primary}
          />
        </Appbar>
        <View style={{flex: 1, backgroundColor: color.primary}}>
          <Text
            style={{
              fontSize: 16,
              color: color.secondary,
              marginLeft: 10,
              marginTop: 20,
            }}>
            Top Services
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginTop: 20,
            }}>
            <TouchableOpacity
              style={{
                justifyContent: 'space-evenly',
                alignItems: 'center',
                backgroundColor: '#B2ACF3',
                elevation: 10,
                borderRadius: 12,
                paddingVertical: 5,
                flexDirection: 'row',
                width: 80,
              }}>
              <AIcon name={'md-call-outline'} size={15} color={color.primary} />
              <Text style={{color: color.primary, fontSize: 15}}>Call</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                justifyContent: 'space-evenly',
                alignItems: 'center',
                backgroundColor: '#B090CF',
                elevation: 10,
                borderRadius: 12,
                paddingVertical: 5,
                flexDirection: 'row',
                width: 80,
              }}>
              <AIcon
                name={'chatbubble-ellipses-outline'}
                size={15}
                color={color.primary}
              />
              <Text style={{color: color.primary, fontSize: 15}}>Chat</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                justifyContent: 'space-evenly',
                alignItems: 'center',
                backgroundColor: '#F0DD6F',
                elevation: 10,
                borderRadius: 12,
                paddingVertical: 5,
                flexDirection: 'row',
                width: 80,
              }}>
              <AIcon name={'wifi-outline'} size={15} color={color.primary} />
              <Text style={{color: color.primary, fontSize: 15}}>Live</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                justifyContent: 'space-evenly',
                alignItems: 'center',
                backgroundColor: '#86C9E9',
                elevation: 10,
                borderRadius: 12,
                paddingVertical: 5,
                flexDirection: 'row',
                width: 100,
              }}>
              <Icon name={'wallet-travel'} size={15} color={color.primary} />
              <Text style={{color: color.primary, fontSize: 15}}>
                Astromall
              </Text>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontSize: 16,
              color: color.secondary,
              marginLeft: 10,
              marginTop: 20,
            }}>
            Quick Link
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginTop: 20,
            }}>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                backgroundColor: color.primary,
                elevation: 10,
                borderRadius: 12,
                paddingVertical: 5,
                width: 80,
                height: 100,
                borderWidth: 1,
                borderColor: color.secondary,
                borderRadius: 5,
              }}>
              <AIcon name={'wallet'} size={30} color={color.secondary} />
              <Text
                style={{color: color.secondary, fontSize: 15, marginTop: 10}}>
                Wallet
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                backgroundColor: color.primary,
                elevation: 10,
                borderRadius: 12,
                paddingVertical: 5,
                width: 80,
                height: 100,
                borderWidth: 1,
                borderColor: color.secondary,
                borderRadius: 5,
              }}>
              <Icon name={'headphones'} size={30} color={color.secondary} />
              <Text
                style={{
                  color: color.secondary,
                  fontSize: 15,
                  marginTop: 10,
                  textAlign: 'center',
                }}>
                Customer Support
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                backgroundColor: color.primary,
                elevation: 10,
                borderRadius: 12,
                paddingVertical: 5,
                width: 80,
                height: 100,
                borderWidth: 1,
                borderColor: color.secondary,
                borderRadius: 5,
              }}>
              <Icon name={'wallet-travel'} size={30} color={color.secondary} />
              <Text
                style={{color: color.secondary, fontSize: 15, marginTop: 10}}>
                Order History
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                backgroundColor: color.primary,
                elevation: 10,
                borderRadius: 12,
                paddingVertical: 5,
                width: 80,
                height: 100,
                borderWidth: 1,
                borderColor: color.secondary,
                borderRadius: 5,
              }}>
              <Icon name={'account'} size={30} color={color.secondary} />
              <Text
                style={{color: color.secondary, fontSize: 15, marginTop: 10}}>
                Profile
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

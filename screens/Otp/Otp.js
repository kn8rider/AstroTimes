import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  TextInput,
  Image,
  ActivityIndicator,
} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Card, Avatar, List, Appbar, RadioButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AIcon from 'react-native-vector-icons/AntDesign';
import OTPInputView from '@twotalltotems/react-native-otp-input';
export default class Otp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otp: '',
    };
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View
            style={{
              backgroundColor: 'white',
              flex: 3,
            }}>
            <Image
              source={require('../../assets/media/astrotime_transperant.png')}
              style={{
                height: '70%',
                width: '70%',
                alignSelf: 'center',
                borderRadius: 20,
                marginTop: '10%',
              }}
              resizeMode={'contain'}
            />
          </View>
          <View
            style={{
              backgroundColor: '#FEC81E',
              flex: 1,
            }}>
            <View
              style={{
                paddingVertical: 5,
                paddingHorizontal: 20,
                borderWidth: 1,
                borderColor: '#4A3C8C',
                justifyContent: 'center',
                borderRadius: 20,
                position: 'absolute',
                alignSelf: 'center',
                backgroundColor: 'white',
                top: -15,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: '#4A3C8C',
                  alignSelf: 'center',
                }}>
                First chat with Astrologer is FREE!
              </Text>
            </View>
            <OTPInputView
              style={{
                width: '80%',
                height: 100,
                alignSelf: 'center',
                marginTop: 20,
                color: '#4A3C8C',
              }}
              pinCount={6}
              autoFocusOnLoad
              codeInputFieldStyle={{
                width: 30,
                height: 45,
                borderWidth: 0,
                borderBottomWidth: 1,
              }}
              keyboardType="number-pad"
              codeInputHighlightStyle={{
                borderColor: '#4A3C8C',
              }}
              onCodeFilled={code => {
                this.setState({otp: code});
                console.log(`Code is ${code}, you are good to go!`);
              }}
              // onCodeChanged={e => this.setState({otp: e})}
              secureTextEntry={true}
            />
            <TouchableOpacity
              style={{
                paddingVertical: 10,
                paddingHorizontal: 20,
                justifyContent: 'center',
                borderRadius: 20,
                alignSelf: 'center',
                backgroundColor: '#4A3C8C',
                width: '90%',
                marginTop: 20,
                flexDirection: 'row',
                marginBottom: 40,
              }}
              onPress={() => this.props.navigation.navigate('home')}>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: '500',
                  color: 'white',
                  alignSelf: 'center',
                }}>
                SEND OTP
              </Text>
              <Icon
                name={'arrow-right'}
                size={30}
                color={'white'}
                style={{position: 'absolute', right: 30, top: 5}}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 13,
                fontWeight: '300',
                color: 'black',
                marginTop: 10,
                alignSelf: 'center',
              }}>
              By signing up,you agree to our{' '}
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: '300',
                  color: 'blue',
                  alignSelf: 'center',
                  marginTop: 10,
                  textDecorationLine: 'underline',
                }}>
                Terms of use{' '}
              </Text>
              and{' '}
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: '300',
                  color: 'blue',
                  alignSelf: 'center',
                  marginTop: 10,
                  textDecorationLine: 'underline',
                }}>
                Privicy policy
              </Text>
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

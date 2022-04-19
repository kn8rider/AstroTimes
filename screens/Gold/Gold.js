import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {
  Card,
  Avatar,
  List,
  Appbar,
  TextInput,
  RadioButton,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import color from '../GlobalVariables';
export default class Gold extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: color.primary}}>
        <Appbar style={{backgroundColor: color.themeColor}}>
          <Icon
            name={'arrow-left'}
            size={30}
            color={color.secondary}
            style={{marginLeft: 10}}
            onPress={() => this.props.navigation.goBack()}
          />
          <Text
            style={{
              color: color.secondary,
              fontWeight: '400',
              fontSize: 18,
              marginLeft: 20,
            }}>
            AstroTime Gold
          </Text>
        </Appbar>
        <ScrollView
          contentContainerStyle={{
            backgroundColor: color.primary,
          }}>
          <View
            style={{
              backgroundColor: '#313131',
              width: '95%',
              alignSelf: 'center',
              padding: 20,
              elevation: 10,
              flexDirection: 'row',
              borderRadius: 10,
              marginVertical: 10,
            }}>
            <Image
              source={require('../../assets/media/king.png')}
              style={{
                height: 100,
                width: 100,
              }}
              resizeMode={'contain'}
            />
            <View style={{marginLeft: 10, justifyContent: 'center'}}>
              <Text
                style={{
                  color: color.secondary,
                  fontSize: 16,
                  fontWeight: '400',
                  maxWidth: '85%',
                  alignSelf: 'center',
                }}>
                Become a Gold Member {'&'} enjoy flat 5% off on every chat/call
                session with any Astrologer!
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: color.primary,
              width: '95%',
              alignSelf: 'center',
              padding: 10,
              elevation: 10,
              borderRadius: 10,
              marginVertical: 20,
              borderWidth: 1,
              justifyContent: 'center',
              borderColor: color.secondary,
            }}>
            <Text
              style={{
                color: color.secondary,
                fontWeight: '500',
                fontSize: 18,
                alignSelf: 'center',
              }}>
              Details of Gold Membership
            </Text>
            <Text
              style={{
                color: color.secondary,
                fontWeight: '400',
                fontSize: 15,
                alignSelf: 'center',
                marginTop: 10,
              }}>
              . AstroTime Gold membership comes at INR 999.0 for 1 month
            </Text>
            <Text
              style={{
                color: color.secondary,
                fontWeight: '400',
                fontSize: 15,
                alignSelf: 'center',
                marginTop: 10,
              }}>
              . AstroTime Gold membership comes at INR 999.0 for 1 month
            </Text>
            <Text
              style={{
                color: color.secondary,
                fontWeight: '400',
                fontSize: 15,
                alignSelf: 'center',
                marginTop: 10,
              }}>
              . AstroTime Gold membership comes at INR 999.0 for 1 month
            </Text>
            <Text
              style={{
                color: color.secondary,
                fontWeight: '400',
                fontSize: 15,
                alignSelf: 'center',
                marginTop: 10,
              }}>
              . AstroTime Gold membership comes at INR 999.0 for 1 month
            </Text>
            <Text
              style={{
                color: color.secondary,
                fontWeight: '400',
                fontSize: 15,
                alignSelf: 'center',
                marginTop: 10,
              }}>
              . AstroTime Gold membership comes at INR 999.0 for 1 month
            </Text>
            <Text
              style={{
                color: color.secondary,
                fontWeight: '400',
                fontSize: 15,
                alignSelf: 'center',
                marginTop: 10,
              }}>
              . AstroTime Gold membership comes at INR 999.0 for 1 month
            </Text>
            <Text
              style={{
                color: color.secondary,
                fontWeight: '400',
                fontSize: 15,
                alignSelf: 'center',
                marginTop: 10,
              }}>
              . AstroTime Gold membership comes at INR 999.0 for 1 month
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#313131',
              width: '95%',
              alignSelf: 'center',
              padding: 20,
              elevation: 10,
              borderRadius: 10,
              marginVertical: 10,
            }}>
            <Text
              style={{
                color: color.secondary,
                fontWeight: '400',
                fontSize: 20,
              }}>
              Get AstroTime Gold at
              <Text
                style={{
                  color: color.secondary,
                  fontWeight: '400',
                  fontSize: 20,
                  textDecorationLine: 'line-through',
                }}>
                Rs 999
              </Text>
              Rs 5/-
            </Text>
            <Text
              style={{
                color: color.secondary,
                fontWeight: '300',
                fontSize: 17,
                marginTop: 10,
              }}>
              Flat 5% off on every session
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: color.themeColor,
                elevation: 10,
                // position: 'absolute',
                // right: 30,
                // bottom: 30,
                marginLeft: '70%',
                marginTop: 40,
                width: 100,
                borderRadius: 25,
                padding: 10,
              }}>
              <Text
                style={{
                  color: color.secondary,
                  fontWeight: '400',
                  fontSize: 18,
                  alignSelf: 'center',
                }}>
                Get Now
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import React, {Component} from 'react';
import {View, SafeAreaView, StyleSheet, Text, Image} from 'react-native';

import {Avatar, Title, Drawer} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FIcon from 'react-native-vector-icons/Feather';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import color from '../GlobalVariables';
class DrawerContent extends Component {
  constructor() {
    super();
    this.state = {
      signIn: false,
      uData: [],
    };
  }
  async setLogOut() {
    try {
      await AsyncStorage.removeItem('userData');
      this.props.navigation.navigate('Main');
    } catch (error) {
      console.log(error);
    }
  }
  componentDidMount() {}
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: color.primary}}>
        <DrawerContentScrollView>
          <View style={style.userinfo}>
            <View>
              {this.props.itemArr ? (
                <>
                  <Image
                    source={{
                      uri:
                        this.props.itemArr.picture ??
                        JSON.parse(this.props.itemArr).picture,
                    }}
                    style={{height: 50, width: 50, borderRadius: 25}}
                  />
                </>
              ) : (
                <>
                  <Icon
                    name="account-circle"
                    size={50}
                    color={color.themeColor}
                  />
                </>
              )}
            </View>
            <View style={{marginTop: 1, marginStart: 10}}>
              <Text
                style={{
                  fontSize: 16,
                  color: color.secondary,
                  fontWeight: '400',
                }}>
                {this.props.itemArr
                  ? this.props.itemArr.name ??
                    JSON.parse(this.props.itemArr).name
                  : 'Username'}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: color.secondary,
                  fontWeight: '300',
                  marginTop: 10,
                }}>
                +91 6264218404
              </Text>
            </View>
            <FIcon
              name="edit-2"
              size={20}
              color="white"
              style={{marginTop: -30, marginLeft: 10}}
            />
            <FIcon
              name="x"
              size={30}
              color="white"
              style={{marginLeft: 25}}
              onPress={() => this.props.navigation.closeDrawer()}
            />
          </View>

          <View>
            <Drawer.Section title="My Options">
              <DrawerItem
                icon={() => (
                  <Icon name="logout" color={color.secondary} size={25} />
                )}
                label="Logout"
                labelStyle={{fontWeight: '400', color: color.secondary}}
                onPress={() => this.setLogOut()}
              />
              <DrawerItem
                icon={() => (
                  <Image
                    source={require('../../assets/media/free.png')}
                    style={{
                      height: 25,
                      width: 25,
                      alignSelf: 'center',
                    }}
                    resizeMode={'cover'}
                  />
                )}
                label="Free Session"
                labelStyle={{fontWeight: '400', color: color.secondary}}
              />
              <DrawerItem
                icon={() => (
                  <Icon
                    name="wallet-outline"
                    color={color.secondary}
                    size={25}
                  />
                )}
                label="Wallet Transactions"
                labelStyle={{fontWeight: '400', color: color.secondary}}
              />
              <DrawerItem
                icon={() => (
                  <Icon
                    name="clock-time-four-outline"
                    color={color.secondary}
                    size={25}
                  />
                )}
                label="Order History"
                labelStyle={{fontWeight: '400', color: color.secondary}}
              />

              <DrawerItem
                icon={() => (
                  <Icon name="headphones" color={color.secondary} size={25} />
                )}
                label="Customer Support Chat"
                labelStyle={{fontWeight: '400', color: color.secondary}}
                onPress={() => {
                  this.props.navigation.navigate('chat');
                }}
              />
              <DrawerItem
                icon={() => (
                  <Icon
                    name="chat-processing"
                    color={color.secondary}
                    size={25}
                  />
                )}
                label="Chat with Astrologers"
                labelStyle={{fontWeight: '400', color: color.secondary}}
                onPress={() => {
                  this.props.navigation.navigate('chat');
                }}
              />
              <DrawerItem
                icon={() => (
                  <Icon
                    name="file-document-outline"
                    color={color.secondary}
                    size={25}
                  />
                )}
                label="Get Report"
                labelStyle={{fontWeight: '400', color: color.secondary}}
                onPress={() => {
                  this.props.navigation.navigate('report');
                }}
              />
              <DrawerItem
                icon={() => (
                  <Icon
                    name="wallet-travel"
                    color={color.secondary}
                    size={25}
                  />
                )}
                label="Astromall"
                labelStyle={{fontWeight: '400', color: color.secondary}}
                onPress={() => {
                  this.props.navigation.navigate('astroMall');
                }}
              />
              <DrawerItem
                icon={() => (
                  <Icon
                    name="crown-outline"
                    color={color.secondary}
                    size={25}
                  />
                )}
                label="Gold Membership"
                labelStyle={{fontWeight: '400', color: color.secondary}}
                onPress={() => {
                  this.props.navigation.navigate('gold');
                }}
              />
              <DrawerItem
                icon={() => (
                  <Image
                    source={require('../../assets/media/kundali.png')}
                    style={{
                      height: 25,
                      width: 25,
                      alignSelf: 'center',
                    }}
                    resizeMode={'cover'}
                  />
                )}
                label="Free Kundali"
                labelStyle={{fontWeight: '400', color: color.secondary}}
                onPress={() => {
                  this.props.navigation.navigate('kundali');
                }}
              />
              <DrawerItem
                icon={() => (
                  <Image
                    source={require('../../assets/media/planet.png')}
                    style={{
                      height: 25,
                      width: 25,
                      alignSelf: 'center',
                    }}
                    resizeMode={'cover'}
                  />
                )}
                label="Panchang"
                labelStyle={{fontWeight: '400', color: color.secondary}}
                onPress={() => {
                  this.props.navigation.navigate('panchang');
                }}
              />
              <DrawerItem
                icon={() => (
                  <Image
                    source={require('../../assets/media/numerology.png')}
                    style={{
                      height: 25,
                      width: 25,
                      alignSelf: 'center',
                    }}
                    resizeMode={'cover'}
                  />
                )}
                label="Nemerology"
                labelStyle={{fontWeight: '400', color: color.secondary}}
                onPress={() => {
                  this.props.navigation.navigate('numerology');
                }}
              />
              <DrawerItem
                icon={() => (
                  <Icon
                    name="heart-multiple-outline"
                    color={color.secondary}
                    size={25}
                  />
                )}
                label="Match Making"
                labelStyle={{fontWeight: '400', color: color.secondary}}
                onPress={() => {
                  this.props.navigation.navigate('match');
                }}
              />
              <DrawerItem
                icon={() => (
                  <Image
                    source={require('../../assets/media/sunrise.png')}
                    style={{
                      height: 25,
                      width: 25,
                      alignSelf: 'center',
                    }}
                    resizeMode={'cover'}
                  />
                )}
                label="Daily Horoscope"
                labelStyle={{fontWeight: '400', color: color.secondary}}
                onPress={() => {
                  this.props.navigation.navigate('Horoscope', {
                    sign: 'ARIES',
                    ind: 0,
                  });
                }}
              />
              <DrawerItem
                icon={() => (
                  <FIcon name="settings" color={color.secondary} size={25} />
                )}
                label="Settings"
                labelStyle={{fontWeight: '400', color: color.secondary}}
              />
              <DrawerItem
                icon={() => (
                  <Icon name="bell-outline" color={color.secondary} size={25} />
                )}
                label="Notifications"
                labelStyle={{fontWeight: '400', color: color.secondary}}
              />
              <DrawerItem
                icon={() => (
                  <Icon
                    name="account-check-outline"
                    color={color.secondary}
                    size={25}
                  />
                )}
                label="Following"
                labelStyle={{fontWeight: '400', color: color.secondary}}
              />
              <DrawerItem
                icon={() => (
                  <Icon name="star-outline" color={color.secondary} size={25} />
                )}
                label="Rate us on Playstore"
                labelStyle={{fontWeight: '400', color: color.secondary}}
              />
              <DrawerItem
                icon={() => (
                  <FIcon name="share-2" color={color.secondary} size={20} />
                )}
                label="Share"
                labelStyle={{fontWeight: '400', color: color.secondary}}
              />
            </Drawer.Section>
          </View>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1620048269620-77fa550bb505?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGFzdHJvbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
            }}
            style={{
              width: '100%',
              height: 100,
            }}
            resizeMode={'cover'}
          />
        </DrawerContentScrollView>
      </SafeAreaView>
    );
  }
}

const style = StyleSheet.create({
  userinfo: {
    marginStart: 5,
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
});
const mapStatetoProps = state => {
  return {
    itemArr: state.DetailReducer.itemArr,
  };
};
export default connect(mapStatetoProps, null)(DrawerContent);

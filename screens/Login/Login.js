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
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import {connect} from 'react-redux';
import {updateDataFunction} from '../../redux/index';
import color from '../GlobalVariables';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      load: false,
      isAuth: true,
      loadFirst: false,
    };
  }
  componentDidMount() {
    GoogleSignin.configure({
      webClientId:
        '286564137776-46eibnm2e35c04vf0e2avoddo33cidbq.apps.googleusercontent.com',
    });
    this.getData();
  }
  async GogSign() {
    try {
      // Get the users ID token
      const {idToken} = await GoogleSignin.signIn();
      // console.log('id :', idToken);

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      // console.log('googleCre', googleCredential);
      // Sign-in the user with the credential
      const sign = await auth().signInWithCredential(googleCredential);
      // console.log(sign);
      if (sign) {
        //save data to the redux state
        this.props.updateDataFunction(sign.additionalUserInfo.profile);
        //save data in asyncStorage
        const uData = JSON.stringify(sign.additionalUserInfo.profile);
        await AsyncStorage.setItem('userData', uData);
        // console.log(sign.additionalUserInfo.profile);
        this.props.navigation.navigate('home', {
          user: sign.additionalUserInfo.profile,
        });
        this.setState({load: false});
        // this.props.navigation.navigate('otp');
      } else {
        this.setState({load: false});
      }
    } catch (error) {
      console.log('error : ', error);
      this.props.navigation.navigate('error');
      this.setState({load: false});
    }
  }
  async getData() {
    try {
      const data = await AsyncStorage.getItem('userData');
      if (data != null) {
        // console.log('asData : ', data);
        this.props.updateDataFunction(data);
        this.setState({isAuth: false});
        this.props.navigation.navigate('home', {
          user: data,
        });
      } else {
        this.setState({isAuth: false});
      }
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    // console.log('auth :', this.props.route.params.auth);
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: color.secondary}}>
        {this.state.isAuth ? (
          <View
            style={{
              flex: 1,
              backgroundColor: color.secondary,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../assets/media/astrotime_transperant.png')}
              style={{
                height: 200,
                width: 200,
                // alignSelf: 'center',
              }}
              resizeMode={'cover'}
            />
          </View>
        ) : (
          <>
            <ScrollView
              contentContainerStyle={{
                flexGrow: 1,
                justifyContent: 'center',
                opacity: this.state.load ? 0.3 : 1,
              }}>
              <View
                style={{
                  backgroundColor: color.secondary,
                  flex: 6,
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
                    borderColor: '#5C025C',
                    justifyContent: 'center',
                    borderRadius: 20,
                    position: 'absolute',
                    alignSelf: 'center',
                    backgroundColor: color.secondary,
                    top: -15,
                  }}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '400',
                      color: '#5C025C',
                      alignSelf: 'center',
                    }}>
                    First chat with Astrologer is FREE!
                  </Text>
                </View>
                <TextInput
                  style={{
                    height: 45,
                    width: '90%',
                    marginTop: 70,
                    alignSelf: 'center',
                    backgroundColor: color.secondary,
                    alignItems: 'center',
                    textAlign: 'center',
                    borderRadius: 20,
                    color: '#5C025C',
                    fontSize: 20,
                    fontWeight: '500',
                    // paddingHorizontal: '20%',
                  }}
                  onChangeText={text => this.setState({phone: text})}
                  value={this.state.phone}
                  placeholder="Phone Number"
                  keyboardType="numeric"
                  placeholderTextColor={'#5C025C'}
                />
                <TouchableOpacity
                  style={{
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    justifyContent: 'center',
                    borderRadius: 20,
                    alignSelf: 'center',
                    backgroundColor: '#5C025C',
                    width: '90%',
                    marginTop: 20,
                    flexDirection: 'row',
                  }}
                  onPress={() => this.props.navigation.navigate('otp')}>
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: '500',
                      color: color.secondary,
                      alignSelf: 'center',
                    }}>
                    SEND OTP
                  </Text>
                  <Icon
                    name={'arrow-right'}
                    size={30}
                    color={color.secondary}
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
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginTop: 10,
                  }}>
                  <View
                    style={{
                      height: 1,
                      width: '35%',
                      backgroundColor: color.secondary,
                      alignSelf: 'center',
                      marginTop: 8,
                      marginHorizontal: 5,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: '500',
                      color: '#5C025C',
                      alignSelf: 'center',
                      marginTop: 5,
                      marginHorizontal: 10,
                    }}>
                    Or
                  </Text>
                  <View
                    style={{
                      height: 1,
                      width: '35%',
                      backgroundColor: color.secondary,
                      alignSelf: 'center',
                      marginTop: 8,
                      marginHorizontal: 5,
                    }}
                  />
                </View>
                <TouchableOpacity
                  style={{
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    justifyContent: 'center',
                    borderRadius: 20,
                    alignSelf: 'center',
                    backgroundColor: color.secondary,
                    width: '90%',
                    marginTop: 20,
                    flexDirection: 'row',
                  }}
                  onPress={() => {
                    this.GogSign();
                    this.setState({load: true});
                  }}>
                  <AIcon
                    name={'google'}
                    size={25}
                    color={'#5C025C'}
                    style={{marginRight: 20}}
                  />
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: '500',
                      color: '#5C025C',
                      alignSelf: 'center',
                    }}>
                    Login with Google
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
            <View>
              {this.state.load ? (
                <ActivityIndicator
                  size={50}
                  style={{
                    position: 'absolute',
                    bottom: '50%',
                    alignSelf: 'center',
                  }}
                />
              ) : (
                <></>
              )}
            </View>
          </>
        )}
      </SafeAreaView>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    updateDataFunction: params => {
      dispatch(updateDataFunction(params));
    },
  };
};
const mapStatetoProps = state => {
  return {
    itemArr: state.DetailReducer.itemArr,
  };
};
export default connect(mapStatetoProps, mapDispatchToProps)(Login);

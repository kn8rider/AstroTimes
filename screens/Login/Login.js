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
import auth from '@react-native-firebase/auth';
import {connect} from 'react-redux';
import {updateDataFunction} from '../../redux/index';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      load: false,
    };
  }
  componentDidMount() {
    GoogleSignin.configure({
      webClientId:
        '286564137776-46eibnm2e35c04vf0e2avoddo33cidbq.apps.googleusercontent.com',
    });
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
        this.props.updateDataFunction(sign.additionalUserInfo.profile);
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
  render() {
    console.log(this.props.itemArr);
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'center',
            opacity: this.state.load ? 0.3 : 1,
          }}>
          <View
            style={{
              backgroundColor: 'white',
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
            <TextInput
              style={{
                height: 45,
                width: '90%',
                marginTop: 70,
                alignSelf: 'center',
                backgroundColor: 'white',
                alignContent: 'center',
                borderRadius: 20,
                color: '#4A3C8C',
                fontSize: 20,
                fontWeight: '500',
                paddingHorizontal: '20%',
              }}
              onChangeText={text => this.setState({phone: text})}
              value={this.state.phone}
              placeholder="Phone Number"
              keyboardType="numeric"
              placeholderTextColor={'#4A3C8C'}
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
              }}
              onPress={() => this.props.navigation.navigate('otp')}>
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
                  backgroundColor: 'white',
                  alignSelf: 'center',
                  marginTop: 8,
                  marginHorizontal: 5,
                }}
              />
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '500',
                  color: '#4A3C8C',
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
                  backgroundColor: 'white',
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
                backgroundColor: 'white',
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
                color={'blue'}
                style={{marginRight: 20}}
              />
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: '500',
                  color: 'blue',
                  alignSelf: 'center',
                }}>
                Login with Google
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        {this.state.load ? (
          <ActivityIndicator
            size={50}
            style={{position: 'absolute', bottom: '50%', alignSelf: 'center'}}
          />
        ) : (
          <></>
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

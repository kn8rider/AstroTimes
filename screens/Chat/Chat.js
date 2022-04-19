import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  ActivityIndicator,
  Linking,
  Platform,
  TextInput,
  ToastAndroid,
} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Appbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import color from '../GlobalVariables';
const type = [
  {
    rate: 5,
    val: 'ARIES',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
  },
  {
    rate: 3,
    val: 'TAURUS',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
  },
  {
    rate: 15,
    val: 'GEMINI',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
  },
  {
    rate: 10,

    val: 'CANCER',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
  },
  {
    rate: 0,
    val: 'LEO',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
  },
  {
    rate: 4,
    val: 'VIRGO',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
  },
  {
    rate: 5,
    val: 'LIBRA',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
  },
  {
    rate: 0,
    val: 'SCORPIO',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
  },
  {
    rate: 0,
    val: 'SAGITTARIUS',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
  },
  {
    rate: 0,
    val: 'CAPRICORN',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
  },
  {
    rate: 0,
    val: 'PISCES',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
  },
  {
    rate: 0,
    val: 'AQUARIUS',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
  },
];
const api_key = '167120|ueXR24U2mEFU7Rzt00am6oPCZqC174OHrdPMs0aW';
export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeChat: 0,
      from_num: '',
      to_num: '',
      balance: '',
    };
  }
  componentDidMount() {
    this.setState({activeChat: this.props.route.params.type});
  }
  openDialer = num => {
    if (Platform.OS === 'android') {
      Linking.openURL('tel:' + num);
    } else {
      Linking.openURL('telprompt:9000899937');
    }
  };
  async getNumber(val) {
    if (this.state.from_num.length > 0 && this.state.to_num.length > 0) {
      if (this.state.balance < val) {
        alert('Unsufficient Balance !');
      } else {
        try {
          const max_dur = (this.state.balance / val) * 60;
          console.log(max_dur);
          const req = await fetch(
            'https://panelv2.cloudshope.com/api/click_to_call?from_number=' +
              this.state.from_num +
              '&to_number=' +
              this.state.to_num +
              '&max_duration=' +
              max_dur,
            {
              method: 'GET',
              headers: {
                Authorization: 'Bearer ' + api_key,
                'Content-Type': 'application/json',
              },
            },
          );
          const res = await req.json();
          if (req.status == 200) {
            console.log(res);
            ToastAndroid.showWithGravity(
              'call connected successfully !',
              ToastAndroid.SHORT,
              ToastAndroid.CENTER,
            );
            // this.openDialer(res.data);
          } else {
            console.log(res);
          }
        } catch (error) {
          console.log(error);
        }
      }
    } else {
      alert('Please fill the number fields !!');
    }
  }
  render() {
    // console.log(this.props.route.params.type);
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
            Chat with Astrologer
          </Text>
          <Icon
            name={'wallet-outline'}
            size={30}
            color={color.secondary}
            style={{marginLeft: 60}}
          />
          <Icon
            name={'magnify'}
            size={30}
            color={color.secondary}
            style={{marginLeft: 10}}
          />
          <Icon
            name={'sort-variant'}
            size={30}
            color={color.secondary}
            style={{marginLeft: 10}}
          />
        </Appbar>
        <View
          style={{
            backgroundColor: color.primary,
            flex: 1,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              height: 40,
              width: 300,
              alignSelf: 'center',
              borderWidth: 1,
              borderColor: color.secondary,
              borderRadius: 10,
              marginTop: 10,
              paddingHorizontal: 5,
            }}>
            <TouchableOpacity
              style={{
                width: 148,
                height: '98%',
                borderRadius: 10,
                backgroundColor:
                  this.state.activeChat == 0 ? color.themeColor : color.primary,
                justifyContent: 'center',
                borderWidth: this.state.activeChat == 0 ? 1 : 0,
                borderColor: color.secondary,
                alignItems: 'center',
              }}
              onPress={() => this.setState({activeChat: 0})}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: color.secondary,
                }}>
                Chat
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 148,
                height: '98%',
                borderRadius: 10,
                backgroundColor:
                  this.state.activeChat == 1 ? color.themeColor : color.primary,
                justifyContent: 'center',
                borderWidth: this.state.activeChat == 1 ? 1 : 0,
                borderColor: color.secondary,
                alignItems: 'center',
              }}
              onPress={() => this.setState({activeChat: 1})}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: color.secondary,
                }}>
                Call
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderRadius: 10,
                marginTop: 10,
                borderColor: 'grey',
                borderWidth: 1,
                paddingLeft: 10,
                marginHorizontal: '10%',
              }}>
              <TextInput
                style={{
                  height: 45,
                  width: '100%',
                  alignSelf: 'center',
                  alignContent: 'center',
                  color: color.secondary,
                  fontSize: 16,
                  fontWeight: '400',
                  marginLeft: 20,
                }}
                onChangeText={text => this.setState({from_num: text})}
                value={this.state.from_num}
                placeholder="From Number"
                placeholderTextColor={color.secondary}
                keyboardType={'numeric'}
                underlineColorAndroid={'transparent'}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderRadius: 10,
                marginTop: 10,
                borderColor: 'grey',
                borderWidth: 1,
                paddingLeft: 10,
                marginHorizontal: '10%',
              }}>
              <TextInput
                style={{
                  height: 45,
                  width: '100%',
                  alignSelf: 'center',
                  alignContent: 'center',
                  color: color.secondary,
                  fontSize: 16,
                  fontWeight: '400',
                  marginLeft: 20,
                }}
                onChangeText={text => this.setState({to_num: text})}
                value={this.state.to_num}
                placeholder="To Number"
                placeholderTextColor={color.secondary}
                keyboardType={'numeric'}
                underlineColorAndroid={'transparent'}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderRadius: 10,
                marginTop: 10,
                borderColor: 'grey',
                borderWidth: 1,
                paddingLeft: 10,
                marginHorizontal: '10%',
                marginBottom: 10,
              }}>
              <TextInput
                style={{
                  height: 45,
                  width: '100%',
                  alignSelf: 'center',
                  alignContent: 'center',
                  color: color.secondary,
                  fontSize: 16,
                  fontWeight: '400',
                  marginLeft: 20,
                }}
                onChangeText={text => this.setState({balance: text})}
                value={this.state.balance}
                placeholder="Balance"
                placeholderTextColor={color.secondary}
                keyboardType={'numeric'}
                underlineColorAndroid={'transparent'}
              />
            </View>
          </View>
          <FlatList
            data={type}
            renderItem={({item, index, separators}) => (
              <View
                style={{
                  backgroundColor: '#313131',
                  width: '95%',
                  alignSelf: 'center',
                  padding: 10,
                  elevation: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  borderRadius: 10,
                  marginVertical: 5,
                }}>
                <View style={{justifyContent: 'center', marginLeft: 5}}>
                  <Image
                    source={{
                      uri: 'https://images.unsplash.com/photo-1620048269620-77fa550bb505?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGFzdHJvbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
                    }}
                    style={{
                      height: 70,
                      width: 70,
                      borderRadius: 35,
                      marginLeft: 5,
                    }}
                    resizeMode={'cover'}
                  />
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-evenly',
                      alignItems: 'center',
                      maxWidth: '70%',
                      marginTop: 10,
                    }}>
                    <Icon name="star" size={15} color={color.secondary} />
                    <Icon name="star" size={15} color={color.secondary} />
                    <Icon name="star" size={15} color={color.secondary} />
                    <Icon name="star" size={15} color={color.secondary} />
                    <Icon name="star" size={15} color={color.secondary} />
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 5,
                      marginBottom: 10,
                    }}>
                    <Icon name="account" size={15} color={color.secondary} />
                    <Text style={{color: color.secondary, marginRight: 20}}>
                      100072 total
                    </Text>
                  </View>
                </View>
                <View>
                  <Text
                    style={{
                      color: color.secondary,
                      fontSize: 20,
                      fontWeight: '500',
                    }}>
                    Beenu
                  </Text>
                  <Text
                    style={{
                      color: color.secondary,
                      fontSize: 14,
                      fontWeight: '400',
                      marginTop: 7,
                    }}>
                    Vedik, Prashana, Lal Kitab
                  </Text>
                  <Text
                    style={{
                      color: color.secondary,
                      fontSize: 14,
                      fontWeight: '400',
                      marginTop: 5,
                    }}>
                    English, Hindi, Punjabi
                  </Text>
                  <Text
                    style={{
                      color: color.secondary,
                      fontSize: 14,
                      fontWeight: '400',
                      marginTop: 5,
                    }}>
                    Exp: 3 Years
                  </Text>
                  <Text
                    style={{
                      color: color.secondary,
                      fontSize: 16,
                      fontWeight: '500',
                      marginTop: 5,
                    }}>
                    {item.rate == 0 ? 'Free' : item.rate + '/min'}
                  </Text>
                </View>
                <View style={{justifyContent: 'space-between', height: 130}}>
                  <Icon
                    name="check-decagram"
                    color={'green'}
                    size={25}
                    style={{marginLeft: 70}}
                  />
                  <TouchableOpacity
                    style={{
                      backgroundColor: color.primary,
                      borderRadius: 10,
                      borderColor: 'green',
                      borderWidth: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: 8,
                      paddingHorizontal: 35,
                      width: 110,
                    }}
                    onPress={() => this.getNumber(item.rate)}>
                    <Text
                      style={{
                        color: 'green',
                        fontSize: 16,
                        fontWeight: '400',
                      }}>
                      {this.state.activeChat == 0 ? 'Chat ' : 'Call'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            keyExtractor={(item, ind) => ind}
          />
        </View>
      </SafeAreaView>
    );
  }
}

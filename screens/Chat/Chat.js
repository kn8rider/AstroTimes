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
const type = [
  {
    val: 'ARIES',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
  },
  {
    val: 'TAURUS',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
  },
  {
    val: 'GEMINI',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
  },
  {
    val: 'CANCER',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
  },
  {
    val: 'LEO',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
  },
  {
    val: 'VIRGO',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
  },
  {
    val: 'LIBRA',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
  },
  {
    val: 'SCORPIO',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
  },
  {
    val: 'SAGITTARIUS',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
  },
  {
    val: 'CAPRICORN',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
  },
  {
    val: 'PISCES',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
  },
  {
    val: 'AQUARIUS',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
  },
];
export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeChat: 0,
    };
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
        <Appbar style={{backgroundColor: '#FABD0B'}}>
          <Icon
            name={'arrow-left'}
            size={30}
            color={'white'}
            style={{marginLeft: 10}}
            onPress={() => this.props.navigation.goBack()}
          />
          <Text
            style={{
              color: 'white',
              fontWeight: '400',
              fontSize: 18,
              marginLeft: 20,
            }}>
            Chat with Astrologer
          </Text>
          <Icon
            name={'wallet-outline'}
            size={30}
            color={'white'}
            style={{marginLeft: 60}}
          />
          <Icon
            name={'magnify'}
            size={30}
            color={'white'}
            style={{marginLeft: 10}}
          />
          <Icon
            name={'sort-variant'}
            size={30}
            color={'white'}
            style={{marginLeft: 10}}
          />
        </Appbar>
        <View
          style={{
            backgroundColor: 'black',
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
              borderColor: 'white',
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
                  this.state.activeChat == 0 ? '#FABD0B' : 'black',
                justifyContent: 'center',
                borderWidth: this.state.activeChat == 0 ? 1 : 0,
                borderColor: 'white',
                alignItems: 'center',
              }}
              onPress={() => this.setState({activeChat: 0})}>
              <Text style={{fontSize: 18, fontWeight: '400', color: 'white'}}>
                Chat
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 148,
                height: '98%',
                borderRadius: 10,
                backgroundColor:
                  this.state.activeChat == 1 ? '#FABD0B' : 'black',
                justifyContent: 'center',
                borderWidth: this.state.activeChat == 1 ? 1 : 0,
                borderColor: 'white',
                alignItems: 'center',
              }}
              onPress={() => this.setState({activeChat: 1})}>
              <Text style={{fontSize: 18, fontWeight: '400', color: 'white'}}>
                Call
              </Text>
            </TouchableOpacity>
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
                    <Icon name="star" size={15} color={'white'} />
                    <Icon name="star" size={15} color={'white'} />
                    <Icon name="star" size={15} color={'white'} />
                    <Icon name="star" size={15} color={'white'} />
                    <Icon name="star" size={15} color={'white'} />
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 5,
                      marginBottom: 10,
                    }}>
                    <Icon name="account" size={15} color={'white'} />
                    <Text style={{color: 'white', marginRight: 20}}>
                      100072 total
                    </Text>
                  </View>
                </View>
                <View>
                  <Text
                    style={{color: 'white', fontSize: 20, fontWeight: '500'}}>
                    Beenu
                  </Text>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 14,
                      fontWeight: '400',
                      marginTop: 7,
                    }}>
                    Vedik, Prashana, Lal Kitab
                  </Text>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 14,
                      fontWeight: '400',
                      marginTop: 5,
                    }}>
                    English, Hindi, Punjabi
                  </Text>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 14,
                      fontWeight: '400',
                      marginTop: 5,
                    }}>
                    Exp: 3 Years
                  </Text>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 16,
                      fontWeight: '500',
                      marginTop: 5,
                    }}>
                    Free
                  </Text>
                </View>
                <View style={{justifyContent: 'space-between', height: 130}}>
                  <Icon
                    name="check-decagram"
                    color={'#4A3D8D'}
                    size={25}
                    style={{marginLeft: 70}}
                  />
                  <TouchableOpacity
                    style={{
                      backgroundColor: 'black',
                      borderRadius: 10,
                      borderColor: '#4A3D8D',
                      borderWidth: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: 8,
                      paddingHorizontal: 35,
                    }}>
                    <Text
                      style={{
                        color: '#4A3D8D',
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

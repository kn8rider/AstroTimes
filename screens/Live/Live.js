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
import FIcon from 'react-native-vector-icons/Feather';
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
const model = [
  {id: 1},
  {id: 1},
  {id: 1},
  {id: 1},
  {id: 1},
  {id: 1},
  {id: 1},
  {id: 1},
  {id: 1},
  {id: 1},
  {id: 1},
  {id: 1},
  {id: 1},
  {id: 1},
  {id: 1},
  {id: 1},
  {id: 1},
  {id: 1},
  {id: 1},
  {id: 1},
  {id: 1},
  {id: 1},
  {id: 1},
  {id: 1},
  {id: 1},
  {id: 1},
  {id: 1},
  {id: 1},
];
export default class Live extends Component {
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
              fontSize: 20,
              marginLeft: 30,
            }}>
            Live Events
          </Text>
          <Icon
            name={'magnify'}
            size={30}
            color={'white'}
            style={{position: 'absolute', right: 20}}
          />
        </Appbar>
        <View
          style={{
            backgroundColor: 'black',
            flex: 1,
          }}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{padding: 10}}>
            <Text style={{fontSize: 19, fontWeight: '400', color: 'white'}}>
              Ongoing Events
            </Text>
            <View
              style={{
                backgroundColor: '#313131',
                padding: 10,
                flexWrap: 'wrap',
                justifyContent: 'space-evenly',
                flexDirection: 'row',
                alignItems: 'center',
                borderRadius: 10,
                elevation: 10,
                marginVertical: 10,
              }}>
              {model.map((item, index) => (
                <TouchableOpacity style={{marginHorizontal: 0}} key={index}>
                  <View
                    style={{
                      borderRadius: 40,
                      height: 80,
                      width: 80,
                      borderColor: '#BC8218',
                      borderWidth: 1,
                      justifyContent: 'center',
                      marginTop: 20,
                      padding: 5,
                      backgroundColor: 'black',
                    }}>
                    <Image
                      source={{
                        uri: 'https://images.unsplash.com/photo-1620048269620-77fa550bb505?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGFzdHJvbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
                      }}
                      resizeMode="cover"
                      style={{flex: 1, borderRadius: 45}}
                    />
                    <View
                      style={{
                        backgroundColor: 'black',
                        position: 'absolute',
                        borderRadius: 5,
                        paddingHorizontal: 5,
                        paddingVertical: 2,
                        bottom: -5,
                        left: 15,
                      }}>
                      <Text
                        style={{
                          color: 'green',
                          fontSize: 15,
                        }}>
                        •{' '}
                        <Text
                          style={{
                            color: 'white',
                            fontSize: 12,
                            fontWeight: '400',
                            textAlign: 'center',
                            alignSelf: 'center',
                          }}>
                          Live
                        </Text>
                      </Text>
                    </View>
                  </View>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 16,
                      fontWeight: '300',
                      color: 'white',
                      marginTop: 5,
                    }}>
                    Priyanka
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            <Text
              style={{
                fontSize: 19,
                fontWeight: '400',
                color: 'white',
                marginBottom: 15,
              }}>
              Upcoming Events
            </Text>
            {model.map((item, index) => (
              <View
                style={{
                  backgroundColor: '#313131',
                  width: '100%',
                  alignSelf: 'center',
                  padding: 10,
                  elevation: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  borderRadius: 10,
                  marginVertical: 5,
                }}
                key={index}>
                <View style={{justifyContent: 'center', marginLeft: 5}}>
                  <View
                    style={{
                      height: 90,
                      width: 90,
                      borderRadius: 45,
                      padding: 5,
                      backgroundColor: 'black',
                      borderColor: '#BC8218',
                      borderWidth: 1,
                    }}>
                    <Image
                      source={{
                        uri: 'https://images.unsplash.com/photo-1620048269620-77fa550bb505?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGFzdHJvbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
                      }}
                      style={{
                        flex: 1,
                        borderRadius: 45,
                      }}
                      resizeMode={'cover'}
                    />
                  </View>

                  <Text
                    style={{
                      color: 'white',
                      marginRight: 20,
                      fontSize: 16,
                      fontWeight: '500',
                    }}>
                    Premkumar
                  </Text>
                </View>
                <View style={{justifyContent: 'center'}}>
                  <Text
                    style={{color: 'white', fontSize: 20, fontWeight: '500'}}>
                    Tarot Reading
                  </Text>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 16,
                      fontWeight: '400',
                      marginTop: 7,
                    }}>
                    21 Feb, Monday
                  </Text>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 16,
                      fontWeight: '400',
                      marginTop: 7,
                    }}>
                    06:00 PM
                  </Text>
                </View>
                <View style={{justifyContent: 'space-between', height: 130}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-evenly',
                      alignItems: 'center',
                    }}>
                    <Icon
                      name="bell"
                      color={'grey'}
                      size={25}
                      // style={{marginLeft: 70}}
                    />
                    <FIcon
                      name="share-2"
                      color={'grey'}
                      size={25}
                      // style={{marginLeft: 70}}
                    />
                  </View>
                  <TouchableOpacity
                    style={{
                      backgroundColor: 'black',
                      borderRadius: 10,
                      borderColor: 'white',
                      borderWidth: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: 5,
                      paddingHorizontal: 15,
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 16,
                        fontWeight: '400',
                      }}>
                      Join Waitlist
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

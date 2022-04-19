import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';
import {
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import {
  Card,
  Avatar,
  List,
  Appbar,
  TextInput,
  RadioButton,
  Searchbar,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FIcon from 'react-native-vector-icons/FontAwesome';
import color from '../GlobalVariables';
const data = [
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsvMnPhxiHD42Q7XTcM3H-HPtN7_9cVZwFDQ&usqp=CAU',
    name: 'MehakB',
    specialist: 'Vedik',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
    name: 'Siaa',
    specialist: 'Numerology',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5H4kG05ZRQ9ZevjoRMZr-YnJwoxd9WMQs3g&usqp=CAU',
    name: 'Lokeshji',
    specialist: 'Tarot',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
    name: 'Shashikant',
    specialist: 'Vedik',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
    name: 'Kunalk',
    specialist: 'Vedik',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
    name: 'Ramkrishna',
    specialist: 'Tarot',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
    name: 'DNSana',
    specialist: 'Vedik',
  },
];
const type = [
  {
    val: 'ARIES',
    img: 'https://divineapi.com/widget/daily_horoscope/images/zodiac/Aries.png',
  },
  {
    val: 'TAURUS',
    img: 'https://divineapi.com/widget/daily_horoscope/images/zodiac/Taurus.png',
  },
  {
    val: 'GEMINI',
    img: 'https://divineapi.com/widget/daily_horoscope/images/zodiac/Gemini.png',
  },
  {
    val: 'CANCER',
    img: 'https://divineapi.com/widget/daily_horoscope/images/zodiac/Cancer.png',
  },
  {
    val: 'LEO',
    img: 'https://divineapi.com/widget/daily_horoscope/images/zodiac/Leo.png',
  },
  {
    val: 'VIRGO',
    img: 'https://divineapi.com/widget/daily_horoscope/images/zodiac/Virgo.png',
  },
  {
    val: 'LIBRA',
    img: 'https://divineapi.com/widget/daily_horoscope/images/zodiac/Libra.png',
  },
  {
    val: 'SCORPIO',
    img: 'https://divineapi.com/widget/daily_horoscope/images/zodiac/Scorpio.png',
  },
  {
    val: 'SAGITTARIUS',
    img: 'https://divineapi.com/widget/daily_horoscope/images/zodiac/Sagittarius.png',
  },
  {
    val: 'CAPRICORN',
    img: 'https://divineapi.com/widget/daily_horoscope/images/zodiac/Capricorn.png',
  },
  {
    val: 'PISCES',
    img: 'https://divineapi.com/widget/daily_horoscope/images/zodiac/Pisces.png',
  },
  {
    val: 'AQUARIUS',
    img: 'https://divineapi.com/widget/daily_horoscope/images/zodiac/Aquarius.png',
  },
];

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      user: [],
    };
  }

  componentDidMount() {
    // console.log('home : ', this.props.route.params.user);
    // this.setState({user: this.props.route.params.user});
    // this.getData();
  }
  render() {
    // console.log('asData : ', this.state.user);
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: color.primary}}>
        <Appbar style={{backgroundColor: color.primary}}>
          <Icon
            name={'menu'}
            size={30}
            color={color.secondary}
            style={{marginLeft: 10}}
            onPress={() => this.props.navigation.openDrawer()}
          />
          <Text
            style={{
              color: color.secondary,
              fontWeight: '400',
              fontSize: 20,
              marginLeft: 30,
            }}>
            AstroTime
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              position: 'absolute',
              right: 10,
            }}>
            <Icon
              name={'wallet-outline'}
              size={30}
              color={color.secondary}
              onPress={() => this.props.navigation.goBack()}
            />
            <FIcon
              name={'language'}
              size={30}
              color={color.secondary}
              style={{marginHorizontal: 20}}
              onPress={() => this.props.navigation.goBack()}
            />
            <Icon
              name={'account-outline'}
              size={30}
              color={color.secondary}
              onPress={() => this.props.navigation.goBack()}
            />
          </View>
        </Appbar>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* <Searchbar
            style={{
              marginHorizontal: '5%',
              marginTop: '2%',
              borderRadius: 15,
              alignItems: 'center',
              backgroundColor: '#C6C6C6',
            }}
            placeholder="Search astrologers, astromail products"
            value={this.state.search}
            onChangeText={text => this.setState({search: text})}
            onFocus={() => this.props.navigation.navigate('search')}
          /> */}

          <Card
            style={{
              marginHorizontal: '5%',
              borderRadius: 10,
              elevation: 10,
              height: 130,
              backgroundColor: color.primary,
              marginTop: 10,
              width: '90%',
            }}
            onPress={() => this.props.navigation.navigate('error')}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1620048269620-77fa550bb505?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGFzdHJvbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
              }}
              style={{
                flex: 1,
                borderRadius: 10,
              }}
              resizeMode={'cover'}
            />
          </Card>
          {/* <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{
              // flexDirection: 'row',
              // justifyContent: 'space-between',
              // alignItems: 'center',
              paddingHorizontal: 10,
              marginVertical: 20,
            }}>
            <TouchableOpacity
              style={{justifyContent: 'center', marginTop: 10}}
              onPress={() =>
                this.props.navigation.navigate('Horoscope', {
                  sign: 'ARIES',
                  ind: 0,
                })
              }>
              <View
                style={{
                  justifyContent: 'center',
                  backgroundColor: '#FABD0B',
                  padding: 20,
                  borderRadius: 45,
                  height: 75,
                  alignSelf: 'center',
                  width: 75,
                }}>
                <Image
                  source={require('../../assets/media/sunrise.png')}
                  style={{
                    height: 50,
                    width: 50,
                    alignSelf: 'center',
                  }}
                  resizeMode={'cover'}
                />
              </View>
              <Text
                style={{
                  color: color.secondary,
                  fontSize: 16,
                  fontWeight: '400',
                  textAlign: 'center',
                  maxWidth: '80%',
                  alignSelf: 'center',
                  marginTop: 5,
                }}>
                Daily Horoscope
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{justifyContent: 'center', marginLeft: -20, marginTop: 10}}
              onPress={() => this.props.navigation.navigate('kundali')}>
              <View
                style={{
                  justifyContent: 'center',
                  backgroundColor: '#FABD0B',
                  padding: 20,
                  borderRadius: 45,
                  height: 75,
                  alignSelf: 'center',
                  width: 75,
                }}>
                <Image
                  source={require('../../assets/media/kundali.png')}
                  style={{
                    height: 50,
                    width: 50,
                    alignSelf: 'center',
                  }}
                  resizeMode={'cover'}
                />
              </View>
              <Text
                style={{
                  color: color.secondary,
                  fontSize: 16,
                  fontWeight: '400',
                  textAlign: 'center',
                  maxWidth: '80%',
                  alignSelf: 'center',
                  marginTop: 5,
                }}>
                Free Kundali
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{justifyContent: 'center', marginTop: 10, marginRight: 10}}
              onPress={() => this.props.navigation.navigate('numerology')}>
              <View
                style={{
                  justifyContent: 'center',
                  backgroundColor: '#FABD0B',
                  borderRadius: 45,
                  height: 75,
                  alignSelf: 'center',
                  width: 75,
                }}>
                <Image
                  source={require('../../assets/media/numerology.png')}
                  style={{
                    height: 70,
                    width: 70,
                    alignSelf: 'center',
                  }}
                  resizeMode={'cover'}
                />
              </View>
              <Text
                style={{
                  color: color.secondary,
                  fontSize: 16,
                  fontWeight: '400',
                  textAlign: 'center',
                  maxWidth: '100%',
                  alignSelf: 'center',
                  marginTop: 5,
                }}>
                Numerology
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{justifyContent: 'center', marginLeft: -15, marginTop: 10}}
              onPress={() => this.props.navigation.navigate('match')}>
              <View
                style={{
                  justifyContent: 'center',
                  backgroundColor: '#FABD0B',
                  padding: 20,
                  borderRadius: 45,
                  height: 75,
                  alignSelf: 'center',
                  width: 75,
                }}>
                <Image
                  source={require('../../assets/media/wedding-ring.png')}
                  style={{
                    height: 50,
                    width: 50,
                    alignSelf: 'center',
                  }}
                  resizeMode={'cover'}
                />
              </View>
              <Text
                style={{
                  color: color.secondary,
                  fontSize: 16,
                  fontWeight: '400',
                  textAlign: 'center',
                  maxWidth: '80%',
                  alignSelf: 'center',
                  marginTop: 5,
                }}>
                Match Making
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{justifyContent: 'center', marginTop: 10, marginRight: 10}}
              onPress={() => this.props.navigation.navigate('panchang')}>
              <View
                style={{
                  justifyContent: 'center',
                  backgroundColor: '#FABD0B',
                  padding: 20,
                  borderRadius: 45,
                  height: 75,
                  alignSelf: 'center',
                  width: 75,
                }}>
                <Image
                  source={require('../../assets/media/planet.png')}
                  style={{
                    height: 50,
                    width: 50,
                    alignSelf: 'center',
                  }}
                  resizeMode={'cover'}
                />
              </View>
              <Text
                style={{
                  color: color.secondary,
                  fontSize: 16,
                  fontWeight: '400',
                  textAlign: 'center',
                  // maxWidth: '80%',
                  alignSelf: 'center',
                  marginTop: 5,
                }}>
                Panchang
              </Text>
            </TouchableOpacity>
          </ScrollView> */}

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: '5%',
              marginTop: 20,
            }}>
            <Text
              style={{
                color: color.secondary,
                fontSize: 18,
                fontWeight: '500',
                textAlign: 'center',
                alignSelf: 'center',
              }}>
              Live Events
            </Text>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                borderRadius: 15,
                borderColor: color.secondary,
                padding: 5,
                paddingHorizontal: 10,
                borderWidth: 1,
                backgroundColor: color.primary,
              }}
              onPress={() => this.props.navigation.navigate('liveEvents')}>
              <Text
                style={{
                  color: color.secondary,
                  fontSize: 13,
                  fontWeight: '400',
                  textAlign: 'center',
                  alignSelf: 'center',
                }}>
                View All
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{paddingVertical: 10}}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={data}
              renderItem={({item, index, separators}) => (
                <Card
                  style={{
                    alignItems: 'center',
                    borderRadius: 10,
                    elevation: 10,
                    backgroundColor: '#F7B0AD',
                    height: 150,
                    width: 120,
                    marginHorizontal: 2,
                  }}>
                  <View
                    style={{
                      borderRadius: 45,
                      height: 90,
                      width: 90,
                      borderColor: '#BC8218',
                      borderWidth: 1,
                      justifyContent: 'center',
                      marginTop: 20,
                    }}>
                    <Image
                      source={{uri: item.img}}
                      resizeMode="cover"
                      style={{flex: 1, borderRadius: 45}}
                    />
                    <View
                      style={{
                        backgroundColor: color.primary,
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
                            color: color.secondary,
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
                      color: color.primary,
                      fontSize: 14,
                      fontWeight: '400',
                      textAlign: 'center',
                      alignSelf: 'center',
                      marginTop: 10,
                    }}>
                    {item.name}
                  </Text>
                </Card>
              )}
              keyExtractor={(item, ind) => ind}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: '5%',
              marginTop: 20,
            }}>
            <Text
              style={{
                color: color.secondary,
                fontSize: 18,
                fontWeight: '500',
                textAlign: 'center',
                alignSelf: 'center',
              }}>
              Talk to Astrologers
            </Text>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                borderRadius: 15,
                borderColor: color.secondary,
                padding: 5,
                paddingHorizontal: 10,
                borderWidth: 1,
                backgroundColor: color.primary,
              }}
              onPress={() => this.props.navigation.navigate('chat', {type: 1})}>
              <Text
                style={{
                  color: color.secondary,
                  fontSize: 13,
                  fontWeight: '400',
                  textAlign: 'center',
                  alignSelf: 'center',
                }}>
                View All
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{paddingVertical: 20}}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={data}
              renderItem={({item, index, separators}) => (
                <Card
                  style={{
                    alignItems: 'center',
                    borderRadius: 10,
                    elevation: 10,
                    backgroundColor: color.primary,
                    height: 160,
                    width: 120,
                    borderWidth: 0.5,
                    borderColor: '#CDCDCD',
                    marginHorizontal: 5,
                  }}>
                  <View
                    style={{
                      borderRadius: 45,
                      height: 90,
                      width: 90,
                      borderColor: '#BC8218',
                      borderWidth: 1,
                      justifyContent: 'center',
                      marginTop: 10,
                      padding: 5,
                    }}>
                    <Image
                      source={{uri: item.img}}
                      resizeMode="cover"
                      style={{flex: 1, borderRadius: 45}}
                    />
                  </View>
                  <Text
                    style={{
                      color: color.secondary,
                      fontSize: 16,
                      fontWeight: '500',
                      textAlign: 'center',
                      alignSelf: 'center',
                      marginTop: 5,
                    }}>
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      color: color.secondary,
                      fontSize: 14,
                      fontWeight: '400',
                      textAlign: 'center',
                      alignSelf: 'center',
                    }}>
                    {item.specialist}
                  </Text>
                </Card>
              )}
              keyExtractor={(item, ind) => ind}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: '5%',
              marginTop: 20,
            }}>
            <Text
              style={{
                color: color.secondary,
                fontSize: 18,
                fontWeight: '500',
                textAlign: 'center',
                alignSelf: 'center',
              }}>
              Classification of Astrologers
            </Text>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                borderRadius: 15,
                borderColor: color.secondary,
                padding: 5,
                paddingHorizontal: 10,
                borderWidth: 1,
                backgroundColor: color.primary,
              }}
              onPress={() => this.props.navigation.navigate('chat', {type: 1})}>
              <Text
                style={{
                  color: color.secondary,
                  fontSize: 13,
                  fontWeight: '400',
                  textAlign: 'center',
                  alignSelf: 'center',
                }}>
                View All
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{paddingVertical: 20}}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={data}
              renderItem={({item, index, separators}) => (
                <Card
                  style={{
                    alignItems: 'center',
                    borderRadius: 10,
                    elevation: 10,
                    backgroundColor: color.primary,
                    height: 160,
                    width: 120,
                    borderWidth: 0.5,
                    borderColor: '#CDCDCD',
                    marginHorizontal: 5,
                  }}>
                  <View
                    style={{
                      borderRadius: 45,
                      height: 90,
                      width: 90,
                      borderColor: '#BC8218',
                      borderWidth: 1,
                      justifyContent: 'center',
                      marginTop: 10,
                      padding: 5,
                    }}>
                    <Image
                      source={{uri: item.img}}
                      resizeMode="cover"
                      style={{flex: 1, borderRadius: 45}}
                    />
                  </View>
                  <Text
                    style={{
                      color: color.secondary,
                      fontSize: 16,
                      fontWeight: '500',
                      textAlign: 'center',
                      alignSelf: 'center',
                      marginTop: 5,
                    }}>
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      color: color.secondary,
                      fontSize: 14,
                      fontWeight: '400',
                      textAlign: 'center',
                      alignSelf: 'center',
                    }}>
                    {item.specialist}
                  </Text>
                </Card>
              )}
              keyExtractor={(item, ind) => ind}
            />
          </View>
          <Card
            style={{
              marginHorizontal: '5%',
              borderRadius: 10,
              elevation: 10,
              height: 130,
              backgroundColor: color.primary,
              marginTop: 10,
              width: '90%',
              marginBottom: 20,
            }}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1620048269620-77fa550bb505?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGFzdHJvbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
              }}
              style={{
                flex: 1,
                borderRadius: 10,
              }}
              resizeMode={'cover'}
            />
          </Card>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: '5%',
              marginTop: 20,
            }}>
            <Text
              style={{
                color: color.secondary,
                fontSize: 18,
                fontWeight: '500',
                textAlign: 'center',
                alignSelf: 'center',
              }}>
              Chat with Astrologers
            </Text>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                borderRadius: 15,
                borderColor: color.secondary,
                padding: 5,
                paddingHorizontal: 10,
                borderWidth: 1,
                backgroundColor: color.primary,
              }}
              onPress={() => this.props.navigation.navigate('chat', {type: 0})}>
              <Text
                style={{
                  color: color.secondary,
                  fontSize: 13,
                  fontWeight: '400',
                  textAlign: 'center',
                  alignSelf: 'center',
                }}>
                View All
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{paddingVertical: 20}}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={data}
              renderItem={({item, index, separators}) => (
                <Card
                  style={{
                    alignItems: 'center',
                    borderRadius: 10,
                    elevation: 10,
                    backgroundColor: color.primary,
                    height: 160,
                    width: 120,
                    borderWidth: 0.5,
                    borderColor: '#CDCDCD',
                    marginHorizontal: 5,
                  }}>
                  <View
                    style={{
                      borderRadius: 45,
                      height: 90,
                      width: 90,
                      borderColor: '#BC8218',
                      borderWidth: 1,
                      justifyContent: 'center',
                      marginTop: 10,
                      padding: 5,
                    }}>
                    <Image
                      source={{uri: item.img}}
                      resizeMode="cover"
                      style={{flex: 1, borderRadius: 45}}
                    />
                  </View>
                  <Text
                    style={{
                      color: color.secondary,
                      fontSize: 16,
                      fontWeight: '500',
                      textAlign: 'center',
                      alignSelf: 'center',
                      marginTop: 5,
                    }}>
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      color: color.secondary,
                      fontSize: 14,
                      fontWeight: '400',
                      textAlign: 'center',
                      alignSelf: 'center',
                    }}>
                    {item.specialist}
                  </Text>
                </Card>
              )}
              keyExtractor={(item, ind) => ind}
            />
          </View>
          <Text
            style={{
              color: color.secondary,
              fontSize: 18,
              fontWeight: '500',
              marginLeft: '5%',
            }}>
            Today's horoscope
          </Text>
          <View style={{paddingVertical: 20}}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={type}
              renderItem={({item, index, separators}) => (
                <Card
                  style={{
                    alignItems: 'center',
                    elevation: 10,
                    backgroundColor: color.primary,
                    marginHorizontal: 10,
                  }}
                  onPress={() =>
                    this.props.navigation.navigate('Horoscope', {
                      sign: item.val,
                      ind: index,
                    })
                  }>
                  <View
                    style={{
                      borderRadius: 45,
                      height: 90,
                      width: 90,
                      justifyContent: 'center',
                      marginTop: 10,
                      borderWidth: 1,
                      borderColor: color.secondary,
                      padding: 15,
                    }}>
                    <Image
                      source={{uri: item.img}}
                      resizeMode="cover"
                      style={{flex: 1, borderRadius: 45}}
                    />
                  </View>
                  <Text
                    style={{
                      color: color.secondary,
                      fontSize: 14,
                      fontWeight: '300',
                      textAlign: 'center',
                      alignSelf: 'center',
                      marginTop: 5,
                    }}>
                    {item.val}
                  </Text>
                </Card>
              )}
              keyExtractor={(item, ind) => ind}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: '5%',
              marginTop: 20,
            }}>
            <Text
              style={{
                color: color.secondary,
                fontSize: 18,
                fontWeight: '500',
                textAlign: 'center',
                alignSelf: 'center',
              }}>
              Our Astrologers
            </Text>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                borderRadius: 15,
                borderColor: color.secondary,
                padding: 5,
                paddingHorizontal: 10,
                borderWidth: 1,
                backgroundColor: color.primary,
              }}
              onPress={() => this.props.navigation.navigate('chat', {type: 0})}>
              <Text
                style={{
                  color: color.secondary,
                  fontSize: 13,
                  fontWeight: '400',
                  textAlign: 'center',
                  alignSelf: 'center',
                }}>
                View All
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{paddingVertical: 20}}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={data}
              renderItem={({item, index, separators}) => (
                <Card
                  style={{
                    alignItems: 'center',
                    borderRadius: 10,
                    elevation: 10,
                    backgroundColor: color.primary,
                    height: 160,
                    width: 120,
                    borderWidth: 0.5,
                    borderColor: '#CDCDCD',
                    marginHorizontal: 5,
                  }}>
                  <View
                    style={{
                      borderRadius: 45,
                      height: 90,
                      width: 90,
                      borderColor: '#BC8218',
                      borderWidth: 1,
                      justifyContent: 'center',
                      marginTop: 10,
                      padding: 5,
                    }}>
                    <Image
                      source={{uri: item.img}}
                      resizeMode="cover"
                      style={{flex: 1, borderRadius: 45}}
                    />
                  </View>
                  <Text
                    style={{
                      color: color.secondary,
                      fontSize: 16,
                      fontWeight: '500',
                      textAlign: 'center',
                      alignSelf: 'center',
                      marginTop: 5,
                    }}>
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      color: color.secondary,
                      fontSize: 14,
                      fontWeight: '400',
                      textAlign: 'center',
                      alignSelf: 'center',
                    }}>
                    {item.specialist}
                  </Text>
                </Card>
              )}
              keyExtractor={(item, ind) => ind}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: '5%',
              marginTop: 20,
            }}>
            <Text
              style={{
                color: color.secondary,
                fontSize: 18,
                fontWeight: '500',
                textAlign: 'center',
                alignSelf: 'center',
              }}>
              Specialised Remedies (Astromall)
            </Text>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                borderRadius: 15,
                borderColor: color.secondary,
                padding: 5,
                paddingHorizontal: 10,
                borderWidth: 1,
                backgroundColor: color.primary,
              }}
              onPress={() => this.props.navigation.navigate('astroMall')}>
              <Text
                style={{
                  color: color.secondary,
                  fontSize: 13,
                  fontWeight: '400',
                  textAlign: 'center',
                  alignSelf: 'center',
                }}>
                View All
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{paddingVertical: 10}}>
            <FlatList
              horizontal={true}
              data={data}
              renderItem={({item, index, separators}) => (
                <Card
                  style={{
                    borderRadius: 10,
                    elevation: 10,
                    height: 150,
                    width: 200,
                    marginHorizontal: 5,
                  }}>
                  <Image
                    source={{uri: item.img}}
                    resizeMode="cover"
                    style={{flex: 1, borderRadius: 10}}
                  />
                  <Text
                    style={{
                      color: color.secondary,
                      fontSize: 15,
                      fontWeight: '400',
                      textAlign: 'center',
                      position: 'absolute',
                      alignSelf: 'center',
                      bottom: 20,
                    }}>
                    {item.name}
                  </Text>
                </Card>
              )}
              keyExtractor={(item, ind) => ind}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: '5%',
              marginTop: 20,
            }}>
            <Text
              style={{
                color: color.secondary,
                fontSize: 18,
                fontWeight: '500',
                textAlign: 'center',
                alignSelf: 'center',
              }}>
              Latest from the blog
            </Text>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                borderRadius: 15,
                borderColor: color.secondary,
                padding: 5,
                paddingHorizontal: 10,
                borderWidth: 1,
                backgroundColor: color.primary,
              }}
              onPress={() => this.props.navigation.navigate('astroBlog')}>
              <Text
                style={{
                  color: color.secondary,
                  fontSize: 13,
                  fontWeight: '400',
                  textAlign: 'center',
                  alignSelf: 'center',
                }}>
                View All
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{paddingVertical: 10}}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={data}
              renderItem={({item, index, separators}) => (
                <Card
                  style={{
                    borderRadius: 10,
                    elevation: 10,
                    height: 200,
                    width: 200,
                    marginHorizontal: 5,
                  }}>
                  <Image
                    source={{uri: item.img}}
                    resizeMode="cover"
                    style={{
                      width: '100%',
                      height: '70%',
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                    }}
                  />
                  <View
                    style={{
                      backgroundColor: '#606060',
                      borderBottomRightRadius: 10,
                      borderBottomLeftRadius: 10,
                      height: '30%',
                    }}>
                    <Text
                      style={{
                        color: color.secondary,
                        fontSize: 15,
                        fontWeight: '400',
                        textAlign: 'center',
                        alignSelf: 'center',
                        maxWidth: '90%',
                      }}>
                      Bappi Lahiri, Legendary Composer With A Kundi
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingHorizontal: 5,
                      }}>
                      <Text
                        style={{
                          color: color.secondary,
                          fontSize: 13,
                          fontWeight: '400',
                          textAlign: 'center',
                          alignSelf: 'center',
                        }}>
                        Simran Jain
                      </Text>
                      <Text
                        style={{
                          color: color.secondary,
                          fontSize: 13,
                          fontWeight: '400',
                          textAlign: 'center',
                          alignSelf: 'center',
                        }}>
                        Feb 18, 2022
                      </Text>
                    </View>
                  </View>
                </Card>
              )}
              keyExtractor={(item, ind) => ind}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: '5%',
              marginTop: 20,
            }}>
            <Text
              style={{
                color: color.secondary,
                fontSize: 18,
                fontWeight: '500',
                textAlign: 'center',
                alignSelf: 'center',
              }}>
              AstroTime in News
            </Text>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                borderRadius: 15,
                borderColor: color.secondary,
                padding: 5,
                paddingHorizontal: 10,
                borderWidth: 1,
                backgroundColor: color.primary,
              }}
              onPress={() => this.props.navigation.navigate('astroNews')}>
              <Text
                style={{
                  color: color.secondary,
                  fontSize: 13,
                  fontWeight: '400',
                  textAlign: 'center',
                  alignSelf: 'center',
                }}>
                View All
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{paddingVertical: 10}}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={data}
              renderItem={({item, index, separators}) => (
                <Card
                  style={{
                    borderRadius: 10,
                    elevation: 10,
                    height: 200,
                    width: 200,
                    marginHorizontal: 5,
                  }}>
                  <Image
                    source={{uri: item.img}}
                    resizeMode="cover"
                    style={{
                      width: '100%',
                      height: '70%',
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                    }}
                  />
                  <View
                    style={{
                      backgroundColor: '#606060',
                      borderBottomRightRadius: 10,
                      borderBottomLeftRadius: 10,
                      height: '30%',
                    }}>
                    <Text
                      style={{
                        color: color.secondary,
                        fontSize: 15,
                        fontWeight: '400',
                        textAlign: 'center',
                        alignSelf: 'center',
                        maxWidth: '90%',
                        maxHeight: '67%',
                      }}>
                      The Astrology startup is seeing Rs 30 lakh revenue per day
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingHorizontal: 5,
                      }}>
                      <Text
                        style={{
                          color: color.secondary,
                          fontSize: 13,
                          fontWeight: '400',
                          textAlign: 'center',
                          alignSelf: 'center',
                        }}>
                        Simran Jain
                      </Text>
                      <Text
                        style={{
                          color: color.secondary,
                          fontSize: 13,
                          fontWeight: '400',
                          textAlign: 'center',
                          alignSelf: 'center',
                        }}>
                        Feb 18, 2022
                      </Text>
                    </View>
                  </View>
                </Card>
              )}
              keyExtractor={(item, ind) => ind}
            />
          </View>
          {/* <View
            style={{
              backgroundColor: '#606060',
              marginHorizontal: 10,
              padding: 10,
              borderRadius: 10,
              elevation: 10,
              marginTop: 10,
            }}>
            <Text
              style={{
                color: color.secondary,
                fontSize: 20,
                fontWeight: '400',
              }}>
              Get AstroTime Gold at{' '}
              <Text
                style={{
                  color: color.secondary,
                  fontSize: 20,
                  fontWeight: '400',
                  textDecorationLine: 'line-through',
                }}>
                Rs 999
              </Text>
              Rs 5/-
            </Text>
            <Text
              style={{
                color: color.secondary,
                fontSize: 16,
                fontWeight: '400',
                marginTop: 5,
              }}>
              Flat 5% off on every session
            </Text>
            <Text
              style={{
                color: color.secondary,
                fontSize: 17,
                fontWeight: '600',
                marginTop: 5,
                textDecorationLine: 'underline',
              }}>
              Learn More
            </Text>
            <TouchableOpacity
              style={{
                borderRadius: 15,
                width: 100,
                marginTop: 10,
                marginLeft: '70%',
                height: 40,
                elevation: 10,
                justifyContent: 'center',
                backgroundColor: '#FABD0B',
                marginBottom: 10,
              }}>
              <Text
                style={{
                  color: color.secondary,
                  fontSize: 17,
                  fontWeight: '600',
                  textAlign: 'center',
                  marginTop: 5,
                }}>
                Get Now
              </Text>
            </TouchableOpacity>
          </View> */}
          <Text
            style={{
              color: color.secondary,
              fontSize: 18,
              fontWeight: '500',
              marginLeft: '5%',
            }}>
            Behind the scenes
          </Text>
          <View
            style={{
              marginHorizontal: '5%',
              backgroundColor: '#2A282B',
              elevation: 10,
              borderRadius: 15,
              justifyContent: 'center',
              height: 220,
              marginTop: 10,
            }}>
            <Image
              source={{
                uri: 'https://campaigndonut.com/wp-content/uploads/2019/05/the-futur-youtube-thumbnails-1030x574.jpg',
              }}
              resizeMode="cover"
              style={{flex: 1, marginVertical: 15}}
            />
            <Icon
              name="play"
              color={'#606060'}
              size={70}
              style={{position: 'absolute', alignSelf: 'center'}}
              onPress={() => console.log('click')}
            />
          </View>
          <Text
            style={{
              color: color.secondary,
              fontSize: 18,
              fontWeight: '500',
              marginLeft: '5%',
              marginTop: 20,
            }}>
            Blogs
          </Text>
          <View style={{paddingVertical: 10}}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={data}
              renderItem={({item, index, separators}) => (
                <Card
                  style={{
                    borderRadius: 10,
                    elevation: 10,
                    height: 400,
                    width: 200,
                    marginHorizontal: 5,
                    backgroundColor: '#2A282B',
                  }}>
                  <Image
                    source={{uri: item.img}}
                    resizeMode="cover"
                    style={{
                      // width: '100%',
                      height: 120,
                      margin: 10,
                    }}
                  />
                  <View
                    style={{
                      borderBottomRightRadius: 10,
                      borderBottomLeftRadius: 10,
                    }}>
                    <Text
                      style={{
                        color: color.secondary,
                        fontSize: 15,
                        fontWeight: '400',
                        textAlign: 'center',
                        alignSelf: 'center',
                        maxWidth: '90%',
                      }}>
                      The Astrology startup is seeing Rs 30 lakh revenue per day
                    </Text>
                    <Text
                      style={{
                        color: color.secondary,
                        fontSize: 15,
                        fontWeight: '400',
                        textAlign: 'center',
                        alignSelf: 'center',
                        maxWidth: '100%',
                        marginTop: 5,
                        marginHorizontal: 3,
                      }}>
                      Washington: Barack Obama has tested positive for a mild
                      case of Covid-19, the former US president said on his
                      Twitter account Sunday. "I've had a scratchy throat for a
                      couple days, but am feeling fine otherwise,"
                    </Text>
                    <TouchableOpacity
                      style={{
                        backgroundColor: '#4A3D8D',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 5,
                        elevation: 10,
                        width: 150,
                        alignSelf: 'center',
                        borderRadius: 20,
                        marginTop: 5,
                      }}>
                      <Text
                        style={{
                          color: color.secondary,
                          fontSize: 16,
                          fontWeight: '400',
                          textAlign: 'center',
                          alignSelf: 'center',
                        }}>
                        Read more
                      </Text>
                    </TouchableOpacity>
                  </View>
                </Card>
              )}
              keyExtractor={(item, ind) => ind}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 10,
              marginVertical: 10,
            }}>
            <TouchableOpacity style={{justifyContent: 'center'}}>
              <View
                style={{
                  justifyContent: 'center',
                  backgroundColor: '#606060',
                  borderRadius: 45,
                  height: 75,
                  alignSelf: 'center',
                  alignItems: 'center',
                  width: 75,
                }}>
                <Icon size={40} color="black" name="lock-outline" />
              </View>
              <Text
                style={{
                  color: color.secondary,
                  fontSize: 16,
                  fontWeight: '400',
                  textAlign: 'center',
                  maxWidth: '80%',
                  alignSelf: 'center',
                  marginTop: 5,
                }}>
                Private & Confidential
              </Text>
            </TouchableOpacity>
            <View
              style={{
                width: 1,
                height: 150,
                backgroundColor: '#606060',
                marginHorizontal: -20,
              }}
            />
            <TouchableOpacity style={{justifyContent: 'center'}}>
              <View
                style={{
                  justifyContent: 'center',
                  backgroundColor: '#606060',
                  borderRadius: 45,
                  height: 75,
                  alignSelf: 'center',
                  alignItems: 'center',
                  width: 75,
                }}>
                <Icon size={40} color="black" name="account-check" />
              </View>
              <Text
                style={{
                  color: color.secondary,
                  fontSize: 16,
                  fontWeight: '400',
                  textAlign: 'center',
                  maxWidth: '80%',
                  alignSelf: 'center',
                  marginTop: 5,
                }}>
                Verified Astrologers
              </Text>
            </TouchableOpacity>
            <View
              style={{
                width: 1,
                height: 150,
                backgroundColor: '#606060',
                marginHorizontal: -20,
              }}
            />
            <TouchableOpacity style={{justifyContent: 'center'}}>
              <View
                style={{
                  justifyContent: 'center',
                  backgroundColor: '#606060',
                  borderRadius: 45,
                  height: 75,
                  alignSelf: 'center',
                  alignItems: 'center',
                  width: 75,
                }}>
                <Icon size={40} color="black" name="security" />
              </View>
              <Text
                style={{
                  color: color.secondary,
                  fontSize: 16,
                  fontWeight: '400',
                  textAlign: 'center',
                  maxWidth: '80%',
                  alignSelf: 'center',
                  marginTop: 5,
                }}>
                Secure Payments
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View
          style={{
            backgroundColor: '#4A3D8D',
            borderRadius: 25,
            position: 'absolute',
            bottom: 20,
            height: 50,
            width: 50,
            elevation: 10,
            right: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon
            size={30}
            color="white"
            name="chat-processing-outline"
            // onPress={() => this.props.navigation.navigate('chat', {type: 0})}
            onPress={() => this.props.navigation.navigate('Meeting')}
          />
        </View>
      </SafeAreaView>
    );
  }
}

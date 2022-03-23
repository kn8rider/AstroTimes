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
const exploreData = [
  {
    title: 'Daily Angel Guidance',
    color: '#10324F',
    iname: require('../../assets/media/angel.png'),
  },
  {
    title: 'Love Games',
    color: '#A14465',
    iname: require('../../assets/media/cards.png'),
  },
  {
    title: 'Tarot Reading',
    color: '#593672',
    iname: require('../../assets/media/tarot.png'),
  },
  {
    title: 'Vibes of the Day',
    color: '#FABD0B',
    iname: require('../../assets/media/smile.png'),
  },
  {
    title: 'Hindu calendar',
    color: '#0A3F42',
    iname: require('../../assets/media/calendar.png'),
  },
];
export default class Free extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      date: new Date(),
      show: false,
      mode: 'date',
    };
  }

  render() {
    console.log('data in Free : ', this.props.data);

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
            Free Astrology Services
          </Text>
        </Appbar>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            backgroundColor: 'black',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              fontWeight: '500',
              marginLeft: '5%',
              marginTop: 10,
            }}>
            Daily horoscope
          </Text>
          <View style={{paddingVertical: 20}}>
            <FlatList
              horizontal={true}
              data={type}
              renderItem={({item, index, separators}) => (
                <Card
                  style={{
                    alignItems: 'center',
                    elevation: 10,
                    backgroundColor: 'black',
                    marginHorizontal: 5,
                  }}
                  onPress={() =>
                    this.props.navigation.navigate('Horoscope', {
                      sign: item.val,
                      ind: index,
                    })
                  }>
                  <View
                    style={{
                      borderRadius: 40,
                      height: 80,
                      width: 80,
                      justifyContent: 'center',
                      marginTop: 10,
                      // borderColor: 'white',
                      // borderWidth: 1,
                      padding: 15,
                      backgroundColor: '#FABD0B',
                    }}>
                    <Image
                      source={{uri: item.img}}
                      resizeMode="cover"
                      style={{flex: 1, borderRadius: 40}}
                    />
                  </View>
                  <Text
                    style={{
                      color: 'white',
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
              justifyContent: 'space-evenly',
              alignItems: 'center',
              padding: 10,
            }}>
            <View
              style={{
                height: 200,
                width: '45%',
                padding: 10,
                borderWidth: 1,
                borderColor: '#F55500',
                backgroundColor: '#F55500',
                borderRadius: 10,
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
            </View>
            <View
              style={{
                height: 200,
                width: '50%',
                paddingLeft: 20,
              }}>
              <Text style={{fontSize: 20, fontWeight: '500', color: 'white'}}>
                Free Kundali
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '300',
                  color: 'white',
                  marginTop: 15,
                }}>
                Enter your birth details {'&'} get a personalised kundali report
                with detailed analysis.
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: '#FABD0B',
                  padding: 10,
                  borderRadius: 20,
                  width: 100,
                  marginTop: 15,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '400',
                    color: 'white',
                    textAlign: 'center',
                  }}>
                  Get report
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              padding: 10,
              marginTop: 10,
            }}>
            <View
              style={{
                height: 200,
                width: '50%',
              }}>
              <Text style={{fontSize: 20, fontWeight: '500', color: 'white'}}>
                Match Making
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '300',
                  color: 'white',
                  marginTop: 15,
                }}>
                Enter your birth details {'&'} get a personalised kundali report
                with detailed analysis.
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: '#FABD0B',
                  padding: 10,
                  borderRadius: 20,
                  width: 100,
                  marginTop: 15,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '400',
                    color: 'white',
                    textAlign: 'center',
                  }}>
                  Get report
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                height: 200,
                width: '45%',
                padding: 10,
                borderWidth: 1,
                borderColor: '#F6017E',
                backgroundColor: '#F6017E',
                borderRadius: 10,
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
            </View>
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
                color: 'white',
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
                borderColor: 'white',
                padding: 5,
                paddingHorizontal: 10,
                borderWidth: 1,
                backgroundColor: 'black',
              }}>
              <Text
                style={{
                  color: 'white',
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
              data={type}
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
                        color: 'white',
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
                          color: 'white',
                          fontSize: 13,
                          fontWeight: '400',
                          textAlign: 'center',
                          alignSelf: 'center',
                        }}>
                        Simran Jain
                      </Text>
                      <Text
                        style={{
                          color: 'white',
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

          <Text
            style={{
              color: 'white',
              fontSize: 18,
              fontWeight: '500',
              marginLeft: 20,
            }}>
            Latest from the blog
          </Text>
          {exploreData.map((item, index) => (
            <Card
              style={{
                backgroundColor: item.color,
                marginHorizontal: '5%',
                elevation: 10,
                padding: 10,
                marginVertical: 10,
                borderRadius: 10,
              }}
              key={index}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 18,
                  fontWeight: '500',
                }}>
                {item.title}
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 14,
                  fontWeight: '300',
                  marginTop: 20,
                  textDecorationLine: 'underline',
                }}>
                View Now
              </Text>
              <Image
                source={item.iname}
                style={{
                  height: 50,
                  width: 50,
                  alignSelf: 'center',
                  position: 'absolute',
                  right: 20,
                }}
                resizeMode={'cover'}
              />
            </Card>
          ))}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

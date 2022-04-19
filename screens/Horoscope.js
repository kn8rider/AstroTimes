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
import color from './GlobalVariables';
const Hdata = [
  {val: 'Daily'},
  {val: 'Weekly'},
  {val: 'Monthly'},
  {val: 'Yearly'},
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

export default class Horoscope extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      first: true,
      load: false,
      data: [],
      active: 0,
      activeSign: 0,
      setSign: 'ARIES',
      setType: 'Daily',
      header: '',
      date: new Date().toDateString(),
    };
  }
  getDailyData = async (type, stype) => {
    try {
      this.setState({
        data: [],
        load: true,
        len: 0,
      });
      console.log(type, stype);
      if (type == 'Daily') {
        var d = new Date();
        var curr_date = d.getDate();
        var curr_month = d.getMonth() + 1; //Months are zero based
        var curr_year = d.getFullYear();
        if (curr_month < 10) {
          if (curr_date < 10) {
            var fDate =
              curr_year + '-' + '0' + curr_month + '-' + '0' + curr_date;
          } else {
            var fDate = curr_year + '-' + '0' + curr_month + '-' + curr_date;
          }
        } else {
          if (curr_date < 10) {
            const fDate = curr_year + '-' + curr_month + '-' + '0' + curr_date;
          } else {
            const fDate = curr_year + '-' + curr_month + '-' + curr_date;
          }
        }
        console.log(fDate);
        const data = new FormData();
        data.append('api_key', 'd947bf06a885db0d477d707121934ff8');
        data.append('date', fDate);
        data.append('sign', stype);
        data.append('timezone', '5.5');
        this._isMounted = true;
        var response = await fetch(
          'https://divineapi.com/api/1.0/get_daily_horoscope.php',
          {
            method: 'POST',
            body: data,
          },
        );
      } else if (type == 'Weekly') {
        const data = new FormData();
        data.append('api_key', 'd947bf06a885db0d477d707121934ff8');
        data.append('sign', stype);
        data.append('week', 'current');
        this._isMounted = true;
        var response = await fetch(
          'https://divineapi.com/api/1.0/get_weekly_horoscope.php',
          {
            method: 'POST',
            body: data,
          },
        );
      } else if (type == 'Monthly') {
        const data = new FormData();
        data.append('api_key', 'd947bf06a885db0d477d707121934ff8');
        data.append('sign', stype);
        data.append('month', 'current');
        this._isMounted = true;
        var response = await fetch(
          'https://divineapi.com/api/1.0/get_monthly_horoscope.php',
          {
            method: 'POST',
            body: data,
          },
        );
      } else {
        const data = new FormData();
        data.append('api_key', 'd947bf06a885db0d477d707121934ff8');
        data.append('sign', stype);
        data.append('year', 'current');

        this._isMounted = true;
        var response = await fetch(
          'https://divineapi.com/api/1.0/get_yearly_horoscope.php',
          {
            method: 'POST',
            body: data,
          },
        );
      }
      const json = await response.json();
      if (this._isMounted) {
        this.setState({first: false});
        console.log('val :', json);
        if (type == 'Daily') {
          this.setState({
            data: json.data.prediction,
            load: false,
            header: this.state.setSign + ' Daily Horoscope',
          });
        } else if (type == 'Weekly') {
          this.setState({
            data: json.data.weekly_horoscope,
            load: false,
            header: this.state.setSign + ' Weekly Horoscope',
          });
        } else if (type == 'Monthly') {
          this.setState({
            data: json.data.monthly_horoscope,
            load: false,
            header: this.state.setSign + ' Monthy Horoscope',
          });
        } else {
          this.setState({
            data: json.data.yearly_horoscope,
            load: false,
            header: this.state.setSign + ' Yearly Horoscope',
          });
        }
        this.setState({len: this.state.data.length});
      }
      // console.log(this.state.data[0]);
    } catch (error) {
      console.error('error : ', error);
    }
  };

  componentDidMount() {
    this.setState({
      setSign: this.props.route.params.sign,
      activeSign: this.props.route.params.ind,
    });
    this.getDailyData(
      this.state.setType,
      type[this.props.route.params.ind].val,
    );
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  render() {
    // console.log('data : ', this.state.data);
    // console.log(
    //   this.props.route.params.sign,
    //   this.state.setSign,
    //   this.state.activeSign,
    //   this.props.route.params.ind,
    // );
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
            Horoscope
          </Text>
        </Appbar>
        <View
          style={{
            backgroundColor: color.primary,
            flex: 1,
            justifyContent: 'center',
          }}>
          {this.state.first ? (
            <ActivityIndicator size={50} style={{alignSelf: 'center'}} />
          ) : (
            <View
              style={{
                flex: 1,
                backgroundColor: color.primary,
                width: '100%',
              }}>
              <View
                style={{
                  marginTop: 10,
                  paddingHorizontal: '5%',
                  paddingBottom: 10,
                  // alignSelf: 'center',
                }}>
                <FlatList
                  horizontal={true}
                  data={Hdata}
                  renderItem={({item, index, separators}) => (
                    <TouchableOpacity
                      style={{
                        paddingHorizontal: 10,
                        paddingVertical: 5,
                        justifyContent: 'center',
                        borderRadius: 8,
                        borderWidth: 1,
                        marginHorizontal: 5,
                        elevation: 10,
                        borderColor: color.secondary,
                        backgroundColor:
                          this.state.active == index
                            ? color.themeColor
                            : color.primary,
                        height: 30,
                        width: 80,
                      }}
                      onPress={() => {
                        this.setState({active: index, setType: item.val});
                        this.getDailyData(item.val, this.state.setSign);
                      }}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: color.secondary,
                          alignSelf: 'center',
                        }}>
                        {item.val}
                      </Text>
                    </TouchableOpacity>
                  )}
                  keyExtractor={(item, ind) => ind}
                />
              </View>
              <View style={{flex: 1, justifyContent: 'center'}}>
                {this.state.load ? (
                  <ActivityIndicator size={50} style={{alignSelf: 'center'}} />
                ) : (
                  <ScrollView>
                    {this.state.len == 0 ? (
                      <View />
                    ) : (
                      <View>
                        <Text
                          style={{
                            fontSize: 18,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                            marginTop: 10,
                          }}>
                          {this.state.header}
                        </Text>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                          }}>
                          <View
                            style={{
                              height: 1,
                              width: 20,
                              backgroundColor: color.secondary,
                              alignSelf: 'center',
                              marginTop: 8,
                              marginHorizontal: 5,
                            }}
                          />

                          <Text
                            style={{
                              fontSize: 14,
                              fontWeight: '300',
                              color: color.secondary,
                              alignSelf: 'center',
                              marginTop: 5,
                            }}>
                            {this.state.date}
                          </Text>
                          <View
                            style={{
                              height: 1,
                              width: 20,
                              backgroundColor: color.secondary,
                              alignSelf: 'center',
                              marginTop: 8,
                              marginHorizontal: 5,
                            }}
                          />
                        </View>
                        <View>
                          <Text
                            style={{
                              fontSize: 14,
                              fontWeight: '400',
                              color: color.secondary,
                              alignSelf: 'center',
                              marginTop: 20,
                              maxWidth: '90%',
                            }}>
                            Emotions: {this.state.data.emotions}
                          </Text>
                          <Text
                            style={{
                              fontSize: 14,
                              fontWeight: '400',
                              color: color.secondary,
                              alignSelf: 'center',
                              marginTop: 10,
                              maxWidth: '90%',
                            }}>
                            Personal: {this.state.data.personal}
                          </Text>
                          <Text
                            style={{
                              fontSize: 14,
                              fontWeight: '400',
                              color: color.secondary,
                              alignSelf: 'center',
                              marginTop: 20,
                              maxWidth: '90%',
                            }}>
                            Travel: {this.state.data.travel}
                          </Text>
                          <Text
                            style={{
                              fontSize: 14,
                              fontWeight: '400',
                              color: color.secondary,
                              alignSelf: 'center',
                              marginTop: 20,
                              maxWidth: '90%',
                            }}>
                            Luck: {this.state.data.luck}
                          </Text>
                          <Text
                            style={{
                              fontSize: 14,
                              fontWeight: '400',
                              color: color.secondary,
                              alignSelf: 'center',
                              marginTop: 20,
                              maxWidth: '90%',
                            }}>
                            Profession: {this.state.data.profession}
                          </Text>
                          <Text
                            style={{
                              fontSize: 14,
                              fontWeight: '400',
                              color: color.secondary,
                              alignSelf: 'center',
                              marginTop: 20,
                              maxWidth: '90%',
                              marginBottom: 10,
                            }}>
                            Health: {this.state.data.health}
                          </Text>
                        </View>
                      </View>
                    )}
                  </ScrollView>
                )}
              </View>
              <View
                style={{
                  bottom: 0,
                  paddingTop: 20,
                  // position: 'absolute',
                  backgroundColor: color.primary,
                }}>
                <FlatList
                  horizontal={true}
                  data={type}
                  renderItem={({item, index, separators}) => (
                    <TouchableOpacity
                      style={{
                        paddingHorizontal: 10,
                        paddingVertical: 5,
                        justifyContent: 'center',
                        borderRadius: 15,
                        borderWidth: 1,
                        elevation: 10,
                        borderColor: color.secondary,
                        backgroundColor:
                          this.state.activeSign == index
                            ? color.themeColor
                            : color.primary,
                        marginHorizontal: 8,
                      }}
                      onPress={() => {
                        this.setState({activeSign: index, setSign: item.val});
                        this.getDailyData(this.state.setType, item.val);
                      }}>
                      <View
                        style={{
                          alignItems: 'center',
                          elevation: 10,
                          marginHorizontal: 10,
                        }}>
                        <View
                          style={{
                            borderRadius: 25,
                            height: 60,
                            width: 60,
                            justifyContent: 'center',
                            padding: 10,
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
                      </View>
                    </TouchableOpacity>
                  )}
                  keyExtractor={(item, ind) => ind}
                />
              </View>
            </View>
          )}
        </View>
      </SafeAreaView>
    );
  }
}

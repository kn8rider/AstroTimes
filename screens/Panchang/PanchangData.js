import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  ActivityIndicator,
  Dimensions,
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
import base64 from 'react-native-base64';
import {DataTable} from 'react-native-paper';
const height = Dimensions.get('window').height;

const userId = '618328';
const apiKey = '51e43ea9a639e025dd62e04a4b7a32e0';
export default class PanchangData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeChat: 0,
      AdPg: [],
      ptData: [],
      horaData: [],
      data: [],
      day: [],
      night: [],
      load: true,
    };
  }
  async getAdvancedPanchang() {
    try {
      console.log('props :', this.props.route.params.data);
      var response = await fetch(
        'https://json.astrologyapi.com/v1/advanced_panchang',
        {
          method: 'POST',
          dataType: 'json',
          headers: {
            Authorization:
              'Basic ' + base64.encode(userId + ':' + apiKey, 'base64'),
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.props.route.params.data),
        },
      );
      const json = await response.json();
      if (response.status == 200) {
        console.log('pgdata :', json);
        this.setState({
          AdPg: json,
          load: false,
        });
        this.getPlanets();
      } else {
        // this.props.navigation.navigate('error');
        this.setState({
          load: true,
        });
      }
    } catch (error) {
      console.log(error);
      // this.props.navigation.navigate('error');
    }
  }
  async getPlanets() {
    try {
      var response = await fetch('https://json.astrologyapi.com/v1/planets', {
        method: 'POST',
        dataType: 'json',
        headers: {
          Authorization:
            'Basic ' + base64.encode(userId + ':' + apiKey, 'base64'),
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.props.route.params.data),
      });

      const json = await response.json();
      if (response.status == 200) {
        console.log('planetData :', json);
        this.setState({
          ptData: json,
        });
        this.getHora();
      } else {
        // this.props.navigation.navigate('error');
      }
    } catch (error) {
      console.log('error : ', error);
      // this.props.navigation.navigate('error');
    }
  }
  async getHora() {
    try {
      console.log('hData : ', this.props.route.params.data);
      var response = await fetch(
        'https://json.astrologyapi.com/v1/hora_muhurta',
        {
          method: 'POST',
          dataType: 'json',
          headers: {
            Authorization:
              'Basic ' + base64.encode(userId + ':' + apiKey, 'base64'),
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.props.route.params.data),
        },
      );

      const json = await response.json();
      if (response.status == 200) {
        console.log('HoraData :', json);
        this.setState({
          horaData: json,
          day: json.hora?.day,
          night: json.hora?.night,
        });
      } else {
        // this.props.navigation.navigate('error');
      }
    } catch (error) {
      console.log('error : ', error);
      // this.props.navigation.navigate('error');
    }
  }

  componentDidMount() {
    this.setState({
      data: this.props.route.params.data,
    });
    this.getAdvancedPanchang();
    // console.log('comp : ', this.props.route.params.data);
  }
  render() {
    console.log(this.state.AdPg);
    // console.log('render: ', this.props.route.params.data);
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
            Panchang
          </Text>
        </Appbar>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            backgroundColor: 'black ',
            flex: 1,
          }}>
          <View
            horizontal={true}
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              height: 40,
              width: 400,
              alignSelf: 'center',
              borderWidth: 1,
              borderColor: 'white',
              borderRadius: 10,
              marginTop: 10,
            }}>
            <TouchableOpacity
              style={{
                width: 139,
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
              <Text style={{fontSize: 15, fontWeight: '400', color: 'white'}}>
                Panchang Details
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 139,
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
              <Text style={{fontSize: 15, fontWeight: '500', color: 'white'}}>
                Planetary Positions
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 119,
                height: '98%',
                borderRadius: 10,
                backgroundColor:
                  this.state.activeChat == 2 ? '#FABD0B' : 'black',
                justifyContent: 'center',
                borderWidth: this.state.activeChat == 2 ? 1 : 0,
                borderColor: 'white',
                alignItems: 'center',
              }}
              onPress={() => this.setState({activeChat: 2})}>
              <Text style={{fontSize: 15, fontWeight: '500', color: 'white'}}>
                Hora Muhurta
              </Text>
            </TouchableOpacity>
          </View>
          {this.state.load == true ? (
            <ActivityIndicator
              style={{
                alignSelf: 'center',
                marginTop: height / 3,
              }}
              size="large"
              color="#4A3C8C"
            />
          ) : (
            <View>
              {this.state.activeChat == 1 ? (
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  style={{
                    borderColor: 'white',
                    borderWidth: 1,
                    borderRadius: 10,
                    alignSelf: 'center',
                    marginTop: 20,
                    marginBottom: 50,
                  }}>
                  <View>
                    <DataTable>
                      <DataTable.Header
                        style={{
                          backgroundColor: '#FABD0B',
                          borderTopRightRadius: 10,
                          borderTopLeftRadius: 10,
                        }}>
                        <DataTable.Title>
                          <Text
                            style={{
                              fontSize: 17,
                              fontWeight: '500',
                              color: 'white',
                            }}>
                            Name
                          </Text>
                        </DataTable.Title>
                        <DataTable.Title>
                          <Text
                            style={{
                              fontSize: 17,
                              fontWeight: '500',
                              color: 'white',
                            }}>
                            Sign
                          </Text>
                        </DataTable.Title>
                        <DataTable.Title style={{}}>
                          <Text
                            style={{
                              fontSize: 17,
                              fontWeight: '500',
                              color: 'white',
                              marginLeft: 30,
                            }}>
                            Sign Lord
                          </Text>
                        </DataTable.Title>
                        <DataTable.Title style={{}}>
                          <Text
                            style={{
                              fontSize: 17,
                              fontWeight: '500',
                              color: 'white',
                            }}>
                            Full Degree
                          </Text>
                        </DataTable.Title>
                        <DataTable.Title style={{}}>
                          <Text
                            style={{
                              fontSize: 17,
                              fontWeight: '500',
                              color: 'white',
                            }}>
                            Speed
                          </Text>
                        </DataTable.Title>
                        <DataTable.Title style={{}}>
                          <Text
                            style={{
                              fontSize: 17,
                              fontWeight: '500',
                              color: 'white',
                            }}>
                            House
                          </Text>
                        </DataTable.Title>
                        <DataTable.Title style={{}}>
                          <Text
                            style={{
                              fontSize: 17,
                              fontWeight: '500',
                              color: 'white',
                            }}>
                            Is_Retro
                          </Text>
                        </DataTable.Title>
                        <DataTable.Title style={{}}>
                          <Text
                            style={{
                              fontSize: 17,
                              fontWeight: '500',
                              color: 'white',
                            }}>
                            Is_Planet Set
                          </Text>
                        </DataTable.Title>
                        <DataTable.Title style={{}}>
                          <Text
                            style={{
                              fontSize: 17,
                              fontWeight: '500',
                              color: 'white',
                            }}>
                            Nakshatra
                          </Text>
                        </DataTable.Title>
                        <DataTable.Title style={{}}>
                          <Text
                            style={{
                              fontSize: 17,
                              fontWeight: '500',
                              color: 'white',
                            }}>
                            Nakshatra Lord
                          </Text>
                        </DataTable.Title>
                        <DataTable.Title style={{}}>
                          <Text
                            style={{
                              fontSize: 17,
                              fontWeight: '500',
                              color: 'white',
                            }}>
                            Nakshatra Pad
                          </Text>
                        </DataTable.Title>
                        <DataTable.Title style={{}}>
                          <Text
                            style={{
                              fontSize: 17,
                              fontWeight: '500',
                              color: 'white',
                            }}>
                            Norm Degree
                          </Text>
                        </DataTable.Title>
                        <DataTable.Title style={{}}>
                          <Text
                            style={{
                              fontSize: 17,
                              fontWeight: '500',
                              color: 'white',
                            }}>
                            Planet Awastha
                          </Text>
                        </DataTable.Title>
                      </DataTable.Header>
                      {this.state.ptData?.map((item, index) => (
                        <DataTable.Row key={index}>
                          <DataTable.Cell style={{width: 100}}>
                            <Text
                              style={{
                                fontSize: 15,
                                fontWeight: '400',
                                color: 'white',
                              }}>
                              {item.name}
                            </Text>
                          </DataTable.Cell>
                          <DataTable.Cell style={{width: 200, marginLeft: 40}}>
                            <Text
                              style={{
                                fontSize: 15,
                                fontWeight: '400',
                                color: 'white',
                              }}>
                              {item.sign}
                            </Text>
                          </DataTable.Cell>
                          <DataTable.Cell style={{width: 100}}>
                            <Text
                              style={{
                                fontSize: 15,
                                fontWeight: '400',
                                color: 'white',
                                alignSelf: 'center',
                              }}>
                              {item.signLord}
                            </Text>
                          </DataTable.Cell>
                          <DataTable.Cell style={{width: 200}}>
                            <Text
                              style={{
                                fontSize: 15,
                                fontWeight: '400',
                                color: 'white',
                                alignSelf: 'center',
                              }}>
                              {item.fullDegree}
                            </Text>
                          </DataTable.Cell>
                          <DataTable.Cell style={{width: 200}}>
                            <Text
                              style={{
                                fontSize: 15,
                                fontWeight: '400',
                                color: 'white',
                                alignSelf: 'center',
                              }}>
                              {item.speed}
                            </Text>
                          </DataTable.Cell>

                          <DataTable.Cell style={{width: 100, marginLeft: -20}}>
                            <Text
                              style={{
                                fontSize: 15,
                                fontWeight: '400',
                                color: 'white',
                                alignSelf: 'center',
                              }}>
                              {item.house}
                            </Text>
                          </DataTable.Cell>
                          <DataTable.Cell style={{width: 200}}>
                            <Text
                              style={{
                                fontSize: 15,
                                fontWeight: '400',
                                color: 'white',
                                alignSelf: 'center',
                              }}>
                              {item.isRetro.toString()}
                            </Text>
                          </DataTable.Cell>
                          <DataTable.Cell style={{width: 200}}>
                            <Text
                              style={{
                                fontSize: 15,
                                fontWeight: '400',
                                color: 'white',
                                alignSelf: 'center',
                              }}>
                              {item.is_planet_set.toString()}
                            </Text>
                          </DataTable.Cell>
                          <DataTable.Cell style={{width: 200}}>
                            <Text
                              style={{
                                fontSize: 15,
                                fontWeight: '400',
                                color: 'white',
                                alignSelf: 'center',
                              }}>
                              {item.nakshatra}
                            </Text>
                          </DataTable.Cell>
                          <DataTable.Cell style={{width: 200}}>
                            <Text
                              style={{
                                fontSize: 15,
                                fontWeight: '400',
                                color: 'white',
                                alignSelf: 'center',
                              }}>
                              {item.nakshatraLord}
                            </Text>
                          </DataTable.Cell>
                          <DataTable.Cell style={{width: 200}}>
                            <Text
                              style={{
                                fontSize: 15,
                                fontWeight: '400',
                                color: 'white',
                                alignSelf: 'center',
                              }}>
                              {item.nakshatra_pad}
                            </Text>
                          </DataTable.Cell>
                          <DataTable.Cell style={{width: 200}}>
                            <Text
                              style={{
                                fontSize: 15,
                                fontWeight: '400',
                                color: 'white',
                                alignSelf: 'center',
                              }}>
                              {item.normDegree}
                            </Text>
                          </DataTable.Cell>
                          <DataTable.Cell style={{width: 200}}>
                            <Text
                              style={{
                                fontSize: 15,
                                fontWeight: '400',
                                color: 'white',
                                alignSelf: 'center',
                              }}>
                              {item.planet_awastha}
                            </Text>
                          </DataTable.Cell>
                        </DataTable.Row>
                      ))}
                    </DataTable>
                  </View>
                </ScrollView>
              ) : this.state.activeChat == 2 ? (
                <View>
                  <Text
                    style={{
                      color: 'white',
                      fontWeight: '500',
                      fontSize: 20,
                      textAlign: 'center',
                      marginTop: 20,
                    }}>
                    Day
                  </Text>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{
                      borderColor: 'white',
                      borderWidth: 1,
                      borderRadius: 10,
                      alignSelf: 'center',
                      marginTop: 20,
                      marginBottom: 50,
                    }}>
                    <View>
                      <DataTable>
                        <DataTable.Header
                          style={{
                            backgroundColor: '#FABD0B',
                            borderTopRightRadius: 10,
                            borderTopLeftRadius: 10,
                          }}>
                          <DataTable.Title>
                            <Text
                              style={{
                                fontSize: 17,
                                fontWeight: '500',
                                color: 'white',
                              }}>
                              Hora
                            </Text>
                          </DataTable.Title>
                          <DataTable.Title>
                            <Text
                              style={{
                                fontSize: 17,
                                fontWeight: '500',
                                color: 'white',
                              }}>
                              Time
                            </Text>
                          </DataTable.Title>
                        </DataTable.Header>
                        {this.state.day?.map((item, index) => (
                          <DataTable.Row key={index}>
                            <DataTable.Cell style={{width: 150}}>
                              <Text
                                style={{
                                  fontSize: 15,
                                  fontWeight: '400',
                                  color: 'white',
                                }}>
                                {item.hora}
                              </Text>
                            </DataTable.Cell>
                            <DataTable.Cell style={{width: 200}}>
                              <Text
                                style={{
                                  fontSize: 15,
                                  fontWeight: '400',
                                  color: 'white',
                                }}>
                                {item.time}
                              </Text>
                            </DataTable.Cell>
                          </DataTable.Row>
                        ))}
                      </DataTable>
                    </View>
                  </ScrollView>
                  <Text
                    style={{
                      color: 'white',
                      fontWeight: '500',
                      fontSize: 20,
                      textAlign: 'center',
                      marginTop: 20,
                    }}>
                    Night
                  </Text>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{
                      borderColor: 'white',
                      borderWidth: 1,
                      borderRadius: 10,
                      alignSelf: 'center',
                      marginTop: 20,
                      marginBottom: 50,
                    }}>
                    <View>
                      <DataTable>
                        <DataTable.Header
                          style={{
                            backgroundColor: '#FABD0B',
                            borderTopRightRadius: 10,
                            borderTopLeftRadius: 10,
                          }}>
                          <DataTable.Title>
                            <Text
                              style={{
                                fontSize: 17,
                                fontWeight: '500',
                                color: 'white',
                              }}>
                              Hora
                            </Text>
                          </DataTable.Title>
                          <DataTable.Title>
                            <Text
                              style={{
                                fontSize: 17,
                                fontWeight: '500',
                                color: 'white',
                              }}>
                              Time
                            </Text>
                          </DataTable.Title>
                        </DataTable.Header>
                        {this.state.night?.map((item, index) => (
                          <DataTable.Row key={index}>
                            <DataTable.Cell style={{width: 150}}>
                              <Text
                                style={{
                                  fontSize: 15,
                                  fontWeight: '400',
                                  color: 'white',
                                }}>
                                {item.hora}
                              </Text>
                            </DataTable.Cell>
                            <DataTable.Cell style={{width: 200}}>
                              <Text
                                style={{
                                  fontSize: 15,
                                  fontWeight: '400',
                                  color: 'white',
                                }}>
                                {item.time}
                              </Text>
                            </DataTable.Cell>
                          </DataTable.Row>
                        ))}
                      </DataTable>
                    </View>
                  </ScrollView>
                </View>
              ) : (
                <View style={{paddingHorizontal: '5%'}}>
                  <Text
                    style={{
                      marginTop: 20,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    Day : {'      '}
                    {this.state.AdPg?.day}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    Sunrise : {'      '}
                    {this.state.AdPg?.sunrise}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    Sunset : {'      '}
                    {this.state.AdPg?.sunset}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    Moonrise : {'      '}
                    {this.state.AdPg?.moonrise}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    Moonset : {'      '}
                    {this.state.AdPg?.moonrise}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    Vedic Sunrise : {'      '}
                    {this.state.AdPg?.vedic_sunrise}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    Vedic Sunset : {'      '}
                    {this.state.AdPg?.vedic_sunset}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    Paksha : {'      '}
                    {this.state.AdPg?.paksha}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    Ritu : {'      '}
                    {this.state.AdPg?.ritu}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    Sun Sign : {'      '}
                    {this.state.AdPg?.sun_sign}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    Moon Sign : {'      '}
                    {this.state.AdPg?.moon_sign}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    Ayana : {'      '}
                    {this.state.AdPg?.ayana}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    Panchang Yog : {'      '}
                    {this.state.AdPg?.panchang_yog}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    Vikram Samvat : {'      '}
                    {this.state.AdPg?.vikram_samvat}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    Shaka Samvat : {'      '}
                    {this.state.AdPg?.shaka_samvat}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    Vikram Samvat Name : {'      '}
                    {this.state.AdPg?.vkram_samvat_name}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    Shaka Samvat Name : {'      '}
                    {this.state.AdPg?.shaka_samvat_name}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    Disha Shool : {'      '}
                    {this.state.AdPg?.disha_shool}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    Disha Shool Remedies : {'      '}
                    {this.state.AdPg?.disha_shool_remedies}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    Moon Nivas : {'      '}
                    {this.state.AdPg?.moon_nivas}
                  </Text>

                  <Text
                    style={{
                      marginTop: 20,
                      fontSize: 20,
                      fontWeight: '500',
                      color: 'white',
                      textAlign: 'center',
                    }}>
                    Tithi
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    end_time_ms : {'      '}
                    {this.state.AdPg?.tithi?.end_time_ms}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    Details : {'      '}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    Tithi Number : {'      '}
                    {this.state.AdPg?.tithi?.details?.tithi_number}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    Tithi Name : {'      '}
                    {this.state.AdPg?.tithi?.details?.tithi_name}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    Special : {'      '}
                    {this.state.AdPg?.tithi?.details?.special}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    Summary: {'      '}
                    {this.state.AdPg?.tithi?.details?.summary}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    Deity : {'      '}
                    {this.state.AdPg?.tithi?.details?.deity}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    End Time : {'      '}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    Hour : {'      '}
                    {this.state.AdPg?.tithi?.end_time?.hour}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    Minute : {'      '}
                    {this.state.AdPg?.tithi?.end_time?.minute}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    Second : {'      '}
                    {this.state.AdPg?.tithi?.end_time?.second}
                  </Text>
                  <Text
                    style={{
                      marginTop: 20,
                      fontSize: 20,
                      fontWeight: '500',
                      color: 'white',
                      textAlign: 'center',
                    }}>
                    Nakshatra
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    end_time_ms : {'      '}
                    {this.state.AdPg?.nakshatra?.end_time_ms}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    Details : {'      '}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    Nakshatra Number : {'      '}
                    {this.state.AdPg?.nakshatra?.details?.nak_number}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    Nakshatra Name : {'      '}
                    {this.state.AdPg?.nakshatra?.details?.nak_name}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    Special : {'      '}
                    {this.state.AdPg?.nakshatra?.details?.special}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    Summary: {'      '}
                    {this.state.AdPg?.nakshatra?.details?.summary}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    Deity : {'      '}
                    {this.state.AdPg?.nakshatra?.details?.deity}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    End Time : {'      '}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    Hour : {'      '}
                    {this.state.AdPg?.nakshatra?.end_time?.hour}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    Minute : {'      '}
                    {this.state.AdPg?.nakshatra?.end_time?.minute}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    Second : {'      '}
                    {this.state.AdPg?.nakshatra?.end_time?.second}
                  </Text>
                  <Text
                    style={{
                      marginTop: 20,
                      fontSize: 20,
                      fontWeight: '500',
                      color: 'white',
                      textAlign: 'center',
                    }}>
                    Yog
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    end_time_ms : {'      '}
                    {this.state.AdPg?.yog?.end_time_ms}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    Details : {'      '}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    Yog Number : {'      '}
                    {this.state.AdPg?.yog?.details?.yog_number}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    Yog Name : {'      '}
                    {this.state.AdPg?.yog?.details?.yog_name}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    Special : {'      '}
                    {this.state.AdPg?.yog?.details?.special}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    Meaning: {'      '}
                    {this.state.AdPg?.yog?.details?.meaning}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    End Time : {'      '}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    Hour : {'      '}
                    {this.state.AdPg?.yog?.end_time?.hour}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    Minute : {'      '}
                    {this.state.AdPg?.yog?.end_time?.minute}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    Second : {'      '}
                    {this.state.AdPg?.yog?.end_time?.second}
                  </Text>
                  <Text
                    style={{
                      marginTop: 20,
                      fontSize: 20,
                      fontWeight: '500',
                      color: 'white',
                      textAlign: 'center',
                    }}>
                    Karan
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    end_time_ms : {'      '}
                    {this.state.AdPg?.karan?.end_time_ms}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    Details : {'      '}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    Karan Number : {'      '}
                    {this.state.AdPg?.karan?.details?.karan_number}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    Karan Name : {'      '}
                    {this.state.AdPg?.karan?.details?.karan_name}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    Special : {'      '}
                    {this.state.AdPg?.karan?.details?.special}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    Deity : {'      '}
                    {this.state.AdPg?.karan?.details?.deity}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    End Time : {'      '}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    Hour : {'      '}
                    {this.state.AdPg?.karan?.end_time?.hour}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    Minute : {'      '}
                    {this.state.AdPg?.karan?.end_time?.minute}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    Second : {'      '}
                    {this.state.AdPg?.karan?.end_time?.second}
                  </Text>
                  <Text
                    style={{
                      marginTop: 20,
                      fontSize: 20,
                      fontWeight: '500',
                      color: 'white',
                      textAlign: 'center',
                    }}>
                    Hindu Mah
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    Adhik Status : {'      '}
                    {this.state.AdPg?.hindu_maah?.adhik_status.toString()}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    Purnimanta : {'      '}
                    {this.state.AdPg?.hindu_maah?.purnimanta}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    Amanta : {'      '}
                    {this.state.AdPg?.hindu_maah?.amanta}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    Amanta id : {'      '}
                    {this.state.AdPg?.hindu_maah?.amanta_id}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    Purnimanta Id : {'      '}
                    {this.state.AdPg?.hindu_maah?.purnimanta_id}
                  </Text>
                  <Text
                    style={{
                      marginTop: 20,
                      fontSize: 20,
                      fontWeight: '500',
                      color: 'white',
                      textAlign: 'center',
                    }}>
                    Nak Shool
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    Direction : {'      '}
                    {this.state.AdPg?.nak_shool?.direction}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    Remedies : {'      '}
                    {this.state.AdPg?.nak_shool?.remedies}
                  </Text>
                  <Text
                    style={{
                      marginTop: 20,
                      fontSize: 20,
                      fontWeight: '500',
                      color: 'white',
                      textAlign: 'center',
                    }}>
                    Abhijit Muhurta
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    Start : {'      '}
                    {this.state.AdPg?.abhijit_muhurta?.start}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    End : {'      '}
                    {this.state.AdPg?.abhijit_muhurta?.end}
                  </Text>
                  <Text
                    style={{
                      marginTop: 20,
                      fontSize: 20,
                      fontWeight: '500',
                      color: 'white',
                      textAlign: 'center',
                    }}>
                    Rahukaal
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    Start : {'      '}
                    {this.state.AdPg?.rahukaal?.start}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    End : {'      '}
                    {this.state.AdPg?.rahukaal?.end}
                  </Text>
                  <Text
                    style={{
                      marginTop: 20,
                      fontSize: 20,
                      fontWeight: '500',
                      color: 'white',
                      textAlign: 'center',
                    }}>
                    GuliKaal
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    Start : {'      '}
                    {this.state.AdPg?.guliKaal?.start}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    End : {'      '}
                    {this.state.AdPg?.guliKaal?.end}
                  </Text>
                  <Text
                    style={{
                      marginTop: 20,
                      fontSize: 20,
                      fontWeight: '500',
                      color: 'white',
                      textAlign: 'center',
                    }}>
                    Yamghant Kaal
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                    }}>
                    Start : {'      '}
                    {this.state.AdPg?.yamghant_kaal?.start}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontWeight: '400',
                      color: 'white',
                      marginBottom: 30,
                    }}>
                    End : {'      '}
                    {this.state.AdPg?.yamghant_kaal?.end}
                  </Text>
                </View>
              )}
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

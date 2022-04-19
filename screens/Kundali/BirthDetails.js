import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
const height = Dimensions.get('window').height;
import base64 from 'react-native-base64';
import {DataTable} from 'react-native-paper';
import color from '../GlobalVariables';
color;
const userId = '618328';
const apiKey = '51e43ea9a639e025dd62e04a4b7a32e0';
export default class BirthDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeChat: 0,
      birthDetails: [],
      astroDetails: [],
      ghatDetails: [],
      data: [],
      planetData: [],
      setPlanet: 0,
      load: true,
    };
  }
  async getBirthDetails() {
    try {
      console.log('props :', this.props.data);
      var response = await fetch(
        'https://json.astrologyapi.com/v1/birth_details ',
        {
          method: 'POST',
          dataType: 'json',
          headers: {
            Authorization:
              'Basic ' + base64.encode(userId + ':' + apiKey, 'base64'),
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.props.data),
        },
      );
      const json = await response.json();
      if (response.status == 200) {
        console.log('bdata :', json);
        this.setState({
          birthDetails: json,
          load: false,
        });
        this.getAstroDetails();
      } else {
        // this.props.navigation.navigate('error');
      }
    } catch (error) {
      console.log(error);
      // this.props.navigation.navigate('error');
    }
  }
  async getAstroDetails() {
    try {
      var response = await fetch(
        'https://json.astrologyapi.com/v1/astro_details',
        {
          method: 'POST',
          dataType: 'json',
          headers: {
            Authorization:
              'Basic ' + base64.encode(userId + ':' + apiKey, 'base64'),
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.props.data),
        },
      );

      const json = await response.json();
      if (response.status == 200) {
        console.log('data :', json);
        this.setState({
          astroDetails: json,
        });
        this.getGhatDetails();
      } else {
        // this.props.navigation.navigate('error');
      }
    } catch (error) {
      console.log('error : ', error);
      // this.props.navigation.navigate('error');
    }
  }
  async getGhatDetails() {
    try {
      console.log('gData : ', this.props.data);
      var response = await fetch(
        'https://json.astrologyapi.com/v1/ghat_chakra',
        {
          method: 'POST',
          dataType: 'json',
          headers: {
            Authorization:
              'Basic ' + base64.encode(userId + ':' + apiKey, 'base64'),
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.props.data),
        },
      );

      const json = await response.json();
      if (response.status == 200) {
        console.log('data1 :', json);
        this.setState({
          ghatDetails: json,
        });
        this.getPlanetData();
      } else {
        // this.props.navigation.navigate('error');
      }
    } catch (error) {
      console.log('error : ', error);
      // this.props.navigation.navigate('error');
    }
  }
  async getPlanetData() {
    try {
      var response = await fetch('https://json.astrologyapi.com/v1/planets ', {
        method: 'POST',
        dataType: 'json',
        headers: {
          Authorization:
            'Basic ' + base64.encode(userId + ':' + apiKey, 'base64'),
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.props.data),
      });

      const json = await response.json();
      if (response.status == 200) {
        console.log('data2 :', json);
        this.setState({
          planetData: json,
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
      data: this.props.data,
    });
    this.getBirthDetails();
    // console.log('comp : ', this.props.data);
  }
  render() {
    // if (this.state.activeChat == 3) {
    //   console.log(this.state.ghatDetails);
    // }
    // console.log(this.props.route.params);
    // console.log('render: ', this.props.data);
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: color.primary}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            backgroundColor: color.primary,
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
              borderColor: color.secondary,
              borderRadius: 10,
              marginTop: 10,
            }}>
            <TouchableOpacity
              style={{
                width: 99,
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
                  fontSize: 15,
                  fontWeight: '400',
                  color: color.secondary,
                }}>
                Birth Details
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 99,
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
                  fontSize: 15,
                  fontWeight: '500',
                  color: color.secondary,
                }}>
                Astro Details
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 99,
                height: '98%',
                borderRadius: 10,
                backgroundColor:
                  this.state.activeChat == 2 ? color.themeColor : color.primary,
                justifyContent: 'center',
                borderWidth: this.state.activeChat == 2 ? 1 : 0,
                borderColor: color.secondary,
                alignItems: 'center',
              }}
              onPress={() => this.setState({activeChat: 2})}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '500',
                  color: color.secondary,
                }}>
                Ghat Chakra
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 99,
                height: '98%',
                borderRadius: 10,
                backgroundColor:
                  this.state.activeChat == 3 ? color.themeColor : color.primary,
                justifyContent: 'center',
                borderWidth: this.state.activeChat == 3 ? 1 : 0,
                borderColor: color.secondary,
                alignItems: 'center',
              }}
              onPress={() => this.setState({activeChat: 3})}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '400',
                  color: color.secondary,
                }}>
                Planets
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
              {this.state.activeChat == 3 ? (
                <View
                  horizontal={true}
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
                    marginTop: 20,
                  }}>
                  <TouchableOpacity
                    style={{
                      width: 149,
                      height: '99%',
                      borderRadius: 10,
                      backgroundColor:
                        this.state.setPlanet == 0
                          ? color.themeColor
                          : color.primary,
                      justifyContent: 'center',
                      borderWidth: this.state.setPlanet == 0 ? 1 : 0,
                      borderColor: color.secondary,
                      alignItems: 'center',
                    }}
                    onPress={() => this.setState({setPlanet: 0})}>
                    <Text
                      style={{
                        fontSize: 17,
                        fontWeight: '400',
                        color: color.secondary,
                      }}>
                      Sign
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      width: 149,
                      height: '99%',
                      borderRadius: 10,
                      backgroundColor:
                        this.state.setPlanet == 1
                          ? color.themeColor
                          : color.primary,
                      justifyContent: 'center',
                      borderWidth: this.state.setPlanet == 1 ? 1 : 0,
                      borderColor: color.secondary,
                      alignItems: 'center',
                    }}
                    onPress={() => this.setState({setPlanet: 1})}>
                    <Text
                      style={{
                        fontSize: 17,
                        fontWeight: '500',
                        color: color.secondary,
                      }}>
                      Nakshatra
                    </Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <></>
              )}
              {this.state.activeChat == 0 ? (
                <View
                  style={{
                    borderColor: color.secondary,
                    borderWidth: 1,
                    borderRadius: 10,
                    alignSelf: 'center',
                    width: '90%',
                    marginTop: 20,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      padding: 10,
                    }}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                        marginLeft: 10,
                      }}>
                      Year
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                        position: 'absolute',
                        left: 200,
                        maxWidth: '45%',
                        alignSelf: 'center',
                      }}>
                      {this.state.birthDetails.year}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      padding: 10,
                    }}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                        marginLeft: 10,
                      }}>
                      Month
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,

                        position: 'absolute',
                        left: 200,
                        alignSelf: 'center',
                        // textAlign: 'center',
                        maxWidth: '45%',
                      }}>
                      {this.state.birthDetails.month}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      padding: 10,
                    }}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                        marginLeft: 10,
                      }}>
                      Date
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                        position: 'absolute',
                        left: 200,
                        // textAlign: 'center',
                        maxWidth: '45%',
                        alignSelf: 'center',
                      }}>
                      {this.state.birthDetails.day}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      padding: 10,
                    }}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                        marginLeft: 10,
                      }}>
                      Hour
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                        position: 'absolute',
                        left: 200,
                        // textAlign: 'center',
                        alignSelf: 'center',
                        maxWidth: '45%',
                      }}>
                      {this.state.birthDetails.hour}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      padding: 10,
                    }}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                        marginLeft: 10,
                      }}>
                      Minutes
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                        position: 'absolute',
                        left: 200,
                        // textAlign: 'center',
                        alignSelf: 'center',
                        maxWidth: '45%',
                      }}>
                      {this.state.birthDetails.minute}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      padding: 10,
                    }}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                        marginLeft: 10,
                      }}>
                      Seconds
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                        position: 'absolute',
                        left: 200,
                        // textAlign: 'center',
                        alignSelf: 'center',
                        maxWidth: '45%',
                      }}>
                      {this.state.birthDetails.seconds}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      padding: 10,
                    }}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                        marginLeft: 10,
                      }}>
                      Latitude
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                        position: 'absolute',
                        left: 200,
                        // textAlign: 'center',
                        alignSelf: 'center',
                        maxWidth: '45%',
                      }}>
                      {this.state.birthDetails.latitude}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      padding: 10,
                    }}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                        marginLeft: 10,
                      }}>
                      Longitude
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                        position: 'absolute',
                        left: 200,
                        // textAlign: 'center',
                        alignSelf: 'center',
                        maxWidth: '45%',
                      }}>
                      {this.state.birthDetails.longitude}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      padding: 10,
                    }}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                        marginLeft: 10,
                      }}>
                      Timezone
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                        position: 'absolute',
                        left: 200,
                        // textAlign: 'center',
                        alignSelf: 'center',
                        maxWidth: '45%',
                      }}>
                      {this.state.birthDetails.timezone}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      padding: 10,
                    }}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                        marginLeft: 10,
                      }}>
                      Ayanamsha
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                        position: 'absolute',
                        left: 200,
                        // textAlign: 'center',
                        alignSelf: 'center',
                        maxWidth: '45%',
                      }}>
                      {this.state.birthDetails.ayanamsha}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      padding: 10,
                    }}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                        marginLeft: 10,
                      }}>
                      Sunrise
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                        position: 'absolute',
                        left: 200,
                        // textAlign: 'center',
                        alignSelf: 'center',
                        maxWidth: '45%',
                      }}>
                      {this.state.birthDetails.sunrise}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      padding: 10,
                    }}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                        marginLeft: 10,
                      }}>
                      Sunset
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                        position: 'absolute',
                        left: 200,
                        // textAlign: 'center',
                        alignSelf: 'center',
                        maxWidth: '45%',
                      }}>
                      {this.state.birthDetails.sunset}
                    </Text>
                  </View>
                </View>
              ) : (
                <View>
                  {this.state.activeChat == 1 ? (
                    <View
                      style={{
                        borderColor: color.secondary,
                        borderWidth: 1,
                        borderRadius: 10,
                        alignSelf: 'center',
                        width: '90%',
                        marginTop: 20,
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          padding: 10,
                        }}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            marginLeft: 10,
                          }}>
                          Ascendant
                        </Text>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            position: 'absolute',
                            left: 200,
                            maxWidth: '45%',
                            alignSelf: 'center',
                          }}>
                          {this.state.astroDetails.ascendant}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          padding: 10,
                        }}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            marginLeft: 10,
                          }}>
                          Ascendant Lord
                        </Text>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,

                            position: 'absolute',
                            left: 200,
                            alignSelf: 'center',
                            // textAlign: 'center',
                            maxWidth: '45%',
                          }}>
                          {this.state.astroDetails.ascendant_lord}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          padding: 10,
                        }}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            marginLeft: 10,
                          }}>
                          Varna
                        </Text>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            position: 'absolute',
                            left: 200,
                            // textAlign: 'center',
                            maxWidth: '45%',
                            alignSelf: 'center',
                          }}>
                          {this.state.astroDetails.Varna}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          padding: 10,
                        }}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            marginLeft: 10,
                          }}>
                          Vashya
                        </Text>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            position: 'absolute',
                            left: 200,
                            // textAlign: 'center',
                            alignSelf: 'center',
                            maxWidth: '45%',
                          }}>
                          {this.state.astroDetails.Vashya}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          padding: 10,
                        }}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            marginLeft: 10,
                          }}>
                          Yoni
                        </Text>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            position: 'absolute',
                            left: 200,
                            // textAlign: 'center',
                            alignSelf: 'center',
                            maxWidth: '45%',
                          }}>
                          {this.state.astroDetails.Yoni}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          padding: 10,
                        }}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            marginLeft: 10,
                          }}>
                          Gan
                        </Text>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            position: 'absolute',
                            left: 200,
                            // textAlign: 'center',
                            alignSelf: 'center',
                            maxWidth: '45%',
                          }}>
                          {this.state.astroDetails.Gan}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          padding: 10,
                        }}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            marginLeft: 10,
                          }}>
                          Nadi
                        </Text>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            position: 'absolute',
                            left: 200,
                            // textAlign: 'center',
                            alignSelf: 'center',
                            maxWidth: '45%',
                          }}>
                          {this.state.astroDetails.Nadi}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          padding: 10,
                        }}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            marginLeft: 10,
                          }}>
                          SignLord
                        </Text>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            position: 'absolute',
                            left: 200,
                            // textAlign: 'center',
                            alignSelf: 'center',
                            maxWidth: '45%',
                          }}>
                          {this.state.astroDetails.SignLord}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          padding: 10,
                        }}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            marginLeft: 10,
                          }}>
                          sign
                        </Text>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            position: 'absolute',
                            left: 200,
                            // textAlign: 'center',
                            alignSelf: 'center',
                            maxWidth: '45%',
                          }}>
                          {this.state.astroDetails.sign}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          padding: 10,
                        }}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            marginLeft: 10,
                          }}>
                          Naksahtra
                        </Text>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            position: 'absolute',
                            left: 200,
                            // textAlign: 'center',
                            alignSelf: 'center',
                            maxWidth: '45%',
                          }}>
                          {this.state.astroDetails.Naksahtra}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          padding: 10,
                        }}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            marginLeft: 10,
                          }}>
                          NaksahtraLord
                        </Text>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            position: 'absolute',
                            left: 200,
                            // textAlign: 'center',
                            alignSelf: 'center',
                            maxWidth: '45%',
                          }}>
                          {this.state.astroDetails.NaksahtraLord}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          padding: 10,
                        }}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            marginLeft: 10,
                          }}>
                          Charan
                        </Text>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            position: 'absolute',
                            left: 200,
                            // textAlign: 'center',
                            alignSelf: 'center',
                            maxWidth: '45%',
                          }}>
                          {this.state.astroDetails.Charan}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          padding: 10,
                        }}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            marginLeft: 10,
                          }}>
                          Yog
                        </Text>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            position: 'absolute',
                            left: 200,
                            // textAlign: 'center',
                            alignSelf: 'center',
                            maxWidth: '45%',
                          }}>
                          {this.state.astroDetails.Yog}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          padding: 10,
                        }}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            marginLeft: 10,
                          }}>
                          Karan
                        </Text>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            position: 'absolute',
                            left: 200,
                            // textAlign: 'center',
                            alignSelf: 'center',
                            maxWidth: '45%',
                          }}>
                          {this.state.astroDetails.Karan}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          padding: 10,
                        }}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            marginLeft: 10,
                          }}>
                          Tithi
                        </Text>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            position: 'absolute',
                            left: 200,
                            // textAlign: 'center',
                            alignSelf: 'center',
                            maxWidth: '45%',
                          }}>
                          {this.state.astroDetails.Tithi}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          padding: 10,
                        }}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            marginLeft: 10,
                          }}>
                          Yunja
                        </Text>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            position: 'absolute',
                            left: 200,
                            // textAlign: 'center',
                            alignSelf: 'center',
                            maxWidth: '45%',
                          }}>
                          {this.state.astroDetails.yunja}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          padding: 10,
                        }}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            marginLeft: 10,
                          }}>
                          Tatva
                        </Text>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            position: 'absolute',
                            left: 200,
                            // textAlign: 'center',
                            alignSelf: 'center',
                            maxWidth: '45%',
                          }}>
                          {this.state.astroDetails.tatva}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          padding: 10,
                        }}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            marginLeft: 10,
                          }}>
                          Name alphabet
                        </Text>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            position: 'absolute',
                            left: 200,
                            // textAlign: 'center',
                            alignSelf: 'center',
                            maxWidth: '45%',
                          }}>
                          {this.state.astroDetails.name_alphabet}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          padding: 10,
                        }}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            marginLeft: 10,
                          }}>
                          Paya
                        </Text>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            position: 'absolute',
                            left: 200,
                            // textAlign: 'center',
                            alignSelf: 'center',
                            maxWidth: '45%',
                          }}>
                          {this.state.astroDetails.paya}
                        </Text>
                      </View>
                    </View>
                  ) : (
                    <View>
                      {this.state.activeChat == 2 ? (
                        <View
                          style={{
                            borderColor: color.secondary,
                            borderWidth: 1,
                            borderRadius: 10,
                            alignSelf: 'center',
                            width: '90%',
                            marginTop: 20,
                          }}>
                          <View
                            style={{
                              flexDirection: 'row',
                              padding: 10,
                            }}>
                            <Text
                              style={{
                                fontSize: 15,
                                fontWeight: '400',
                                color: color.secondary,
                                marginLeft: 10,
                              }}>
                              Month
                            </Text>
                            <Text
                              style={{
                                fontSize: 15,
                                fontWeight: '400',
                                color: color.secondary,
                                position: 'absolute',
                                left: 200,
                                maxWidth: '45%',
                                alignSelf: 'center',
                              }}>
                              {this.state.ghatDetails.month}
                            </Text>
                          </View>
                          <View
                            style={{
                              flexDirection: 'row',
                              padding: 10,
                            }}>
                            <Text
                              style={{
                                fontSize: 15,
                                fontWeight: '400',
                                color: color.secondary,
                                marginLeft: 10,
                              }}>
                              Tithi
                            </Text>
                            <Text
                              style={{
                                fontSize: 15,
                                fontWeight: '400',
                                color: color.secondary,

                                position: 'absolute',
                                left: 200,
                                alignSelf: 'center',
                                // textAlign: 'center',
                                maxWidth: '45%',
                              }}>
                              {this.state.ghatDetails.tithi}
                            </Text>
                          </View>
                          <View
                            style={{
                              flexDirection: 'row',
                              padding: 10,
                            }}>
                            <Text
                              style={{
                                fontSize: 15,
                                fontWeight: '400',
                                color: color.secondary,
                                marginLeft: 10,
                              }}>
                              Day
                            </Text>
                            <Text
                              style={{
                                fontSize: 15,
                                fontWeight: '400',
                                color: color.secondary,
                                position: 'absolute',
                                left: 200,
                                // textAlign: 'center',
                                maxWidth: '45%',
                                alignSelf: 'center',
                              }}>
                              {this.state.ghatDetails.day}
                            </Text>
                          </View>
                          <View
                            style={{
                              flexDirection: 'row',
                              padding: 10,
                            }}>
                            <Text
                              style={{
                                fontSize: 15,
                                fontWeight: '400',
                                color: color.secondary,
                                marginLeft: 10,
                              }}>
                              Nakshatra
                            </Text>
                            <Text
                              style={{
                                fontSize: 15,
                                fontWeight: '400',
                                color: color.secondary,
                                position: 'absolute',
                                left: 200,
                                // textAlign: 'center',
                                alignSelf: 'center',
                                maxWidth: '45%',
                              }}>
                              {this.state.ghatDetails.nakshatra}
                            </Text>
                          </View>
                          <View
                            style={{
                              flexDirection: 'row',
                              padding: 10,
                            }}>
                            <Text
                              style={{
                                fontSize: 15,
                                fontWeight: '400',
                                color: color.secondary,
                                marginLeft: 10,
                              }}>
                              Yog
                            </Text>
                            <Text
                              style={{
                                fontSize: 15,
                                fontWeight: '400',
                                color: color.secondary,
                                position: 'absolute',
                                left: 200,
                                // textAlign: 'center',
                                alignSelf: 'center',
                                maxWidth: '45%',
                              }}>
                              {this.state.ghatDetails.yog}
                            </Text>
                          </View>
                          <View
                            style={{
                              flexDirection: 'row',
                              padding: 10,
                            }}>
                            <Text
                              style={{
                                fontSize: 15,
                                fontWeight: '400',
                                color: color.secondary,
                                marginLeft: 10,
                              }}>
                              Karan
                            </Text>
                            <Text
                              style={{
                                fontSize: 15,
                                fontWeight: '400',
                                color: color.secondary,
                                position: 'absolute',
                                left: 200,
                                // textAlign: 'center',
                                alignSelf: 'center',
                                maxWidth: '45%',
                              }}>
                              {this.state.ghatDetails.karan}
                            </Text>
                          </View>
                          <View
                            style={{
                              flexDirection: 'row',
                              padding: 10,
                            }}>
                            <Text
                              style={{
                                fontSize: 15,
                                fontWeight: '400',
                                color: color.secondary,
                                marginLeft: 10,
                              }}>
                              Pahar
                            </Text>
                            <Text
                              style={{
                                fontSize: 15,
                                fontWeight: '400',
                                color: color.secondary,
                                position: 'absolute',
                                left: 200,
                                // textAlign: 'center',
                                alignSelf: 'center',
                                maxWidth: '45%',
                              }}>
                              {this.state.ghatDetails.pahar}
                            </Text>
                          </View>
                          <View
                            style={{
                              flexDirection: 'row',
                              padding: 10,
                            }}>
                            <Text
                              style={{
                                fontSize: 15,
                                fontWeight: '400',
                                color: color.secondary,
                                marginLeft: 10,
                              }}>
                              Moon
                            </Text>
                            <Text
                              style={{
                                fontSize: 15,
                                fontWeight: '400',
                                color: color.secondary,
                                position: 'absolute',
                                left: 200,
                                // textAlign: 'center',
                                alignSelf: 'center',
                                maxWidth: '45%',
                              }}>
                              {this.state.ghatDetails.moon}
                            </Text>
                          </View>
                        </View>
                      ) : (
                        <View
                          style={{
                            borderColor: color.secondary,
                            borderWidth: 1,
                            borderRadius: 10,
                            alignSelf: 'center',
                            width: '90%',
                            marginTop: 20,
                            marginBottom: 50,
                          }}>
                          {this.state.setPlanet == 0 ? (
                            <View>
                              <DataTable>
                                <DataTable.Header
                                  style={{
                                    backgroundColor: color.themeColor,
                                    borderTopRightRadius: 10,
                                    borderTopLeftRadius: 10,
                                  }}>
                                  <DataTable.Title>
                                    <Text
                                      style={{
                                        fontSize: 17,
                                        fontWeight: '500',
                                        color: color.secondary,
                                      }}>
                                      Planet
                                    </Text>
                                  </DataTable.Title>
                                  <DataTable.Title>
                                    <Text
                                      style={{
                                        fontSize: 17,
                                        fontWeight: '500',
                                        color: color.secondary,
                                      }}>
                                      Sign
                                    </Text>
                                  </DataTable.Title>
                                  <DataTable.Title
                                    style={{maxWidth: '40%', marginLeft: -40}}>
                                    <Text
                                      style={{
                                        fontSize: 17,
                                        fontWeight: '500',
                                        color: color.secondary,
                                        marginLeft: 30,
                                      }}>
                                      Sign Lord
                                    </Text>
                                  </DataTable.Title>
                                  <DataTable.Title style={{marginRight: 10}}>
                                    <Text
                                      style={{
                                        fontSize: 17,
                                        fontWeight: '500',
                                        color: color.secondary,
                                      }}>
                                      Degree
                                    </Text>
                                  </DataTable.Title>
                                  <DataTable.Title
                                    style={{position: 'absolute', right: 10}}>
                                    <Text
                                      style={{
                                        fontSize: 17,
                                        fontWeight: '500',
                                        color: color.secondary,
                                      }}>
                                      House
                                    </Text>
                                  </DataTable.Title>
                                </DataTable.Header>
                                {this.state.planetData.map((item, index) => (
                                  <DataTable.Row key={index}>
                                    <DataTable.Cell>
                                      <Text
                                        style={{
                                          fontSize: 15,
                                          fontWeight: '400',
                                          color: color.secondary,
                                        }}>
                                        {item.name}
                                      </Text>
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                      <Text
                                        style={{
                                          fontSize: 15,
                                          fontWeight: '400',
                                          color: color.secondary,
                                          alignSelf: 'center',
                                        }}>
                                        {item.sign}
                                      </Text>
                                    </DataTable.Cell>
                                    <DataTable.Cell style={{maxWidth: '40%'}}>
                                      <Text
                                        style={{
                                          fontSize: 15,
                                          fontWeight: '400',
                                          color: color.secondary,
                                          alignSelf: 'center',
                                        }}>
                                        {item.signLord}
                                      </Text>
                                    </DataTable.Cell>
                                    <DataTable.Cell style={{marginRight: 10}}>
                                      <Text
                                        style={{
                                          fontSize: 15,
                                          fontWeight: '400',
                                          color: color.secondary,
                                          alignSelf: 'center',
                                        }}>
                                        {item.fullDegree
                                          .toString()
                                          .substring(0, 6)}
                                      </Text>
                                    </DataTable.Cell>
                                    <DataTable.Cell
                                      style={{
                                        position: 'absolute',
                                        right: 10,
                                        top: 13,
                                      }}>
                                      <Text
                                        style={{
                                          fontSize: 15,
                                          fontWeight: '400',
                                          color: color.secondary,
                                          alignSelf: 'center',
                                        }}>
                                        {item.house}
                                      </Text>
                                    </DataTable.Cell>
                                  </DataTable.Row>
                                ))}
                              </DataTable>
                            </View>
                          ) : (
                            <View>
                              <DataTable>
                                <DataTable.Header
                                  style={{
                                    backgroundColor: color.themeColor,
                                    borderTopRightRadius: 10,
                                    borderTopLeftRadius: 10,
                                  }}>
                                  <DataTable.Title>
                                    <Text
                                      style={{
                                        fontSize: 17,
                                        fontWeight: '500',
                                        color: color.secondary,
                                      }}>
                                      Planet
                                    </Text>
                                  </DataTable.Title>
                                  <DataTable.Title style={{maxWidth: '40%'}}>
                                    <Text
                                      style={{
                                        fontSize: 17,
                                        fontWeight: '500',
                                        color: color.secondary,
                                      }}>
                                      Naksahtra
                                    </Text>
                                  </DataTable.Title>
                                  <DataTable.Title
                                    style={{marginLeft: 10, marginRight: -20}}>
                                    <Text
                                      style={{
                                        fontSize: 17,
                                        fontWeight: '500',
                                        color: color.secondary,
                                        marginLeft: 30,
                                      }}>
                                      Lord
                                    </Text>
                                  </DataTable.Title>
                                  <DataTable.Title style={{marginRight: 10}}>
                                    <Text
                                      style={{
                                        fontSize: 17,
                                        fontWeight: '500',
                                        color: color.secondary,
                                      }}>
                                      Speed
                                    </Text>
                                  </DataTable.Title>
                                  <DataTable.Title
                                    style={{position: 'absolute', right: 10}}>
                                    <Text
                                      style={{
                                        fontSize: 17,
                                        fontWeight: '500',
                                        color: color.secondary,
                                      }}>
                                      Pad
                                    </Text>
                                  </DataTable.Title>
                                </DataTable.Header>
                                {this.state.planetData.map((item, index) => (
                                  <DataTable.Row key={index}>
                                    <DataTable.Cell>
                                      <Text
                                        style={{
                                          fontSize: 15,
                                          fontWeight: '400',
                                          color: color.secondary,
                                        }}>
                                        {item.name}
                                      </Text>
                                    </DataTable.Cell>
                                    <DataTable.Cell style={{maxWidth: '40%'}}>
                                      <Text
                                        style={{
                                          fontSize: 15,
                                          fontWeight: '400',
                                          color: color.secondary,
                                          alignSelf: 'center',
                                        }}>
                                        {item.nakshatra}
                                      </Text>
                                    </DataTable.Cell>
                                    <DataTable.Cell
                                      style={{
                                        marginLeft: 10,
                                        marginRight: -20,
                                      }}>
                                      <Text
                                        style={{
                                          fontSize: 15,
                                          fontWeight: '400',
                                          color: color.secondary,
                                          alignSelf: 'center',
                                        }}>
                                        {item.nakshatraLord}
                                      </Text>
                                    </DataTable.Cell>
                                    <DataTable.Cell style={{marginRight: 10}}>
                                      <Text
                                        style={{
                                          fontSize: 15,
                                          fontWeight: '400',
                                          color: color.secondary,
                                          alignSelf: 'center',
                                        }}>
                                        {item.speed.toString().substring(0, 6)}
                                      </Text>
                                    </DataTable.Cell>
                                    <DataTable.Cell
                                      style={{
                                        position: 'absolute',
                                        right: 10,
                                        top: 13,
                                      }}>
                                      <Text
                                        style={{
                                          fontSize: 15,
                                          fontWeight: '400',
                                          color: color.secondary,
                                          alignSelf: 'center',
                                        }}>
                                        {item.nakshatra_pad}
                                      </Text>
                                    </DataTable.Cell>
                                  </DataTable.Row>
                                ))}
                              </DataTable>
                            </View>
                          )}
                        </View>
                      )}
                    </View>
                  )}
                </View>
              )}
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

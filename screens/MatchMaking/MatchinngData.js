import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import base64 from 'react-native-base64';
import {DataTable} from 'react-native-paper';
import color from '../GlobalVariables';
const userId = '618328';
const apiKey = '51e43ea9a639e025dd62e04a4b7a32e0';
const height = Dimensions.get('window').height;
export default class MatchingData extends Component {
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
  async getbirthDetails() {
    try {
      //   console.log('props :', this.props.data);
      var response = await fetch(
        'https://json.astrologyapi.com/v1/match_birth_details',
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
        console.log('error');
        this.setState({
          load: true,
        });
      }
    } catch (error) {
      console.log(error);
      this.setState({
        load: true,
      });
      //   this.props.navigation.navigate('error');
    }
  }
  async getAstroDetails() {
    try {
      var response = await fetch(
        'https://json.astrologyapi.com/v1/match_astro_details',
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
        console.log('asdata :', json);
        this.setState({
          astroDetails: json,
        });
        // this.getGhatDetails();
      } else {
        // this.props.navigation.navigate('error');
        console.log('error');
      }
    } catch (error) {
      console.log('error : ', error);
      //   this.props.navigation.navigate('error');
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
        this.props.navigation.navigate('error');
      }
    } catch (error) {
      console.log('error : ', error);
      this.props.navigation.navigate('error');
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
      //   this.props.navigation.navigate('error');
    }
  }
  componentDidMount() {
    this.setState({
      //   data: this.props.data,
    });
    this.getbirthDetails();
  }
  render() {
    // console.log('data: ---', this.props.data);

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
                width: 149,
                height: '99%',
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
              {this.state.activeChat == 0 ? (
                <View>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: '500',
                      color: color.secondary,
                      marginTop: 20,
                      textAlign: 'center',
                    }}>
                    Male's Details
                  </Text>
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
                        {this.state.birthDetails?.male_astro_details?.year}
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
                        {this.state.birthDetails?.male_astro_details?.month}
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
                        {this.state.birthDetails?.male_astro_details?.day}
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
                        {this.state.birthDetails?.male_astro_details?.hour}
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
                        {this.state.birthDetails?.male_astro_details?.minute}
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
                        Gender
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
                        {this.state.birthDetails?.male_astro_details?.gender}
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
                        {this.state.birthDetails?.male_astro_details?.latitude}
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
                        {this.state.birthDetails?.male_astro_details?.longitude}
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
                        {this.state.birthDetails?.male_astro_details?.timezone}
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
                        {this.state.birthDetails?.male_astro_details?.ayanamsha}
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
                        {this.state.birthDetails?.male_astro_details?.sunrise}
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
                        {this.state.birthDetails?.male_astro_details?.sunset}
                      </Text>
                    </View>
                  </View>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: '500',
                      color: color.secondary,
                      marginTop: 20,
                      textAlign: 'center',
                    }}>
                    Female's Details
                  </Text>
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
                        {this.state.birthDetails?.female_astro_details?.year}
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
                        {this.state.birthDetails?.female_astro_details?.month}
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
                        {this.state.birthDetails?.female_astro_details?.day}
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
                        {this.state.birthDetails?.female_astro_details?.hour}
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
                        {this.state.birthDetails?.female_astro_details?.minute}
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
                        Gender
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
                        {this.state.birthDetails?.female_astro_details?.gender}
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
                        {
                          this.state.birthDetails?.female_astro_details
                            ?.latitude
                        }
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
                        {
                          this.state.birthDetails?.female_astro_details
                            ?.longitude
                        }
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
                        {
                          this.state.birthDetails?.female_astro_details
                            ?.timezone
                        }
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
                        {
                          this.state.birthDetails?.female_astro_details
                            ?.ayanamsha
                        }
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
                        {this.state.birthDetails?.female_astro_details?.sunrise}
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
                        {this.state.birthDetails?.female_astro_details?.sunset}
                      </Text>
                    </View>
                  </View>
                </View>
              ) : (
                <View>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: '500',
                      color: color.secondary,
                      marginTop: 20,
                      textAlign: 'center',
                    }}>
                    Male's Details
                  </Text>

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
                        {this.state.astroDetails?.male_astro_details?.ascendant}
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
                        {this.state.astroDetails?.male_astro_details?.Varna}
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
                        {this.state.astroDetails?.male_astro_details?.Vashya}
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
                        {this.state.astroDetails?.male_astro_details?.Yoni}
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
                        {this.state.astroDetails?.male_astro_details?.Gan}
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
                        {this.state.astroDetails?.male_astro_details?.Nadi}
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
                        {this.state.astroDetails?.male_astro_details?.SignLord}
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
                        {this.state.astroDetails?.male_astro_details?.sign}
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
                        {this.state.astroDetails?.male_astro_details?.Naksahtra}
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
                        {
                          this.state.astroDetails?.male_astro_details
                            ?.NaksahtraLord
                        }
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
                        {this.state.astroDetails?.male_astro_details?.Charan}
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
                        {this.state.astroDetails?.male_astro_details?.Yog}
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
                        {this.state.astroDetails?.male_astro_details?.Karan}
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
                        {this.state.astroDetails?.male_astro_details?.Tithi}
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
                        {this.state.astroDetails?.male_astro_details?.yunja}
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
                        {this.state.astroDetails?.male_astro_details?.tatva}
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
                        {
                          this.state.astroDetails?.male_astro_details
                            ?.name_alphabet
                        }
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
                        {this.state.astroDetails?.male_astro_details?.paya}
                      </Text>
                    </View>
                  </View>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: '500',
                      color: color.secondary,
                      marginTop: 20,
                      textAlign: 'center',
                    }}>
                    Female's Details
                  </Text>

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
                        {
                          this.state.astroDetails?.female_astro_details
                            ?.ascendant
                        }
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
                        {this.state.astroDetails?.female_astro_details?.Varna}
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
                        {this.state.astroDetails?.female_astro_details?.Vashya}
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
                        {this.state.astroDetails?.female_astro_details?.Yoni}
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
                        {this.state.astroDetails?.female_astro_details?.Gan}
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
                        {this.state.astroDetails?.female_astro_details?.Nadi}
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
                        {
                          this.state.astroDetails?.female_astro_details
                            ?.SignLord
                        }
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
                        {this.state.astroDetails?.female_astro_details?.sign}
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
                        {
                          this.state.astroDetails?.female_astro_details
                            ?.Naksahtra
                        }
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
                        {
                          this.state.astroDetails?.female_astro_details
                            ?.NaksahtraLord
                        }
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
                        {this.state.astroDetails?.female_astro_details?.Charan}
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
                        {this.state.astroDetails?.female_astro_details?.Yog}
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
                        {this.state.astroDetails?.female_astro_details?.Karan}
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
                        {this.state.astroDetails?.female_astro_details?.Tithi}
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
                        {this.state.astroDetails?.female_astro_details?.yunja}
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
                        {this.state.astroDetails?.female_astro_details?.tatva}
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
                        {
                          this.state.astroDetails?.female_astro_details
                            ?.name_alphabet
                        }
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
                        {this.state.astroDetails?.female_astro_details?.paya}
                      </Text>
                    </View>
                  </View>
                </View>
              )}
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

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
const height = Dimensions.get('window').height;

import base64 from 'react-native-base64';
const userId = '618328';
const apiKey = '51e43ea9a639e025dd62e04a4b7a32e0';

export default class Dosha extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kaldata: [],
      manglikData: [],
      currentData: [],
      activeIndex: 0,
      load: true,
    };
  }
  async getMajorDetails() {
    try {
      this._isMounted = true;
      console.log('props :', this.props.data);
      var response = await fetch(
        'https://json.astrologyapi.com/v1/kalsarpa_details',
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
        console.log('guess_data :', json);
        this.setState({
          kaldata: json,
          load: false,
        });
        console.log('jData :', json.report.report);
        this.getMdDetails();
      } else {
        // this.props.navigation.navigate('error');
        this.setState({
          load: false,
        });
      }
    } catch (error) {
      console.log('vError : ', error);
      // this.props.navigation.navigate('error');
      this.setState({
        load: false,
      });
    }
  }
  async getCurrentDetails() {
    try {
      this._isMounted = true;
      const url = 'https://json.astrologyapi.com/v1/sadhesati_current_status';
      var response = await fetch(url, {
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
        console.log('crtdata :', json);
        this.setState({
          currentData: json,
        });
      } else {
        // this.props.navigation.navigate('error');
      }
    } catch (error) {
      console.log('E_error : ', error);
      // this.props.navigation.navigate('error');
    }
  }
  async getMdDetails(val) {
    try {
      this._isMounted = true;
      console.log('props :', this.props.data);

      const url = 'https://json.astrologyapi.com/v1/manglik';
      var response = await fetch(url, {
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
        console.log('mgData :', json);
        this.setState({
          manglikData: json,
        });
        this.getCurrentDetails();
      } else {
        // this.props.navigation.navigate('error');
      }
    } catch (error) {
      console.log('Verror : ', error);
      // this.props.navigation.navigate('error');
    }
  }

  componentDidMount() {
    this.setState({
      data: this.props.data,
    });
    // this.getMdDetails();
    this.getMajorDetails();
  }
  render() {
    // console.log('char : ', this.props.data);
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            backgroundColor: 'black ',
            flex: 1,
          }}>
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
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '500',
                  color: 'white',
                  marginLeft: '5%',
                  marginTop: 20,
                  textAlign: 'center',
                }}>
                Kalsarpa Dosha
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                  color: 'white',
                  marginLeft: '5%',
                  marginTop: 20,
                }}>
                Name :
                <Text
                  style={{
                    fontWeight: '400',
                  }}>
                  {' '}
                  {this.state.kaldata.name}
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                  color: 'white',
                  marginLeft: '5%',
                  marginTop: 20,
                }}>
                Type :
                <Text
                  style={{
                    fontWeight: '400',
                  }}>
                  {' '}
                  {this.state.kaldata.type}
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                  color: 'white',
                  marginLeft: '5%',
                  marginTop: 20,
                }}>
                Online :
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 16,
                  }}>
                  {' '}
                  {this.state.kaldata.one_line}
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                  color: 'white',
                  marginLeft: '5%',
                  marginTop: 20,
                }}>
                Report:
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 16,
                  }}>
                  {' '}
                  {this.state.kaldata.report?.report?.toString()}
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '500',
                  color: 'white',
                  marginLeft: '5%',
                  marginTop: 20,
                  textAlign: 'center',
                }}>
                Manglik Dosha
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                  color: 'white',
                  marginLeft: '5%',
                  marginTop: 20,
                }}>
                Manglik Dosha cancel rule :
                {this.state.manglikData.manglik_cancel_rule?.map(
                  (item, index) => (
                    <Text
                      style={{
                        fontWeight: '400',
                        fontSize: 16,
                      }}
                      key={index}>
                      {'\n'}
                      {item}
                    </Text>
                  ),
                )}
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                  color: 'white',
                  marginLeft: '5%',
                  marginTop: 20,
                  marginBottom: 10,
                }}>
                Manglik Present Rule based on Aspect :
                {this.state.manglikData.manglik_present_rule?.based_on_aspect?.map(
                  (item, index) => (
                    <Text
                      style={{
                        fontWeight: '400',
                        fontSize: 16,
                      }}
                      key={index}>
                      {'\n'}
                      {'^ '} {item}
                    </Text>
                  ),
                )}
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                  color: 'white',
                  marginLeft: '5%',
                  marginTop: 20,
                }}>
                Manglik Present Rule based on House :
                {this.state.manglikData.manglik_present_rule?.based_on_house?.map(
                  (item, index) => (
                    <Text
                      style={{
                        fontWeight: '400',
                        fontSize: 16,
                      }}
                      key={index}>
                      {'\n'}
                      {'^ '} {item}
                    </Text>
                  ),
                )}
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                  color: 'white',
                  marginLeft: '5%',
                  marginTop: 20,
                }}>
                Report:
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 16,
                  }}>
                  {' '}
                  {this.state.manglikData.manglik_report?.toString()}
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '500',
                  color: 'white',
                  marginLeft: '5%',
                  marginTop: 20,
                  textAlign: 'center',
                }}>
                Sadesaati Dosha
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                  color: 'white',
                  marginLeft: '5%',
                  marginTop: 20,
                }}>
                Consideration Date :
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 16,
                  }}>
                  {' '}
                  {this.state.currentData?.consideration_date}
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                  color: 'white',
                  marginLeft: '5%',
                  marginTop: 10,
                }}>
                Is Saturn Retrograde :
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 16,
                  }}>
                  {' '}
                  {this.state.currentData?.is_saturn_retrograde?.toString()}
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                  color: 'white',
                  marginLeft: '5%',
                  marginTop: 10,
                }}>
                Moon Sign :
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 16,
                  }}>
                  {' '}
                  {this.state.currentData?.moon_sign}
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                  color: 'white',
                  marginLeft: '5%',
                  marginTop: 10,
                }}>
                Saturn Sign :
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 16,
                  }}>
                  {' '}
                  {this.state.currentData?.saturn_sign}
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                  color: 'white',
                  marginLeft: '5%',
                  marginTop: 10,
                }}>
                Is Undergoing Sadhesati :
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 16,
                  }}>
                  {' '}
                  {this.state.currentData?.is_undergoing_sadhesati?.toString()}
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                  color: 'white',
                  marginLeft: '5%',
                  marginTop: 10,
                }}>
                Sadhesati Phase :
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 16,
                  }}>
                  {' '}
                  {this.state.currentData?.sadhesati_phase}
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                  color: 'white',
                  marginLeft: '5%',
                  marginTop: 10,
                }}>
                Sadhesati Status:
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 16,
                  }}>
                  {' '}
                  {this.state.currentData?.sadhesati_status?.toString()}
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                  color: 'white',
                  marginLeft: '5%',
                  marginTop: 10,
                }}>
                Start Date:
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 16,
                  }}>
                  {' '}
                  {this.state.currentData?.start_date}
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                  color: 'white',
                  marginLeft: '5%',
                  marginTop: 10,
                }}>
                End Date:
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 16,
                  }}>
                  {' '}
                  {this.state.currentData?.end_date}
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                  color: 'white',
                  marginLeft: '5%',
                  marginTop: 10,
                  marginBottom: 30,
                }}>
                What is Sadhesati :
                <Text
                  style={{
                    fontWeight: '400',
                    fontSize: 16,
                    marginTop: 5,
                  }}>
                  {'\n'}
                  {this.state.currentData?.what_is_sadhesati}
                </Text>
              </Text>
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

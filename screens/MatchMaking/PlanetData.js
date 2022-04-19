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
import color from '../GlobalVariables';
const userId = '618328';
const apiKey = '51e43ea9a639e025dd62e04a4b7a32e0';
const height = Dimensions.get('window').height;
export default class PlanetData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeChat: 0,
      planetData: [],
      load: true,
    };
  }
  async getbirthDetails() {
    try {
      //   console.log('props :', this.props.data);
      var response = await fetch(
        'https://json.astrologyapi.com/v1/match_planet_details',
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
        console.log('ptdata :', json);
        this.setState({
          planetData: json,
          load: false,
        });
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

  componentDidMount() {
    this.setState({});
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
              <View>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: '500',
                    color: 'white',
                    textAlign: 'center',
                    marginTop: 20,
                  }}>
                  Male's Planet Details
                </Text>
                <ScrollView
                  horizontal={true}
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
                        <DataTable.Title style={{}}>
                          <Text
                            style={{
                              fontSize: 17,
                              fontWeight: '500',
                              color: 'white',
                              marginLeft: 30,
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
                            Planet Awastha
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
                            isRetro
                          </Text>
                        </DataTable.Title>
                        <DataTable.Title style={{}}>
                          <Text
                            style={{
                              fontSize: 17,
                              fontWeight: '500',
                              color: 'white',
                            }}>
                            is_planet_set
                          </Text>
                        </DataTable.Title>
                      </DataTable.Header>
                      {this.state.planetData?.male_planet_details?.map(
                        (item, index) => (
                          <DataTable.Row key={index}>
                            <DataTable.Cell style={{width: 150}}>
                              <Text
                                style={{
                                  fontSize: 15,
                                  fontWeight: '400',
                                  color: 'white',
                                }}>
                                {item.name}
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
                                {item.sign}
                              </Text>
                            </DataTable.Cell>
                            <DataTable.Cell style={{width: 150}}>
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
                                {item.speed}
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
                                {item.nakshatra}
                              </Text>
                            </DataTable.Cell>
                            <DataTable.Cell
                              style={{width: 200, marginLeft: 40}}>
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
                            <DataTable.Cell
                              style={{width: 200, marginLeft: 40}}>
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
                            <DataTable.Cell
                              style={{width: 200, marginLeft: -40}}>
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
                          </DataTable.Row>
                        ),
                      )}
                    </DataTable>
                  </View>
                </ScrollView>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: '500',
                    color: 'white',
                    textAlign: 'center',
                    marginTop: 20,
                  }}>
                  Female's Planet Details
                </Text>
                <ScrollView
                  horizontal={true}
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
                        <DataTable.Title style={{}}>
                          <Text
                            style={{
                              fontSize: 17,
                              fontWeight: '500',
                              color: 'white',
                              marginLeft: 30,
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
                            Planet Awastha
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
                            isRetro
                          </Text>
                        </DataTable.Title>
                        <DataTable.Title style={{}}>
                          <Text
                            style={{
                              fontSize: 17,
                              fontWeight: '500',
                              color: 'white',
                            }}>
                            is_planet_set
                          </Text>
                        </DataTable.Title>
                      </DataTable.Header>
                      {this.state.planetData?.female_planet_details?.map(
                        (item, index) => (
                          <DataTable.Row key={index}>
                            <DataTable.Cell style={{width: 150}}>
                              <Text
                                style={{
                                  fontSize: 15,
                                  fontWeight: '400',
                                  color: 'white',
                                }}>
                                {item.name}
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
                                {item.sign}
                              </Text>
                            </DataTable.Cell>
                            <DataTable.Cell style={{width: 150}}>
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
                                {item.speed}
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
                                {item.nakshatra}
                              </Text>
                            </DataTable.Cell>
                            <DataTable.Cell
                              style={{width: 200, marginLeft: 40}}>
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
                            <DataTable.Cell
                              style={{width: 200, marginLeft: 40}}>
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
                            <DataTable.Cell
                              style={{width: 200, marginLeft: -40}}>
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
                          </DataTable.Row>
                        ),
                      )}
                    </DataTable>
                  </View>
                </ScrollView>
              </View>
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

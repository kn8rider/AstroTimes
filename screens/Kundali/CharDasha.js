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
import base64 from 'react-native-base64';
import {DataTable} from 'react-native-paper';
import color from '../GlobalVariables';
const userId = '618328';
const apiKey = '51e43ea9a639e025dd62e04a4b7a32e0';
export default class CharDasha extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDetails: [],
      majorDetails: [],
      ghatDetails: [],
      data: [],
      planetData: [],
      setPlanet: 0,
    };
  }
  async getMajorDetails() {
    try {
      console.log('props :', this.props.data);
      var response = await fetch(
        'https://json.astrologyapi.com/v1/major_chardasha',
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
          majorDetails: json,
        });
        this.getCurrentDetails();
      } else {
        // this.props.navigation.navigate('error');
      }
    } catch (error) {
      console.log(error);
      // this.props.navigation.navigate('error');
    }
  }
  async getCurrentDetails() {
    try {
      var response = await fetch(
        'https://json.astrologyapi.com/v1/current_chardasha',
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
          currentDetails: json,
        });
      } else {
        // this.props.navigation.navigate('error');
      }
    } catch (error) {
      console.log('error : ', error);
    }
  }

  componentDidMount() {
    this.setState({
      data: this.props.data,
    });
    this.getMajorDetails();
    // console.log('comp : ', this.props.data);
  }
  render() {
    // console.log('char : ', this.props.data);
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
                  this.state.setPlanet == 0 ? color.themeColor : color.primary,
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
                Major Dasha
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 149,
                height: '99%',
                borderRadius: 10,
                backgroundColor:
                  this.state.setPlanet == 1 ? color.themeColor : color.primary,
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
                Current Dasha
              </Text>
            </TouchableOpacity>
          </View>
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
                        Duration
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
                    <DataTable.Title style={{maxWidth: '40%'}}>
                      <Text
                        style={{
                          fontSize: 17,
                          fontWeight: '500',
                          color: color.secondary,
                          marginLeft: 30,
                        }}>
                        Start Date
                      </Text>
                    </DataTable.Title>
                    <DataTable.Title style={{}}>
                      <Text
                        style={{
                          fontSize: 17,
                          fontWeight: '500',
                          color: color.secondary,
                        }}>
                        End Date
                      </Text>
                    </DataTable.Title>
                  </DataTable.Header>
                  {this.state.majorDetails.map((item, index) => (
                    <DataTable.Row key={index}>
                      <DataTable.Cell>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                          }}>
                          {item.duration}
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
                          {item.sign_name}
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
                          {item.start_date}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {item.end_date}
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
                        Duration
                      </Text>
                    </DataTable.Title>
                    <DataTable.Title style={{maxWidth: '40%'}}>
                      <Text
                        style={{
                          fontSize: 17,
                          fontWeight: '500',
                          color: color.secondary,
                        }}>
                        Sign
                      </Text>
                    </DataTable.Title>
                    <DataTable.Title style={{marginLeft: -10}}>
                      <Text
                        style={{
                          fontSize: 17,
                          fontWeight: '500',
                          color: color.secondary,
                          marginLeft: 30,
                        }}>
                        Start Date
                      </Text>
                    </DataTable.Title>
                    <DataTable.Title style={{}}>
                      <Text
                        style={{
                          fontSize: 17,
                          fontWeight: '500',
                          color: color.secondary,
                        }}>
                        End Date
                      </Text>
                    </DataTable.Title>
                  </DataTable.Header>
                  <DataTable.Row>
                    <DataTable.Cell>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: '400',
                          color: color.secondary,
                        }}>
                        {this.state.currentDetails?.major_dasha?.duration}
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
                        {this.state.currentDetails?.major_dasha?.sign_name}
                      </Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={{}}>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: '400',
                          color: color.secondary,
                          alignSelf: 'center',
                        }}>
                        {this.state.currentDetails?.major_dasha?.start_date}
                      </Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={{}}>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: '400',
                          color: color.secondary,
                          alignSelf: 'center',
                        }}>
                        {this.state.currentDetails?.major_dasha?.end_date}
                      </Text>
                    </DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row>
                    <DataTable.Cell>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: '400',
                          color: color.secondary,
                        }}>
                        {this.state.currentDetails?.sub_dasha?.duration}
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
                        {this.state.currentDetails?.sub_dasha?.sign_name}
                      </Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={{}}>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: '400',
                          color: color.secondary,
                          alignSelf: 'center',
                        }}>
                        {this.state.currentDetails?.sub_dasha?.start_date}
                      </Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={{}}>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: '400',
                          color: color.secondary,
                          alignSelf: 'center',
                        }}>
                        {this.state.currentDetails?.sub_dasha?.end_date}
                      </Text>
                    </DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row>
                    <DataTable.Cell>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: '400',
                          color: color.secondary,
                        }}>
                        {this.state.currentDetails?.sub_sub_dasha?.duration}
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
                        {this.state.currentDetails?.sub_sub_dasha?.sign_name}
                      </Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={{}}>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: '400',
                          color: color.secondary,
                          alignSelf: 'center',
                        }}>
                        {this.state.currentDetails?.sub_sub_dasha?.start_date}
                      </Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={{}}>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: '400',
                          color: color.secondary,
                          alignSelf: 'center',
                        }}>
                        {this.state.currentDetails?.sub_sub_dasha?.end_date}
                      </Text>
                    </DataTable.Cell>
                  </DataTable.Row>
                </DataTable>
              </View>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

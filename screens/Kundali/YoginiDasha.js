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
const userId = '618328';
const apiKey = '51e43ea9a639e025dd62e04a4b7a32e0';
export default class YoginiDasha extends Component {
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
        'https://json.astrologyapi.com/v1/major_yogini_dasha ',
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
      // console.log('st : ', response);
      const json = await response.json();
      if (response.status == 200) {
        console.log('data', json);
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
        'https://json.astrologyapi.com/v1/current_yogini_dasha ',
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
        console.log('cdata', json);
        this.setState({
          currentDetails: json,
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
    this.getMajorDetails();
    // console.log('comp : ', this.props.data);
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
              borderColor: 'white',
              borderRadius: 10,
              marginTop: 20,
            }}>
            <TouchableOpacity
              style={{
                width: 149,
                height: '99%',
                borderRadius: 10,
                backgroundColor:
                  this.state.setPlanet == 0 ? '#FABD0B' : 'black',
                justifyContent: 'center',
                borderWidth: this.state.setPlanet == 0 ? 1 : 0,
                borderColor: 'white',
                alignItems: 'center',
              }}
              onPress={() => this.setState({setPlanet: 0})}>
              <Text style={{fontSize: 17, fontWeight: '400', color: 'white'}}>
                Major Dasha
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 149,
                height: '99%',
                borderRadius: 10,
                backgroundColor:
                  this.state.setPlanet == 1 ? '#FABD0B' : 'black',
                justifyContent: 'center',
                borderWidth: this.state.setPlanet == 1 ? 1 : 0,
                borderColor: 'white',
                alignItems: 'center',
              }}
              onPress={() => this.setState({setPlanet: 1})}>
              <Text style={{fontSize: 17, fontWeight: '500', color: 'white'}}>
                Current Dasha
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal={true}
            style={{
              borderColor: 'white',
              borderWidth: 1,
              borderRadius: 10,
              alignSelf: 'center',
              // width: 700,
              marginTop: 20,
              marginBottom: 50,
              marginHorizontal: 10,
            }}>
            {this.state.setPlanet == 0 ? (
              <View style={{flex: 1}}>
                <DataTable>
                  <DataTable.Row
                    style={{
                      backgroundColor: '#FABD0B',
                      borderTopRightRadius: 10,
                      borderTopLeftRadius: 10,
                    }}>
                    <DataTable.Cell
                      style={{width: 100, justifyContent: 'center'}}>
                      <Text
                        style={{
                          fontSize: 17,
                          fontWeight: '500',
                          color: 'white',
                        }}>
                        Duration
                      </Text>
                    </DataTable.Cell>
                    <DataTable.Cell
                      style={{width: 100, justifyContent: 'center'}}>
                      <Text
                        style={{
                          fontSize: 17,
                          fontWeight: '500',
                          color: 'white',
                        }}>
                        Dasha
                      </Text>
                    </DataTable.Cell>
                    <DataTable.Cell
                      style={{width: 150, justifyContent: 'center'}}>
                      <Text
                        style={{
                          fontSize: 17,
                          fontWeight: '500',
                          color: 'white',
                          marginLeft: 30,
                        }}>
                        Start Date
                      </Text>
                    </DataTable.Cell>
                    <DataTable.Cell
                      style={{width: 150, justifyContent: 'center'}}>
                      <Text
                        style={{
                          fontSize: 17,
                          fontWeight: '500',
                          color: 'white',
                        }}>
                        End Date
                      </Text>
                    </DataTable.Cell>
                    <DataTable.Cell
                      style={{width: 200, justifyContent: 'center'}}>
                      <Text
                        style={{
                          fontSize: 17,
                          fontWeight: '500',
                          color: 'white',
                          marginLeft: 30,
                        }}>
                        Start_ms
                      </Text>
                    </DataTable.Cell>
                    <DataTable.Cell
                      style={{width: 200, justifyContent: 'center'}}>
                      <Text
                        style={{
                          fontSize: 17,
                          fontWeight: '500',
                          color: 'white',
                        }}>
                        End_ms
                      </Text>
                    </DataTable.Cell>
                  </DataTable.Row>
                  {this.state.majorDetails.map((item, index) => (
                    <DataTable.Row key={index}>
                      <DataTable.Cell
                        style={{width: 100, justifyContent: 'center'}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: 'white',
                          }}>
                          {item.duration}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell
                        style={{width: 100, justifyContent: 'center'}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: 'white',
                            alignSelf: 'center',
                          }}>
                          {item.dasha_name}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell
                        style={{width: 150, justifyContent: 'center'}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: 'white',
                            alignSelf: 'center',
                          }}>
                          {item.start_date}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell
                        style={{width: 150, justifyContent: 'center'}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: 'white',
                            alignSelf: 'center',
                          }}>
                          {item.end_date}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell
                        style={{width: 200, justifyContent: 'center'}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: 'white',
                            alignSelf: 'center',
                          }}>
                          {item.start_ms}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell
                        style={{width: 200, justifyContent: 'center'}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: 'white',
                            alignSelf: 'center',
                          }}>
                          {item.end_ms}
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
                      backgroundColor: '#FABD0B',
                      borderTopRightRadius: 10,
                      borderTopLeftRadius: 10,
                    }}>
                    <DataTable.Title
                      style={{width: 100, justifyContent: 'center'}}>
                      <Text
                        style={{
                          fontSize: 17,
                          fontWeight: '500',
                          color: 'white',
                        }}>
                        Duration
                      </Text>
                    </DataTable.Title>
                    <DataTable.Title
                      style={{width: 100, justifyContent: 'center'}}>
                      <Text
                        style={{
                          fontSize: 17,
                          fontWeight: '500',
                          color: 'white',
                        }}>
                        Sign
                      </Text>
                    </DataTable.Title>
                    <DataTable.Title
                      style={{width: 150, justifyContent: 'center'}}>
                      <Text
                        style={{
                          fontSize: 17,
                          fontWeight: '500',
                          color: 'white',
                          marginLeft: 30,
                        }}>
                        Start Date
                      </Text>
                    </DataTable.Title>
                    <DataTable.Title
                      style={{width: 150, justifyContent: 'center'}}>
                      <Text
                        style={{
                          fontSize: 17,
                          fontWeight: '500',
                          color: 'white',
                        }}>
                        End Date
                      </Text>
                    </DataTable.Title>
                  </DataTable.Header>
                  <DataTable.Row>
                    <DataTable.Cell
                      style={{width: 100, justifyContent: 'center'}}>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: '400',
                          color: 'white',
                        }}>
                        {this.state.currentDetails?.major_dasha?.duration}
                      </Text>
                    </DataTable.Cell>
                    <DataTable.Cell
                      style={{width: 100, justifyContent: 'center'}}>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: '400',
                          color: 'white',
                          alignSelf: 'center',
                        }}>
                        {this.state.currentDetails?.major_dasha?.dasha_name}
                      </Text>
                    </DataTable.Cell>
                    <DataTable.Cell
                      style={{width: 150, justifyContent: 'center'}}>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: '400',
                          color: 'white',
                          alignSelf: 'center',
                        }}>
                        {this.state.currentDetails?.major_dasha?.start_date}
                      </Text>
                    </DataTable.Cell>
                    <DataTable.Cell
                      style={{width: 150, justifyContent: 'center'}}>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: '400',
                          color: 'white',
                          alignSelf: 'center',
                        }}>
                        {this.state.currentDetails?.major_dasha?.end_date}
                      </Text>
                    </DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row>
                    <DataTable.Cell
                      style={{width: 100, justifyContent: 'center'}}>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: '400',
                          color: 'white',
                        }}>
                        {this.state.currentDetails?.sub_dasha?.duration}
                      </Text>
                    </DataTable.Cell>
                    <DataTable.Cell
                      style={{width: 100, justifyContent: 'center'}}>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: '400',
                          color: 'white',
                          alignSelf: 'center',
                        }}>
                        {this.state.currentDetails?.sub_dasha?.dasha_name}
                      </Text>
                    </DataTable.Cell>
                    <DataTable.Cell
                      style={{width: 150, justifyContent: 'center'}}>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: '400',
                          color: 'white',
                          alignSelf: 'center',
                        }}>
                        {this.state.currentDetails?.sub_dasha?.start_date}
                      </Text>
                    </DataTable.Cell>
                    <DataTable.Cell
                      style={{width: 150, justifyContent: 'center'}}>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: '400',
                          color: 'white',
                          alignSelf: 'center',
                        }}>
                        {this.state.currentDetails?.sub_dasha?.end_date}
                      </Text>
                    </DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row>
                    <DataTable.Cell
                      style={{width: 100, justifyContent: 'center'}}>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: '400',
                          color: 'white',
                        }}>
                        {this.state.currentDetails?.sub_sub_dasha?.duration}
                      </Text>
                    </DataTable.Cell>
                    <DataTable.Cell
                      style={{width: 100, justifyContent: 'center'}}>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: '400',
                          color: 'white',
                          alignSelf: 'center',
                        }}>
                        {this.state.currentDetails?.sub_sub_dasha?.dasha_name}
                      </Text>
                    </DataTable.Cell>
                    <DataTable.Cell
                      style={{width: 150, justifyContent: 'center'}}>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: '400',
                          color: 'white',
                          alignSelf: 'center',
                        }}>
                        {this.state.currentDetails?.sub_sub_dasha?.start_date}
                      </Text>
                    </DataTable.Cell>
                    <DataTable.Cell
                      style={{width: 150, justifyContent: 'center'}}>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: '400',
                          color: 'white',
                          alignSelf: 'center',
                        }}>
                        {this.state.currentDetails?.sub_sub_dasha?.end_date}
                      </Text>
                    </DataTable.Cell>
                  </DataTable.Row>
                </DataTable>
              </View>
            )}
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

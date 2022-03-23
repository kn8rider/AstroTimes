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
export default class VimDasha extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDetails: [],
      majorDetails: [],
      cdData: false,
      data: [],
      ad: [],
      md: [],
      pd: [],
      sd: [],
    };
  }
  async getMajorDetails() {
    try {
      console.log('props :', this.props.data);
      var response = await fetch(
        'https://json.astrologyapi.com/v1/major_vdasha',
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
        console.log('vmdata :', json);
        this.setState({
          majorDetails: json,
        });
        this.getCurrentDetails();
      } else {
        // this.props.navigation.navigate('error');
      }
    } catch (error) {
      console.log('vmError : ', error);
      // this.props.navigation.navigate('error');
    }
  }
  async getCurrentDetails() {
    try {
      var response = await fetch(
        'https://json.astrologyapi.com/v1/current_vdasha',
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
        console.log('cdata :', json);
        this.setState({
          currentDetails: json,
          cdData: true,
        });
        this.getMdDetails();
      } else {
        // this.props.navigation.navigate('error');
      }
    } catch (error) {
      console.log('error : ', error);
      // this.props.navigation.navigate('error');
    }
  }
  async getMdDetails() {
    try {
      console.log('props :', this.props.data);
      var response = await fetch(
        'https://json.astrologyapi.com/v1/sub_vdasha/Venus',
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
        console.log('mdData :', json);
        this.setState({
          md: json,
        });
        this.getAdDetails();
      } else {
        // this.props.navigation.navigate('error');
      }
    } catch (error) {
      console.log('error : ', error);
      // this.props.navigation.navigate('error');
    }
  }
  async getAdDetails() {
    try {
      var response = await fetch(
        'https://json.astrologyapi.com/v1/sub_sub_vdasha/Venus/Venus',
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
        console.log('addata :', json);
        this.setState({
          ad: json,
        });
        this.getPdDetails();
      } else {
        // this.props.navigation.navigate('error');
        console.log('error');
      }
    } catch (error) {
      console.log('error : ', error);
      // this.props.navigation.navigate('error');
    }
  }
  async getPdDetails() {
    try {
      var response = await fetch(
        'https://json.astrologyapi.com/v1/sub_sub_sub_vdasha/Venus/Venus/Venus',
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
        console.log('pddata :', json);
        this.setState({
          pd: json,
        });
        this.getSdDetails();
      } else {
        // this.props.navigation.navigate('error');
        console.log('error');
      }
    } catch (error) {
      console.log('error : ', error);
      // this.props.navigation.navigate('error');
    }
  }
  async getSdDetails() {
    try {
      var response = await fetch(
        'https://json.astrologyapi.com/v1/sub_sub_sub_sub_vdasha/Venus/Venus/Venus/Rahu',
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
        console.log('sddata :', json);
        this.setState({
          sd: json,
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
    // this.getMdDetails();
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
          <Text
            style={{
              fontSize: 20,
              fontWeight: '500',
              color: 'white',
              marginLeft: '5%',
              marginTop: 10,
            }}>
            Major Dasha
          </Text>
          <View
            style={{
              borderColor: 'white',
              borderWidth: 1,
              borderRadius: 10,
              alignSelf: 'center',
              width: '90%',
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
                      Planet
                    </Text>
                  </DataTable.Title>
                  <DataTable.Title style={{marginLeft: -40}}>
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
                  <DataTable.Title style={{}}>
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
                {this.state.majorDetails.map((item, index) => (
                  <DataTable.Row key={index}>
                    <DataTable.Cell>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: '400',
                          color: 'white',
                        }}>
                        {item.planet}
                      </Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={{marginLeft: -60}}>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: '400',
                          color: 'white',
                          alignSelf: 'center',
                        }}>
                        {item.start}
                      </Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={{}}>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: '400',
                          color: 'white',
                          alignSelf: 'center',
                        }}>
                        {item.end}
                      </Text>
                    </DataTable.Cell>
                  </DataTable.Row>
                ))}
              </DataTable>
            </View>
          </View>
          {this.state.cdData ? (
            <View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '500',
                  color: 'white',
                  marginLeft: '5%',
                  marginTop: 10,
                }}>
                Current Dasha
              </Text>
              <View
                style={{
                  borderColor: 'white',
                  borderWidth: 1,
                  borderRadius: 10,
                  alignSelf: 'center',
                  width: '90%',
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
                          Planet
                        </Text>
                      </DataTable.Title>
                      <DataTable.Title style={{marginLeft: -40}}>
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
                      <DataTable.Title style={{}}>
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
                      <DataTable.Cell>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: 'white',
                          }}>
                          {this.state.currentDetails?.major?.planet}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{marginLeft: -60}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: 'white',
                            alignSelf: 'center',
                          }}>
                          {this.state.currentDetails?.major?.start}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: 'white',
                            alignSelf: 'center',
                          }}>
                          {this.state.currentDetails?.major?.end}
                        </Text>
                      </DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                      <DataTable.Cell>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: 'white',
                          }}>
                          {this.state.currentDetails?.minor?.planet}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{marginLeft: -60}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: 'white',
                            alignSelf: 'center',
                          }}>
                          {this.state.currentDetails?.minor?.start}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: 'white',
                            alignSelf: 'center',
                          }}>
                          {this.state.currentDetails?.minor?.end}
                        </Text>
                      </DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                      <DataTable.Cell>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: 'white',
                          }}>
                          {this.state.currentDetails?.sub_minor?.planet}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{marginLeft: -60}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: 'white',
                            alignSelf: 'center',
                          }}>
                          {this.state.currentDetails?.sub_minor?.start}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: 'white',
                            alignSelf: 'center',
                          }}>
                          {this.state.currentDetails?.sub_minor?.end}
                        </Text>
                      </DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                      <DataTable.Cell>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: 'white',
                          }}>
                          {this.state.currentDetails?.sub_sub_minor?.planet}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{marginLeft: -60}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: 'white',
                            alignSelf: 'center',
                          }}>
                          {this.state.currentDetails?.sub_sub_minor?.start}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: 'white',
                            alignSelf: 'center',
                          }}>
                          {this.state.currentDetails?.sub_sub_minor?.end}
                        </Text>
                      </DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                      <DataTable.Cell>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: 'white',
                          }}>
                          {this.state.currentDetails?.sub_sub_sub_minor?.planet}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{marginLeft: -60}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: 'white',
                            alignSelf: 'center',
                          }}>
                          {this.state.currentDetails?.sub_sub_sub_minor?.start}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: 'white',
                            alignSelf: 'center',
                          }}>
                          {this.state.currentDetails?.sub_sub_sub_minor?.end}
                        </Text>
                      </DataTable.Cell>
                    </DataTable.Row>
                  </DataTable>
                </View>
              </View>
            </View>
          ) : (
            <></>
          )}
          <Text
            style={{
              fontSize: 20,
              fontWeight: '500',
              color: 'white',
              marginLeft: '5%',
              marginTop: 10,
            }}>
            sub_vdasha
          </Text>
          <View
            style={{
              borderColor: 'white',
              borderWidth: 1,
              borderRadius: 10,
              alignSelf: 'center',
              width: '90%',
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
                      Planet
                    </Text>
                  </DataTable.Title>
                  <DataTable.Title style={{marginLeft: -40}}>
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
                  <DataTable.Title style={{}}>
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
                {this.state.md.map((item, index) => (
                  <DataTable.Row key={index}>
                    <DataTable.Cell>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: '400',
                          color: 'white',
                        }}>
                        {item.planet}
                      </Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={{marginLeft: -60}}>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: '400',
                          color: 'white',
                          alignSelf: 'center',
                        }}>
                        {item.start}
                      </Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={{}}>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: '400',
                          color: 'white',
                          alignSelf: 'center',
                        }}>
                        {item.end}
                      </Text>
                    </DataTable.Cell>
                  </DataTable.Row>
                ))}
              </DataTable>
            </View>
          </View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '500',
              color: 'white',
              marginLeft: '5%',
              marginTop: 10,
            }}>
            sub_sub_vdasha
          </Text>
          <View
            style={{
              borderColor: 'white',
              borderWidth: 1,
              borderRadius: 10,
              alignSelf: 'center',
              width: '90%',
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
                      Planet
                    </Text>
                  </DataTable.Title>
                  <DataTable.Title style={{marginLeft: -40}}>
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
                  <DataTable.Title style={{}}>
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
                {this.state.ad.map((item, index) => (
                  <DataTable.Row key={index}>
                    <DataTable.Cell>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: '400',
                          color: 'white',
                        }}>
                        {item.planet}
                      </Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={{marginLeft: -60}}>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: '400',
                          color: 'white',
                          alignSelf: 'center',
                        }}>
                        {item.start}
                      </Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={{}}>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: '400',
                          color: 'white',
                          alignSelf: 'center',
                        }}>
                        {item.end}
                      </Text>
                    </DataTable.Cell>
                  </DataTable.Row>
                ))}
              </DataTable>
            </View>
          </View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '500',
              color: 'white',
              marginLeft: '5%',
              marginTop: 10,
            }}>
            sub_sub_sub_vdasha
          </Text>
          <View
            style={{
              borderColor: 'white',
              borderWidth: 1,
              borderRadius: 10,
              alignSelf: 'center',
              width: '90%',
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
                      Planet
                    </Text>
                  </DataTable.Title>
                  <DataTable.Title style={{marginLeft: -40}}>
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
                  <DataTable.Title style={{}}>
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
                {this.state.pd.map((item, index) => (
                  <DataTable.Row key={index}>
                    <DataTable.Cell>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: '400',
                          color: 'white',
                        }}>
                        {item.planet}
                      </Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={{marginLeft: -60}}>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: '400',
                          color: 'white',
                          alignSelf: 'center',
                        }}>
                        {item.start}
                      </Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={{}}>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: '400',
                          color: 'white',
                          alignSelf: 'center',
                        }}>
                        {item.end}
                      </Text>
                    </DataTable.Cell>
                  </DataTable.Row>
                ))}
              </DataTable>
            </View>
          </View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '500',
              color: 'white',
              marginLeft: '5%',
              marginTop: 10,
            }}>
            sub_sub_sub_sub_vdasha
          </Text>
          <View
            style={{
              borderColor: 'white',
              borderWidth: 1,
              borderRadius: 10,
              alignSelf: 'center',
              width: '90%',
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
                      Planet
                    </Text>
                  </DataTable.Title>
                  <DataTable.Title style={{marginLeft: -40}}>
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
                  <DataTable.Title style={{}}>
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
                {this.state.sd.map((item, index) => (
                  <DataTable.Row key={index}>
                    <DataTable.Cell>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: '400',
                          color: 'white',
                        }}>
                        {item.planet}
                      </Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={{marginLeft: -60}}>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: '400',
                          color: 'white',
                          alignSelf: 'center',
                        }}>
                        {item.start}
                      </Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={{}}>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: '400',
                          color: 'white',
                          alignSelf: 'center',
                        }}>
                        {item.end}
                      </Text>
                    </DataTable.Cell>
                  </DataTable.Row>
                ))}
              </DataTable>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

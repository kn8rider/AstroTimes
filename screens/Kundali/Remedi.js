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
import base64 from 'react-native-base64';
import {DataTable} from 'react-native-paper';
import color from '../GlobalVariables';
const userId = '618328';
const apiKey = '51e43ea9a639e025dd62e04a4b7a32e0';
export default class Remedi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      activeIndex: 0,
    };
  }
  async getMajorDetails() {
    try {
      this._isMounted = true;
      console.log('props :', this.props.data);
      var response = await fetch(
        'https://json.astrologyapi.com/v1/basic_gem_suggestion',
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
        console.log('guess_data2 :', json);
        this.setState({
          data: json,
        });
      } else {
        // this.props.navigation.navigate('error');
      }
    } catch (error) {
      console.log('vError : ', error);
      // this.props.navigation.navigate('error');
    }
  }

  componentDidMount() {
    this.setState({
      data: this.props.data,
    });
    this.getMajorDetails();
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
          <Text
            style={{
              fontSize: 20,
              fontWeight: '500',
              color: color.secondary,
              marginLeft: '5%',
              marginTop: 20,
            }}>
            Benefic
          </Text>
          <ScrollView
            horizontal={true}
            style={{
              borderColor: color.secondary,
              borderWidth: 1,
              borderRadius: 10,
              alignSelf: 'center',
              marginTop: 20,
              marginBottom: 50,
            }}>
            <View>
              <DataTable>
                <DataTable.Row>
                  <DataTable.Cell style={{width: 150}}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                      }}>
                      Name
                    </Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 150}}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                        alignSelf: 'center',
                      }}>
                      {this.state.data?.BENEFIC?.name}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell style={{width: 150}}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                      }}>
                      Gem Key
                    </Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 150}}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                        alignSelf: 'center',
                      }}>
                      {this.state.data?.BENEFIC?.gem_key}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell style={{width: 150}}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                      }}>
                      Semi Gem
                    </Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 150}}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                        alignSelf: 'center',
                      }}>
                      {this.state.data?.BENEFIC?.semi_gem}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell style={{width: 150}}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                      }}>
                      Wear Finger
                    </Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 150}}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                        alignSelf: 'center',
                      }}>
                      {this.state.data?.BENEFIC?.wear_finger}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell style={{width: 150}}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                      }}>
                      Weight Carat
                    </Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 150}}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                        alignSelf: 'center',
                      }}>
                      {this.state.data?.BENEFIC?.weight_caret}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell style={{width: 150}}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                      }}>
                      Wear Metal
                    </Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 150}}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                        alignSelf: 'center',
                      }}>
                      {this.state.data?.BENEFIC?.wear_metal}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell style={{width: 150}}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                      }}>
                      Wear Day
                    </Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 150}}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                        alignSelf: 'center',
                      }}>
                      {this.state.data?.BENEFIC?.wear_day}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell style={{width: 150}}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                      }}>
                      Gem Deity
                    </Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 150}}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                        alignSelf: 'center',
                      }}>
                      {this.state.data?.BENEFIC?.gem_deity}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>
              </DataTable>
            </View>
          </ScrollView>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '500',
              color: color.secondary,
              marginLeft: '5%',
            }}>
            Life
          </Text>
          <ScrollView
            horizontal={true}
            style={{
              borderColor: color.secondary,
              borderWidth: 1,
              borderRadius: 10,
              alignSelf: 'center',
              marginTop: 20,
              marginBottom: 50,
            }}>
            <View>
              <DataTable>
                <DataTable.Row>
                  <DataTable.Cell style={{width: 150}}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                      }}>
                      Name
                    </Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 150}}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                        alignSelf: 'center',
                      }}>
                      {this.state.data?.LIFE?.name}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell style={{width: 150}}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                      }}>
                      Gem Key
                    </Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 150}}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                        alignSelf: 'center',
                      }}>
                      {this.state.data?.LIFE?.gem_key}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell style={{width: 150}}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                      }}>
                      Semi Gem
                    </Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 150}}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                        alignSelf: 'center',
                      }}>
                      {this.state.data?.LIFE?.semi_gem}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell style={{width: 150}}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                      }}>
                      Wear Finger
                    </Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 150}}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                        alignSelf: 'center',
                      }}>
                      {this.state.data?.LIFE?.wear_finger}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell style={{width: 150}}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                      }}>
                      Weight Carat
                    </Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 150}}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                        alignSelf: 'center',
                      }}>
                      {this.state.data?.LIFE?.weight_caret}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell style={{width: 150}}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                      }}>
                      Wear Metal
                    </Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 150}}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                        alignSelf: 'center',
                      }}>
                      {this.state.data?.LIFE?.wear_metal}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell style={{width: 150}}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                      }}>
                      Wear Day
                    </Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 150}}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                        alignSelf: 'center',
                      }}>
                      {this.state.data?.LIFE?.wear_day}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell style={{width: 150}}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                      }}>
                      Gem Deity
                    </Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 150}}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                        alignSelf: 'center',
                      }}>
                      {this.state.data?.LIFE?.gem_deity}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>
              </DataTable>
            </View>
          </ScrollView>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '500',
              color: color.secondary,
              marginLeft: '5%',
            }}>
            Lucky
          </Text>
          <ScrollView
            horizontal={true}
            style={{
              borderColor: color.secondary,
              borderWidth: 1,
              borderRadius: 10,
              alignSelf: 'center',
              marginTop: 20,
              marginBottom: 50,
            }}>
            <View>
              <DataTable>
                <DataTable.Row>
                  <DataTable.Cell style={{width: 150}}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                      }}>
                      Name
                    </Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 150}}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                        alignSelf: 'center',
                      }}>
                      {this.state.data?.LUCKY?.name}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell style={{width: 150}}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                      }}>
                      Gem Key
                    </Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 150}}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                        alignSelf: 'center',
                      }}>
                      {this.state.data?.LUCKY?.gem_key}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell style={{width: 150}}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                      }}>
                      Semi Gem
                    </Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 150}}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                        alignSelf: 'center',
                      }}>
                      {this.state.data?.LUCKY?.semi_gem}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell style={{width: 150}}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                      }}>
                      Wear Finger
                    </Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 150}}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                        alignSelf: 'center',
                      }}>
                      {this.state.data?.LUCKY?.wear_finger}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell style={{width: 150}}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                      }}>
                      Weight Carat
                    </Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 150}}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                        alignSelf: 'center',
                      }}>
                      {this.state.data?.LUCKY?.weight_caret}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell style={{width: 150}}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                      }}>
                      Wear Metal
                    </Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 150}}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                        alignSelf: 'center',
                      }}>
                      {this.state.data?.LUCKY?.wear_metal}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell style={{width: 150}}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                      }}>
                      Wear Day
                    </Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 150}}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                        alignSelf: 'center',
                      }}>
                      {this.state.data?.LUCKY?.wear_day}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell style={{width: 150}}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                      }}>
                      Gem Deity
                    </Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 150}}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: '400',
                        color: color.secondary,
                        alignSelf: 'center',
                      }}>
                      {this.state.data?.LUCKY?.gem_deity}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>
              </DataTable>
            </View>
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

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

import base64 from 'react-native-base64';
import {DataTable} from 'react-native-paper';
import color from '../GlobalVariables';
const userId = '618328';
const apiKey = '51e43ea9a639e025dd62e04a4b7a32e0';
const height = Dimensions.get('window').height;
planetdID = [
  {id: 'Sun', val: 'sun'},
  {id: 'Moon', val: 'moon'},
  {id: 'Mars', val: 'mars'},
  {id: 'Mercury', val: 'mercury'},
  {id: 'Jupiter', val: 'jupiter'},
  {id: 'Venus', val: 'venus'},
  {id: 'Saturn', val: 'saturn'},
  {id: 'Ascedant', val: 'ascendant'},
];
export default class AshtakVarga extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      bhav: [],
      bhav_madhya: [],
      hChartD: [],
      hChartI: [],
      sd: [],
      activeIndex: 0,
      load: true,
    };
  }
  async getMajorDetails(val) {
    try {
      this.setState({load: true});
      console.log('props :', this.props.data);
      var url = 'https://json.astrologyapi.com/v1/planet_ashtak/' + val;
      console.log(url);
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
        console.log('guess_data :', json);
        this.setState({
          data: json,
          load: false,
        });
        // this.getCurrentDetails();
      } else {
        // this.props.navigation.navigate('error');
      }
    } catch (error) {
      console.log('vError : ', error);
      // this.props.navigation.navigate('error');
    }
  }
  async getCurrentDetails() {
    try {
      console.log('props :', this.props.data);
      var url = 'https://json.astrologyapi.com/v1/sarvashtak';
      console.log(url);
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
      console.log(response.status);
      const json = await response.json();
      if (response.status == 200) {
        console.log('cr_data :', json);
        this.setState({
          bhav: json,
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
    this.getMajorDetails('sun');
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
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{
              height: 40,
              borderColor: color.secondary,
              borderWidth: 1,
              borderRightWidth: 0,
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
              marginTop: 20,
              marginLeft: 10,
            }}>
            {planetdID.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  backgroundColor:
                    this.state.activeIndex == index
                      ? color.themeColor
                      : 'transparent',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                  paddingHorizontal: 10,
                  borderColor: color.secondary,
                  borderWidth: this.state.activeIndex == index ? 1 : 0,
                  borderRadius: 10,
                }}
                onPress={() => {
                  this.setState({activeIndex: index});
                  this.getMajorDetails(item.val);
                }}>
                <Text
                  style={{
                    fontSize: 17,
                    color: color.secondary,
                    fontWeight: '400',
                  }}>
                  {item.id}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

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
                  color: color.secondary,
                  marginLeft: '5%',
                  marginTop: 20,
                }}>
                Ashtakvarga Data
              </Text>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: '400',
                  color: color.secondary,
                  marginLeft: '5%',
                  marginTop: 20,
                }}>
                {this.state.data?.ashtak_varga?.type
                  ? this.state.data.ashtak_varga.type + ' Data'
                  : ''}
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
                          Planets
                        </Text>
                      </DataTable.Title>
                      <DataTable.Title style={{}}>
                        <Text
                          style={{
                            fontSize: 17,
                            fontWeight: '500',
                            color: color.secondary,
                            marginLeft: 30,
                          }}>
                          Sun
                        </Text>
                      </DataTable.Title>
                      <DataTable.Title style={{}}>
                        <Text
                          style={{
                            fontSize: 17,
                            fontWeight: '500',
                            color: color.secondary,
                          }}>
                          Moon
                        </Text>
                      </DataTable.Title>
                      <DataTable.Title style={{}}>
                        <Text
                          style={{
                            fontSize: 17,
                            fontWeight: '500',
                            color: color.secondary,
                          }}>
                          Mars
                        </Text>
                      </DataTable.Title>
                      <DataTable.Title style={{}}>
                        <Text
                          style={{
                            fontSize: 17,
                            fontWeight: '500',
                            color: color.secondary,
                          }}>
                          Mercury
                        </Text>
                      </DataTable.Title>
                      <DataTable.Title style={{}}>
                        <Text
                          style={{
                            fontSize: 17,
                            fontWeight: '500',
                            color: color.secondary,
                          }}>
                          Jupiter
                        </Text>
                      </DataTable.Title>
                      <DataTable.Title style={{}}>
                        <Text
                          style={{
                            fontSize: 17,
                            fontWeight: '500',
                            color: color.secondary,
                          }}>
                          Venus
                        </Text>
                      </DataTable.Title>
                      <DataTable.Title style={{}}>
                        <Text
                          style={{
                            fontSize: 17,
                            fontWeight: '500',
                            color: color.secondary,
                          }}>
                          Saturn
                        </Text>
                      </DataTable.Title>
                      <DataTable.Title style={{}}>
                        <Text
                          style={{
                            fontSize: 17,
                            fontWeight: '500',
                            color: color.secondary,
                          }}>
                          Ascendant
                        </Text>
                      </DataTable.Title>
                      <DataTable.Title style={{}}>
                        <Text
                          style={{
                            fontSize: 17,
                            fontWeight: '500',
                            color: color.secondary,
                          }}>
                          Total
                        </Text>
                      </DataTable.Title>
                    </DataTable.Header>

                    <DataTable.Row>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                          }}>
                          {this.state.data.ashtak_points?.aquarius
                            ? 'Aqaurius'
                            : ''}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                          }}>
                          {this.state.data.ashtak_points?.aquarius?.sun}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.aquarius?.moon}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.aquarius?.mars}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.aquarius?.mercury}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.aquarius?.jupiter}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.aquarius?.venus}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.aquarius?.saturn}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.aquarius?.ascendant}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100, marginRight: -30}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.aquarius?.total}
                        </Text>
                      </DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                          }}>
                          {this.state.data.ashtak_points?.taurus
                            ? 'Taurus'
                            : ''}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                          }}>
                          {this.state.data.ashtak_points?.taurus?.sun}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.taurus?.moon}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.taurus?.mars}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.taurus?.mercury}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.taurus?.jupiter}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.taurus?.venus}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.taurus?.saturn}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.taurus?.ascendant}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100, marginRight: -30}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.taurus?.total}
                        </Text>
                      </DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                          }}>
                          {this.state.data.ashtak_points?.gemini
                            ? 'Gemini'
                            : ''}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                          }}>
                          {this.state.data.ashtak_points?.gemini?.sun}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.gemini?.moon}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.gemini?.mars}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.gemini?.mercury}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.gemini?.jupiter}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.gemini?.venus}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.gemini?.saturn}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.gemini?.ascendant}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100, marginRight: -30}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.gemini?.total}
                        </Text>
                      </DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                          }}>
                          {this.state.data.ashtak_points?.cancer
                            ? 'Cancer'
                            : ''}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                          }}>
                          {this.state.data.ashtak_points?.cancer?.sun}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.cancer?.moon}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.cancer?.mars}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.cancer?.mercury}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.cancer?.jupiter}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.cancer?.venus}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.cancer?.saturn}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.cancer?.ascendant}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100, marginRight: -30}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.cancer?.total}
                        </Text>
                      </DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                          }}>
                          {this.state.data.ashtak_points?.leo ? 'Leo' : ''}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                          }}>
                          {this.state.data.ashtak_points?.leo?.sun}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.leo?.moon}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.leo?.mars}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.leo?.mercury}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.leo?.jupiter}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.leo?.venus}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.leo?.saturn}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.leo?.ascendant}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100, marginRight: -30}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.leo?.total}
                        </Text>
                      </DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                          }}>
                          {this.state.data.ashtak_points?.virgo ? 'Virgo' : ''}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                          }}>
                          {this.state.data.ashtak_points?.virgo?.sun}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.virgo?.moon}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.virgo?.mars}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.virgo?.mercury}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.virgo?.jupiter}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.virgo?.venus}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.virgo?.saturn}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.virgo?.ascendant}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100, marginRight: -30}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.virgo?.total}
                        </Text>
                      </DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                          }}>
                          {this.state.data.ashtak_points?.libra ? 'Libra' : ''}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                          }}>
                          {this.state.data.ashtak_points?.libra?.sun}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.libra?.moon}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.libra?.mars}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.libra?.mercury}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.libra?.jupiter}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.libra?.venus}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.libra?.saturn}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.libra?.ascendant}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100, marginRight: -30}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.libra?.total}
                        </Text>
                      </DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                          }}>
                          {this.state.data.ashtak_points?.scorpio
                            ? 'Scorpio'
                            : ''}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                          }}>
                          {this.state.data.ashtak_points?.scorpio?.sun}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.scorpio?.moon}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.scorpio?.mars}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.scorpio?.mercury}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.scorpio?.jupiter}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.scorpio?.venus}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.scorpio?.saturn}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.scorpio?.ascendant}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100, marginRight: -30}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.scorpio?.total}
                        </Text>
                      </DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                          }}>
                          {this.state.data.ashtak_points?.sagittarius
                            ? 'Sagittarius'
                            : ''}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                          }}>
                          {this.state.data.ashtak_points?.sagittarius?.sun}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.sagittarius?.moon}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.sagittarius?.mars}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.sagittarius?.mercury}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.sagittarius?.jupiter}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.sagittarius?.venus}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.sagittarius?.saturn}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {
                            this.state.data.ashtak_points?.sagittarius
                              ?.ascendant
                          }
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100, marginRight: -30}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.sagittarius?.total}
                        </Text>
                      </DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                          }}>
                          {this.state.data.ashtak_points?.capricorn
                            ? 'Capricorn'
                            : ''}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                          }}>
                          {this.state.data.ashtak_points?.capricorn?.sun}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.capricorn?.moon}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.capricorn?.mars}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.capricorn?.mercury}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.capricorn?.jupiter}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.capricorn?.venus}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.capricorn?.saturn}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.capricorn?.ascendant}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100, marginRight: -30}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.capricorn?.total}
                        </Text>
                      </DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                          }}>
                          {this.state.data.ashtak_points?.aries ? 'Aries' : ''}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                          }}>
                          {this.state.data.ashtak_points?.aries?.sun}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.aries?.moon}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.aries?.mars}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.aries?.mercury}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.aries?.jupiter}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.aries?.venus}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.aries?.saturn}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.aries?.ascendant}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100, marginRight: -30}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.aries?.total}
                        </Text>
                      </DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                          }}>
                          {this.state.data.ashtak_points?.pisces
                            ? 'Pisces'
                            : ''}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                          }}>
                          {this.state.data.ashtak_points?.pisces?.sun}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.pisces?.moon}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.pisces?.mars}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.pisces?.mercury}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.pisces?.jupiter}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.pisces?.venus}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.pisces?.saturn}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.pisces?.ascendant}
                        </Text>
                      </DataTable.Cell>
                      <DataTable.Cell style={{width: 100, marginRight: -30}}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: '400',
                            color: color.secondary,
                            alignSelf: 'center',
                          }}>
                          {this.state.data.ashtak_points?.pisces?.total}
                        </Text>
                      </DataTable.Cell>
                    </DataTable.Row>
                  </DataTable>
                </View>
              </ScrollView>
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

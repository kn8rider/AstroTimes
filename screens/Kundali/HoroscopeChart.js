import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  Dimensions,
  // ActivityIndicator,
} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {
  Card,
  Avatar,
  List,
  Appbar,
  TextInput,
  RadioButton,
  ActivityIndicator,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import base64 from 'react-native-base64';
import {DataTable} from 'react-native-paper';
import {SvgUri, SvgXml} from 'react-native-svg';
import color from '../GlobalVariables';
const height = Dimensions.get('window').height;
const userId = '618328';
const apiKey = '51e43ea9a639e025dd62e04a4b7a32e0';
chardID = [
  {id: 'chalit', val: 'Chalit'},
  {id: 'SUN', val: 'Sun'},
  {id: 'MOON', val: 'Moon'},
  {id: 'D1', val: 'Birth'},
  {id: 'D2', val: 'Hora'},
  {id: 'D3', val: 'Dreshkan'},
  {id: 'D4', val: 'Chathurthamasha'},
  {id: 'D5', val: 'Panchmansha'},
  {id: 'D7', val: 'Saptamansha'},
  {id: 'D8', val: 'Ashtamansha'},
  {id: 'D9', val: 'Navamansha'},
  {id: 'D10', val: 'Dashamansha'},
  {id: 'D12', val: 'Dwadashamsha'},
  {id: 'D16', val: ' Shodashamsha'},
  {id: 'D20', val: 'Vishamansha'},
  {id: 'D24', val: 'Chaturvimshamsha'},
  {id: 'D27', val: 'Bhamsha'},
  {id: 'D30', val: 'Trishamansha'},
  {id: 'D40', val: 'Khavedamsha'},
  {id: 'D45', val: 'Akshvedansha'},
  {id: 'D60', val: 'Shashtymsha'},
];
export default class HoroscopeChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      bhav: [],
      bhav_madhya: [],
      hChartD: [],
      hChartI: [],
      sd: [],
      md: [],
      activeIndex: 0,
      load: true,
    };
  }
  async getMajorDetails() {
    try {
      console.log('props :', this.props.data);
      var response = await fetch(
        'https://json.astrologyapi.com/v1/bhav_madhya',
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
        console.log('guess_data :', json.bhav_madhya);
        this.setState({
          bhav: json,
          bhav_madhya: json.bhav_madhya,
        });
        this.getCurrentDetails('chalit');
      } else {
        // this.props.navigation.navigate('error');
      }
    } catch (error) {
      console.log('vError : ', error);
      // this.props.navigation.navigate('error');
    }
  }
  async getCurrentDetails(val) {
    try {
      const url = 'https://json.astrologyapi.com/v1/horo_chart/:' + val;
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
        console.log('cdata :', json);
        this.setState({
          currentDetails: json,
        });
        this.getMdDetails('chalit');
      } else {
        // this.props.navigation.navigate('error');
        console.log('not found Data');
      }
    } catch (error) {
      console.log('E_error : ', error);
      // this.props.navigation.navigate('error');
    }
  }
  async getMdDetails(par) {
    try {
      this.setState({load: true});
      console.log('props :', this.props.data);
      var val = {
        day: this.props.data.day,
        month: this.props.data.month,
        year: this.props.data.year,
        hour: this.props.data.hour,
        min: this.props.data.min,
        lat: this.props.data.lat,
        lon: this.props.data.lon,
        tzone: this.props.data.tzone,
        planetColor: 'white',
        signColor: 'white',
        lineColor: 'white',
        chartType: 'north',
      };
      console.log('data : ', val);
      const url = 'https://json.astrologyapi.com/v1/horo_chart_image/' + par;
      var response = await fetch(url, {
        method: 'POST',
        dataType: 'json',
        headers: {
          Authorization:
            'Basic ' + base64.encode(userId + ':' + apiKey, 'base64'),
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(val),
      });

      const json = await response.json();
      // console.log(response);
      if (response.status == 200) {
        console.log('mdData :', json);
        if (par === 'chalit') {
          this.setState({
            md: json,
            load: false,
          });
        } else {
          this.setState({
            md: json.svg,
            load: false,
          });
        }
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
            {chardID.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  backgroundColor:
                    this.state.activeIndex == index ? '#FABD0B' : 'transparent',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                  paddingHorizontal: 10,
                  borderColor: 'white',
                  borderWidth: this.state.activeIndex == index ? 1 : 0,
                  borderRadius: 10,
                }}
                onPress={() => {
                  this.setState({activeIndex: index});
                  this.getMdDetails(item.id);
                }}>
                <Text style={{fontSize: 17, color: 'white', fontWeight: '400'}}>
                  {item.val}
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
              <View
                style={{
                  width: 350,
                  height: 400,
                  alignSelf: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 20,
                }}>
                <SvgXml
                  xml={(
                    this.state.md ??
                    `<svg width="32" height="32" viewBox="0 0 32 32">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  fill="url(#gradient)"
                  d="M4 0C1.79086 0 0 1.79086 0 4V28C0 30.2091 1.79086 32 4 32H28C30.2091 32 32 30.2091 32 28V4C32 1.79086 30.2091 0 28 0H4ZM17 6C17 5.44772 17.4477 5 18 5H20C20.5523 5 21 5.44772 21 6V25C21 25.5523 20.5523 26 20 26H18C17.4477 26 17 25.5523 17 25V6ZM12 11C11.4477 11 11 11.4477 11 12V25C11 25.5523 11.4477 26 12 26H14C14.5523 26 15 25.5523 15 25V12C15 11.4477 14.5523 11 14 11H12ZM6 18C5.44772 18 5 18.4477 5 19V25C5 25.5523 5.44772 26 6 26H8C8.55228 26 9 25.5523 9 25V19C9 18.4477 8.55228 18 8 18H6ZM24 14C23.4477 14 23 14.4477 23 15V25C23 25.5523 23.4477 26 24 26H26C26.5523 26 27 25.5523 27 25V15C27 14.4477 26.5523 14 26 14H24Z"
                />
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0"
                    y1="0"
                    x2="8.46631"
                    y2="37.3364"
                    gradient-units="userSpaceOnUse">
                    <stop offset="0" stop-color="#FEA267" />
                    <stop offset="1" stop-color="#E75A4C" />
                  </linearGradient>
                </defs>
              </svg>`
                  ).toString()}
                  height="100%"
                  width="100%"
                />
              </View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '500',
                  color: 'white',
                  marginLeft: '5%',
                  marginTop: 10,
                }}>
                Bhav Madhya
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
                        backgroundColor: color.themeColor,
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
                          Degree
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
                    </DataTable.Header>
                    {this.state.bhav_madhya.map((item, index) => (
                      <DataTable.Row key={index}>
                        <DataTable.Cell style={{width: 100}}>
                          <Text
                            style={{
                              fontSize: 15,
                              fontWeight: '400',
                              color: 'white',
                            }}>
                            {item.sign}
                          </Text>
                        </DataTable.Cell>
                        <DataTable.Cell style={{width: 100, marginLeft: 40}}>
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
                            {item.degree}
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
                            {item.norm_degree}
                          </Text>
                        </DataTable.Cell>
                      </DataTable.Row>
                    ))}
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

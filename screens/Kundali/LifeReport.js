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
import {
  Card,
  Avatar,
  List,
  Appbar,
  TextInput,
  RadioButton,
} from 'react-native-paper';
import base64 from 'react-native-base64';
const height = Dimensions.get('window').height;

const userId = '618328';
const apiKey = '51e43ea9a639e025dd62e04a4b7a32e0';
planetdID = [
  {id: 'Sun', val: 'sun'},
  {id: 'Moon', val: 'moon'},
  {id: 'Mars', val: 'mars'},
  {id: 'Mercury', val: 'mercury'},
  {id: 'Jupiter', val: 'jupiter'},
  {id: 'Venus', val: 'venus'},
  {id: 'Saturn', val: 'saturn'},
];
export default class LifeReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      rashi: [],
      genData: [],
      activeIndex: 0,
      load: false,
    };
  }
  async getMajorDetails(val) {
    try {
      console.log('props :', this.props.data);
      var response = await fetch(
        'https://json.astrologyapi.com/v1/general_ascendant_report',
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
        console.log('ldData :', json);
        this.setState({
          data: json,
        });
        this.getRashiDetails('sun');
      } else {
        // this.props.navigation.navigate('error');
      }
    } catch (error) {
      console.log('vError : ', error);
      // this.props.navigation.navigate('error');
    }
  }
  async getRashiDetails(val) {
    try {
      this.setState({load: false});
      console.log('props :', this.props.data);
      const url =
        'https://json.astrologyapi.com/v1/general_rashi_report/' + val;

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
      console.log(response);
      const json = await response.json();
      if (response.status == 200) {
        console.log('gdData :', json);
        this.setState({
          rashi: json,
        });
        this.getGenDetails('sun');
      } else {
        // this.props.navigation.navigate('error');
      }
    } catch (error) {
      console.log('vError : ', error);
      // this.props.navigation.navigate('error');
    }
  }
  async getGenDetails(val) {
    try {
      console.log('props :', this.props.data);
      const url =
        'https://json.astrologyapi.com/v1/general_house_report/' + val;
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
        console.log('ghdData :', json);
        this.setState({
          genData: json,
          load: true,
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
      <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            backgroundColor: 'black ',
            flex: 1,
          }}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{
              height: 40,
              borderColor: 'white',
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
                  this.getRashiDetails(item.val);
                  this.getGenDetails(item.val);
                }}>
                <Text style={{fontSize: 17, color: 'white', fontWeight: '400'}}>
                  {item.id}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          {this.state.load ? (
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
                General House Report
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '400',
                  color: 'white',
                  marginLeft: '5%',
                  marginTop: 5,
                  marginBottom: 20,
                  maxWidth: '90%',
                }}>
                {this.state.genData?.house_report}
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
                General Rashi Report
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '400',
                  color: 'white',
                  marginLeft: '5%',
                  marginTop: 5,
                  marginBottom: 20,
                  maxWidth: '90%',
                }}>
                {this.state.rashi?.rashi_report}
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
                General Ascendant Report
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                  color: 'white',
                  marginLeft: '5%',
                  marginTop: 20,
                }}>
                {this.state.data?.asc_report?.ascendant}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '400',
                  color: 'white',
                  marginLeft: '5%',
                  marginTop: 5,
                  marginBottom: 20,
                  maxWidth: '90%',
                }}>
                {this.state.data?.asc_report?.report}
              </Text>
            </View>
          ) : (
            <ActivityIndicator
              style={{
                alignSelf: 'center',
                marginTop: height / 3,
              }}
              size="large"
              color="#4A3C8C"
            />
          )}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

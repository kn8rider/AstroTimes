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
export default class Prediction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      activeIndex: 0,
    };
  }
  async getMajorDetails() {
    try {
      console.log('props :', this.props.data);
      var response = await fetch(
        'https://json.astrologyapi.com/v1/daily_nakshatra_prediction',
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
        console.log('pdData :', json);
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
      <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            backgroundColor: 'black ',
            flex: 1,
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '500',
              color: 'white',
              marginLeft: '5%',
              marginTop: 20,
            }}>
            Birth Moon Sign:
            <Text
              style={{
                fontWeight: '400',
                fontSize: 16,
              }}>
              {' '}
              {this.state.data?.birth_moon_sign}
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
            Birth Moon Nakshatra:
            <Text
              style={{
                fontWeight: '400',
                fontSize: 16,
              }}>
              {' '}
              {this.state.data?.birth_moon_nakshatra}
            </Text>
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '500',
              color: 'white',
              marginLeft: '5%',
              marginTop: 20,
              textAlign: 'center',
            }}>
            Prediction
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '500',
              color: 'white',
              marginLeft: '5%',
              marginTop: 20,
            }}>
            Health:
            <Text
              style={{
                fontWeight: '400',
                fontSize: 16,
              }}>
              {' '}
              {this.state.data?.prediction?.health}
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
            Emotion:
            <Text
              style={{
                fontWeight: '400',
                fontSize: 16,
              }}>
              {' '}
              {this.state.data?.prediction?.emotions}
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
            Profession:
            <Text
              style={{
                fontWeight: '400',
                fontSize: 16,
              }}>
              {' '}
              {this.state.data?.prediction?.profession}
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
            Luck:
            <Text
              style={{
                fontWeight: '400',
                fontSize: 16,
              }}>
              {' '}
              {this.state.data?.prediction?.luck}
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
            personal_life :
            <Text
              style={{
                fontWeight: '400',
                fontSize: 16,
              }}>
              {' '}
              {this.state.data?.prediction?.personal_life}
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
            Travel:
            <Text
              style={{
                fontWeight: '400',
                fontSize: 16,
              }}>
              {' '}
              {this.state.data?.prediction?.travel}
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
            Prediction Date :
            <Text
              style={{
                fontWeight: '400',
                fontSize: 16,
              }}>
              {' '}
              {this.state.data?.prediction_date}
            </Text>
          </Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

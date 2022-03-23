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
const userId = '618328';
const apiKey = '51e43ea9a639e025dd62e04a4b7a32e0';
const height = Dimensions.get('window').height;
export default class MatchReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeChat: 0,
      reData: [],
      load: true,
    };
  }
  async getbirthDetails() {
    try {
      console.log('props :', this.props.data);
      var response = await fetch(
        ' 	https://json.astrologyapi.com/v1/match_making_report',
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
      console.log(response.json());
      const json = await response.json();
      if (response.status == 200) {
        console.log('mredata :', json);
        this.setState({
          reData: json,
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
      console.log('error : ', error);
      this.setState({
        load: true,
      });
      //   this.props.navigation.navigate('error');
    }
  }

  componentDidMount() {
    this.getbirthDetails();
  }
  render() {
    // console.log('data: ---', this.props.data);

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
            <View style={{paddingHorizontal: '5%'}}>
              {/* <Text
                style={{
                  fontSize: 20,
                  fontWeight: '400',
                  color: 'white',
                  marginTop: 20,
                  textAlign: 'center',
                }}>
                Report
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: 'white',
                  marginTop: 20,
                }}>
                is_present : {'       '}
                {this.state.reData?.is_present?.toString()}
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: 'white',
                  marginTop: 10,
                }}>
                vedha_name : {'       '}
                {this.state.reData?.vedha_name?.toString()}
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: 'white',
                  marginTop: 10,
                }}>
                vedha_report : {'       '}
                {this.state.reData?.vedha_report}
              </Text> */}
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

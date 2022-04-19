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
import base64 from 'react-native-base64';
import {DataTable} from 'react-native-paper';
import color from '../GlobalVariables';
const userId = '618328';
const apiKey = '51e43ea9a639e025dd62e04a4b7a32e0';
const height = Dimensions.get('window').height;
export default class MangalikData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeChat: 0,
      mgData: [],
      load: true,
    };
  }
  async getbirthDetails() {
    try {
      //   console.log('props :', this.props.data);
      var response = await fetch(
        'https://json.astrologyapi.com/v1/match_manglik_report',
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
        console.log('mgdata :', json);
        this.setState({
          mgData: json,
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
            <View style={{paddingHorizontal: '5%'}}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '400',
                  color: color.secondary,
                  marginTop: 20,
                  textAlign: 'center',
                }}>
                Male
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: color.secondary,
                  marginTop: 10,
                }}>
                is_present : {'       '}
                {this.state.mgData?.male?.is_present.toString()}
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  marginTop: 10,
                  color: color.secondary,
                }}>
                is_mars_manglik_cancelled : {'       '}
                {this.state.mgData?.male?.is_mars_manglik_cancelled.toString()}
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: color.secondary,
                  marginTop: 10,
                }}>
                manglik_cancel_rule : {'       '}
                {this.state.mgData?.male?.manglik_cancel_rule}
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: color.secondary,
                  marginTop: 10,
                }}>
                manglik_present_rule : ---
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: color.secondary,
                  marginTop: 10,
                }}>
                based_on_aspect : {'       '}
                {this.state.mgData?.male?.manglik_present_rule?.based_on_aspect}
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: color.secondary,
                  marginTop: 10,
                }}>
                based_on_house : {'       '}
                {this.state.mgData?.male?.manglik_present_rule?.based_on_house}
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: color.secondary,
                  marginTop: 10,
                }}>
                manglik_report : {'       '}
                {this.state.mgData?.male?.manglik_report}
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: color.secondary,
                  marginTop: 10,
                }}>
                manglik_status : {'       '}
                {this.state.mgData?.male?.manglik_status}
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: color.secondary,
                  marginTop: 10,
                }}>
                percentage_manglik_after_cancellation : {'       '}
                {this.state.mgData?.male?.percentage_manglik_after_cancellation}
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: color.secondary,
                  marginTop: 10,
                }}>
                percentage_manglik_present : {'       '}
                {this.state.mgData?.male?.percentage_manglik_present}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '400',
                  color: color.secondary,
                  marginTop: 20,
                  textAlign: 'center',
                }}>
                Female
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: color.secondary,
                  marginTop: 10,
                }}>
                is_present : {'       '}
                {this.state.mgData?.female?.is_present.toString()}
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  marginTop: 10,
                  color: color.secondary,
                }}>
                is_mars_manglik_cancelled : {'       '}
                {this.state.mgData?.female?.is_mars_manglik_cancelled.toString()}
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: color.secondary,
                  marginTop: 10,
                }}>
                manglik_cancel_rule : {'       '}
                {this.state.mgData?.female?.manglik_cancel_rule}
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: color.secondary,
                  marginTop: 10,
                }}>
                manglik_present_rule : ---
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: color.secondary,
                  marginTop: 10,
                }}>
                based_on_aspect : {'       '}
                {
                  this.state.mgData?.female?.manglik_present_rule
                    ?.based_on_aspect
                }
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: color.secondary,
                  marginTop: 10,
                }}>
                based_on_house : {'       '}
                {
                  this.state.mgData?.female?.manglik_present_rule
                    ?.based_on_house
                }
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: color.secondary,
                  marginTop: 10,
                }}>
                manglik_report : {'       '}
                {this.state.mgData?.female?.manglik_report}
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: color.secondary,
                  marginTop: 10,
                }}>
                manglik_status : {'       '}
                {this.state.mgData?.female?.manglik_status}
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: color.secondary,
                  marginTop: 10,
                }}>
                percentage_manglik_after_cancellation : {'       '}
                {
                  this.state.mgData?.female
                    ?.percentage_manglik_after_cancellation
                }
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: color.secondary,
                  marginTop: 10,
                }}>
                percentage_manglik_present : {'       '}
                {this.state.mgData?.female?.percentage_manglik_present}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '400',
                  color: color.secondary,
                  marginTop: 20,
                  textAlign: 'center',
                }}>
                Conclusion
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: color.secondary,
                  marginTop: 20,
                }}>
                Match : {'       '}
                {this.state.mgData?.conclusion?.match.toString()}
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: color.secondary,
                  marginTop: 10,
                  marginBottom: 30,
                }}>
                Report : {'       '}
                {this.state.mgData?.conclusion?.report}
              </Text>
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

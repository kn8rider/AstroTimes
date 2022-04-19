import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  ActivityIndicator,
  TextInput,
  Dimensions,
} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Appbar, RadioButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import base64 from 'react-native-base64';
import color from '../GlobalVariables';
const height = Dimensions.get('window').height;

const userId = '618328';
const apiKey = '51e43ea9a639e025dd62e04a4b7a32e0';
var arrData = [];
var pob = [];
const headData = [
  {val: ' Numero Table'},
  {val: ' Numero Report'},
  {val: ' Numero Fav Time'},
  {val: ' Numero Place Vastu'},
];
export default class NumeroData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      table: [],
      report: [],
      favTime: [],
      place: [],
      load: true,
    };
  }

  async getData() {
    try {
      this.setState({load: true});
      var response = await fetch(
        'https://json.astrologyapi.com/v1/numero_table',
        {
          method: 'POST',
          dataType: 'json',
          headers: {
            Authorization:
              'Basic ' + base64.encode(userId + ':' + apiKey, 'base64'),
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.props.route.params.data),
        },
      );

      const json = await response.json();
      if (response.status == 200) {
        console.log('data in kundali :', json);
        this.setState({
          table: json,
          load: false,
        });
        this.reportData();
      } else {
        console.log('error');
      }
    } catch (error) {
      console.log(error);
    }
  }
  async reportData() {
    try {
      var response = await fetch(
        'https://json.astrologyapi.com/v1/numero_report',
        {
          method: 'POST',
          dataType: 'json',
          headers: {
            Authorization:
              'Basic ' + base64.encode(userId + ':' + apiKey, 'base64'),
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.props.route.params.data),
        },
      );

      const json = await response.json();
      if (response.status == 200) {
        console.log('data in report :', json);
        this.setState({
          report: json,
        });
        this.favData();
      } else {
        console.log('error');
      }
    } catch (error) {
      console.log(error);
    }
  }
  async favData() {
    try {
      var response = await fetch(
        'https://json.astrologyapi.com/v1/numero_fav_time',
        {
          method: 'POST',
          dataType: 'json',
          headers: {
            Authorization:
              'Basic ' + base64.encode(userId + ':' + apiKey, 'base64'),
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.props.route.params.data),
        },
      );

      const json = await response.json();
      if (response.status == 200) {
        console.log('data in fav_time :', json);
        this.setState({
          favTime: json,
        });
        this.placeData();
      } else {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  }
  async placeData() {
    try {
      var response = await fetch(
        'https://json.astrologyapi.com/v1/numero_place_vastu',
        {
          method: 'POST',
          dataType: 'json',
          headers: {
            Authorization:
              'Basic ' + base64.encode(userId + ':' + apiKey, 'base64'),
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.props.route.params.data),
        },
      );

      const json = await response.json();
      if (response.status == 200) {
        console.log('data in plcae :', json);
        this.setState({
          place: json,
        });
      } else {
        console.log('error');
      }
    } catch (error) {
      console.log(error);
    }
  }
  componentDidMount() {
    this.getData();
  }
  render() {
    // console.log(this.state.activeIndex);
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: color.primary}}>
        <Appbar style={{backgroundColor: color.themeColor}}>
          <Icon
            name={'arrow-left'}
            size={30}
            color={color.secondary}
            style={{marginLeft: 10}}
            onPress={() => this.props.navigation.goBack()}
          />
          <Text
            style={{
              color: color.secondary,
              fontWeight: '400',
              fontSize: 18,
              marginLeft: 20,
            }}>
            Numerology
          </Text>
        </Appbar>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            backgroundColor: 'black',
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
            {headData.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  backgroundColor:
                    this.state.activeIndex == index ? '#FABD0B' : 'transparent',
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
                }}>
                <Text
                  style={{
                    fontSize: 17,
                    color: color.secondary,
                    fontWeight: '400',
                  }}>
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
              {this.state.activeIndex == 1 ? (
                <View>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '400',
                      marginLeft: 10,
                      marginTop: 20,
                      color: color.secondary,
                    }}>
                    Title : {this.state.report?.title ?? ''}
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '400',
                      marginLeft: 10,
                      marginTop: 20,
                      color: color.secondary,
                      maxWidth: '95%',
                      marginHorizontal: '2%',
                    }}>
                    Description :{' '}
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: '400',
                      }}>
                      {this.state.report?.description ?? ''}
                    </Text>
                  </Text>
                </View>
              ) : this.state.activeIndex == 2 ? (
                <View>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '400',
                      marginLeft: 20,
                      marginTop: 20,
                      color: color.secondary,
                    }}>
                    Title : {this.state.favTime?.title ?? ''}
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '400',
                      marginLeft: 20,
                      marginTop: 20,
                      color: color.secondary,
                      maxWidth: '95%',
                      marginHorizontal: '2%',
                    }}>
                    Description :{' '}
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: '400',
                      }}>
                      {this.state.favTime?.description ?? ''}
                    </Text>
                  </Text>
                </View>
              ) : this.state.activeIndex == 3 ? (
                <View>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '400',
                      marginLeft: 20,
                      marginTop: 20,
                      color: color.secondary,
                    }}>
                    Title : {this.state.place?.title ?? ''}
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '400',
                      marginLeft: 20,
                      marginTop: 20,
                      color: color.secondary,
                      maxWidth: '95%',
                      marginHorizontal: '2%',
                    }}>
                    Description :{' '}
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: '400',
                      }}>
                      {this.state.place?.description ?? ''}
                    </Text>
                  </Text>
                </View>
              ) : (
                <View>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '400',
                      marginLeft: 20,
                      marginTop: 20,
                      color: color.secondary,
                    }}>
                    Name : {this.state.table?.name ?? ''}
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '400',
                      marginLeft: 20,
                      marginTop: 10,
                      color: color.secondary,
                      maxWidth: '95%',
                      marginHorizontal: '2%',
                    }}>
                    Name Number : {this.state.table?.name_number ?? ''}
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '400',
                      marginLeft: 20,
                      marginTop: 10,
                      color: color.secondary,
                      maxWidth: '95%',
                      marginHorizontal: '2%',
                    }}>
                    Date : {this.state.table?.date ?? ''}
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '400',
                      marginLeft: 20,
                      marginTop: 10,
                      color: color.secondary,
                      maxWidth: '95%',
                      marginHorizontal: '2%',
                    }}>
                    Destiny Number : {this.state.table?.destiny_number ?? ''}
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '400',
                      marginLeft: 20,
                      marginTop: 10,
                      color: color.secondary,
                      maxWidth: '95%',
                      marginHorizontal: '2%',
                    }}>
                    Evil Number : {this.state.table?.evil_num ?? ''}
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '400',
                      marginLeft: 20,
                      marginTop: 10,
                      color: color.secondary,
                      maxWidth: '95%',
                      marginHorizontal: '2%',
                    }}>
                    Favourite Color : {this.state.table?.fav_color ?? ''}
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '400',
                      marginLeft: 20,
                      marginTop: 10,
                      color: color.secondary,
                      maxWidth: '95%',
                      marginHorizontal: '2%',
                    }}>
                    Favourite Day : {this.state.table?.fav_day ?? ''}
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '400',
                      marginLeft: 20,
                      marginTop: 10,
                      color: color.secondary,
                      maxWidth: '95%',
                      marginHorizontal: '2%',
                    }}>
                    Favourite God : {this.state.table?.fav_god ?? ''}
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '400',
                      marginLeft: 20,
                      marginTop: 10,
                      color: color.secondary,
                      maxWidth: '95%',
                      marginHorizontal: '2%',
                    }}>
                    Favourite Mantra : {this.state.table?.fav_mantra ?? ''}
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '400',
                      marginLeft: 20,
                      marginTop: 10,
                      color: color.secondary,
                      maxWidth: '95%',
                      marginHorizontal: '2%',
                    }}>
                    Favourite Metal : {this.state.table?.fav_metal ?? ''}
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '400',
                      marginLeft: 20,
                      marginTop: 10,
                      color: color.secondary,
                      maxWidth: '95%',
                      marginHorizontal: '2%',
                    }}>
                    Favourite Stone : {this.state.table?.fav_stone ?? ''}
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '400',
                      marginLeft: 20,
                      marginTop: 10,
                      color: color.secondary,
                      maxWidth: '95%',
                      marginHorizontal: '2%',
                    }}>
                    Favourite Substone : {this.state.table?.fav_substone ?? ''}
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '400',
                      marginLeft: 20,
                      marginTop: 10,
                      color: color.secondary,
                      maxWidth: '95%',
                      marginHorizontal: '2%',
                    }}>
                    Friendly Number : {this.state.table?.friendly_num ?? ''}
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '400',
                      marginLeft: 20,
                      marginTop: 10,
                      color: color.secondary,
                      maxWidth: '95%',
                      marginHorizontal: '2%',
                    }}>
                    Nuetral Number : {this.state.table?.neutral_num ?? ''}
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '400',
                      marginLeft: 20,
                      marginTop: 10,
                      color: color.secondary,
                      maxWidth: '95%',
                      marginHorizontal: '2%',
                    }}>
                    Radical Number : {this.state.table?.radical_number ?? ''}
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '400',
                      marginLeft: 20,
                      marginTop: 10,
                      color: color.secondary,
                      maxWidth: '95%',
                      marginHorizontal: '2%',
                      marginBottom: 30,
                    }}>
                    Radical Ruler : {this.state.table?.radical_ruler ?? ''}
                  </Text>
                </View>
              )}
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

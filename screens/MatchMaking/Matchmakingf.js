import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  ActivityIndicator,
  TextInput,
} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Card, Avatar, List, Appbar, RadioButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AIcon from 'react-native-vector-icons/Ionicons';
import DateTimePicker from '@react-native-community/datetimepicker';
import base64 from 'react-native-base64';
import {Picker} from '@react-native-picker/picker';
import color from '../GlobalVariables';
const userId = '618328';
const apiKey = '51e43ea9a639e025dd62e04a4b7a32e0';
var arrData = [];
var pob = [];
export default class MatchMakingf extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      activeChat: 0,
      name: '',
      birthDate: '',
      Date: '',
      month: '',
      year: '',
      birthHour: 0,
      birthMinutes: 0,
      birthSecs: 0,
      birthPlace: '',
      show: false,
      mode: 'date',
      date: new Date(),
      geoData: [],
      showData: false,
      lat: '',
      lon: '',
      tzone: '',
      tzoneId: '',
      birthDetails: [],
      astroDetails: [],
      ghatDetails: [],
      item: 0,
      dateF: '',
    };
  }
  onChange = (event, selectedDate) => {
    const currentDate = selectedDate || this.state.date;
    this.setState({
      show: Platform.OS === 'ios',
      date: currentDate,
    });
    this.fetchDate();
  };
  showMode = currentMode => {
    this.setState({
      show: true,
      mode: currentMode,
    });
  };
  showDatepicker = () => {
    this.showMode('date');
  };
  fetchDate = () => {
    console.log(this.state.date.toDateString());
    const fullDate = this.state.date.toDateString();

    let arr = fullDate.split(' ');
    this.setState({
      Date: this.state.date.getDate(),
      day: arr[0],
      year: this.state.date.getFullYear(),
    });
    this.setState({
      month: this.state.date.getMonth() + 1,
    });
    if (this.state.date.getMonth() < 9) {
      this.setState({
        month: '0' + this.state.month,
      });
    } else {
      this.setState({
        month: this.state.month,
      });
    }
    console.log(this.state.Date, this.state.month, this.state.year);
  };
  async getData(val) {
    try {
      this._isMounted = true;
      console.log(val);

      var val = {
        place: val,
        maxRows: 10,
      };
      var response = await fetch(
        'https://json.astrologyapi.com/v1/geo_details',
        {
          method: 'POST',
          dataType: 'json',
          headers: {
            Authorization:
              'Basic ' + base64.encode(userId + ':' + apiKey, 'base64'),
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(val),
        },
      );

      const json = await response.json();
      if (this._isMounted) {
        // console.log('val :', json);
        arrData = [];
        for (var i = 0; i < json.geonames.length; i++) {
          if (json.geonames[i].place_name != 'Try nearby city or district!') {
            pob.push(json.geonames[i].place_name);
            arrData.push(json.geonames[i]);
          }
        }
        this.setState({geoData: json, showData: true});
        console.log('arr : ', arrData, pob);
      }
    } catch (error) {
      console.log(error);
    }
  }
  async getTimeZone(val) {
    try {
      this._isMounted = true;
      console.log(val);

      var val = {
        country_code: val,
        isDst: true,
      };
      var response = await fetch('https://json.astrologyapi.com/v1/timezone', {
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
      if (this._isMounted) {
        console.log('val :', json);
        this.setState({
          tzone: json.timezone,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  async postData() {
    try {
      // this.getBirthDetails();
      var val = {
        f_day: this.state.Date,
        f_month: this.state.month,
        f_year: this.state.year,
        f_hour: Number(this.state.birthHour),
        f_min: this.state.birthMinutes,
        f_lat: this.state.lat,
        f_lon: this.state.lon,
        f_tzone: this.state.tzone,
        m_day: this.props.route.params.mdata.day,
        m_month: this.props.route.params.mdata.month,
        m_year: this.props.route.params.mdata.year,
        m_hour: Number(this.props.route.params.mdata.hour),
        m_min: this.props.route.params.mdata.min,
        m_lat: this.props.route.params.mdata.lat,
        m_lon: this.props.route.params.mdata.lon,
        m_tzone: this.props.route.params.mdata.tzone,
      };
      this.props.navigation.navigate('matchTab', {
        data: val,
      });
    } catch (error) {
      console.log(error);
    }
  }
  componentDidMount() {
    this.onChange();
  }
  render() {
    console.log('mdata :', this.props.route.params.mdata);
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: color.primary}}>
        <Appbar style={{backgroundColor: color.themeColor}}>
          <Icon
            name={'arrow-left'}
            size={30}
            color={color.themeColor}
            style={{marginLeft: 10}}
            onPress={() => this.props.navigation.goBack()}
          />
          <Text
            style={{
              color: color.themeColor,
              fontWeight: '400',
              fontSize: 18,
              marginLeft: 20,
            }}>
            Horoscope Matching
          </Text>
        </Appbar>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            backgroundColor: color.primary,
          }}>
          <View
            style={{
              backgroundColor: '#1F1F1F',
              marginHorizontal: '5%',
              borderRadius: 10,
              padding: 10,
              marginTop: 20,
              paddingBottom: 20,
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '500',
                color: color.themeColor,
                marginTop: 10,
                marginBottom: 20,
                textAlign: 'center',
              }}>
              Female's Details
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '500',
                color: color.themeColor,
                marginTop: 10,
              }}>
              Birth Date
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderRadius: 10,
                marginTop: 10,
                borderColor: 'grey',
                borderWidth: 1,
                paddingLeft: 10,
              }}>
              <Icon
                name="calendar-month-outline"
                size={15}
                color={color.themeColor}
                onPress={this.showDatepicker}
              />
              <TextInput
                style={{
                  height: 45,
                  width: '90%',
                  alignSelf: 'center',
                  alignContent: 'center',
                  color: color.themeColor,
                  fontSize: 16,
                  fontWeight: '400',
                  marginLeft: 20,
                }}
                onChangeText={text => this.setState({dateF: text})}
                value={this.state.date.toDateString().substring(3)}
                placeholder={this.state.date.toDateString().substring(3)}
                placeholderTextColor={color.themeColor}
                underlineColorAndroid={'transparent'}
                onFocus={() => this.showDatepicker()}
                // onSubmitEditing={event => this.getData(event.nativeEvent.text)}
              />
            </View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '500',
                color: color.themeColor,
                marginTop: 10,
              }}>
              Birth Time
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}>
              <View>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: '400',
                    color: color.themeColor,
                    marginTop: 10,
                  }}>
                  Hour
                </Text>
                <View
                  style={{
                    borderRadius: 10,
                    marginTop: 10,
                    borderColor: 'blue',
                    borderWidth: 1,
                    width: 120,
                    paddingBottom: 5,
                    height: 50,
                    marginBottom: 10,
                  }}>
                  <Picker
                    mode="dropdown"
                    style={{
                      backgroundColor: color.themeColor,
                      borderWidth: 1,
                      borderColor: 'blue',
                      borderRadius: 10,
                      flex: 1,
                    }}
                    dropdownIconColor="black"
                    itemStyle={{backgroundColor: '#1F1F1F'}}
                    selectedValue={this.state.birthHour}
                    onValueChange={itemvalue =>
                      this.setState({item: itemvalue, birthHour: itemvalue})
                    }>
                    <Picker.Item label="00" value={0} color="black" />
                    <Picker.Item label="01" value={1} color="black" />
                    <Picker.Item label="02" value={2} color="black" />
                    <Picker.Item label="03" value={3} color="black" />
                    <Picker.Item label="04" value={4} color="black" />
                    <Picker.Item label="05" value={5} color="black" />
                    <Picker.Item label="06" value={6} color="black" />
                    <Picker.Item label="07" value={7} color="black" />
                    <Picker.Item label="08" value={8} color="black" />
                    <Picker.Item label="09" value={9} color="black" />
                    <Picker.Item label="10" value={10} color="black" />
                    <Picker.Item label="11" value={11} color="black" />
                    <Picker.Item label="12" value={12} color="black" />
                    <Picker.Item label="13" value={13} color="black" />
                    <Picker.Item label="14" value={14} color="black" />
                    <Picker.Item label="15" value={15} color="black" />
                    <Picker.Item label="16" value={16} color="black" />
                    <Picker.Item label="17" value={17} color="black" />
                    <Picker.Item label="18" value={18} color="black" />
                    <Picker.Item label="19" value={19} color="black" />
                    <Picker.Item label="20" value={20} color="black" />
                    <Picker.Item label="21" value={21} color="black" />
                    <Picker.Item label="22" value={22} color="black" />
                    <Picker.Item label="23" value={23} color="black" />
                    <Picker.Item label="24" value={24} color="black" />
                  </Picker>
                </View>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: '400',
                    color: color.themeColor,
                    marginTop: 10,
                  }}>
                  Minute
                </Text>
                <View
                  style={{
                    borderRadius: 10,
                    marginTop: 10,
                    borderColor: 'blue',
                    borderWidth: 1,
                    width: 120,
                    paddingBottom: 5,
                    height: 50,
                    marginBottom: 10,
                  }}>
                  <Picker
                    mode="dropdown"
                    style={{
                      backgroundColor: color.themeColor,
                      borderWidth: 1,
                      borderColor: 'blue',
                      borderRadius: 10,
                      flex: 1,
                    }}
                    dropdownIconColor="black"
                    itemStyle={{backgroundColor: '#1F1F1F'}}
                    selectedValue={this.state.birthMinutes}
                    onValueChange={itemvalue =>
                      this.setState({item: itemvalue, birthMinutes: itemvalue})
                    }>
                    <Picker.Item label="00" value={0} color="black" />
                    <Picker.Item label="01" value={1} color="black" />
                    <Picker.Item label="02" value={2} color="black" />
                    <Picker.Item label="03" value={3} color="black" />
                    <Picker.Item label="04" value={4} color="black" />
                    <Picker.Item label="05" value={5} color="black" />
                    <Picker.Item label="06" value={6} color="black" />
                    <Picker.Item label="07" value={7} color="black" />
                    <Picker.Item label="08" value={8} color="black" />
                    <Picker.Item label="09" value={9} color="black" />
                    <Picker.Item label="10" value={10} color="black" />
                    <Picker.Item label="11" value={11} color="black" />
                    <Picker.Item label="12" value={12} color="black" />
                    <Picker.Item label="13" value={13} color="black" />
                    <Picker.Item label="14" value={14} color="black" />
                    <Picker.Item label="15" value={15} color="black" />
                    <Picker.Item label="16" value={16} color="black" />
                    <Picker.Item label="17" value={17} color="black" />
                    <Picker.Item label="18" value={18} color="black" />
                    <Picker.Item label="19" value={19} color="black" />
                    <Picker.Item label="20" value={20} color="black" />
                    <Picker.Item label="21" value={21} color="black" />
                    <Picker.Item label="22" value={22} color="black" />
                    <Picker.Item label="23" value={23} color="black" />
                    <Picker.Item label="24" value={24} color="black" />
                    <Picker.Item label="25" value={25} color="black" />
                    <Picker.Item label="26" value={26} color="black" />
                    <Picker.Item label="27" value={27} color="black" />
                    <Picker.Item label="28" value={28} color="black" />
                    <Picker.Item label="29" value={29} color="black" />
                    <Picker.Item label="30" value={30} color="black" />
                    <Picker.Item label="31" value={31} color="black" />
                    <Picker.Item label="32" value={32} color="black" />
                    <Picker.Item label="33" value={33} color="black" />
                    <Picker.Item label="34" value={34} color="black" />
                    <Picker.Item label="35" value={35} color="black" />
                    <Picker.Item label="36" value={36} color="black" />
                    <Picker.Item label="37" value={37} color="black" />
                    <Picker.Item label="38" value={38} color="black" />
                    <Picker.Item label="39" value={39} color="black" />
                    <Picker.Item label="40" value={40} color="black" />
                    <Picker.Item label="41" value={41} color="black" />
                    <Picker.Item label="42" value={42} color="black" />
                    <Picker.Item label="43" value={43} color="black" />
                    <Picker.Item label="44" value={44} color="black" />
                    <Picker.Item label="45" value={45} color="black" />
                    <Picker.Item label="46" value={46} color="black" />
                    <Picker.Item label="47" value={47} color="black" />
                    <Picker.Item label="48" value={48} color="black" />
                    <Picker.Item label="49" value={49} color="black" />
                    <Picker.Item label="50" value={50} color="black" />
                    <Picker.Item label="51" value={51} color="black" />
                    <Picker.Item label="52" value={52} color="black" />
                    <Picker.Item label="53" value={53} color="black" />
                    <Picker.Item label="54" value={54} color="black" />
                    <Picker.Item label="55" value={55} color="black" />
                    <Picker.Item label="56" value={56} color="black" />
                    <Picker.Item label="57" value={57} color="black" />
                    <Picker.Item label="58" value={58} color="black" />
                    <Picker.Item label="59" value={59} color="black" />
                    <Picker.Item label="60" value={60} color="black" />
                  </Picker>
                </View>
              </View>

              <View>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: '400',
                    color: color.themeColor,
                    marginTop: 10,
                  }}>
                  Seconds
                </Text>
                <View
                  style={{
                    borderRadius: 10,
                    marginTop: 10,
                    borderColor: 'blue',
                    borderWidth: 1,
                    width: 120,
                    paddingBottom: 5,
                    height: 50,
                    marginBottom: 10,
                  }}>
                  <Picker
                    mode="dropdown"
                    style={{
                      backgroundColor: color.themeColor,
                      borderWidth: 1,
                      borderColor: 'blue',
                      borderRadius: 10,
                      flex: 1,
                    }}
                    dropdownIconColor="black"
                    itemStyle={{backgroundColor: '#1F1F1F'}}
                    selectedValue={this.state.birthSecs}
                    onValueChange={itemvalue =>
                      this.setState({item: itemvalue, birthSecs: itemvalue})
                    }>
                    <Picker.Item label="00" value={0} color="black" />
                    <Picker.Item label="01" value={1} color="black" />
                    <Picker.Item label="02" value={2} color="black" />
                    <Picker.Item label="03" value={3} color="black" />
                    <Picker.Item label="04" value={4} color="black" />
                    <Picker.Item label="05" value={5} color="black" />
                    <Picker.Item label="06" value={6} color="black" />
                    <Picker.Item label="07" value={7} color="black" />
                    <Picker.Item label="08" value={8} color="black" />
                    <Picker.Item label="09" value={9} color="black" />
                    <Picker.Item label="10" value={10} color="black" />
                    <Picker.Item label="11" value={11} color="black" />
                    <Picker.Item label="12" value={12} color="black" />
                    <Picker.Item label="13" value={13} color="black" />
                    <Picker.Item label="14" value={14} color="black" />
                    <Picker.Item label="15" value={15} color="black" />
                    <Picker.Item label="16" value={16} color="black" />
                    <Picker.Item label="17" value={17} color="black" />
                    <Picker.Item label="18" value={18} color="black" />
                    <Picker.Item label="19" value={19} color="black" />
                    <Picker.Item label="20" value={20} color="black" />
                    <Picker.Item label="21" value={21} color="black" />
                    <Picker.Item label="22" value={22} color="black" />
                    <Picker.Item label="23" value={23} color="black" />
                    <Picker.Item label="24" value={24} color="black" />
                    <Picker.Item label="25" value={25} color="black" />
                    <Picker.Item label="26" value={26} color="black" />
                    <Picker.Item label="27" value={27} color="black" />
                    <Picker.Item label="28" value={28} color="black" />
                    <Picker.Item label="29" value={29} color="black" />
                    <Picker.Item label="30" value={30} color="black" />
                    <Picker.Item label="31" value={31} color="black" />
                    <Picker.Item label="32" value={32} color="black" />
                    <Picker.Item label="33" value={33} color="black" />
                    <Picker.Item label="34" value={34} color="black" />
                    <Picker.Item label="35" value={35} color="black" />
                    <Picker.Item label="36" value={36} color="black" />
                    <Picker.Item label="37" value={37} color="black" />
                    <Picker.Item label="38" value={38} color="black" />
                    <Picker.Item label="39" value={39} color="black" />
                    <Picker.Item label="40" value={40} color="black" />
                    <Picker.Item label="41" value={41} color="black" />
                    <Picker.Item label="42" value={42} color="black" />
                    <Picker.Item label="43" value={43} color="black" />
                    <Picker.Item label="44" value={44} color="black" />
                    <Picker.Item label="45" value={45} color="black" />
                    <Picker.Item label="46" value={46} color="black" />
                    <Picker.Item label="47" value={47} color="black" />
                    <Picker.Item label="48" value={48} color="black" />
                    <Picker.Item label="49" value={49} color="black" />
                    <Picker.Item label="50" value={50} color="black" />
                    <Picker.Item label="51" value={51} color="black" />
                    <Picker.Item label="52" value={52} color="black" />
                    <Picker.Item label="53" value={53} color="black" />
                    <Picker.Item label="54" value={54} color="black" />
                    <Picker.Item label="55" value={55} color="black" />
                    <Picker.Item label="56" value={56} color="black" />
                    <Picker.Item label="57" value={57} color="black" />
                    <Picker.Item label="58" value={58} color="black" />
                    <Picker.Item label="59" value={59} color="black" />
                    <Picker.Item label="60" value={60} color="black" />
                  </Picker>
                </View>
              </View>
            </View>

            <Text
              style={{
                fontSize: 18,
                fontWeight: '500',
                color: color.themeColor,
                marginTop: 10,
              }}>
              Birth Place
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderRadius: 10,
                marginTop: 10,
                borderColor: 'grey',
                borderWidth: 1,
                paddingLeft: 10,
              }}>
              <AIcon
                name="md-location-outline"
                size={15}
                color={color.themeColor}
              />
              <TextInput
                style={{
                  height: 45,
                  width: '90%',
                  alignSelf: 'center',
                  alignContent: 'center',
                  color: color.themeColor,
                  fontSize: 16,
                  fontWeight: '400',
                  marginLeft: 20,
                }}
                onChangeText={text => {
                  this.getData(text);
                  this.setState({birthPlace: text});
                }}
                value={this.state.birthPlace}
                placeholder="Raipur, Chhattisgarh, India"
                placeholderTextColor={color.themeColor}
                underlineColorAndroid={'transparent'}
                // onFocus={this.setState({showData: true})}
                // onBlur={this.setState({showData: false})}
                onSubmitEditing={event => this.getData(event.nativeEvent.text)}
              />
            </View>
            {arrData.length > 0 && this.state.showData == true ? (
              <View
                style={{
                  backgroundColor: '#1F1F1F',
                  borderColor: 'grey',
                  borderWidth: 1,
                  borderTopColor: 'transparent',
                  borderRadius: 5,
                  paddingVertical: 10,
                }}>
                {arrData.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      this.setState({
                        birthPlace: item.place_name,
                        showData: false,
                        lat: item.latitude,
                        lon: item.longitude,
                        tzoneId: item.timezone_id,
                      });
                      this.getTimeZone(item.timezone_id);
                    }}>
                    <Text
                      style={{
                        color: color.themeColor,
                        fontSize: 18,
                        fontWeight: '400',
                        marginTop: 5,
                        marginLeft: 30,
                      }}>
                      {item.place_name}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            ) : (
              <></>
            )}
          </View>
          {this.state.show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={this.state.date}
              mode={this.state.mode}
              is24Hour={true}
              display="default"
              onChange={this.onChange}
            />
          )}
          <TouchableOpacity
            style={{
              width: '90%',
              backgroundColor: color.themeColor,
              justifyContent: 'center',
              borderRadius: 10,
              alignSelf: 'center',
              padding: 10,
              marginTop: 50,
            }}
            onPress={() => this.postData()}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '400',
                color: color.themeColor,
                textAlign: 'center',
              }}>
              Strat Matching
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

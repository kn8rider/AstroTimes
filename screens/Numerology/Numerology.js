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
import {Appbar, RadioButton} from 'react-native-paper';
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
const type = [
  {
    val: 'ARIES',
    img: 'https://divineapi.com/widget/daily_horoscope/images/zodiac/Aries.png',
  },
  {
    val: 'TAURUS',
    img: 'https://divineapi.com/widget/daily_horoscope/images/zodiac/Taurus.png',
  },
  {
    val: 'GEMINI',
    img: 'https://divineapi.com/widget/daily_horoscope/images/zodiac/Gemini.png',
  },
  {
    val: 'CANCER',
    img: 'https://divineapi.com/widget/daily_horoscope/images/zodiac/Cancer.png',
  },
  {
    val: 'LEO',
    img: 'https://divineapi.com/widget/daily_horoscope/images/zodiac/Leo.png',
  },
  {
    val: 'VIRGO',
    img: 'https://divineapi.com/widget/daily_horoscope/images/zodiac/Virgo.png',
  },
  {
    val: 'LIBRA',
    img: 'https://divineapi.com/widget/daily_horoscope/images/zodiac/Libra.png',
  },
  {
    val: 'SCORPIO',
    img: 'https://divineapi.com/widget/daily_horoscope/images/zodiac/Scorpio.png',
  },
  {
    val: 'SAGITTARIUS',
    img: 'https://divineapi.com/widget/daily_horoscope/images/zodiac/Sagittarius.png',
  },
  {
    val: 'CAPRICORN',
    img: 'https://divineapi.com/widget/daily_horoscope/images/zodiac/Capricorn.png',
  },
  {
    val: 'PISCES',
    img: 'https://divineapi.com/widget/daily_horoscope/images/zodiac/Pisces.png',
  },
  {
    val: 'AQUARIUS',
    img: 'https://divineapi.com/widget/daily_horoscope/images/zodiac/Aquarius.png',
  },
];
const exploreData = [
  {
    title: 'Daily Angel Guidance',
    color: '#10324F',
    iname: require('../../assets/media/angel.png'),
  },
  {
    title: 'Love Games',
    color: '#A14465',
    iname: require('../../assets/media/cards.png'),
  },
  {
    title: 'Tarot Reading',
    color: '#593672',
    iname: require('../../assets/media/tarot.png'),
  },
  {
    title: 'Vibes of the Day',
    color: color.themeColor,
    iname: require('../../assets/media/smile.png'),
  },
  {
    title: 'Hindu calendar',
    color: '#0A3F42',
    iname: require('../../assets/media/calendar.png'),
  },
];
export default class Numerology extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      name: '',
      birthDate: '',
      Date: '',
      month: '',
      year: '',
      show: false,
      mode: 'date',
      date: new Date(),
      showData: false,
      mainData: [],
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
  async getData() {
    try {
      var val = {
        day: Number(this.state.Date),
        month: this.state.month,
        year: this.state.year,
        name: this.state.name,
      };
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
          body: JSON.stringify(val),
        },
      );

      const json = await response.json();
      if (response.status == 200) {
        console.log('data in kundali :', json);
        this.setState({
          mainData: json,
        });
      } else {
        console.log('error');
      }
    } catch (error) {
      console.log(error);
    }
  }
  async passData() {
    try {
      var val = {
        day: Number(this.state.Date),
        month: this.state.month,
        year: this.state.year,
        name: this.state.name,
      };
      this.props.navigation.navigate('numeroData', {
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
                color: color.secondary,
                marginTop: 10,
              }}>
              Name
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
              <Icon name="account-outline" size={15} color={color.secondary} />
              <TextInput
                style={{
                  height: 45,
                  width: '90%',
                  alignSelf: 'center',
                  alignContent: 'center',
                  color: color.secondary,
                  fontSize: 16,
                  fontWeight: '400',
                  marginLeft: 20,
                }}
                onChangeText={text => this.setState({name: text})}
                value={this.state.name}
                placeholder="Enter name"
                placeholderTextColor={color.secondary}
                underlineColorAndroid={'transparent'}
              />
            </View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '500',
                color: color.secondary,
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
                color={color.secondary}
                onPress={this.showDatepicker}
              />
              <TextInput
                style={{
                  height: 45,
                  width: '90%',
                  alignSelf: 'center',
                  alignContent: 'center',
                  color: color.secondary,
                  fontSize: 16,
                  fontWeight: '400',
                  marginLeft: 20,
                }}
                onChangeText={text => this.setState({dateF: text})}
                value={this.state.date.toDateString().substring(3)}
                placeholder={this.state.date.toDateString().substring(3)}
                placeholderTextColor={color.secondary}
                underlineColorAndroid={'transparent'}
                onFocus={() => this.showDatepicker()}
              />
            </View>
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
            onPress={() => this.passData()}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '400',
                color: color.secondary,
                textAlign: 'center',
              }}>
              Genrate Kundali
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

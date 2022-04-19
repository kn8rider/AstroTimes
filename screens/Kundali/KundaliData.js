import {Text, View, SafeAreaView} from 'react-native';
import React, {Component} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Appbar} from 'react-native-paper';
import BirthDetails from './BirthDetails';
import Home from '../Home/Home';
import Free from '../Free/Free';
import CharDasha from './CharDasha';
import YoginiDasha from './YoginiDasha';
import VimDasha from './VimDasha';
import HoroscopeChart from './HoroscopeChart';
import AshtakVarga from './AshtakVarga';
import Dosha from './Dosha';
import Remedi from './Remedi';
import Prediction from './Prediction';
import LifeReport from './LifeReport';
import color from '../GlobalVariables';
const Tab = createMaterialTopTabNavigator();
export default class KundaliData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    // this.setState({
    //   data: this.props.route.params.data,
    // });
  }
  render() {
    // console.log('data main: ', this.props.route.params.data);
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
              fontWeight: '500',
              fontSize: 18,
              marginLeft: 20,
            }}>
            Kundali
          </Text>
        </Appbar>
        <Tab.Navigator
          initialRouteName="Basic Details"
          screenOptions={{
            tabBarScrollEnabled: true,
            tabBarLabelStyle: {
              fontSize: 13,
              fontWeight: '400',
              color: color.secondary,
            },
            tabBarItemStyle: {height: 40},
            tabBarStyle: {backgroundColor: color.primary},
          }}>
          <Tab.Screen name="Basic Details">
            {() => <BirthDetails data={this.props.route.params.data} />}
          </Tab.Screen>
          <Tab.Screen name="Char Dasha">
            {() => <CharDasha data={this.props.route.params.data} />}
          </Tab.Screen>
          <Tab.Screen name="Yogini Dasha">
            {() => <YoginiDasha data={this.props.route.params.data} />}
          </Tab.Screen>
          <Tab.Screen name="Vimshottari Dasha">
            {() => <VimDasha data={this.props.route.params.data} />}
          </Tab.Screen>
          <Tab.Screen name="Horoscope Chart">
            {() => <HoroscopeChart data={this.props.route.params.data} />}
          </Tab.Screen>
          <Tab.Screen name="Ashtakvarga">
            {() => <AshtakVarga data={this.props.route.params.data} />}
          </Tab.Screen>
          <Tab.Screen name="Dosha">
            {() => <Dosha data={this.props.route.params.data} />}
          </Tab.Screen>
          <Tab.Screen name="Remedi">
            {() => <Remedi data={this.props.route.params.data} />}
          </Tab.Screen>
          <Tab.Screen name="Prediction">
            {() => <Prediction data={this.props.route.params.data} />}
          </Tab.Screen>
          <Tab.Screen name="LifeReport">
            {() => <LifeReport data={this.props.route.params.data} />}
          </Tab.Screen>
        </Tab.Navigator>
      </SafeAreaView>
    );
  }
}

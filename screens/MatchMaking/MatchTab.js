import {Text, View, SafeAreaView} from 'react-native';
import React, {Component} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Appbar} from 'react-native-paper';
import MatchingData from './MatchinngData';
import Home from '../Home/Home';
import PlanetData from './PlanetData';
import AshtakData from './AshtakData';
import MangalikData from './MangalikData';
import ReportData from './ReportData';
import MatchReport from './MatchReport';
import DashaKoot from './Dashakoot';

const Tab = createMaterialTopTabNavigator();
export default class MatchTab extends Component {
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
      <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
        <Appbar style={{backgroundColor: '#FABD0B'}}>
          <Icon
            name={'arrow-left'}
            size={30}
            color={'white'}
            style={{marginLeft: 10}}
            onPress={() => this.props.navigation.goBack()}
          />
          <Text
            style={{
              color: 'white',
              fontWeight: '500',
              fontSize: 18,
              marginLeft: 20,
            }}>
            Horoscope Matching
          </Text>
        </Appbar>
        <Tab.Navigator
          initialRouteName="Basic Details"
          screenOptions={{
            tabBarScrollEnabled: true,
            tabBarLabelStyle: {
              fontSize: 13,
              fontWeight: '400',
              color: 'white',
            },
            tabBarItemStyle: {height: 40},
            tabBarStyle: {backgroundColor: 'black'},
          }}>
          <Tab.Screen name="Basic Details">
            {() => <MatchingData data={this.props.route.params.data} />}
          </Tab.Screen>
          <Tab.Screen name="Planet Details">
            {() => <PlanetData data={this.props.route.params.data} />}
          </Tab.Screen>
          <Tab.Screen name="Ashtak Details">
            {() => <AshtakData data={this.props.route.params.data} />}
          </Tab.Screen>
          <Tab.Screen name="Mangalik Details">
            {() => <MangalikData data={this.props.route.params.data} />}
          </Tab.Screen>
          <Tab.Screen name="Report Details">
            {() => <ReportData data={this.props.route.params.data} />}
          </Tab.Screen>
          <Tab.Screen name="Match Details">
            {() => <MatchReport data={this.props.route.params.data} />}
          </Tab.Screen>
          <Tab.Screen name="Dashakoot Details">
            {() => <DashaKoot data={this.props.route.params.data} />}
          </Tab.Screen>
        </Tab.Navigator>
      </SafeAreaView>
    );
  }
}

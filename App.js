import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import Details from './screens/Details';
import Profile from './screens/Profile';
import {store} from './redux/store';
import {Provider} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Horoscope from './screens/Horoscope';
import Login from './screens/Login/Login';
import Home from './screens/Home/Home';
import DrawerContent from './screens/Drawer/DrawerContent';
import Chat from './screens/Chat/Chat';
import Live from './screens/Live/Live';
import Free from './screens/Free/Free';
import MatchMakingm from './screens/MatchMaking/MatchMaking';
import Search from './screens/Search/Search';
import AstroMall from './screens/AstroMall/AstroMall';
import AstroBlog from './screens/AstroBlog/AstroBlog';
import AstroNews from './screens/AstroNews/AstroNews';
import Report from './screens/Report/Report';
import Gold from './screens/Gold/Gold';
import Otp from './screens/Otp/Otp';
import Kundali from './screens/Kundali/Kundali';
import BirthDetails from './screens/Kundali/BirthDetails';
import ErrorPage from './screens/Error/Error';
import KundaliData from './screens/Kundali/KundaliData';
import Numerology from './screens/Numerology/Numerology';
import NumeroData from './screens/Numerology/NumeroData';
import Panchang from './screens/Panchang/Panchang';
import PanchangData from './screens/Panchang/PanchangData';
import MatchMakingf from './screens/MatchMaking/Matchmakingf';
import MatchTab from './screens/MatchMaking/MatchTab';
import Meeting from './screens/Meeting/Meeting';
const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="home"
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="home"
        component={Home}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
}
const Tab = createBottomTabNavigator();
function HomeScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'black',
          height: 70,
          // bottom: 10,
          paddingBottom: 10,
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          switch (route.name) {
            case 'Home': {
              iconName = focused ? 'home' : 'home-outline';
              break;
            }
            case 'Chat': {
              iconName = focused
                ? 'chat-processing'
                : 'chat-processing-outline';
              break;
            }
            case 'Live': {
              iconName = focused ? 'movie' : 'movie-outline';
              break;
            }
            case 'Free': {
              iconName = focused ? 'gift' : 'gift-outline';
              break;
            }
            case 'Profile': {
              iconName = focused ? 'account' : 'account-outline';
              break;
            }
            default: {
              iconName = focused ? 'beaker' : 'beaker';
              break;
            }
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
        tabBarActiveBackgroundColor: 'black',
        tabBarInactiveBackgroundColor: 'black',
      })}>
      <Tab.Screen name="Home" component={MyDrawer} />
      <Tab.Screen name="Chat" component={Chat} initialParams={{type: 0}} />
      <Tab.Screen name="Live" component={Live} />
      <Tab.Screen name="Free" component={Free} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'Main'}>
          <Stack.Screen
            name="Main"
            component={Login}
            options={{headerShown: false}}
            // initialParams={{auth: isAuth}}
          />
          <Stack.Screen
            name="home"
            options={{headerShown: false}}
            component={HomeScreen}
          />
          <Stack.Screen
            name="Horoscope"
            component={Horoscope}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="chat"
            component={Chat}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="liveEvents"
            component={Live}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="match"
            component={MatchMakingm}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="matchf"
            component={MatchMakingf}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="matchTab"
            component={MatchTab}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="search"
            component={Search}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="astroMall"
            component={AstroMall}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="astroBlog"
            component={AstroBlog}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="astroNews"
            component={AstroNews}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="report"
            component={Report}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="gold"
            component={Gold}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="otp"
            component={Otp}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="kundali"
            component={Kundali}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="birthDetails"
            component={BirthDetails}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="error"
            component={ErrorPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="kundaliData"
            component={KundaliData}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="numerology"
            component={Numerology}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="numeroData"
            component={NumeroData}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="panchang"
            component={Panchang}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="panchangData"
            component={PanchangData}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Meeting"
            component={Meeting}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  tab: {
    borderTopLeftRadius: 15,
    borderTopStartRadius: 15,
    backgroundColor: 'white',
  },
});
export default App;

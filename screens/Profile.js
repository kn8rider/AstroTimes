import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {Component} from 'react';
import {
  Card,
  Avatar,
  List,
  Appbar,
  TextInput,
  RadioButton,
} from 'react-native-paper';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import color from './GlobalVariables';
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      password: '',
      isActive: true,
      checked: 'Male',
    };
  }
  async setLogOut() {
    try {
      await AsyncStorage.removeItem('userData');
      this.props.navigation.navigate('Main');
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: color.primary,
        }}>
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
            My Profile
          </Text>
        </Appbar>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: '10%'}}>
          <View>
            <Image
              source={{
                uri: this.props.itemArr
                  ? this.props.itemArr.picture ??
                    JSON.parse(this.props.itemArr).picture
                  : 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
              }}
              style={{
                height: 120,
                width: 120,
                borderRadius: 60,
                marginTop: 30,
                alignSelf: 'center',
              }}
              resizeMode={'cover'}
            />
          </View>
          <TextInput
            label={
              this.props.itemArr
                ? this.props.itemArr.name ?? JSON.parse(this.props.itemArr).name
                : 'Full Name'
            }
            activeUnderlineColor="#FB6B8F"
            value={this.state.name}
            onChangeText={text => this.setState({name: text})}
            underlineColor="#202020"
            style={{backgroundColor: color.primary}}
            theme={{
              colors: {placeholder: color.secondary, text: color.secondary},
            }}
          />
          <TextInput
            label={
              this.props.itemArr
                ? this.props.itemArr.email ??
                  JSON.parse(this.props.itemArr).email
                : 'Email'
            }
            activeUnderlineColor="#FB6B8F"
            value={this.state.email}
            onChangeText={text => this.setState({email: text})}
            underlineColor="#202020"
            style={{backgroundColor: color.primary}}
            theme={{
              colors: {placeholder: color.secondary, text: color.secondary},
            }}
          />
          <TextInput
            label={'Phone (+1 987-543-210)'}
            activeUnderlineColor="#FB6B8F"
            value={this.state.phone}
            onChangeText={text => this.setState({phone: text})}
            underlineColor="#202020"
            keyboardType="numeric"
            style={{backgroundColor: color.primary}}
            theme={{
              colors: {placeholder: color.secondary, text: color.secondary},
            }}
          />
          <Text
            style={{
              color: color.secondary,
              marginLeft: 10,
              marginTop: 10,
              fontSize: 16,
            }}>
            Gender
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <RadioButton
              value="Male"
              status={this.state.checked === 'Male' ? 'checked' : 'unchecked'}
              onPress={() => this.setState({checked: 'Male'})}
            />
            <Text style={{color: color.secondary, marginLeft: 10}}>Male</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <RadioButton
              value="Female"
              status={this.state.checked === 'Female' ? 'checked' : 'unchecked'}
              onPress={() => this.setState({checked: 'Female'})}
            />
            <Text style={{color: color.secondary, marginLeft: 10}}>Female</Text>
          </View>
          <TextInput
            label="Password"
            activeUnderlineColor="#FB6B8F"
            value={this.state.password}
            onChangeText={text => this.setState({password: text})}
            underlineColor="#202020"
            secureTextEntry={true}
            style={{backgroundColor: color.primary}}
            theme={{
              colors: {placeholder: color.secondary, text: color.secondary},
            }}
          />
          <TouchableOpacity
            style={{
              width: '100%',
              height: 40,
              backgroundColor: color.themeColor,
              alignSelf: 'center',
              marginVertical: 20,
              borderRadius: 3,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            // onPress={() => this.props.navigation.navigate('Signup')}
          >
            <Text
              style={{
                color: color.secondary,
                fontSize: 14,
                fontWeight: '400',
              }}>
              SAVE
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              color: color.secondary,
              fontSize: 12,
              fontWeight: '400',
              alignSelf: 'center',
              maxWidth: '90%',
            }}>
            if you do not want to use this account you can de-activate easily.
          </Text>
          <TouchableOpacity
            style={{
              width: '100%',
              height: 40,
              backgroundColor: color.themeColor,
              alignSelf: 'center',
              marginVertical: 20,
              borderRadius: 3,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => this.setLogOut()}>
            <Text
              style={{
                color: color.secondary,
                fontSize: 14,
                fontWeight: '400',
              }}>
              DEACTIVATE ACCOUNT
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStatetoProps = state => {
  return {
    itemArr: state.DetailReducer.itemArr,
  };
};
export default connect(mapStatetoProps, null)(Profile);

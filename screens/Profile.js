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

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
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
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: 'black',
        }}>
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
                uri: this.props.itemArr.picture
                  ? this.props.itemArr.picture
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
              this.props.itemArr.name ? this.props.itemArr.name : 'Full Name'
            }
            activeUnderlineColor="#FB6B8F"
            value={this.state.name}
            onChangeText={text => this.setState({name: text})}
            underlineColor="#202020"
            style={{backgroundColor: 'black'}}
            theme={{colors: {placeholder: 'white', text: 'white'}}}
          />
          <TextInput
            label={
              this.props.itemArr.email ? this.props.itemArr.email : 'Email'
            }
            activeUnderlineColor="#FB6B8F"
            value={this.state.email}
            onChangeText={text => this.setState({email: text})}
            underlineColor="#202020"
            style={{backgroundColor: 'black'}}
            theme={{colors: {placeholder: 'white', text: 'white'}}}
          />
          <TextInput
            label={
              this.props.itemArr.phone
                ? this.props.itemArr.phone
                : 'Phone (+1 987-543-210)'
            }
            activeUnderlineColor="#FB6B8F"
            value={this.state.phone}
            onChangeText={text => this.setState({phone: text})}
            underlineColor="#202020"
            keyboardType="numeric"
            style={{backgroundColor: 'black'}}
            theme={{colors: {placeholder: 'white', text: 'white'}}}
          />
          <Text
            style={{
              color: 'white',
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
            <Text style={{color: 'white', marginLeft: 10}}>Male</Text>
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
            <Text style={{color: 'white', marginLeft: 10}}>Female</Text>
          </View>
          <TextInput
            label="Password"
            activeUnderlineColor="#FB6B8F"
            value={this.state.password}
            onChangeText={text => this.setState({password: text})}
            underlineColor="#202020"
            secureTextEntry={true}
            style={{backgroundColor: 'black'}}
            theme={{colors: {placeholder: 'white', text: 'white'}}}
          />
          <TouchableOpacity
            style={{
              width: '100%',
              height: 40,
              backgroundColor: '#FABD0B',
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
                color: 'white',
                fontSize: 14,
                fontWeight: '400',
              }}>
              SAVE
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              color: 'white',
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
              backgroundColor: '#FABD0B',
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
                color: 'white',
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

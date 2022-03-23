import {Text, View, SafeAreaView, Image} from 'react-native';
import React, {Component} from 'react';
import {
  Card,
  Avatar,
  List,
  Appbar,
  TextInput,
  RadioButton,
} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';
import {updateDataFunction} from '../redux/DetailsPage/DetailAction';
import {connect} from 'react-redux';
class Details extends Component {
  render() {
    console.log('data', this.props.itemArr);
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
        <Appbar style={{backgroundColor: 'black'}}>
          <Appbar.BackAction onPress={() => this.props.navigation.goBack()} />
          <Appbar.Content title="Details" titleStyle={{color: '#1781E7'}} />
        </Appbar>
        <ScrollView>
          <Card
            style={{
              elevation: 10,
              height: 200,
              width: '60%',
              borderRadius: 20,
              marginTop: 30,
              alignSelf: 'center',
            }}>
            <Image
              source={{
                uri: this.props.itemArr.artworkUrl100,
              }}
              style={{
                flex: 1,
                borderRadius: 20,
              }}
              resizeMode={'cover'}
            />
          </Card>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '400',
              color: 'white',
              alignSelf: 'center',
              maxWidth: '100%',
              marginVertical: 10,
              maxWidth: '100%',
            }}>
            {this.props.itemArr.trackName}
          </Text>
          <Text
            style={{
              fontSize: 17,
              fontWeight: '500',
              color: 'white',
              alignSelf: 'center',
              maxWidth: '100%',
              maxWidth: '100%',
            }}>
            Artist : {this.props.itemArr.artistName}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '400',
              color: 'white',
              alignSelf: 'center',
              maxWidth: '100%',
              marginVertical: 10,
              maxWidth: '90%',
            }}>
            Collection : {this.props.itemArr.collectionCensoredName}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '400',
              color: 'white',
              alignSelf: 'center',
              maxWidth: '100%',
              marginVertical: 10,
              maxWidth: '90%',
            }}>
            Genre : {this.props.itemArr.primaryGenreName}
          </Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const mapStatetoprops = state => {
  return {
    itemArr: state.DetailReducer.itemArr,
  };
};
const mapDispatchtoprops = dispatch => {
  return {
    updateDataFunction: param => dispatch(updateDataFunction(param)),
  };
};
export default connect(mapStatetoprops, null)(Details);

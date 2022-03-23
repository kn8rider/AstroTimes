import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';
import {Card, Searchbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {updateDataFunction, increaseCounter} from '../redux/index';
import {connect} from 'react-redux';
const BaseUrl = 'https://itunes.apple.com/search?term=';
export class Home2 extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      first: true,
      load: false,
      data: [],
      toggle: 'Neha Kakkar',
    };
  }
  getData = async val => {
    try {
      this.setState({data: [], first: false});
      console.log('val', val);
      const url = BaseUrl + val;
      this._isMounted = true;
      const response = await fetch(url);
      const json = await response.json();
      if (this._isMounted) {
        this.setState({data: json.results});
      }
      // console.log(this.state.data[0]);
    } catch (error) {
      console.error('error', error);
    }
  };
  componentDidMount() {
    // this.getData();
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  render() {
    console.log('data', this.props.itemArr);
    console.log('data2', this.props.data);
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
        <Searchbar
          style={{
            marginHorizontal: '2%',
            marginTop: '2%',
            marginBottom: 10,
            backgroundColor: '#C6C6C6',
          }}
          placeholder="Search Here"
          value={this.state.search}
          onChangeText={text => this.setState({search: text})}
          onSubmitEditing={event => this.getData(event.nativeEvent.text)}
        />
        <View
          style={{flex: 1, backgroundColor: 'black', justifyContent: 'center'}}>
          {this.state.first ? (
            <View>
              <Text
                style={{
                  fontSize: 18,
                  color: 'white',
                  fontWeight: '500',
                  alignSelf: 'center',
                }}>
                Search Your favourite song...
              </Text>
            </View>
          ) : this.state.data.length == 0 ? (
            <ActivityIndicator size={50} />
          ) : (
            <FlatList
              numColumns={2}
              showsVerticalScrollIndicator={false}
              columnWrapperStyle={{justifyContent: 'space-evenly', flex: 1}}
              data={this.state.data}
              renderItem={({item, index, separators}) => (
                <View style={{maxWidth: '50%', width: '45%', marginBottom: 10}}>
                  <Card
                    onPress={() => {
                      this.props.navigation.navigate('Details');
                      this.props.updateDataFunction(item);
                      this.props.increaseCounter(this.props.data + 5);
                    }}
                    style={{
                      borderRadius: 10,
                      elevation: 5,
                      marginBottom: 10,
                    }}>
                    <Image
                      source={{uri: item.artworkUrl100}}
                      style={{
                        width: '100%',
                        height: 150,
                        borderRadius: 10,
                      }}
                    />
                  </Card>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '400',
                      color: 'white',
                      alignSelf: 'center',
                      maxWidth: '100%',
                    }}>
                    {item.trackName}
                  </Text>
                </View>
              )}
              keyExtractor={(item, ind) => ind}
            />
          )}
        </View>
      </SafeAreaView>
    );
  }
}
const mapStatetoprops = state => {
  return {
    itemArr: state.DetailReducer.itemArr,
    data: state.CounterReducer.data,
  };
};
const mapDispatchtoprops = dispatch => {
  return {
    updateDataFunction: param => dispatch(updateDataFunction(param)),
    increaseCounter: param => dispatch(increaseCounter(param)),
  };
};
export default connect(mapStatetoprops, mapDispatchtoprops)(Home);

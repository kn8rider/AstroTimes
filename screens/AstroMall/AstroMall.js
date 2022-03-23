import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  TextInput,
  Image,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Card, Avatar, List, Appbar, RadioButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AIcon from 'react-native-vector-icons/Ionicons';
import SnapCarousal from 'react-native-snap-carousel';
import {color} from 'react-native-reanimated';
const data = [
  {
    val: 'Online Pooja',
    img: 'https://images.unsplash.com/photo-1620048269620-77fa550bb505?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGFzdHJvbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
  },
  {
    val: 'Evil Eye (Nazar Lagna)',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
  },
  {
    val: 'Spell',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
  },
  {
    val: 'Reiki Healing',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
  },
  {
    val: 'Gemestone',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
  },
  {
    val: 'Kawach',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
  },
  {
    val: 'Palmistry',
    img: 'https://images.unsplash.com/photo-1620048269620-77fa550bb505?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGFzdHJvbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
  },
  {
    val: 'Trending Wears',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
  },
  {
    val: 'Cord Cutting',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
  },
  {
    val: 'Heading Oil',
    img: 'https://images.unsplash.com/photo-1620048269620-77fa550bb505?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGFzdHJvbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
  },
  {
    val: 'Theta Healing',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
  },
  {
    val: 'Birth Time Rectification',
    img: 'https://images.unsplash.com/photo-1620048269620-77fa550bb505?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGFzdHJvbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
  },
];
export default class AstroMall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
      search: '',
    };
  }
  render() {
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
              fontWeight: '400',
              fontSize: 18,
              marginLeft: 20,
            }}>
            AstroMall
          </Text>
          <Icon
            name="magnify"
            size={30}
            color={'white'}
            style={{position: 'absolute', right: 10}}
            onPress={() => this.props.navigation.navigate('search')}
          />
        </Appbar>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            backgroundColor: 'black',
          }}>
          <View
            style={{
              flex: 1,
              marginTop: 10,
              alignSelf: 'center',
            }}>
            <SnapCarousal
              data={data}
              renderItem={({item, index}) => (
                <Image
                  source={{uri: item.img}}
                  style={{
                    width: Dimensions.get('window').width - 50,
                    height: 180,
                    borderRadius: 10,
                  }}
                  resizeMode="cover"
                />
              )}
              autoplay={true}
              autoplayDelay={100}
              loop={true}
              onSnapToItem={index => this.setState({activeSlide: index})}
              sliderWidth={Dimensions.get('window').width - 50}
              itemWidth={Dimensions.get('window').width - 50}
              keyExtractor={(item, ind) => ind}
              firstItem={0}
            />
            <View
              style={{
                height: 30,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                alignSelf: 'center',
                top: 150,
              }}>
              {data.map((item, ind) =>
                this.state.activeSlide === ind ? (
                  <Icon
                    key={ind}
                    name="checkbox-blank-circle"
                    size={8}
                    style={{marginHorizontal: 3}}
                    color={'black'}
                  />
                ) : (
                  <Icon
                    key={ind}
                    name="checkbox-blank-circle"
                    size={8}
                    style={{marginHorizontal: 3}}
                    color={'#AEAEAE'}
                  />
                ),
              )}
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: 20,
              marginTop: 10,
              borderColor: 'grey',
              borderWidth: 1,
              marginHorizontal: '5%',
            }}>
            <TextInput
              style={{
                height: 45,
                width: '80%',
                alignSelf: 'center',
                alignContent: 'center',
                color: 'white',
                fontSize: 16,
                fontWeight: '400',
                marginLeft: 20,
              }}
              onChangeText={text => this.setState({search: text})}
              value={this.state.search}
              placeholder="Let's find what you're looking for...."
              placeholderTextColor={'grey'}
              underlineColorAndroid={'transparent'}
              onFocus={() => this.props.navigation.navigate('search')}
            />
            <Icon
              name="magnify"
              size={30}
              color={'white'}
              style={{position: 'absolute', right: 10}}
              onPress={() => this.props.navigation.navigate('search')}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              padding: 10,
              justifyContent: 'space-evenly',
            }}>
            {data.map((item, index) => (
              <Card
                style={{
                  borderRadius: 10,
                  elevation: 10,
                  width: '47%',
                  height: 200,
                  justifyContent: 'center',
                  margin: 5,
                }}
                key={index}>
                <Image
                  source={{
                    uri: 'https://images.unsplash.com/photo-1620048269620-77fa550bb505?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGFzdHJvbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
                  }}
                  style={{flex: 1, borderRadius: 10}}
                  resizeMode="cover"
                />
                <Text
                  style={{
                    position: 'absolute',
                    textAlign: 'center',
                    bottom: 20,
                    maxWidth: '95%',
                    alignSelf: 'center',
                    fontSize: 20,
                    fontWeight: '500',
                    color: 'white',
                  }}>
                  {item.val}
                </Text>
              </Card>
            ))}
          </View>
          <View
            style={{
              backgroundColor: '#FABD0B',
              paddingVertical: 10,
              marginVertical: 10,
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: '500',
                fontSize: 18,
                marginLeft: 20,
                textAlign: 'center',
                alignSelf: 'center',
              }}>
              Top Selling
            </Text>
            <FlatList
              horizontal={true}
              data={data}
              showsHorizontalScrollIndicator={false}
              renderItem={({item, index, separators}) => (
                <View style={{width: 80, marginHorizontal: 10}}>
                  <View
                    style={{
                      borderRadius: 40,
                      height: 80,
                      width: 80,
                      justifyContent: 'center',
                      marginTop: 10,
                    }}>
                    <Image
                      source={{uri: item.img}}
                      resizeMode="cover"
                      style={{flex: 1, borderRadius: 40}}
                    />
                  </View>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 15,
                      fontWeight: '400',
                      textAlign: 'center',
                      alignSelf: 'center',
                      marginTop: 5,
                      maxWidth: '140%',
                    }}>
                    {item.val}
                  </Text>
                </View>
              )}
              keyExtractor={(item, ind) => ind}
            />
          </View>
          <View
            style={{
              backgroundColor: '#FABD0B',
              paddingVertical: 10,
              marginVertical: 10,
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: '500',
                fontSize: 18,
                marginLeft: 20,
                textAlign: 'center',
                alignSelf: 'center',
              }}>
              Recommended By AstroTime
            </Text>
            <FlatList
              horizontal={true}
              data={data}
              showsHorizontalScrollIndicator={false}
              renderItem={({item, index, separators}) => (
                <View style={{width: 80, marginHorizontal: 10}}>
                  <View
                    style={{
                      borderRadius: 40,
                      height: 80,
                      width: 80,
                      justifyContent: 'center',
                      marginTop: 10,
                    }}>
                    <Image
                      source={{uri: item.img}}
                      resizeMode="cover"
                      style={{flex: 1, borderRadius: 40}}
                    />
                  </View>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 15,
                      fontWeight: '400',
                      textAlign: 'center',
                      alignSelf: 'center',
                      marginTop: 5,
                      maxWidth: '140%',
                    }}>
                    {item.val}
                  </Text>
                </View>
              )}
              keyExtractor={(item, ind) => ind}
            />
          </View>
          <View
            style={{
              backgroundColor: '#FABD0B',
              paddingVertical: 10,
              marginVertical: 10,
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: '500',
                fontSize: 18,
                marginLeft: 20,
                textAlign: 'center',
                alignSelf: 'center',
              }}>
              Newly Launched
            </Text>
            <FlatList
              horizontal={true}
              data={data}
              showsHorizontalScrollIndicator={false}
              renderItem={({item, index, separators}) => (
                <View style={{width: 80, marginHorizontal: 10}}>
                  <View
                    style={{
                      borderRadius: 40,
                      height: 80,
                      width: 80,
                      justifyContent: 'center',
                      marginTop: 10,
                    }}>
                    <Image
                      source={{uri: item.img}}
                      resizeMode="cover"
                      style={{flex: 1, borderRadius: 40}}
                    />
                  </View>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 15,
                      fontWeight: '400',
                      textAlign: 'center',
                      alignSelf: 'center',
                      marginTop: 5,
                      maxWidth: '140%',
                    }}>
                    {item.val}
                  </Text>
                </View>
              )}
              keyExtractor={(item, ind) => ind}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

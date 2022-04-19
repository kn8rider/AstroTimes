import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  TextInput,
  Image,
  Dimensions,
} from 'react-native';
import {Card, Appbar, RadioButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import color from '../GlobalVariables';
const data = [
  {
    val: 'Online Pooja',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
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
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
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
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
  },
  {
    val: 'Theta Healing',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
  },
  {
    val: 'Birth Time Rectification',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEze2m-ndA6l0ineIS9WRTt3NJVLsPccasA&usqp=CAU',
  },
];
export default class AstroNews extends Component {
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
            Astrology News
          </Text>
          <Icon
            name="magnify"
            size={30}
            color={color.secondary}
            style={{position: 'absolute', right: 10}}
            onPress={() => this.props.navigation.navigate('search')}
          />
        </Appbar>

        <View style={{flex: 1, backgroundColor: color.primary, paddingTop: 10}}>
          <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index, separators}) => (
              <Card
                style={{
                  borderRadius: 10,
                  elevation: 10,
                  height: 250,
                  width: '95%',
                  marginVertical: 5,
                  alignSelf: 'center',
                }}>
                <Image
                  source={{
                    uri: 'https://images.unsplash.com/photo-1620048269620-77fa550bb505?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGFzdHJvbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
                  }}
                  resizeMode="cover"
                  style={{
                    width: '100%',
                    height: '70%',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                  }}
                />
                <View
                  style={{
                    backgroundColor: '#606060',
                    borderBottomRightRadius: 10,
                    borderBottomLeftRadius: 10,
                    height: '30%',
                  }}>
                  <Text
                    style={{
                      color: color.secondary,
                      fontSize: 16,
                      fontWeight: '500',
                      marginLeft: 10,
                    }}>
                    Bappi Lahiri, Legendary Composer With A Kundi
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingHorizontal: 10,
                      marginTop: 10,
                    }}>
                    <Text
                      style={{
                        color: color.secondary,
                        fontSize: 13,
                        fontWeight: '400',
                      }}>
                      Simran Jain
                    </Text>
                    <Text
                      style={{
                        color: color.secondary,
                        fontSize: 13,
                        fontWeight: '400',
                      }}>
                      Feb 18, 2022
                    </Text>
                  </View>
                </View>
              </Card>
            )}
            keyExtractor={(item, ind) => ind}
          />
        </View>
      </SafeAreaView>
    );
  }
}

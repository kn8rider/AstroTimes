import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import base64 from 'react-native-base64';
import color from '../GlobalVariables';
color;
const userId = '618328';
const apiKey = '51e43ea9a639e025dd62e04a4b7a32e0';
const height = Dimensions.get('window').height;
export default class AshtakData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeChat: 0,
      ashtakData: [],
      load: true,
    };
  }
  async getbirthDetails() {
    try {
      //   console.log('props :', this.props.data);
      var response = await fetch(
        'https://json.astrologyapi.com/v1/match_ashtakoot_points',
        {
          method: 'POST',
          dataType: 'json',
          headers: {
            Authorization:
              'Basic ' + base64.encode(userId + ':' + apiKey, 'base64'),
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.props.data),
        },
      );
      const json = await response.json();
      if (response.status == 200) {
        console.log('addata :', json);
        this.setState({
          ashtakData: json,
          load: false,
        });
      } else {
        // this.props.navigation.navigate('error');
        console.log('error');
        this.setState({
          load: true,
        });
      }
    } catch (error) {
      console.log(error);
      this.setState({
        load: true,
      });
      //   this.props.navigation.navigate('error');
    }
  }

  componentDidMount() {
    this.getbirthDetails();
  }
  render() {
    // console.log('data: ---', this.props.data);

    return (
      <SafeAreaView style={{flex: 1, backgroundColor: color.primary}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            backgroundColor: color.primary,
            flex: 1,
          }}>
          {this.state.load == true ? (
            <ActivityIndicator
              style={{
                alignSelf: 'center',
                marginTop: height / 3,
              }}
              size="large"
              color="#4A3C8C"
            />
          ) : (
            <View style={{paddingHorizontal: '5%'}}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '500',
                  color: color.secondary,
                  textAlign: 'center',
                  marginTop: 20,
                }}>
                Bhakut
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: color.secondary,
                  marginTop: 20,
                }}>
                Description : {'       '}
                <Text
                  style={{
                    fontSize: 16,
                  }}>
                  {this.state.ashtakData?.bhakut?.description}
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: color.secondary,
                  marginTop: 20,
                }}>
                Male Koot Attribute : {'       '}
                <Text
                  style={{
                    fontSize: 16,
                  }}>
                  {this.state.ashtakData?.bhakut?.male_koot_attribute}
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: color.secondary,
                  marginTop: 20,
                }}>
                Female Koot Attribute : {'       '}
                <Text
                  style={{
                    fontSize: 16,
                  }}>
                  {this.state.ashtakData?.bhakut?.female_koot_attribute}
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: color.secondary,
                  marginTop: 20,
                }}>
                Received Points : {'       '}
                <Text
                  style={{
                    fontSize: 16,
                  }}>
                  {this.state.ashtakData?.bhakut?.received_points}
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: color.secondary,
                  marginTop: 20,
                }}>
                Total Points : {'       '}
                <Text
                  style={{
                    fontSize: 16,
                  }}>
                  {this.state.ashtakData?.bhakut?.total_points}
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '500',
                  color: color.secondary,
                  textAlign: 'center',
                  marginTop: 20,
                }}>
                Gan
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: color.secondary,
                  marginTop: 20,
                }}>
                Description : {'       '}
                <Text
                  style={{
                    fontSize: 16,
                  }}>
                  {this.state.ashtakData?.gan?.description}
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: color.secondary,
                  marginTop: 20,
                }}>
                Male Koot Attribute : {'       '}
                <Text
                  style={{
                    fontSize: 16,
                  }}>
                  {this.state.ashtakData?.gan?.male_koot_attribute}
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: color.secondary,
                  marginTop: 20,
                }}>
                Female Koot Attribute : {'       '}
                <Text
                  style={{
                    fontSize: 16,
                  }}>
                  {this.state.ashtakData?.gan?.female_koot_attribute}
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: color.secondary,
                  marginTop: 20,
                }}>
                Received Points : {'       '}
                <Text
                  style={{
                    fontSize: 16,
                  }}>
                  {this.state.ashtakData?.gan?.received_points}
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: color.secondary,
                  marginTop: 20,
                }}>
                Total Points : {'       '}
                <Text
                  style={{
                    fontSize: 16,
                  }}>
                  {this.state.ashtakData?.gan?.total_points}
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '500',
                  color: color.secondary,
                  textAlign: 'center',
                  marginTop: 20,
                }}>
                vashya
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: color.secondary,
                  marginTop: 20,
                }}>
                Description : {'       '}
                <Text
                  style={{
                    fontSize: 16,
                  }}>
                  {this.state.ashtakData?.vashya?.description}
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: color.secondary,
                  marginTop: 20,
                }}>
                Male Koot Attribute : {'       '}
                <Text
                  style={{
                    fontSize: 16,
                  }}>
                  {this.state.ashtakData?.vashya?.male_koot_attribute}
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: color.secondary,
                  marginTop: 20,
                }}>
                Female Koot Attribute : {'       '}
                <Text
                  style={{
                    fontSize: 16,
                  }}>
                  {this.state.ashtakData?.vashya?.female_koot_attribute}
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: color.secondary,
                  marginTop: 20,
                }}>
                Received Points : {'       '}
                <Text
                  style={{
                    fontSize: 16,
                  }}>
                  {this.state.ashtakData?.vashya?.received_points}
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: color.secondary,
                  marginTop: 20,
                }}>
                Total Points : {'       '}
                <Text
                  style={{
                    fontSize: 16,
                  }}>
                  {this.state.ashtakData?.vashya?.total_points}
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '500',
                  color: color.secondary,
                  textAlign: 'center',
                  marginTop: 20,
                }}>
                Varna
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: color.secondary,
                  marginTop: 20,
                }}>
                Description : {'       '}
                <Text
                  style={{
                    fontSize: 16,
                  }}>
                  {this.state.ashtakData?.varna?.description}
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: color.secondary,
                  marginTop: 20,
                }}>
                Male Koot Attribute : {'       '}
                <Text
                  style={{
                    fontSize: 16,
                  }}>
                  {this.state.ashtakData?.varna?.male_koot_attribute}
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: color.secondary,
                  marginTop: 20,
                }}>
                Female Koot Attribute : {'       '}
                <Text
                  style={{
                    fontSize: 16,
                  }}>
                  {this.state.ashtakData?.varna?.female_koot_attribute}
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: color.secondary,
                  marginTop: 20,
                }}>
                Received Points : {'       '}
                <Text
                  style={{
                    fontSize: 16,
                  }}>
                  {this.state.ashtakData?.varna?.received_points}
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: color.secondary,
                  marginTop: 20,
                }}>
                Total Points : {'       '}
                <Text
                  style={{
                    fontSize: 16,
                  }}>
                  {this.state.ashtakData?.varna?.total_points}
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '500',
                  color: color.secondary,
                  textAlign: 'center',
                  marginTop: 20,
                }}>
                Yoni
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: color.secondary,
                  marginTop: 20,
                }}>
                Description : {'       '}
                <Text
                  style={{
                    fontSize: 16,
                  }}>
                  {this.state.ashtakData?.yoni?.description}
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: color.secondary,
                  marginTop: 20,
                }}>
                Male Koot Attribute : {'       '}
                <Text
                  style={{
                    fontSize: 16,
                  }}>
                  {this.state.ashtakData?.yoni?.male_koot_attribute}
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: color.secondary,
                  marginTop: 20,
                }}>
                Female Koot Attribute : {'       '}
                <Text
                  style={{
                    fontSize: 16,
                  }}>
                  {this.state.ashtakData?.yoni?.female_koot_attribute}
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: color.secondary,
                  marginTop: 20,
                }}>
                Received Points : {'       '}
                <Text
                  style={{
                    fontSize: 16,
                  }}>
                  {this.state.ashtakData?.yoni?.received_points}
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: color.secondary,
                  marginTop: 20,
                }}>
                Total Points : {'       '}
                <Text
                  style={{
                    fontSize: 16,
                  }}>
                  {this.state.ashtakData?.yoni?.total_points}
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '500',
                  color: color.secondary,
                  textAlign: 'center',
                  marginTop: 20,
                }}>
                Nadi
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: color.secondary,
                  marginTop: 20,
                }}>
                Description : {'       '}
                <Text
                  style={{
                    fontSize: 16,
                  }}>
                  {this.state.ashtakData?.nadi?.description}
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: color.secondary,
                  marginTop: 20,
                }}>
                Male Koot Attribute : {'       '}
                <Text
                  style={{
                    fontSize: 16,
                  }}>
                  {this.state.ashtakData?.nadi?.male_koot_attribute}
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: color.secondary,
                  marginTop: 20,
                }}>
                Female Koot Attribute : {'       '}
                <Text
                  style={{
                    fontSize: 16,
                  }}>
                  {this.state.ashtakData?.nadi?.female_koot_attribute}
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: color.secondary,
                  marginTop: 20,
                }}>
                Received Points : {'       '}
                <Text
                  style={{
                    fontSize: 16,
                  }}>
                  {this.state.ashtakData?.nadi?.received_points}
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: color.secondary,
                  marginTop: 20,
                }}>
                Total Points : {'       '}
                <Text
                  style={{
                    fontSize: 16,
                  }}>
                  {this.state.ashtakData?.nadi?.total_points}
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '500',
                  color: color.secondary,
                  textAlign: 'center',
                  marginTop: 20,
                }}>
                Tara
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: color.secondary,
                  marginTop: 20,
                }}>
                Description : {'       '}
                <Text
                  style={{
                    fontSize: 16,
                  }}>
                  {this.state.ashtakData?.tara?.description}
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: color.secondary,
                  marginTop: 20,
                }}>
                Male Koot Attribute : {'       '}
                <Text
                  style={{
                    fontSize: 16,
                  }}>
                  {this.state.ashtakData?.tara?.male_koot_attribute}
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: color.secondary,
                  marginTop: 20,
                }}>
                Female Koot Attribute : {'       '}
                <Text
                  style={{
                    fontSize: 16,
                  }}>
                  {this.state.ashtakData?.tara?.female_koot_attribute}
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: color.secondary,
                  marginTop: 20,
                }}>
                Received Points : {'       '}
                <Text
                  style={{
                    fontSize: 16,
                  }}>
                  {this.state.ashtakData?.tara?.received_points}
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: color.secondary,
                  marginTop: 20,
                }}>
                Total Points : {'       '}
                <Text
                  style={{
                    fontSize: 16,
                  }}>
                  {this.state.ashtakData?.tara?.total_points}
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '500',
                  color: color.secondary,
                  textAlign: 'center',
                  marginTop: 20,
                }}>
                Maitri
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: color.secondary,
                  marginTop: 20,
                }}>
                Description : {'       '}
                <Text
                  style={{
                    fontSize: 16,
                  }}>
                  {this.state.ashtakData?.maitri?.description}
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: color.secondary,
                  marginTop: 20,
                }}>
                Male Koot Attribute : {'       '}
                <Text
                  style={{
                    fontSize: 16,
                  }}>
                  {this.state.ashtakData?.maitri?.male_koot_attribute}
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: color.secondary,
                  marginTop: 20,
                }}>
                Female Koot Attribute : {'       '}
                <Text
                  style={{
                    fontSize: 16,
                  }}>
                  {this.state.ashtakData?.maitri?.female_koot_attribute}
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: color.secondary,
                  marginTop: 20,
                }}>
                Received Points : {'       '}
                <Text
                  style={{
                    fontSize: 16,
                  }}>
                  {this.state.ashtakData?.maitri?.received_points}
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: color.secondary,
                  marginTop: 20,
                }}>
                Total Points : {'       '}
                <Text
                  style={{
                    fontSize: 16,
                  }}>
                  {this.state.ashtakData?.maitri?.total_points}
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '500',
                  color: color.secondary,
                  textAlign: 'center',
                  marginTop: 20,
                }}>
                Total
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: color.secondary,
                  marginTop: 20,
                }}>
                Minimum Required : {'       '}
                <Text
                  style={{
                    fontSize: 16,
                  }}>
                  {this.state.ashtakData?.total?.minimum_required}
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: color.secondary,
                  marginTop: 20,
                }}>
                Received Points : {'       '}
                <Text
                  style={{
                    fontSize: 16,
                  }}>
                  {this.state.ashtakData?.total?.received_points}
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: color.secondary,
                  marginTop: 20,
                }}>
                Total Points : {'       '}
                <Text
                  style={{
                    fontSize: 16,
                  }}>
                  {this.state.ashtakData?.total?.total_points}
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color: color.secondary,
                  marginTop: 20,
                  marginBottom: 30,
                }}>
                Report : {'       '}
                <Text
                  style={{
                    fontSize: 16,
                  }}>
                  {this.state.ashtakData?.conclusion?.report}
                </Text>
              </Text>
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

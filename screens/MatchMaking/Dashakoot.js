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
const userId = '618328';
const apiKey = '51e43ea9a639e025dd62e04a4b7a32e0';
const height = Dimensions.get('window').height;
export default class DashaKoot extends Component {
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
        'https://json.astrologyapi.com/v1/match_dashakoot_points',
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
                Dina
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
                  {this.state.ashtakData?.dina.description}
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
                  {this.state.ashtakData?.dina.male_koot_attribute}
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
                  {this.state.ashtakData?.dina.female_koot_attribute}
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
                  {this.state.ashtakData?.dina.received_points}
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
                  {this.state.ashtakData?.dina.total_points}
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
                Gana
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
                  {this.state.ashtakData?.gana?.description}
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
                  {this.state.ashtakData?.gana?.male_koot_attribute}
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
                  {this.state.ashtakData?.gana?.female_koot_attribute}
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
                  {this.state.ashtakData?.gana?.received_points}
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
                  {this.state.ashtakData?.gana?.total_points}
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
                Vedha
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
                  {this.state.ashtakData?.vedha?.description}
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
                  {this.state.ashtakData?.vedha?.male_koot_attribute}
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
                  {this.state.ashtakData?.vedha?.female_koot_attribute}
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
                  {this.state.ashtakData?.vedha?.received_points}
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
                  {this.state.ashtakData?.vedha?.total_points}
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
                Mahendra
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
                  {this.state.ashtakData?.mahendra?.description}
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
                  {this.state.ashtakData?.mahendra?.male_koot_attribute}
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
                  {this.state.ashtakData?.mahendra?.female_koot_attribute}
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
                  {this.state.ashtakData?.mahendra?.received_points}
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
                  {this.state.ashtakData?.mahendra?.total_points}
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
                Rajju
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
                  {this.state.ashtakData?.rajju?.description}
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
                  {this.state.ashtakData?.rajju?.male_koot_attribute}
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
                  {this.state.ashtakData?.rajju?.female_koot_attribute}
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
                  {this.state.ashtakData?.rajju?.received_points}
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
                  {this.state.ashtakData?.rajju?.total_points}
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
                Rashi
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
                  {this.state.ashtakData?.rashi?.description}
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
                  {this.state.ashtakData?.rashi?.male_koot_attribute}
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
                  {this.state.ashtakData?.rashi?.female_koot_attribute}
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
                  {this.state.ashtakData?.rashi?.received_points}
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
                  {this.state.ashtakData?.rashi?.total_points}
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
                Rasyadhipati
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
                  {this.state.ashtakData?.rasyadhipati?.description}
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
                  {this.state.ashtakData?.rasyadhipati?.male_koot_attribute}
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
                  {this.state.ashtakData?.rasyadhipati?.female_koot_attribute}
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
                  {this.state.ashtakData?.rasyadhipati?.received_points}
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
                  {this.state.ashtakData?.rasyadhipati?.total_points}
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
                StreeDeergha
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
                  {this.state.ashtakData?.streeDeergha?.description}
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
                  {this.state.ashtakData?.streeDeergha?.male_koot_attribute}
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
                  {this.state.ashtakData?.streeDeergha?.female_koot_attribute}
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
                  {this.state.ashtakData?.streeDeergha?.received_points}
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
                  {this.state.ashtakData?.streeDeergha?.total_points}
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
                  marginBottom: 30,
                }}>
                Total Points : {'       '}
                <Text
                  style={{
                    fontSize: 16,
                  }}>
                  {this.state.ashtakData?.total?.total_points}
                </Text>
              </Text>
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

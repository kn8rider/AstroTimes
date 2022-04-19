import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  useParticipant,
  RTCView,
  MediaStream,
} from '@videosdk.live/react-native-sdk';
// import {styles} from './src/style/CustomStyle';

export default function ParticipantView({participantId}) {
  //get the participant details based on participantId
  const {displayName, isLocal, webcamStream, micStream, webcamOn, micOn} =
    useParticipant(participantId, {});

  const TextContainer = ({fText, sText}) => {
    return (
      <View
        style={
          {
            // styles.TextContainer
          }
        }>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 16,
          }}>
          {fText}
        </Text>
        <Text
          style={{
            color: 'white',
            marginLeft: 4,
            fontSize: 16,
          }}>
          {sText}
        </Text>
      </View>
    );
  };

  const InfoOverLay = () => {
    return (
      <View
        style={
          {
            // styles.InfoOverLayContainer
          }
        }>
        <TextContainer fText={'Name :'} sText={displayName} />
        <TextContainer fText={'Mute :'} sText={micOn ? 'No' : 'Yes'} />
        <TextContainer fText={'WebCam :'} sText={webcamOn ? 'Yes' : 'No'} />
      </View>
    );
  };

  return (
    <View
      key={participantId}
      style={{
        borderRadius: 8,
        overflow: 'hidden',
        flex: 1,
      }}>
      {webcamOn ? (
        <>
          <RTCView
            streamURL={new MediaStream([webcamStream.track]).toURL()}
            objectFit={'cover'}
            mirror={isLocal ? true : false}
            style={{
              flex: 1,
            }}
          />
          <InfoOverLay />
        </>
      ) : (
        <>
          <View
            style={{
              backgroundColor: 'grey',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 16}}>NO MEDIA</Text>
          </View>
          <InfoOverLay />
        </>
      )}
    </View>
  );
}

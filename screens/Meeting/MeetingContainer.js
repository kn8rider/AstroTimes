import {useMeeting} from '@videosdk.live/react-native-sdk';
import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  FlatList,
  StatusBar,
  useWindowDimensions,
  Platform,
  Button,
  SafeAreaView,
  SectionList,
  StyleSheet,
} from 'react-native';
import ParticipantView from './ParticipantView';
const MeetingContainer = () => {
  const [isJoin, setIsJoin] = useState(false);
  const layout = useWindowDimensions();
  //To toggle visibility of controls
  const [visibleControls, setvisibleControls] = useState(true);
  function onMeetingJoined() {
    console.log('onMeetingJoined');
  }

  function onMeetingLeft() {
    console.log('on-Meeting-Left');
  }

  function onParticipantJoined(participant) {
    console.log(' onParticipantJoined', participant);
  }

  function onParticipantLeft(participant) {
    console.log(' onParticipantLeft', participant);
  }

  const {join, leave, toggleMic, toggleWebcam, participants} = useMeeting({
    onMeetingLeft,
    onMeetingJoined,
    onParticipantJoined,
    onParticipantLeft,
  });

  const Button = ({onPress, buttonText, backgroundColor}) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor: backgroundColor,
          height: 30,
          width: 30,
          borderRadius: 15,
        }}>
        <Text style={{color: 'white', fontSize: 12}}>{buttonText}</Text>
      </TouchableOpacity>
    );
  };
  //a reference to meeting object
  const mMeetingRef = useRef();

  //initialising mMeeting object to empty first
  const mMeeting = useMeeting({});

  //setting meeting object created to mMeetingRef
  useEffect(() => {
    mMeetingRef.current = mMeeting;
  }, [mMeeting]);

  //array Of Id of all participants of the meeting
  const participantsArrId = [...participants.keys()];

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#161616'}}>
      <View style={{flex: 1, paddingHorizontal: 8}}>
        {participantsArrId.length > 0 ? (
          <FlatList
            data={participantsArrId}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => {
                    setvisibleControls(!visibleControls);
                  }}
                  style={{
                    height: layout.height / 2,
                    marginVertical: 3,
                  }}>
                  <ParticipantView participantId={item} />
                </TouchableOpacity>
              );
            }}
          />
        ) : (
          <View
            style={{
              flex: 1,
              backgroundColor: '#F6F6FF',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 20}}>
              Press Join button to enter meeting.
            </Text>
          </View>
        )}
      </View>
      {visibleControls ? (
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <Button
            onPress={() => {
              join();
            }}
            buttonText={'JOIN'}
            backgroundColor={'#6a65f1'}
          />
          <Button
            onPress={() => {
              leave();
            }}
            buttonText={'LEAVE'}
            backgroundColor={'red'}
          />
          <Button
            onPress={toggleMic}
            buttonText={'TOGGLE MIC'}
            backgroundColor={'#6a65f1'}
          />
          <Button
            onPress={toggleWebcam}
            buttonText={'TOGGLE WEBCAM'}
            backgroundColor={'#6a65f1'}
          />
        </View>
      ) : null}
    </SafeAreaView>
  );
};
export default MeetingContainer;

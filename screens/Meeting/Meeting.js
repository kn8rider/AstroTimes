import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {MeetingProvider} from '@videosdk.live/react-native-sdk';
import MeetingContainer from './MeetingContainer';
import {View} from 'paper/dist/paper-core';
export default function Meeting() {
  const [token, setToken] = useState('');
  const [meetingId, setMeetingId] = useState('');

  const getToken = async () => {
    const res = await fetch(
      'http://milolivevideostreaming.ddns.net:50683/get-token',
      {
        method: 'GET',
      },
    );
    // console.log(res);
    const data = await res.json();
    if (res.status == 200) {
      console.log(data.token);
      setToken(data.token);
      getMeetingID(data.token);
    }
  };
  const getMeetingID = async token => {
    const res = await fetch('https://api.videosdk.live/api/meetings', {
      method: 'POST',
      headers: {Authorization: token, 'Content-Type': 'application/json'},
    });
    // console.log(res);

    // console.log(data);
    if (res.status == 200) {
      const data = await res.json();
      console.log(data.meetingId);
      setMeetingId(data.meetingId);
    }
  };
  useEffect(() => {
    getToken();
  }, []);
  return token && meetingId ? (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F6F6FF'}}>
      <MeetingProvider
        config={{
          meetingId,
          micEnabled: false,
          webcamEnabled: false,
          name: 'Test User',
          notification: {
            title: 'Code Sample',
            message: 'Meeting is running.',
          },
        }}
        token={token}>
        <MeetingContainer />
      </MeetingProvider>
    </SafeAreaView>
  ) : null;
}

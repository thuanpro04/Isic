import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Buffer } from 'buffer'; // Thêm thư viện buffer
import WelcomToMusic from './Src/Screens/WelcomToMusic';

const App = () => {
  const [playlists, setPlaylists] = useState([]);
  useEffect(() => {
    getToken();
  }, []);

  const getToken = async () => {
    const clientId = '76f956694e064d69b6e90bfafee3bab9';
    const clientSecret = '2b75d5fc5caf4327994056711981c12a';
    const authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      method: 'post',
      headers: {
        'Authorization': 'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64'),
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: new URLSearchParams({
        grant_type: 'client_credentials',
      }).toString(),
    };

    try {
      const response = await axios(authOptions);
      const token = response.data.access_token;
      console.log('Access Token:', token);
      getPlaylists(token);
    } catch (error) {
      console.error('Error fetching token:', error);
    }
  };
  const getPlaylists = async (token: any) => {
    const apiUrl = 'https://api.spotify.com/v1/browse/featured-playlists';
    
    try {
      const response = await axios.get(apiUrl, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      setPlaylists(response.data.playlists.items);
    } catch (error) {
      console.error('Error fetching playlists:', error);
    }
  };
  console.log(playlists);
  
  return (
    <WelcomToMusic/>
  );
};

export default App;

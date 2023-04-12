import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
} from 'react-native';

import FunSaveSvg from '../../assets/FunSaveSvg';

const FunSaveScreen = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../../assets/EnterMosc.png')}
      resizeMode="cover"
      style={{
        width: '100%',
        height: '100%',
      }}>
      <View style={{flex: 1, alignSelf: 'center', marginTop: 42}}>
        <FunSaveSvg />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignSelf: 'center',
        }}>
        <Image
          source={require('../../assets/Tv.png')}
          resizeMode="contain"
          style={{
            width: 300,
            height: 200,
          }}
        />
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('BannerScreen')}
          style={{
            marginLeft: 16,
            marginRight: 16,
            marginTop: 20,
            marginBottom: 42,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'transparent',
            borderRadius: 10,
            backgroundColor: '#00A79D',
            borderWidth: 1,
          }}>
          <Text style={{color: '#FFFFFF', fontSize: 20, fontWeight: '700'}}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default FunSaveScreen;

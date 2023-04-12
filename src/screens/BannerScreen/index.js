import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
} from 'react-native';

import FunSaveSvg from '../../assets/FunSaveSvg';

const BannerScreen = () => {
  return (
    <ImageBackground
      source={require('../../assets/Preapp.png')}
      resizeMode="cover"
      style={{
        width: '100%',
        height: '100%',
      }}>
      <View style={{alignSelf: 'center', marginTop: 42}}>
        <FunSaveSvg />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignSelf: 'center',
          marginTop: 70,
        }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../assets/Frame.png')}
            resizeMode="contain"
            style={{
              width: 56,
              height: 56,
              zIndex: 1,
            }}
          />
          <Text
            style={{
              borderWidth: 1,
              textAlign: 'center',
              height: 33,
              marginLeft: -20,
              width: 190,
              paddingTop: 8,
            }}>
            Sign Up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../assets/Frame1.png')}
            resizeMode="contain"
            style={{
              width: 56,
              height: 56,
              zIndex: 1,
            }}
          />
          <Text
            style={{
              borderWidth: 1,
              textAlign: 'center',
              height: 33,
              marginLeft: -20,
              width: 190,
              paddingTop: 8,
            }}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../assets/Frame2.png')}
            resizeMode="contain"
            style={{
              width: 56,
              height: 56,
              zIndex: 1,
            }}
          />
          <Text
            style={{
              borderWidth: 1,
              textAlign: 'center',
              height: 33,
              marginLeft: -20,
              width: 190,
              paddingTop: 8,
            }}>
            Browse as Guest
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          alignItems: 'center',
        }}>
        <Text
          style={{
            marginTop: 100,
            fontSize: 16,
            fontWeight: '400',
          }}>
          You can also connect with:
        </Text>
        <Image
          source={require('../../assets/FIG.png')}
          resizeMode="contain"
          style={{
            width: 200,
            height: 100,
          }}
        />
        <Text
          style={{
            marginTop: 30,
            fontSize: 16,
            fontWeight: '400',
            width: '90%',
            textAlign: 'center',
          }}>
          By continuing to use the application, I accept the
          <Text style={{color: '#00A79D'}}> Membership Agreement</Text> and the
          use of my personal information within the scope of the
          <Text style={{color: '#00A79D'}}> Explicit Consent Text.</Text>
        </Text>
      </View>
    </ImageBackground>
  );
};

export default BannerScreen;

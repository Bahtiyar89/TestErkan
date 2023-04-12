import React, {useState, useEffect} from 'react';
import {Text, TouchableOpacity, View, ImageBackground} from 'react-native';
import Swiper from 'react-native-swiper';
import HelloSvg from '../../assets/HelloSvg';

const data = [
  {label: 'English', value: '1'},
  {label: 'Turkey', value: '4'},
];

const SwiperScreen = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [opt, setOtp] = useState({});
  const [scan, setScan] = useState(false);
  const [result, setResult] = useState('');
  const [selected, setSelected] = useState(undefined);
  return (
    <Swiper showsPagination={true} dotStyle={{backgroundColor: 'white'}}>
      <ImageBackground
        source={require('../../assets/İntroA.png')}
        resizeMode="cover"
        style={{
          width: '100%',
          height: '100%',
        }}>
        <View style={{flex: 1, alignSelf: 'center', marginTop: 42}}>
          <HelloSvg />
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <Text
            style={{
              fontSize: 28,
              fontWeight: '400',
              color: 'white',
              textAlign: 'center',
            }}>
            {'Find unique discount\n coupons for your\n favourite places.'}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
          }}>
          <TouchableOpacity
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
              backgroundColor: '#FFFFFF',
              borderWidth: 1,
            }}>
            <Text style={{color: '#00A79D', fontSize: 20, fontWeight: '700'}}>
              Exit
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <ImageBackground
        source={require('../../assets/İntroB.png')}
        resizeMode="cover"
        style={{
          width: '100%',
          height: '100%',
        }}>
        <View style={{flex: 1, alignSelf: 'center', marginTop: 42}}>
          <HelloSvg />
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <Text
            style={{
              fontSize: 28,
              fontWeight: '400',
              color: 'white',
              textAlign: 'center',
            }}>
            {'Choose your\nmembership.'}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
          }}>
          <TouchableOpacity
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
              backgroundColor: '#FFFFFF',
              borderWidth: 1,
            }}>
            <Text style={{color: '#00A79D', fontSize: 20, fontWeight: '700'}}>
              Skip
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <ImageBackground
        source={require('../../assets/İntroC.png')}
        resizeMode="cover"
        style={{
          width: '100%',
          height: '100%',
        }}>
        <View style={{flex: 1, alignSelf: 'center', marginTop: 42}}>
          <HelloSvg />
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <Text
            style={{
              fontSize: 28,
              fontWeight: '400',
              color: 'white',
              textAlign: 'center',
            }}>
            {'Choose your\nmembership.'}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('FunSaveScreen')}
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
    </Swiper>
  );
};

export default SwiperScreen;

import React, {useState, useEffect} from 'react';
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  Modal,
  ImageBackground,
} from 'react-native';
import GroupSvg from '../../assets/GroupSvg';
import Dropdown from '../../components/Dropdown';
import Loading from '../../components/Loading';
import obj from './obj';
import styles from './styles';

const data = [
  {label: 'English', value: '1'},
  {label: 'Turkey', value: '4'},
];

const MainScreen = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [opt, setOtp] = useState(obj);
  const [scan, setScan] = useState(false);
  const [result, setResult] = useState('');
  const [selected, setSelected] = useState(undefined);
  return (
    <ImageBackground
      source={require('../../assets/Enter.png')}
      resizeMode="cover"
      style={{
        width: '100%',
        height: '100%',
      }}>
      <View
        style={{
          alignSelf: 'center',
        }}>
        <View style={{marginTop: 126}}>
          <GroupSvg />
        </View>

        <Text
          style={{
            marginTop: 100,
            fontSize: 28,
            fontWeight: '900',
            color: '#FFFFFF',
            textAlign: 'center',
          }}>
          Welcome
        </Text>
        <Text
          style={{
            marginTop: 20,
            fontSize: 16,
            fontWeight: '400',
            color: '#FFFFFF',
            textAlign: 'center',
          }}>
          Please select a language:
        </Text>
        <Dropdown data={data} label={'Turkey'} onSelect={setSelected} />

        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('SwiperScreen')}
            style={{
              width: '100%',
              backgroundColor: '#00A79D',
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
            }}>
            <Text style={{color: 'white', fontSize: 20, fontWeight: '700'}}>
              Continue
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginTop: 20,
              marginBottom: 42,
              width: '100%',
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
      </View>
    </ImageBackground>
  );
};

export default MainScreen;

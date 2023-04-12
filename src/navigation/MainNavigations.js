import {createStackNavigator} from '@react-navigation/stack';
import BannerScreen from '../screens/BannerScreen';
import FunSaveScreen from '../screens/FunSaveScreen';
import MainScreen from '../screens/MainScreen/MainScreen';
import SwiperScreen from '../screens/SwiperScreen';

const Stack = createStackNavigator();

const MainNavigations = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainScreen"
        options={{
          headerShown: false,
        }}
        component={MainScreen}
      />
      <Stack.Screen
        name="SwiperScreen"
        options={{
          headerShown: false,
        }}
        component={SwiperScreen}
      />
      <Stack.Screen
        name="FunSaveScreen"
        options={{
          headerShown: false,
        }}
        component={FunSaveScreen}
      />
      <Stack.Screen
        name="BannerScreen"
        options={{
          headerShown: false,
        }}
        component={BannerScreen}
      />
    </Stack.Navigator>
  );
};

export default MainNavigations;

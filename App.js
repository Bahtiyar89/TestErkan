import React from 'react';
import MainNavigations from './src/navigation/MainNavigations';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigations />
    </NavigationContainer>
  );
};

export default App;

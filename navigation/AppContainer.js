import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import AppStack from './AppStack';

const AppContainer = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default AppContainer;

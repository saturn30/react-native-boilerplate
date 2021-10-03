import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { HomeStackNavigation } from '@navigations';
import { Splash } from '@screens';
import { useIsSplashingAtom } from '@atoms';

const App = () => {
  const [isSplashing] = useIsSplashingAtom();

  if (isSplashing) {
    return <Splash />;
  }

  return (
    <NavigationContainer>
      <HomeStackNavigation />
    </NavigationContainer>
  );
};

export default App;

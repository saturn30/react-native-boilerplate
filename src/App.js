import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { HomeStackNavigation } from '@navigations';
import { Splash } from '@screens/splash';
import { useIsSplashingAtom } from '@atoms';
import { useAuthSubscribe } from '@hooks/auth';

const App = () => {
  const [isSplashing] = useIsSplashingAtom();
  useAuthSubscribe();

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

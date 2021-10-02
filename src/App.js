import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { HomeStackNavigation } from '@navigations';
import { Splash } from '@screens';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <Splash setIsLoading={setIsLoading} />;
  }

  return (
    <NavigationContainer>
      <HomeStackNavigation />
    </NavigationContainer>
  );
};

export default App;

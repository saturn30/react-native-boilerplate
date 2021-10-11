import auth from '@react-native-firebase/auth';
import { useEffect } from 'react';

import { useUserAuthAtom } from '@atoms';

export function useAuthSubscribe() {
  const [, setUserAuth] = useUserAuthAtom();

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(setUserAuth);
    return subscriber; // unsubscribe on unmount
  }, []);
}

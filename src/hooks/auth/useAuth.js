import auth from '@react-native-firebase/auth';

import { useUserAuthAtom } from '@atoms';

export function useAuth() {
  const [userAuth] = useUserAuthAtom();

  function anonymousLogin() {
    return auth().signInAnonymously();
  }

  function logout() {
    return auth().signOut();
  }

  return { userAuth, anonymousLogin, logout };
}

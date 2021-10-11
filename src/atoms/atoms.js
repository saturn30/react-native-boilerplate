import { atom, useAtom } from 'jotai';

export const isSplashingAtom = atom(true);
export const useIsSplashingAtom = () => useAtom(isSplashingAtom);

export const userAuth = atom();
export const useUserAuthAtom = () => useAtom(userAuth);

import { selector } from 'recoil';
import { loginState } from '../atoms/loginAtoms';
import { LoginInfo } from '@models/loginInfo';
import { storage } from '@utils/index';

export const loginSel = selector({
  key: 'loginSel',
  get: ({ get }) => {
    let loginInfo = get(loginState);
    if (!loginInfo.headimgurl) {
      try {
        loginInfo = storage.get('userInfo') || loginInfo;
      }
      catch (err) {
        loginInfo = loginInfo;
      }
    }
    return loginInfo;
  },
  set: ({ set }, newVal: LoginInfo) => {
    set(loginState, newVal);
  },
})

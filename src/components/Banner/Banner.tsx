// useCallback 缓存函数
// usememo 缓存值
import React, { FC, useEffect, useCallback } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import './Banner.css';
import { loginSel } from '@recoil/selectors/loginSelectors';
import { storage } from '@utils/index';
import { user } from '@api/index';

import { useRecoilState } from 'recoil';

const Banner: FC<{}> = () => {
  const [loginInfo, setLoginInfo] = useRecoilState(loginSel);

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (!loginInfo.headimgurl && location.pathname !== '/') {
      history.push({
        pathname: 'login',
        state: {
          from: {
            pathname: location.pathname,
          },
        },
      });
    }
    return () => {};
  }, []);
};

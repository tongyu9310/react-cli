import React, { FC } from 'react';
import Routes from '@routes/index';
import { BrowserRouter as Router } from 'react-router-dom';

import { RecoilRoot, atom } from 'recoil';
const App: FC<{}> = () => {
  return (
    <RecoilRoot>
      <Router basename="/">
        <Routes />
      </Router>
    </RecoilRoot>
  );
};
export default App;

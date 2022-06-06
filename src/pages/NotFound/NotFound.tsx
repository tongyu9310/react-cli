{/* <script type="text/javascript" src="//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js" charset="utf-8" homePageUrl="#放置自己首页的地址#" homePageName="回到我的主页"></script> */ }

import React, { FC } from 'react';
import './NotFound.css';

const NotFound: FC<{}> = () => {
  let page404 = () => {
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js`
    script.setAttribute('homePageUrl', '/')
    script.setAttribute("homePageName", "返回首页");
    document.getElementsByTagName('head')[0].appendChild(script);
  }
  page404();
  return <></>
}

export default NotFound;
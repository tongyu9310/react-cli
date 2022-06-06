import React, { FC,Suspense } from 'react';
import { Route,Switch,RouteProps } from 'react-router-dom';
// import Home from '@pages/Home/Home'
import Loading from "@components/Loading/Loading";
import NotFound from "@pages/NotFound/NotFound";
const Home=React.lazy(()=>import("@pages/Home/Home"));
export const routes: RouteProps[] = [
  {
    path: '/',
    exact: true,//严格匹配
    component:Home
  }
]

// 定义路由组件
const Routes: FC = () => {
  return (
    <Suspense fallback={<Loading></Loading>}>
      <Switch>{
        routes.map((r, index) => {
          const { path, exact, component } = r;
          const LazyComponent = component;
          return (<Route
            key={index} path={path}
            exact={exact}
            render={
              (props) => <LazyComponent {...props}></LazyComponent>
            }
          ></Route>)
      })
      }</Switch>
      <Route component={NotFound}></Route>
    </Suspense>
  )
}

export default Routes;
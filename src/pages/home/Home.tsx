import './Home.css';
import React, { FC }  from 'react';
const Home:FC<{}> = () => {
  return (
    <>
      <div className="page-home layout-container">
        <div className="banner-box">
          home
          {/* swiper */}
        </div>
      </div>
    </>
  )
}

exports.default = Home
// class Home extends React.Component {
//   constructor(props) {
// super(props);
//   }
//   componentDidMount() {}
// }
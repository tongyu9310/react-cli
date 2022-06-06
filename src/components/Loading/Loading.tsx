import './Loading.css';
import React, { FC ,ReactNode} from 'react';

type props = {
  children?: ReactNode,
  bgOpacity?: Boolean,
}
const Loading: FC<props> = ({ bgOpacity=true}) => {
  return (
    <>
      <div className={`components-loading ${bgOpacity ? 'components-loading-opcity' : ''}`}>

        <div className="loading-con">
          <span></span>
        </div>
      </div>

    </>
  )
}
export default Loading;
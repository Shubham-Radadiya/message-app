import React from 'react';
import {Path, Rect, Svg} from 'react-native-svg';

const SmsCard = () => {
  return (
    <Svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Rect opacity="0.1" width="60" height="60" rx="8" fill="#9E9E9E" />
      <Path
        d="M29.026 17C21.473 17 16 23.1713 16 30.0195C16 32.2068 16.637 34.4592 17.755 36.5163C17.963 36.8548 17.989 37.2844 17.846 37.688L16.975 40.6044C16.78 41.3075 17.378 41.8282 18.041 41.6199L20.667 40.8388C21.382 40.6044 21.941 40.9039 22.604 41.3075C24.502 42.4271 26.868 43 29 43C35.448 43 42 38.0135 42 29.9805C42 23.0541 36.41 17 29.026 17"
        stroke="#212121"
        strokeWidth="2"
      />
    </Svg>
  );
};

export default SmsCard;

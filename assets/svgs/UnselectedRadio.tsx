import React from 'react';
import {Rect, Svg} from 'react-native-svg';

const UnselectedRadio = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Rect
        x="3.5"
        y="3.5"
        width="17"
        height="17"
        rx="8.5"
        stroke="#566789"
        strokeOpacity="0.26"
        strokeWidth="3"
      />
    </Svg>
  );
};

export default UnselectedRadio;

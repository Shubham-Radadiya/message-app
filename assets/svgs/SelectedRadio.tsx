import React from 'react';
import {Circle, Rect, Svg} from 'react-native-svg';

const SelectedRadio = () => {
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
        stroke="#F57B00"
        strokeWidth="3"
      />
      <Circle cx="12" cy="12" r="4" fill="#F57B00" />
    </Svg>
  );
};

export default SelectedRadio;

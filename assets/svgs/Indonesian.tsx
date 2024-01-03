import React from 'react';
import {Ellipse, G, Mask, Rect, Svg} from 'react-native-svg';

const Indonesian = () => {
  return (
    <Svg
      width="28"
      height="27"
      viewBox="0 0 28 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Ellipse cx="14" cy="13.5" rx="14" ry="13.5" fill="#E5E4EA" />
      <Mask
        id="mask0_32_5634"
        style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="1"
        y="1"
        width="26"
        height="25">
        <Ellipse
          cx="14"
          cy="13.5003"
          rx="12.2927"
          ry="11.8537"
          transform="rotate(180 14 13.5003)"
          fill="#D9D9D9"
        />
      </Mask>
      <G mask="url(#mask0_32_5634)">
        <Rect
          x="26.2927"
          y="1.64648"
          width="11.8537"
          height="24.5854"
          transform="rotate(90 26.2927 1.64648)"
          fill="#FA3168"
        />
        <Rect
          x="26.2927"
          y="13.5"
          width="11.8537"
          height="24.5854"
          transform="rotate(90 26.2927 13.5)"
          fill="#F5F7F8"
        />
      </G>
    </Svg>
  );
};

export default Indonesian;

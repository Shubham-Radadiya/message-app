import { View, Text } from "react-native";
import React from "react";
import { Svg, Rect, Circle } from "react-native-svg";

const Select = () => {
  return (
    <Svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect
        x="4.47382"
        y="3.5"
        width="17"
        height="17"
        rx="8.5"
        stroke="#F57B00"
        strokeWidth="3"
      />
      <Circle cx="12.9738" cy="12" r="4" fill="#F57B00" />
    </Svg>
  );
};

export default Select;

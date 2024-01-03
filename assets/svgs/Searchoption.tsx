import React from 'react';
import {Path, Svg} from 'react-native-svg';

const SearchOption = () => {
  return (
    <Svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M16.25 16.75L20.5 21M18.375 11.4375C18.375 15.5451 15.0451 18.875 10.9375 18.875C6.82988 18.875 3.5 15.5451 3.5 11.4375C3.5 7.32988 6.82988 4 10.9375 4C15.0451 4 18.375 7.32988 18.375 11.4375Z"
        stroke="#212121"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default SearchOption;

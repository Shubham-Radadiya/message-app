import React from 'react'
import { Path, Svg } from 'react-native-svg'

const Back = ({stroke}) => {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M21 12H3M3 12L10 5M3 12L10 19" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            {/* <Path d="M21 12H3M3 12L10 5M3 12L10 19" stroke='black' strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /> */}
        </Svg>
    )
}

export default Back
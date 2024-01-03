import React from 'react'
import { Path, Svg } from 'react-native-svg'

const Font = ({stroke}) => {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M1 19L6.625 4L12.25 19" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M10.2812 13.75H2.96875" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M15.7812 10.75C16.3527 9.40516 17.7031 8.5 19.25 8.5C21.4062 8.5 23 10 23 12.25V19" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M15.5 16.3281C15.5 18.0156 16.7591 19.0469 18.3125 19.0469C20.8438 19.0469 23 17.7812 23 14.0781V13.375C22.0625 13.375 20.2812 13.4219 18.6875 13.6094C17.1514 13.7903 15.5 14.5 15.5 16.3281Z" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    )
}

export default Font
import React from 'react'
import { Path, Svg } from 'react-native-svg'

const Notification = ({stroke}) => {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M6.2861 10.5576V9.62731C6.2861 6.51944 8.80553 4 11.9134 4C15.0213 4 17.5407 6.51943 17.5407 9.62731V10.5576C17.5407 12.5802 18.1254 14.5597 19.2242 16.2578L19.8268 17.189H4L4.60264 16.2577C5.70149 14.5597 6.2861 12.5802 6.2861 10.5576Z" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M11.0339 19.6084C11.5038 20.1305 12.3226 20.1305 12.7925 19.6084" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    )
}

export default Notification
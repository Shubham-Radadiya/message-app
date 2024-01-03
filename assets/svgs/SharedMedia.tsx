import React from 'react'
import { Path, Svg } from 'react-native-svg'

const SharedMedia = ({stroke}) => {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M4.88892 21.0002L15.2778 10.6113L20 15.3336" stroke={stroke} stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M18.1111 4H4.88889C3.84568 4 3 4.84568 3 5.88889V19.1111C3 20.1543 3.84568 21 4.88889 21H18.1111C19.1543 21 20 20.1543 20 19.1111V5.88889C20 4.84568 19.1543 4 18.1111 4Z" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M8.1945 10.6107C8.9769 10.6107 9.61117 9.97641 9.61117 9.19401C9.61117 8.41161 8.9769 7.77734 8.1945 7.77734C7.4121 7.77734 6.77783 8.41161 6.77783 9.19401C6.77783 9.97641 7.4121 10.6107 8.1945 10.6107Z" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>

    )
}

export default SharedMedia
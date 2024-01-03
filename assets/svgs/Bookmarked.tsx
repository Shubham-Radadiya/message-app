import React from 'react'
import { Path, Svg } from 'react-native-svg'

const Bookmarked = ({stroke}) => {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M12.5206 15.7097L12 15.2634L11.4794 15.7097L5.13016 21.1519C5.00042 21.2631 4.8 21.1709 4.8 21V5C4.8 3.78497 5.78497 2.8 7 2.8H17C18.215 2.8 19.2 3.78497 19.2 5V21C19.2 21.1709 18.9996 21.2631 18.8698 21.1519L12.5206 15.7097Z" stroke={stroke} strokeWidth="1.6" />
        </Svg>

    )
}

export default Bookmarked
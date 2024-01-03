import { View, Text } from 'react-native'
import React from 'react'
import { Svg,Path } from 'react-native-svg'

const Version = ({stroke}) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M17 3H7C6.44772 3 6 3.44772 6 4V21C6 21.5523 6.44772 22 7 22H17C17.5523 22 18 21.5523 18 21V4C18 3.44772 17.5523 3 17 3Z" stroke={stroke} stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
    <Path d="M12.0161 18.0161L12 18" stroke={stroke} stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
    
  )
}

export default Version
import { View, Text } from 'react-native'
import React from 'react'
import { Svg ,Path} from 'react-native-svg'

const Help = ({stroke}) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke={stroke} stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
    <Path d="M12 18.2744V18.25" stroke={stroke} stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
    <Path d="M12 14.5C14 13.5 16 12.2091 16 10C16 7.79086 14.2091 6 12 6C9.79086 6 8 7.79086 8 10" stroke={stroke} stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
    
  )
}

export default Help
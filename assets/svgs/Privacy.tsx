import { View, Text } from 'react-native'
import React from 'react'
import { Svg ,Path} from 'react-native-svg'

const Privacy = ({stroke}) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M18.2 10.5498H4.9C3.85066 10.5498 3 11.4005 3 12.4498V19.0998C3 20.1491 3.85066 20.9998 4.9 20.9998H18.2C19.2493 20.9998 20.1 20.1491 20.1 19.0998V12.4498C20.1 11.4005 19.2493 10.5498 18.2 10.5498Z" stroke={stroke} stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M6.80005 10.55V6.75C6.80005 4.12664 8.9267 2 11.55 2C14.1734 2 16.3 4.12664 16.3 6.75V10.55" stroke={stroke} stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</Svg>

  )
}

export default Privacy
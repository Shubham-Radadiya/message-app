import { View, Text } from 'react-native'
import React from 'react'
import { Path ,Svg } from 'react-native-svg'

const Customize = () => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M3 7H13M22 7H19" stroke="#212121" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
    <Path d="M22 18H12M3 18H6" stroke="#212121" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
    <Path d="M16 10C17.6569 10 19 8.65685 19 7C19 5.34315 17.6569 4 16 4C14.3431 4 13 5.34315 13 7C13 8.65685 14.3431 10 16 10Z" stroke="#212121" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
    <Path d="M9 21C7.34315 21 6 19.6569 6 18C6 16.3431 7.34315 15 9 15C10.6569 15 12 16.3431 12 18C12 19.6569 10.6569 21 9 21Z" stroke="#212121" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
    
  )
}

export default Customize
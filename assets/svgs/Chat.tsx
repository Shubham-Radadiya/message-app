import React from 'react'
import { Path, Svg } from 'react-native-svg'

const Chat = ({stroke}) => {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M8 22.3194C7.72 22.3194 7.42998 22.2494 7.16998 22.1094C6.59998 21.8094 6.25 21.2094 6.25 20.5694V19.1495C3.23 18.8395 1.25 16.6194 1.25 13.4394V7.43945C1.25 3.99945 3.56 1.68945 7 1.68945H17C20.44 1.68945 22.75 3.99945 22.75 7.43945V13.4394C22.75 16.8794 20.44 19.1894 17 19.1894H13.23L8.96997 22.0295C8.67997 22.2195 8.34 22.3194 8 22.3194ZM7 3.17944C4.42 3.17944 2.75 4.84944 2.75 7.42944V13.4295C2.75 16.0095 4.42 17.6795 7 17.6795C7.41 17.6795 7.75 18.0195 7.75 18.4295V20.5595C7.75 20.6895 7.83 20.7495 7.88 20.7795C7.93001 20.8095 8.03001 20.8395 8.14001 20.7695L12.59 17.8095C12.71 17.7295 12.86 17.6795 13.01 17.6795H17.01C19.59 17.6795 21.26 16.0095 21.26 13.4295V7.42944C21.26 4.84944 19.59 3.17944 17.01 3.17944H7Z" fill={stroke} />
        </Svg>

    )
}

export default Chat
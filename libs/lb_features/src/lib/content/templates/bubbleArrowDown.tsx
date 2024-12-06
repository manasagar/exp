import React from 'react';
import { View } from 'react-native';

export default function BubbleArrowDown(){
  return ( <><View
    style={{
      position: 'absolute',
      left: 15,
      bottom: -30,
      width: 0,
      height: 0,
      borderTopWidth: 15,
      borderTopColor: '#38464f',
      borderRightWidth: 15,
      borderRightColor: 'transparent',
      borderBottomWidth: 15,
      borderBottomColor: 'transparent',
      borderLeftWidth: 15,
      borderLeftColor: 'transparent',
    }} /><View
      style={{
        position: 'absolute',
        left: 15,
        bottom: -28,
        width: 0,
        height: 0,
        borderTopWidth: 15,
        borderTopColor: '#092635',
        borderRightWidth: 15,
        borderRightColor: 'transparent',
        borderBottomWidth: 15,
        borderBottomColor: 'transparent',
        borderLeftWidth: 15,
        borderLeftColor: 'transparent',
      }} /></>)
}

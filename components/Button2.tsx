import Spacing from '../contants/Spacing';
import React from 'react'
import {View, Text, TouchableOpacity,} from 'react-native';
import { FONTS } from '../temp/Fonts';
const Button2 = ({bgColor, btnLabel, textcolor, Press}: any) => {
		return (
      <TouchableOpacity
        style={{
          backgroundColor: bgColor,
          borderRadius: 10,
          height: 45,
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%'
        }}
        onPress={Press}>
        <Text
          style={{
            color: textcolor,
            ...FONTS.h4,
            fontWeight: 'bold',
          }}>
          {btnLabel}
        </Text>
      </TouchableOpacity>
    );
}

export default Button2
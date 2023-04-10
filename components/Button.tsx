import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import routes from '../contants/routes';
import { FONTS } from '../temp/Fonts';
const Button = ({bgColor, btnLabel, textcolor, Press}: any) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: bgColor,
        borderRadius: 20,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: 130,
        height: 40,
      }}
      onPress={Press}>
      <Text
        style={{
          color: textcolor,
          ...FONTS.body2,
          fontWeight: 'bold',
        }}>
        {btnLabel}
      </Text>
    </TouchableOpacity>
  );
};
export default Button;

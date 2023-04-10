import React, { useEffect, useState,} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
	TouchableOpacity,
	TextInput,
} from 'react-native';
import COLORS from '../temp/COLORS';
import { FONTS } from '../temp/Fonts';
import Icons from 'react-native-vector-icons/Ionicons'
import image from '../contants/image';
import Spacing from '../contants/Spacing';
import { useNavigation } from '@react-navigation/native';
import routes from '../contants/routes';
import Button2 from '../components/Button2';
import { SIZES } from '../temp/SIZES';
import CountryPicker from 'react-native-country-picker-modal'
const ForgetPassword = () => {
  const navigation: any = useNavigation();
  return (
    <SafeAreaView style={styles.continer}>
      <StatusBar backgroundColor={COLORS.white} />
      <TouchableOpacity style={styles.btnleft} onPress={()=>navigation.goBack()}>
        <Image source={image.letf} style={{width: 24, height: 24}} />
				</TouchableOpacity>
				<View style={{justifyContent:'center',alignItems:'center',marginTop:30}}>
					<Image source={image.forget} style={styles.image} />
				</View>
				<View style={{justifyContent:'space-around',}}>
					<Text style={{ marginLeft: 15,...FONTS.h2, color: COLORS.sky }}>ភ្លេចពាក្យសម្លាត់?</Text>
					<View style={{marginVertical:7}}>
					<Text style={{ ...FONTS.h4, marginLeft: 15,color:COLORS.Black }}>កុំបារម្ភ! សូមបញ្ចូលលេខទូរស័ព្ទដើម្បី</Text>
					<Text style={{ ...FONTS.h4, marginLeft: 15,color:COLORS.Black }}>ផ្លាស់ប្តូរពាក្យរបស់អ្នក</Text>
					</View>
					<View
        style={{ marginVertical: Spacing * 1.5, marginHorizontal: 15, borderWidth: 1, borderRadius: Spacing, borderColor: COLORS.sky, flexDirection: 'row'}}>
        <View style={styles.inputContainer}>
          <Image
            source={image.mycountry}
          />
            <Text style={{ marginStart: 10, color: COLORS.gray }}>+855</Text>
            <TouchableOpacity>
              <Icons name="chevron-down-sharp" style={{ left: 5 }} color={COLORS.gray} size={15} />
            </TouchableOpacity>
          
            <TextInput
              placeholder="សូមបញ្ចូលលេខទូរស័ព្ទរបស់អ្នក"
              placeholderTextColor={COLORS.gray}
              style={{ paddingStart: 13, ...FONTS.body4, color: COLORS.Black }}
              keyboardType="numeric"
            
          />
        </View>
        </View>
      </View>
      <View style={{flex:1,justifyContent:'flex-end',paddingHorizontal:SIZES.padding2,marginBottom:5,marginTop:15}} >
        <Button2 Press={()=>navigation.navigate(routes.OTP)}
          bgColor={COLORS.Skyblue}
          textcolor={COLORS.white}
          btnLabel="ផ្ញើ"/>
        </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
	inputContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10
},
  continer: {
    flex: 1,
	  backgroundColor:COLORS.white
	},
	btnleft: {
		top:10,
		left:10
	},
	image: {
		width: 250,
    height: 250,
    justifyContent:'center'
	}
});
export default ForgetPassword;

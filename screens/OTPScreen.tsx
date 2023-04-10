import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import image from '../contants/image';
import COLORS from '../temp/COLORS';
import {FONTS} from '../temp/Fonts';
import Button2 from '../components/Button2';
import { useNavigation } from '@react-navigation/native';
import routes from '../contants/routes';
import { SIZES } from '../temp/SIZES';
const OTPScreen = () => {
	const navigation: any = useNavigation();
  const oneInput = useRef();
  const twoInput = useRef();
  const threeInput = useRef();
  const fourInput = useRef();
  const fiveInput = useRef();
  const sixInput = useRef();
  return (
    <SafeAreaView style={styles.contanter}>
				<StatusBar backgroundColor={COLORS.white} />
				<View style={{flex:1,justifyContent: 'center', alignItems: 'center',marginTop:30}}>
        <Image source={image.otp} style={{width: 200, height: 200,}} />
				</View>
      <View style={{flex: 1}}>
        <Text style={{...FONTS.h2, marginStart:15, color: COLORS.sky}}>
          បញ្ចូល​ OTP
        </Text>
        <Text style={{marginStart:15, ...FONTS.body3, top: 5, color: COLORS.gray}}>
          លេខកូដ​ OTP ត្រូវបានផ្ញើទៅលេខទូរស័ព្ទរបស់អ្នក
        </Text>
        <View
          style={{
            flex:1,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 15
          }}>
          <Text style={{...FONTS.h4, color: COLORS.Black}}>
            បញ្ចូលលេខកូដសុវត្ថិភាព​​ 6 ខ្ទង់របស់់អ្នក​
          </Text>
        </View>
        <View style={styles.optioContiner}>
            <View style={styles.otpBox}>
              <TextInput
                style={styles.optText}
                maxLength={1}
                ref={oneInput}
                onChangeText={(text) => {
                  text && twoInput.current.focus()
                }}
                keyboardType="numeric"
              />
            </View>
            <View style={styles.otpBox}>
              <TextInput
                style={styles.optText}
                maxLength={1}
                ref={twoInput}
                onChangeText={(text) => {
																	text ? threeInput.current.focus() : oneInput.current.focus()
                }}
                keyboardType="numeric"
              />
            </View>
            <View style={styles.otpBox}>
              <TextInput
                style={styles.optText}
                maxLength={1}
                ref={threeInput}
                onChangeText={(text) => {
																	text ? fourInput.current.focus() : twoInput.current.focus()
                }}
                keyboardType="numeric"
              />
            </View>
            <View style={styles.otpBox}>
              <TextInput
                style={styles.optText}
                maxLength={1}
                ref={fourInput}
                onChangeText={(text) => {
                 text ? fiveInput.current.focus() : threeInput.current.focus()
                }}
                keyboardType="numeric"
              />
            </View>
            <View style={styles.otpBox}>
              <TextInput
                style={styles.optText}
                maxLength={1}
                ref={fiveInput}
                onChangeText={(text) => {
																	text ? sixInput.current.focus() : fourInput.current.focus()
                }}
                keyboardType="numeric"
              />
            </View>
            <View style={styles.otpBox}>
              <TextInput
                style={styles.optText}
                maxLength={1}
                ref={sixInput}
                onChangeText={(text) => {
                  !text && fiveInput.current.focus()
                }}
                keyboardType="numeric"
              />
            </View>
					</View>
					<View style={{alignItems:'center'}}>
						<Text style={{ ...FONTS.body3, color: COLORS.sky }}>ផ្ញើម្តងទៀត</Text>
						<Text style={{...FONTS.body3,color:COLORS.Black,top:5}}>59s</Text>
					</View>
				</View>
				<View style={{justifyContent:'flex-end',flex:1,bottom:18,paddingHorizontal:15}} >
					<Button2 Press={() => navigation.navigate(routes.NewPassword)}
          bgColor={COLORS.Skyblue}
          textcolor={COLORS.white}
          btnLabel="បញ្ជាក់"/>
        </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  contanter: {
    flex: 1,	
    backgroundColor: COLORS.white,
		justifyContent: 'space-between',
		
  },
  optioContiner: {
    marginHorizontal: 20,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },
  otpBox: {
    borderRadius: 5,
    borderColor: COLORS.sky,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 45,
    margin: 5,
  },
  optText: {
    fontSize: 20,
    color: COLORS.Black,
    textAlign: 'center',
  },
});
export default OTPScreen;

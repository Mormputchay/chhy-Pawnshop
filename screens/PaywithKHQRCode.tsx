import React from 'react'
import { View, Text, StyleSheet, StatusBar, ImageBackground, TouchableOpacity, SafeAreaView ,Image} from 'react-native'
import {useNavigation} from '@react-navigation/native';
import COLORS from '../temp/COLORS'
import image from '../contants/image';
import { FONTS } from '../temp/Fonts';

const PaywithKHQRCode = () => {
	const navigation: any = useNavigation();
	function renderHearder() {
		return (
			<View style={{flexDirection: 'row', backgroundColor: COLORS.Skyblue}}>
			<TouchableOpacity
					style={{
							alignItems: 'flex-start',
							justifyContent: 'center',
							height: 50,
							elevation: 5,
					}}
					onPress={() => navigation.goBack()}>
					<Image
							source={image.letf}
							style={{width: 20, height: 20, tintColor: COLORS.white, left: 10}}
					/>
			</TouchableOpacity>
			<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
					<Text
							style={{
									textAlign: 'center',
									...FONTS.h4,
									right: 12,
									color: COLORS.white,
							}}>
							ទូទាត់ជាមួយ KH QR Code
					</Text>
			</View>
	</View>
		)
	}
	function renderBackgroundImage() {
		return (
			<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
				<ImageBackground source={image.backqrcode} style={{height:'100%',width:'100%'}} />
				</View>
		)
	}
		return (
			<SafeAreaView style={styles.container}>
				<StatusBar backgroundColor={COLORS.Skyblue}/>
				{renderHearder()}
				{renderBackgroundImage()}
			</SafeAreaView>
		)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor:COLORS.white
	}
})
export default PaywithKHQRCode
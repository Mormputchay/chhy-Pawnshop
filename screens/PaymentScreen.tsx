import COLORS from '../temp/COLORS'
import React from 'react'
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet, Image,StatusBar } from 'react-native'
import image from '../contants/image';
import { FONTS } from '../temp/Fonts';
import {useNavigation} from '@react-navigation/native';
import { SIZES } from '../temp/SIZES';
import routes from '../contants/routes';
const PaymentScreen = () => {
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
			<View style={{flex: 1, justifyContent: 'center', }}>
					<Text
							style={{
									textAlign: 'center',
									...FONTS.body2,
									right: 12,
									color: COLORS.white,
							}}>
							វិធី​សា​ស្រ្ត​ទូទាត់
					</Text>
			</View>
	</View>
		)
	}
	function renderText() {
		return (
			<View style={{flex:1,paddingTop:SIZES.padding2}}>
				<Text style={{ ...FONTS.body2, color: COLORS.Black ,textAlign:'center'}}>វិធី​សា​ស្រ្ត​ទូទាត់</Text>
				<View style={{flex:1,paddingHorizontal:25,paddingTop:10,alignItems:'center'}}>
					<Text style={{ ...FONTS.body3, textAlign: 'center', color: COLORS.Black }}>ការទូទាត់លឿន និងងាយស្រួលដោយការជ្រើសរើស វិធីបង់ប្រាក់ខាងក្រោមនេះ!</Text>
				</View>
			</View>
		)
	}
	function renderPaymentMoney() {
		return (
			<View style={{ flex: 5, paddingHorizontal: 15,}}>
				{/*card1*/}
				<TouchableOpacity style={{ width: '100%', height: 80, backgroundColor: COLORS.backMoney, borderRadius: 5, flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.navigate(routes.Paywithcash)}>
				<View style={{width:65,height:44,backgroundColor:COLORS.green,marginStart:20,borderRadius:5,justifyContent:'center',alignItems:'center'}}>
						<Image source={image.currency}/>
					</View>
					<View style={{paddingHorizontal:15,paddingVertical:SIZES.padding2}}>
									<Text style={{...FONTS.h4,color:COLORS.Black}}>សាច់ប្រាក់</Text>
									<Text style={{...FONTS.body4,color:COLORS.Black}}>ទូទាត់ជាមួយសាច់ប្រាក់ផ្ទាល់</Text>
							</View>
				</TouchableOpacity>

				<TouchableOpacity style={{ width: '100%', height: 80, backgroundColor: COLORS.backKHQR, borderRadius: 5, flexDirection: 'row', alignItems: 'center' ,marginTop:20}} onPress={()=>navigation.navigate(routes.PaywithKHQRCode)}>
				<View style={{marginStart:20,justifyContent:'center',width:65,height:44,alignItems:'center',backgroundColor:'#E1232E',borderRadius:8}}>
						<Image source={image.KHQR} />
					</View>
					<View style={{paddingHorizontal:15,paddingVertical:SIZES.padding2}}>
									<Text style={{...FONTS.h4,color:COLORS.Black}}>KH QR Code Pay</Text>
									<Text style={{...FONTS.body4,color:COLORS.Black}}>ទូទាត់ជាមួយ KH QR Code</Text>
							</View>
				</TouchableOpacity>

				
				<TouchableOpacity style={{ width: '100%', height: 80, backgroundColor: COLORS.backAcleda, borderRadius: 5, flexDirection: 'row', alignItems: 'center' ,marginTop:20}}>
				<View style={{marginStart:20,justifyContent:'center',width:65,height:44,alignItems:'center',backgroundColor:'#143C6D',borderRadius:8}}>
						<Image source={image.ACLEDA} style={{width:40,height:40}} />
					</View>
					<View style={{paddingHorizontal:15,paddingVertical:SIZES.padding2}}>
									<Text style={{...FONTS.h4,color:COLORS.Black}}>Acleda Pay Account</Text>
									<Text style={{...FONTS.body4,color:COLORS.Black}}>ទូទាត់ជាមួយគណនី Acleda</Text>
							</View>
				</TouchableOpacity>

				<TouchableOpacity style={{ width: '100%', height: 80, backgroundColor: COLORS.backWing, borderRadius: 5, flexDirection: 'row', alignItems: 'center' ,marginTop:20}}>
				<View style={{marginStart:20,justifyContent:'center',width:65,height:44,alignItems:'center',backgroundColor:'#BDCA31',borderRadius:8}}>
						<Image source={image.wing}  />
					</View>
					<View style={{paddingHorizontal:15,paddingVertical:SIZES.padding2}}>
									<Text style={{...FONTS.h4,color:COLORS.Black}}>Wing Pay Account</Text>
									<Text style={{...FONTS.body4,color:COLORS.Black}}>ទូទាត់ជាមួយគណនី Wing</Text>
							</View>
				</TouchableOpacity>
				</View>
			)
		}
		return (
			<SafeAreaView style={styles.continer}>
				<StatusBar backgroundColor={COLORS.Skyblue}/>
				{renderHearder()}
				{renderText()}
					{renderPaymentMoney()}
			</SafeAreaView>
		)
}
const styles = StyleSheet.create({
	continer: {
		flex: 1,
		backgroundColor:COLORS.white
	}
})
export default PaymentScreen

import React from 'react'
import { SIZES } from '../temp/SIZES'
import COLORS from '../temp/COLORS'
import { View, Text, TouchableOpacity, Image, ScrollView, SafeAreaView,StatusBar,StyleSheet } from 'react-native'
import image from '../contants/image'
import { FONTS } from '../temp/Fonts'
import {useNavigation} from '@react-navigation/native';


const AboutScreen = () => {
	const navigation: any = useNavigation();
	function renderHeader() {
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
													...FONTS.h4,
													right: 12,
													color: COLORS.white,
											}}>
								អំពីយើង
									</Text>
							</View>
					</View>
			);
	}
	function renderImage() {
		return (
			<View style={{flex:1,alignItems:'center'}}>
				<Image source={image.Logo1} style={{ marginTop: 10, width: 110, height: 110 }} />
				</View>
			)
	}
	function renderText() {
		return (
			<View style={{flex:4,marginHorizontal:10}}>
			<Text style={{ ...FONTS.h4, color: COLORS.Black ,marginStart:20}}>អំពីយើង</Text>
			<View style={styles.container}>
							<Text style={{...FONTS.body4,color:COLORS.Black,flex:2,paddingHorizontal:20}}>
							I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great.
							</Text>
			</View>
			<View style={{flex:1,flexDirection:'row',justifyContent:'center',top:10}}>
			<Text style={{...FONTS.body4,color:COLORS.Black,flex:1,paddingHorizontal:20}}>
			I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete. 
				</Text>
				<Image source={image.Logo1} style={{flex:0.,width:90,height:100,right:15}} />
			</View>
			<View style={{ flex:1, flexDirection: 'row',marginStart:20 ,marginTop:20}}>
			<Image source={image.Logo1} style={{flex:0.0,width:90,height:100}} />
			<Text style={{...FONTS.body4,color:COLORS.Black,paddingHorizontal:20,flex:0.99}}>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you. 
				</Text>
			</View>
			<View style={{flex:1}}>
					<Text style={{ ...FONTS.body4, color: COLORS.Black, flex: 1, left: 20, top:10}}>
				I must explain you how all this mistaken idea of denouncing pleasure and praising pain .
					</Text>
			</View>
		</View>
		)
	}
		return (
			<SafeAreaView style={styles.container} >
				<StatusBar backgroundColor={COLORS.Skyblue}/>
				{renderHeader()}
				<View style={{flex:1,paddingHorizontal:15,paddingVertical:SIZES.padding,marginTop:10}}>
					<View style={{width:'100%',height:590,elevation:4,backgroundColor:COLORS.white,borderRadius:8}}>
						{renderImage()}
							{renderText()}
								</View>
						</View>
				</SafeAreaView>
		)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.white,
	}
})
export default AboutScreen

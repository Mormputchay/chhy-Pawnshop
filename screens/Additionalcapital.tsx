import React from 'react'
import { View, Text,StyleSheet,SafeAreaView,StatusBar,TouchableOpacity,Image } from 'react-native'
import COLORS from '../temp/COLORS'
import image from '../contants/image'
import { FONTS } from '../temp/Fonts'
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import routes from '../contants/routes'
const Additionalcapital = () => {
	
	const navigation: any = useNavigation();
	function renderHeader() {
		return (
			<View style={{ flexDirection: 'row',backgroundColor:COLORS.sky,}}>
				<TouchableOpacity style={{alignItems:'flex-start',justifyContent:"center",height:50,elevation:5}} onPress={()=>navigation.goBack()}>
					<Image source={image.letf} style={{width:20,height:20,tintColor:COLORS.white,left:10}} />
				</TouchableOpacity>
				<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
						<Text style={{textAlign:'center',...FONTS.h4,right:12,color:COLORS.white}}>ទុនបន្ថែម</Text>
				</View>
			</View>
		)
	}
	function renderImage() {
		return (
			<View style={styles.container}>
			<Image source={image.nodate} style={{width:200,height:200}} />
			</View>
		)
	}
	function renderButton(){
		return (
			<View style={{alignItems:'flex-end',justifyContent:'center',marginBottom:40,marginRight:20}}>
				<TouchableOpacity style={styles.button} onPress={()=>navigation.navigate(routes.Addinvestors2)}>
					<Ionicons name='add' size={22} color={COLORS.white} />
					</TouchableOpacity>
			</View>
		)
	}
	return (
		<View style={{ justifyContent: 'center', flex: 1 ,backgroundColor:'#fff'}}>
			{renderHeader()}
			<StatusBar backgroundColor={COLORS.sky}/>
			{renderImage()}
			{renderButton()}
		</View>
		)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor:'#fff'
	},
	button: {
		width:50,height:50,borderRadius:30,backgroundColor:COLORS.sky,justifyContent:'center',alignItems:'center'
	}
})
export default Additionalcapital

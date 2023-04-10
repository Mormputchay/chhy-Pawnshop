import React,{useState,useEffect,useRef} from 'react'
import { View ,Text,StatusBar,ImageBackground, Dimensions, SafeAreaView,StyleSheet,Image,TouchableOpacity} from 'react-native'
import COLORS from '../temp/COLORS';
import image from '../contants/image';
const { width, height } = Dimensions.get('window');
import { useNavigation } from '@react-navigation/native';
import { FONTS } from '../temp/Fonts';
import routes from '../contants/routes';
const PINScreen = () => {
	const navigation: any = useNavigation();
	const passcode = ['', '', '', '', '', '']
	let numbers = [
		{ id: 1 },
		{ id: 2 },
		{ id: 3 },
		{ id: 4 },
		{ id: 5 },
		{ id: 6 },
		{ id: 7 },
		{ id: 8 },
		{ id: 9 },
		{ id: 0 },
	]
	const onPressNumber = (num: any) => {
		let tempCode = passcode;
		console.log(passcode)
		for (var i = 0; i < tempCode.length; i++) {
			if (tempCode[i] == '') {
				tempCode[i] = num;
				break;
			} else {
				continue;
			}
		}
	({ passcode : tempCode });
	};
	const onPressCancel = () => {
		let tempCode = passcode;
		for (var i = tempCode.length - 1; i >= 0; i--){
			if (tempCode[i] != '') {
				tempCode[i] = '';
				break;
			} else {
				continue;
			}
		}
		({ passcode: tempCode });
	}
		return (
			<SafeAreaView style={styles.container}>
				<StatusBar backgroundColor={COLORS.Skyblue} />
				<ImageBackground source={image.bg} style={styles.bg} blurRadius={40}/>
				<View style={styles.swipe}>
					<View>
						<Image source={image.Logo} style={{width:150,height:150,marginTop:45 }} />
						<Text style={{ color: COLORS.white,...FONTS.body3}}>សូមបញ្ចូលលេខសម្ងាត់</Text>
						<View style={styles.codeContainer}>
							{
								passcode.map((p: any) => {
									let style = p != '' ? styles.code2 : styles.code1;
									return (
										<View style={style}></View>
									)
								})
						}
						</View>
						</View>
				</View>
				<View style={{ justifyContent: 'center', alignItems:'center'}}>
					<View style={styles.numbersContainer}>
						{
							numbers.map(num => {
								return (
									<TouchableOpacity style={styles.number} key={num.id}
										onPress={() => onPressNumber(num.id)}>
										<Text style={styles.numberText}>{num.id}</Text>
							</TouchableOpacity>
								)
							})
							}
					</View>
				</View>
				<View style={styles.button}>
					<TouchableOpacity onPressIn={()=>navigation.navigate(routes.ForgetPassword)}>
							<Text style={styles.buttonText}>ភ្លេចពាក្យសម្លាត់</Text>
					</TouchableOpacity>
					<TouchableOpacity>
							<Text style={styles.buttonText} onPress={()=>onPressCancel()}>បោះបង់</Text>
					</TouchableOpacity>
				</View>
					</SafeAreaView>
				)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	},
	swipe: {
		height: 173,
		alignItems:'center',
		justifyContent:'center'
	},
	codeContainer: {
		marginTop:12,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent:'space-between'
	},
	code1: {
		width: 20,
		height: 20,
		borderRadius: 13,
		borderWidth: 1,
		borderColor:COLORS.white
	},
	code2: {
		width: 20,
		height: 20,
		borderRadius: 13,
	backgroundColor:COLORS.white
	},
	bg: {
		position: 'absolute',
		top: 0,
		width:width,
		height: height,
	},
	numbersContainer: {
		flexDirection: 'row',
		flexWrap:'wrap',
		marginTop: 58,
		width: 282,
		height: 348,
		alignItems: 'center',
		justifyContent:'center'
	},
	number: {
		width: 75,
		height: 75,
		margin:8,
		borderRadius: 75,
		backgroundColor: COLORS.Skyblue,
		borderColor: COLORS.white,
		borderWidth: 2,
		justifyContent: 'center',
		alignItems:'center'
	},
	numberText:{
		fontSize: 28,
		color:COLORS.white
	},
	button: {
		marginTop: 73,
		marginLeft: 46,
		marginRight: 46,
		flexDirection:'row',
		alignItems: 'center',
		justifyContent:'space-between'
	},
	buttonText:{
		...FONTS.body3,
		color: COLORS.white,
		letterSpacing: -0.39,
		textAlign:'center'
	}
})
export default PINScreen
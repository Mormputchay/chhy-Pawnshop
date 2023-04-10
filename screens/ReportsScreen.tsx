import React, { useState} from 'react'
import { Text, View,ScrollView,StatusBar,TouchableOpacity,Image, StyleSheet, SafeAreaView } from 'react-native'
import COLORS from '../temp/COLORS'
import image from '../contants/image'
import { FONTS } from '../temp/Fonts'
import { useNavigation } from '@react-navigation/native';
import { SIZES } from '../temp/SIZES'
import DateTimePicker from '@react-native-community/datetimepicker';
import { Platform } from 'react-native'
import style from '../ModalPicerImage/style'
import colors from 'native-base/lib/typescript/theme/base/colors'
const ReportsScreen = () => {
	const navigation: any = useNavigation();
	function renderHeader() {

		return (
			<View style={{ flexDirection: 'row',backgroundColor:COLORS.sky,}}>
				<TouchableOpacity style={{alignItems:'flex-start',justifyContent:"center",height:50,elevation:5}} onPress={()=>navigation.goBack()}>
					<Image source={image.letf} style={{width:20,height:20,tintColor:COLORS.white,left:10}} />
				</TouchableOpacity>
				<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
						<Text style={{textAlign:'center',...FONTS.h4,right:12,color:COLORS.white}}>របាយការណ៍</Text>
				</View>
			</View>
		)
	}
	function renderCalender() {
		const [date, setDate] = useState(new Date())
		const [showPicker1, setShowPicker1] = useState(false);
		const [showPicker2, setShowPicker2] = useState(false);
		const [dateOfBirth1, setDateOfBirth1] = useState("select Date")
		const [dateOfBirth2, setDateOfBirth2]= useState("select Date")
		const toggleDatepicker1 = () => {
			setShowPicker1(!showPicker1)
		}
		const onChange1 = ({type}:any,selectedDate:any) => {
			if (type == 'set') {
				const currentDate = selectedDate;
				setDate(currentDate);
				if (Platform.OS === 'android') {
					toggleDatepicker1();
					setDateOfBirth1(currentDate.toDateString());
				}
				if (Platform.OS === 'ios') {
					toggleDatepicker1()
					setDateOfBirth1(currentDate.toDateString());
				}
			} else {
				toggleDatepicker1();
			}
		}

		const toggleDatepicker2 = () => {
			setShowPicker2(!showPicker2)
		}
		const onChange2 = ({type}:any,selectedDate:any) => {
			if (type == 'set') {
				const currentDate = selectedDate;
				setDate(currentDate);
				if (Platform.OS === 'android') {
					toggleDatepicker2();
					setDateOfBirth2(currentDate.toDateString());
				}
				if (Platform.OS === 'ios') {
					toggleDatepicker1()
					setDateOfBirth1(currentDate.toDateString());
				}
			} else {
				toggleDatepicker2();
			}
		}
		return (
				<View style={{flex:1,paddingHorizontal: 15, paddingTop: 5}}>
						<View
					style={{
										flexDirection: 'row',
										width: '100%',
										backgroundColor: COLORS.white,
										height: 80,
										borderRadius: 8,
										marginTop: 5,
										elevation: 2,
										alignItems:'center'
								}}>
					<View style={{ flexDirection: 'row' }}>
						{/*1*/}
						<View style={{ flexDirection: 'row', flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start', borderRightWidth: 0.5, borderRightColor: COLORS.gray }}>
							{
								!showPicker1 && (
									<TouchableOpacity onPress={()=>toggleDatepicker1()}>
									<Image source={image.calender} style={{ height: 25,
																					width: 25, tintColor: COLORS.sky, marginStart: 20 }} />
								</TouchableOpacity>
								)
							}
							{
								showPicker1 && (
									<DateTimePicker
									mode='date'
									display="spinner"
									value={date}
									onChange={onChange1}
							/>
								)
							}
							{
								showPicker1 && Platform.OS === 'ios' && (
							<View style={{flexDirection:'row',justifyContent:'space-around'}}>
										<TouchableOpacity style={{backgroundColor:COLORS.white,height:40,width:40,justifyContent:'center',alignItems:'center'}} onPress={()=>toggleDatepicker1}>
											<Text style={{ color:'#000' ,fontSize:15}}>Cancel</Text>
										</TouchableOpacity>
										<TouchableOpacity style={[styles.button,styles.pickButton,{backgroundColor:COLORS.white}]}>
											<Text style={styles.buttonText}>Confirm</Text>
								</TouchableOpacity>
												</View>
									
								)
							}
							<View style={{flex:1}}>
							<Text style={{ ...FONTS.body5, color: COLORS.gray ,bottom:5,left:10}}> ចាប់ពីថ្ងៃ​</Text>
								<Text style={{ ...FONTS.body4, color: COLORS.Black, bottom: 10, left: 8 }}>{dateOfBirth1}
						
								</Text>
							</View>
						</View>
						{/*2*/}
						<View style={{ flexDirection: 'row', flex: 1, justifyContent: 'flex-end', }}>
						{
								!showPicker2 && (
									<TouchableOpacity onPressIn={()=>toggleDatepicker2()}>
									<Image source={image.calender} style={{ height: 25,
																					width: 25, tintColor: COLORS.sky, marginStart: 20 }} />
								</TouchableOpacity>
								)
							}
							
							{
								showPicker2 && (
									<DateTimePicker
									mode='date'
									display="spinner"
									value={date}
									onChange={onChange2}
							/>
								)
							}
			
							<View style={{justifyContent:'space-around',flex:1}}>
							<Text style={{ ...FONTS.body5, color: COLORS.gray ,bottom:5,left:10}}> ដល់ថ្ងៃ​</Text>
								<Text style={{ ...FONTS.body4, color: COLORS.Black, bottom: 10, left: 8 }}>{dateOfBirth2}</Text>
							</View>
						</View>
								</View>
						</View>
				</View>
		);
	}
	function renderMoney() {
		return (
			<View style={{marginTop:30}}>
								<View style={styles.container}>
		
								<View style={{flexDirection:'row',paddingVertical:SIZES.padding}}>
						<TouchableOpacity style={styles.box1}>
						<View
            style={{
              width: 45,
              height: 48,
              borderRadius: 30,
              backgroundColor: COLORS.sky,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image source={image.moneybag1} style={styles.image} />
						</View>
						<Text style={{ marginTop: 10, ...FONTS.h2, color: COLORS.Skyblue ,fontWeight:'bold'}}>$230.555</Text>
						<Text style={{top:4,...FONTS.body4,color:COLORS.Skyblue}}>ប្រាក់ដើម</Text>
					</TouchableOpacity>
						<TouchableOpacity style={styles.box2}>
						<View
            style={{
              width: 45,
              height: 48,
              borderRadius: 30,
              backgroundColor: COLORS.Yellow,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image source={image.moneybag1} style={styles.image} />
						</View>
						<Text style={{ marginTop: 10, ...FONTS.h2, color: COLORS.Yellow,fontWeight:'bold'}}>$230.555</Text>
						<Text style={{top:4,...FONTS.body4,color:COLORS.Yellow}}>ប្រាក់បង់យឺត</Text>
						</TouchableOpacity>
					</View>
					<View style={{flexDirection:'row',paddingVertical:SIZES.padding}}>
						<TouchableOpacity style={styles.box3}>
						<View
            style={{
              width: 45,
              height: 48,
              borderRadius: 30,
              backgroundColor: COLORS.orange,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image source={image.moneybag1} style={styles.image} />
						</View>
						<Text style={{ marginTop: 10, ...FONTS.h2, color: COLORS.orange ,fontWeight:'bold'}}>$230.555</Text>
						<Text style={{top:4,...FONTS.body4,color:COLORS.orange}}>ប្រាក់អត់ដែលសង</Text>
					</TouchableOpacity>
						<TouchableOpacity style={styles.box4}>
						<View
            style={{
              width: 45,
              height: 48,
              borderRadius: 30,
              backgroundColor: COLORS.green,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image source={image.moneybag1} style={styles.image} />
						</View>
						<Text style={{ marginTop: 10, ...FONTS.h2, color: COLORS.green ,fontWeight:'bold'}}>$230.555</Text>
						<Text style={{top:4,...FONTS.body4,color:COLORS.green}}>ការប្រាក់សងសុរប</Text>
						</TouchableOpacity>
					</View>
		
					<TouchableOpacity style={styles.box5}>
					<View
            style={{
              width: 45,
              height: 48,
              borderRadius: 30,
              backgroundColor: COLORS.purple,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image source={image.moneybag1} style={styles.image} />
						</View>
						<Text style={{ marginTop: 10, ...FONTS.h2, color: COLORS.purple ,fontWeight:'bold'}}>$230.555</Text>
						<Text style={{top:4,...FONTS.body4,color:COLORS.purple}}>ប្រាក់ចំណាយសុរប</Text>
					</TouchableOpacity>
				</View>
			</View>
		)
	}
		return (
			<SafeAreaView>
					<StatusBar backgroundColor={COLORS.sky}/>
				{renderHeader()}
				{renderCalender()}
				{renderMoney()}
			</SafeAreaView>
		)
}
const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '85%',
		paddingTop: SIZES.padding,
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
	},
	box1: {
		justifyContent: 'flex-start',
		width: 165,
		height: 140,
		backgroundColor: COLORS.lightblue,
		borderRadius: 5,
		paddingTop:SIZES.padding,
		paddingLeft:10
	},
	box2: {
		width: 165,
		height: 140,
		backgroundColor: COLORS.lightYellow,
		borderRadius: 5,
		paddingTop:SIZES.padding,
		paddingLeft: 10,
		marginStart:15
	},
	box3: {
		justifyContent: 'flex-start',
		width: 165,
		height: 140,
		backgroundColor: COLORS.lightOrange,
		borderRadius: 10,
		paddingTop:SIZES.padding,
		paddingLeft:10
	},
	box4: {		
		width: 165,
		height: 140,
		marginStart:15,
		backgroundColor: COLORS.lightGreen,
		borderRadius: 10,
		paddingTop:SIZES.padding,
		paddingLeft:10
	},
	box5: {
		backgroundColor: COLORS.lightpurple,
		width: '94%',
		height: 140,
		borderRadius: 10,
		justifyContent: 'center',
		alignItems:'center'
	},
	image: {
		width: 30,
		height: 42,
		tintColor: COLORS.white,
		top: 4,
	},
	button: {
		paddingHorizontal: 20,
		flex: 1,
		justifyContent: 'center',
		alignItems:'center'
	},
	pickButton: {
		paddingHorizontal: 20,
		flex: 1,
		justifyContent: 'center',
		alignItems:'center'
	},
	buttonText: {
		fontSize: 14,
		fontWeight: '500',
		color:'#fff'
	}
})
export default ReportsScreen

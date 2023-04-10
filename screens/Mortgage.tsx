import React, { useState} from 'react'
import { Text, View,ScrollView,StatusBar,TouchableOpacity,Image, StyleSheet, SafeAreaView } from 'react-native'
import COLORS from '../temp/COLORS'
import image from '../contants/image'
import { FONTS } from '../temp/Fonts'
import { useNavigation } from '@react-navigation/native';
import { SIZES } from '../temp/SIZES'
import DateTimePicker from '@react-native-community/datetimepicker';
import { Platform } from 'react-native'

const Mortgage = () => {
	const navigation: any = useNavigation();
	function renderHeader() {
		return (
			<View style={{ flexDirection: 'row',backgroundColor:COLORS.sky}}>
				<TouchableOpacity style={{alignItems:'flex-start',justifyContent:"center",height:50,elevation:5}} onPress={()=>navigation.goBack()}>
					<Image source={image.letf} style={{width:20,height:20,tintColor:COLORS.white,left:10}} />
				</TouchableOpacity>
				<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
						<Text style={{textAlign:'center',...FONTS.h4,right:12,color:COLORS.white}}>ទ្រព្យបញ្ចាំ</Text>
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
										justifyContent:'space-between',
										alignItems: 'center',
						
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
							<View style={{justifyContent:'space-around',flex:1}}>
							<Text style={{ ...FONTS.body5, color: COLORS.gray ,bottom:5,left:10}}> ចាប់ពីថ្ងៃ​</Text>
							<Text style={{...FONTS.body4,color:COLORS.Black,bottom:10,left:10}}>{dateOfBirth1}</Text>
							</View>
						</View>
						{/*2*/}
						<View style={{ flexDirection: 'row', flex: 1, alignItems: 'flex-start', justifyContent: 'flex-end' }}>
						{
								!showPicker2 && (
									<TouchableOpacity onPress={()=>toggleDatepicker2()}>
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
								<Text style={{ ...FONTS.body4, color: COLORS.Black, bottom: 10, left: 10 }}>{dateOfBirth2}</Text>
							</View>
						</View>
								</View>
						</View>
				</View>
		);
	}
	function renderMortgage() {
		return (
			<View style={{justifyContent:'center'}}>
				<View style={styles.container}>
					<View style={{paddingHorizontal: SIZES.padding,
								paddingTop: SIZES.padding,
								flexDirection: 'row',
								justifyContent:'space-around'}}>
													
					<TouchableOpacity style={styles.box1}>
					<View
            style={{
              width: 45,
              height: 48,
              borderRadius: 10,
              backgroundColor: COLORS.lightred,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image source={image.house} style={styles.image} />
						</View>
						<Text style={{ marginTop: 10, ...FONTS.body3, color: COLORS.red ,fontWeight:'bold'}}>អចលនទ្រព្យ</Text>
						<Text style={{top:4,...FONTS.h4,color:COLORS.red}}>58</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.box2}>
					<View
            style={{
              width: 45,
              height: 48,
              borderRadius: 10,
              backgroundColor: COLORS.lightGreen,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image source={image.carwash} style={styles.image} />
						</View>
						<Text style={{ marginTop: 10, ...FONTS.body3, color: COLORS.green,fontWeight:'bold'}}>យានជំនិះ</Text>
						<Text style={{top:4,...FONTS.h4,color:COLORS.green}}>16</Text>
					</TouchableOpacity>
					</View>
					<View style={{flexDirection:'row',marginVertical:10}}>
						<TouchableOpacity style={styles.box3}>
						<View
            style={{
              width: 45,
              height: 48,
              borderRadius: 10,
              backgroundColor: COLORS.lightOrange,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image source={image.diamond} style={styles.image} />
						</View>
						<Text style={{ marginTop: 10, ...FONTS.body3, color: COLORS.orange }}>គ្រឿងអលង្ការ</Text>
						<Text style={{top:4,...FONTS.h4,color:COLORS.orange}}>41</Text>
					</TouchableOpacity>
						<TouchableOpacity style={styles.box4}>
						<View
            style={{
              width: 45,
              height: 48,
              borderRadius: 10,
              backgroundColor: COLORS.lightpurple,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image source={image.apps} style={styles.image} />
						</View>
						<Text style={{ marginTop: 10, ...FONTS.body3, color: COLORS.purple ,}}>ទ្រព្យផ្សេងៗ</Text>
						<Text style={{top:4,...FONTS.h4,color:COLORS.purple,fontWeight:'bold'}}>25</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		)
	}
		return (
			<SafeAreaView>
			<StatusBar backgroundColor={COLORS.sky}/>
		{renderHeader()}
				{renderCalender()}
				{renderMortgage()}
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
		width: 160,
		height: 150,
		backgroundColor: COLORS.white,
		borderRadius: 5,
		justifyContent: 'center',
		alignItems:'center',
		elevation: 3,
	
	},
	box2: {
		
		width: 160,
		height: 150,
		backgroundColor: COLORS.white,
		borderRadius: 5,
		justifyContent: 'center',
		alignItems:'center',
		elevation: 3,
		marginStart:15
	},
	box3: {
		width: 160,
		height: 150,
		backgroundColor: COLORS.white,
		borderRadius: 5,
		justifyContent: 'center',
		alignItems:'center',
		elevation:3
	},
	box4: {
		width: 160,
		height: 150,
		backgroundColor: COLORS.white,
		borderRadius: 5,
		justifyContent: 'center',
		alignItems:'center',
		elevation: 3,
		marginStart:15
	},
	image: {
		width: 30,
		height: 30,
},
})
export default Mortgage

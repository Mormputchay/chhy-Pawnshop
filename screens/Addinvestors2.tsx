import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
  ScrollView,
  TextInput,
} from 'react-native';
import image from '../contants/image';
import COLORS from '../temp/COLORS';
import {SIZES} from '../temp/SIZES';
import {FONTS} from '../temp/Fonts';
import {useNavigation} from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Platform } from 'react-native'
import Button2 from '../components/Button2';
import Feather from 'react-native-vector-icons/Feather'
import routes from '../contants/routes';

const Addinvestors2 = () => {
	const navigation: any = useNavigation();
	function renderHander() {
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
											បន្ថែមទុន
									</Text>
							</View>
					</View>
			);
	}
	function renderTextInput() {
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
		const [card, setCard] = useState('null');
    return (
      <View style={{flex: 1, paddingHorizontal: SIZES.padding}}>
        <View
          style={{
            paddingVertical: SIZES.padding,
            flex: 1,
            paddingHorizontal: SIZES.padding,
          }}>
          {/*1*/}
          <Text style={{...FONTS.body3, color: COLORS.Black}}>
										ឈ្មោះម្ចាស់ដើមទុន
          </Text>
          <View
            style={styles.input}>
            <TextInput
              placeholder="បញ្ចូលឈ្មោះម្ចាស់ដើមទុន"
              placeholderTextColor={COLORS.gray}
              style={{...FONTS.body3, color: COLORS.Black}}
								/>
							</View>
						
							{/*2*/}
							<View style={{paddingTop:SIZES.padding,flex:1}}>
								<Text style={{...FONTS.body3,color:COLORS.Black}}>ចំនួនទឹកប្រាក់</Text>
								<View
            style={styles.input}>
            <TextInput
              placeholder="បញ្ចូលចំនួនទឹកប្រាក់"
              placeholderTextColor={COLORS.gray}
              style={{...FONTS.body3, color: COLORS.Black}}
								/>
							</View>
							</View>
							{/*3*/}
							<View style={{paddingTop:SIZES.padding,flex:1}}>
								<Text style={{...FONTS.body3,color:COLORS.Black}}>រយៈពេល</Text>
								<View
            style={styles.input}>
            <TextInput
              placeholder="បញ្ចូលរយៈពេល"
              placeholderTextColor={COLORS.gray}
              style={{...FONTS.body3, color: COLORS.Black}}
								/>
							</View>
							</View>
							{/*4*/}
							<View style={{paddingTop:SIZES.padding,flex:1}}>
								<Text style={{...FONTS.body3,color:COLORS.Black}}>ការប្រាក់(%)</Text>
								<View
            style={styles.input}>
            <TextInput
              placeholder="បញ្ចូលចំនួនទឹកប្រាក់"
              placeholderTextColor={COLORS.gray}
              style={{...FONTS.body3, color: COLORS.Black}}
								/>
							</View>
							</View>
	
							{/*9*/}
							<View style={{ flexDirection: 'row', paddingTop: SIZES.padding,justifyContent:'space-between' }}>
								<View>
								<Text style={{ ...FONTS.body3, color: COLORS.Black }}>ថ្ងែខែឆ្នាំដាក់ប្រាក់</Text>
									<View style={styles.combobox}>
									<Text style={{ ...FONTS.body4, color: COLORS.gray }}>{dateOfBirth1}</Text>
										{
								!showPicker1 && (
												<TouchableOpacity style={{ alignItems: 'flex-end', flex: 1, right: 14 }} onPress={()=>toggleDatepicker1()}>
									<Image source={image.calender} style={{width:20,height:20,tintColor:COLORS.Skyblue,}} />
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
									
									</View>
								</View>
												
								<View style={{marginStart:10}}>
								<Text style={{ ...FONTS.body3, color: COLORS.Black }}>ថ្ងែខែឆ្នាំដកប្រាក់</Text>
									<View style={styles.combobox}>
									<Text style={{ ...FONTS.body4, color: COLORS.gray }}>{dateOfBirth2}</Text>
										{
								!showPicker2 && (
									<TouchableOpacity style={{ alignItems: 'flex-end', flex: 1, right: 14 }} onPress={()=>toggleDatepicker2()}>
									<Image source={image.calender} style={{width:20,height:20,tintColor:COLORS.Skyblue,}} />
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
									</View>
								</View>
							</View>
										{/*10*/}
							<View style={{paddingTop:SIZES.padding,flex:1}}>
								<Text style={{...FONTS.body3,color:COLORS.Black}}>លេខទូរស័ព្ទ</Text>
								<View
            style={styles.input}>
            <TextInput
										placeholder="បញ្ចូលលេខទូរស័ព្ទ"
										keyboardType ="numeric"
          placeholderTextColor={COLORS.gray}
          style={{...FONTS.body3, color: COLORS.Black}}
								/>
							</View>
							</View>
							{/*11*/}
							<View style={{ paddingTop: SIZES.padding, flex: 1 }}>
								<Text style={{ ...FONTS.body3, color: COLORS.Black }}>បញ្ចូលរូបភាពឯកសារយោង</Text>
								<View style={styles.File}>
									<TouchableOpacity style={styles.bgcamera}>
										<Feather name='camera' size={20} color={COLORS.Skyblue} />
										<Text style={{fontSize:10,color:COLORS.Skyblue}}>រូបភាព</Text>
									</TouchableOpacity>
								</View>
							</View>
							{/*12*/}
							<View style={{ paddingTop: SIZES.padding, flex: 1 }}>
								<Text style={{ ...FONTS.body3, color: COLORS.Black }}>បញ្ចូលរូបអត្តសញ្ញាណប័ណ្ណ</Text>
								<View style={{ width: '100%', height: 225, backgroundColor: COLORS.white, borderRadius: 8, borderWidth: 1, marginTop: 15, elevation: 2, borderColor: COLORS.white,}}>
									<View style={{justifyContent:'center',flex:1,alignItems:'center',marginTop:20}}>
											<Image source={image.cardID} style={{ width: 90, height: 67, tintColor: COLORS.Skyblue }} />
									</View>
									<View style={{paddingHorizontal:SIZES.padding2,flex:1,marginBottom:20}}>
										<TouchableOpacity style={styles.buttonUploadFile}>
											<Image source={image.uploand} style={{width:15,height:15,tintColor:COLORS.Skyblue,right:10}} />
										<Text style={{...FONTS.body3,color:COLORS.Skyblue}}>បញ្ចូលរូបអត្តសញ្ញាណប័ណ្ណ</Text>
									</TouchableOpacity>
									</View>
								</View>
							</View>
						</View>
      </View>
    );
	}
	function renderButtton() {
		return (
			<View style={{paddingTop:10,paddingHorizontal:16,flex:1,paddingBottom:10}}>
				<Button2 
										Press={()=>navigation.navigate(routes.Investors3)}
          bgColor={COLORS.sky}
          textcolor={COLORS.white}
          btnLabel="បន្ថែម"
        />
			</View>
		)
	}
		return (
			<ScrollView showsVerticalScrollIndicator={false}>
			<StatusBar backgroundColor={COLORS.Skyblue} />
			{renderHander()}
				{renderTextInput()}
				{renderButtton()}
	</ScrollView>
		)
}
const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: COLORS.white,
    justifyContent: 'space-around',
    flex: 1,
  },
  dropdown: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: COLORS.white,
    height: 48,
    width: 168,
    backgroundColor: COLORS.white,
    borderRadius: 5,
    paddingHorizontal: 8,
    elevation: 1,
  },
  placeholderStyle: {
    color: COLORS.Black,
  },
  input: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
    width: '100%',
    height: 45,
    backgroundColor: COLORS.white,
    marginTop: 8,
    justifyContent: 'center',
    elevation: 1,
    borderRadius: 5,
	},
	combobox: {
		width: 155,
		height: 50,
		backgroundColor: COLORS.white,
		borderWidth: 1,
		marginTop: 10,
		borderRadius: 5,
		elevation: 1,
		borderColor: COLORS.white,
		flexDirection: 'row',
		alignItems: 'center'
	},
	File: {
		width: '100%',
		height: 90,
		borderRadius: 5,
		backgroundColor: COLORS.white,
		justifyContent: 'center',
		flex: 1,
		elevation: 1,
		marginTop: 10,
		paddingHorizontal: SIZES.padding2
	},
	bgcamera: {
		width: 50,
		height: 50,
		borderRadius: 5,
		borderWidth: 0.6,
		backgroundColor: COLORS.white,
		borderStyle: 'dashed',
		justifyContent: 'center',
		borderColor: COLORS.Skyblue,
		alignItems: 'center'
	},
	buttonUploadFile: {
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		height: 45,
		borderWidth: 1,
		borderColor: COLORS.Skyblue,
		borderStyle: 'dashed',
		flexDirection: 'row',
		borderRadius: 8,
		marginTop: 50
	}
});
export default Addinvestors2
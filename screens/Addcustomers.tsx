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
import Age from '../contants/Age';
import Gender from '../contants/Gender';
import {Dropdown} from 'react-native-element-dropdown';
import Button2 from '../components/Button2';
import Feather from 'react-native-vector-icons/Feather'
import routes from '../contants/routes';
import MoneyType from '../contants/MoneyType';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Platform } from 'react-native'
const Addcustomers = () => {
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
              ...FONTS.h3,
              right: 12,
              color: COLORS.white,
            }}>
            បន្ថែមអតិថិជន
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
            ឈ្មោះអ្នកបញ្ចាំ
          </Text>
          <View
            style={{
              flex: 1,
              paddingHorizontal: SIZES.padding,
              width: '100%',
              height: 45,
              backgroundColor: COLORS.white,
														marginTop:8,
              justifyContent: 'center',
              elevation: 2,
              borderRadius: 5,
            }}>
            <TextInput
              placeholder="បញ្ចូលឈ្មោះអ្នកបញ្ចាំ"
              placeholderTextColor={COLORS.gray}
              style={{...FONTS.body3, color: COLORS.Black}}
								/>
							</View>
							{/*2*/}
							<View style={{ flexDirection: 'row', justifyContent:'space-between'}}>
								<View style={{paddingTop:SIZES.padding2}}>
								<Text style={{ ...FONTS.body3, color: COLORS.Black }}>អាយុ</Text>
									<Dropdown
									placeholder='ជ្រើសរើសអាយុ'
									style={styles.dropdown}
									maxHeight={100}
									value={card}
									data={Age}
									labelField="label"
									valueField="value"
									onChange={item => {
											setCard(item.value);
									}}
								/>
								</View>
								<View style={{paddingTop:SIZES.padding2,marginStart:12}}>
								<Text style={{ ...FONTS.body3, color: COLORS.Black }}>ភេទ</Text>
									<Dropdown
										placeholder='ជ្រើសរើសភេទ'
									style={styles.dropdown}
									maxHeight={200}
									value={card}
									data={Gender}
									labelField="label"
									valueField="value"
									onChange={item => {
											setCard(item.value);
									}}
								/>
								</View>
							</View>
							{/*3*/}
							<View style={{paddingTop:SIZES.padding,flex:1}}>
								<Text style={{...FONTS.body3,color:COLORS.Black}}>លេខអត្ដសញ្ញាណប័ណ្ណ</Text>
								<View
            style={{
              flex: 1,
              paddingHorizontal: SIZES.padding,
              width: '100%',
              height: 45,
              backgroundColor: COLORS.white,
														marginTop:8,
              justifyContent: 'center',
              elevation: 2,
              borderRadius: 5,
            }}>
            <TextInput
              placeholder="បញ្ចូលលេខអត្ដសញ្ញាណប័ណ្ណ"
              placeholderTextColor={COLORS.gray}
              style={{...FONTS.body3, color: COLORS.Black}}
								/>
							</View>
							</View>
							{/*4*/}
							<View style={{paddingTop:SIZES.padding,flex:1}}>
								<Text style={{...FONTS.body3,color:COLORS.Black}}>ប្រភេទបញ្ចាំ</Text>
								<View
            style={{
              flex: 1,
              paddingHorizontal: SIZES.padding,
              width: '100%',
              height: 45,
              backgroundColor: COLORS.white,
														marginTop:8,
              justifyContent: 'center',
              elevation: 2,
              borderRadius: 5,
            }}>
            <TextInput
              placeholder="អចលនទ្រព្យ"
              placeholderTextColor={COLORS.gray}
              style={{...FONTS.body3, color: COLORS.Black}}
								/>
							</View>
							</View>
							{/*5*/}
							<View style={{paddingTop:SIZES.padding,flex:1}}>
								<Text style={{...FONTS.body3,color:COLORS.Black}}>ចំនួនទឹកប្រាក់បញ្ចាំ</Text>
								<View
            style={{
              flex: 1,
              paddingHorizontal: SIZES.padding,
              width: '100%',
              height: 45,
              backgroundColor: COLORS.white,
														marginTop:8,
              justifyContent: 'center',
              elevation: 2,
              borderRadius: 5,
            }}>
            <TextInput
              placeholder="បញ្ចូលចំនួនទឹកការប្រាក់ (%)"
              placeholderTextColor={COLORS.gray}
              style={{...FONTS.body3, color: COLORS.Black}}
								/>
							</View>
							</View>
							{/*6*/}
							<View style={{paddingTop:SIZES.padding,flex:1}}>
								<Text style={{...FONTS.body3,color:COLORS.Black}}>ការប្រាក់ (%)</Text>
								<View
            style={{
              flex: 1,
              paddingHorizontal: SIZES.padding,
              width: '100%',
              height: 45,
              backgroundColor: COLORS.white,
														marginTop:8,
              justifyContent: 'center',
              elevation: 2,
              borderRadius: 5,
            }}>
            <TextInput
              placeholder="បញ្ចូលចំនួនការប្រាក់ (%)"
              placeholderTextColor={COLORS.gray}
              style={{...FONTS.body3, color: COLORS.Black}}
								/>
							</View>
							</View>

							{/*7*/}
							<View style={{ flexDirection: 'row', justifyContent:'space-between'}}>
								<View style={{paddingTop:SIZES.padding2}}>
								<Text style={{ ...FONTS.body3, color: COLORS.Black }}>រយៈពេលវែង</Text>
									<View style={{width:155,height:48,backgroundColor:COLORS.white,borderRadius:5,borderWidth:1,borderColor:COLORS.white,elevation:2,marginTop:10,}}>
										<TextInput placeholder='បញ្ចូលរយៈពេលសង'/>
									</View>
								</View>
								<View style={{paddingTop:SIZES.padding2,marginStart:12}}>
								<Text style={{ ...FONTS.body3, color: COLORS.Black }}>ប្រភេទការប្រាក់</Text>
									<Dropdown
										placeholder='ប្រភេទការប្រាក់'
									style={styles.dropdown}
									maxHeight={200}
									value={card}
									data={MoneyType}
									labelField="label"
									valueField="value"
									onChange={item => {
											setCard(item.value);
									}}
								/>
								</View>
							</View>
							{/*8*/}
							<View style={{paddingTop:SIZES.padding,flex:1}}>
								<Text style={{...FONTS.body3,color:COLORS.Black}}>ប្រាក់អោយជាក់ស្ដែង</Text>
								<View
            style={{
              flex: 1,
              paddingHorizontal: SIZES.padding,
              width: '100%',
              height: 45,
              backgroundColor: COLORS.white,
														marginTop:8,
              justifyContent: 'center',
              elevation: 2,
              borderRadius: 5,
            }}>
            <TextInput
              placeholder="បញ្ចូលប្រាក់អោយជាក់ស្ដែង"
              placeholderTextColor={COLORS.gray}
              style={{...FONTS.body3, color: COLORS.Black}}
								/>
							</View>
							</View>
							{/*9*/}
							<View style={{ flexDirection: 'row', paddingTop: SIZES.padding ,justifyContent:'space-between'}}>
								<View>
								<Text style={{ ...FONTS.body3, color: COLORS.Black }}>ថ្ងែខែឆ្នាំបញ្ចាំ</Text>
									<View style={{ width: 155, height: 50, backgroundColor: COLORS.white, borderWidth: 1, marginTop: 10, borderRadius: 8, elevation: 2, borderColor: COLORS.white, flexDirection: 'row', alignItems: 'center' }}>
										
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
								<Text style={{ ...FONTS.body3, color: COLORS.Black }}>ថ្ងែខែឆ្នាំផុតកំណត់</Text>
									<View style={{ width: 155, height: 50, backgroundColor: COLORS.white, borderWidth: 1,marginTop:10,borderRadius:8,elevation:2,borderColor:COLORS.white,flexDirection:'row',alignItems:'center'}}>
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
            style={{
              flex: 1,
              paddingHorizontal: SIZES.padding,
              width: '100%',
              height: 45,
              backgroundColor: COLORS.white,
														marginTop:8,
              justifyContent: 'center',
              elevation: 2,
              borderRadius: 5,
            }}>
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
								<View style={{width:'100%',height:90,borderRadius:5,backgroundColor:COLORS.white,justifyContent:'center',flex:1,elevation:2,marginTop:10,paddingHorizontal:SIZES.padding2}}>
									<TouchableOpacity style={{width:50,height:50,borderRadius:8,borderWidth:1,backgroundColor:COLORS.white,borderStyle:'dashed',justifyContent:'center',borderColor:COLORS.Skyblue,alignItems:'center'}}>
										<Feather name='camera' size={20} color={COLORS.Skyblue} />
										<Text style={{fontSize:10,color:COLORS.Skyblue}}>រូបភាព</Text>
									</TouchableOpacity>
								</View>
								<View style={{flex:1,justifyContent:'flex-end',alignItems:'flex-end'}}>
									<Text>0/6</Text>
								</View>
							</View>
							{/*12*/}
							<View style={{ paddingTop: SIZES.padding, flex: 1 }}>
								<Text style={{ ...FONTS.body3, color: COLORS.Black }}>សំគាល់</Text>
								<View style={{ width: '100%', height: 90, borderRadius: 5, backgroundColor: COLORS.white, justifyContent: 'center', flex: 1, elevation: 2, marginTop: 10 }}>
									<View style={{flexDirection:'row', left:2,alignItems: 'center'}}>
										<Image source={image.Star} style={{ width: 15, height: 15,left:5}} />
										<Text style={{...FONTS.body5,color:COLORS.gray,left:10}}>ករណីបង្កាន់ដៃ ផុតកំណត់ ឬរហែកមិនអាចដកវត្ថុបញ្ចាំបានទេ</Text>
									</View>
									<View style={{flexDirection:'row', left:2,alignItems:'center'}}>
										<Image source={image.Star} style={{ width: 15, height: 15,left:5 }} />
										<Text style={{...FONTS.body5,color:COLORS.gray,left:10}}>ម្ចាស់សម្ភារៈត្រូវទទួលខុសត្រូវសម្ភារៈរបស់ខ្លួនចំពោះមុខច្បាប់</Text>
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
		  <Button2 Press={()=>navigation.navigate(routes.Buildmoney)}
          bgColor={COLORS.sky}
          textcolor={COLORS.white}
          btnLabel="ស្នើសុំ"
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
  );
};
const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: COLORS.white,
    justifyContent: 'space-around',
    flex: 1,
	},
	dropdown: {
		marginTop:10,
		borderWidth: 1,
		borderColor: COLORS.white,
		height: 48,
		width: 155,
		backgroundColor: COLORS.white,
		borderRadius: 5,
		paddingHorizontal: 8,
		elevation: 2,

},
placeholderStyle: {
		color:COLORS.Black
},
});

export default Addcustomers;

import React from 'react'
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, StyleSheet ,Image,FlatList,StatusBar} from 'react-native'
import image from '../contants/image'
import { FONTS } from '../temp/Fonts'
import COLORS from '../temp/COLORS'
import {useNavigation} from '@react-navigation/native';
import { SIZES } from '../temp/SIZES'
import DateFile from '../contants/DataFile'
import FileCard from '../components/FileCard'
const CustomerInformation = () => {
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
						<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
								<Text
										style={{
												textAlign: 'center',
												...FONTS.h4,
												right: 12,
												color: COLORS.white,
										}}>
									ព័ត៍មានអតិថិជន
								</Text>
				</View>
				<View style={{justifyContent:'center',right:10}}>
					<View style={{ justifyContent: 'center', width: 30, height: 30, backgroundColor: COLORS.white, alignItems: 'center', borderRadius: 8}}>
					<Image source={image.print} style={{width:18,height:18,tintColor:COLORS.Skyblue}} />
				</View>
			</View>
				</View>
		);
	}
	function renderImage() {
		return (
			<View style={{paddingHorizontal:SIZES.padding,flex:1,paddingTop:SIZES.padding}}>
				<Image source={image.image} style={styles.imagecontainer} />
			</View>
		)
	}
	function renderInformation() {
		return (
			<View style={{paddingHorizontal:SIZES.padding,flex:1,paddingTop:SIZES.padding}}>
				<View style={{ width: '100%', height: 486, backgroundColor: COLORS.white, borderRadius: 5, elevation: 2,paddingTop:18 }}>
						{/*1*/}
						<View style={styles.textInfo}>
					<Text style={styles.text1}>ឈ្មោះអ្នកបញ្ចាំ</Text>
					<Text  style={styles.text2}>លឹមពៅ</Text>
					</View>
					{/*2*/}
					<View style={styles.textInfo1}>
					<Text style={styles.text1}>អាយុ:</Text>
					<Text  style={styles.text2}>22ឆ្នាំ</Text>
					</View>
					{/*3*/}
					<View style={styles.textInfo1}>
					<Text style={styles.text1}>ភេទ:</Text>
					<Text  style={styles.text2}>ប្រុស</Text>
					</View>
					{/*4*/}
					<View style={styles.textInfo1}>
					<Text style={styles.text1}>លេខអត្ដសញ្ញាណប័ណ្ណ:</Text>
					<Text  style={styles.text2}>012345678912</Text>
					</View>
							{/*5*/}
							<View style={styles.textInfo1}>
					<Text style={styles.text1}>ប្រភេទបញ្ចាំ:</Text>
					<Text  style={styles.text2}>ផ្ទះ</Text>
					</View>
							{/*6*/}
							<View style={styles.textInfo1}>
					<Text style={styles.text1}>ចំនួនទឹកប្រាក់បញ្ចាំ:</Text>
					<Text  style={styles.text2}>20,000$</Text>
					</View>
					
							{/*7*/}
							<View style={styles.textInfo1}>
					<Text style={styles.text1}>ការប្រាក់ (%):</Text>
					<Text  style={styles.text2}>1%</Text>
					</View>
						{/*8*/}
						<View style={styles.textInfo1}>
					<Text style={styles.text1}>រយៈពេលសង:</Text>
					<Text  style={styles.text2}>6ខែ</Text>
					</View>
						{/*9*/}
						<View style={styles.textInfo1}>
					<Text style={styles.text1}>ប្រភេទការប្រាក់:</Text>
					<Text  style={styles.text2}>បង់ថេរ</Text>
					</View>
							{/*10*/}
							<View style={styles.textInfo1}>
					<Text style={styles.text1}>ប្រាក់អោយជាក់ស្ដែង:</Text>
					<Text  style={styles.text2}>19,800$</Text>
					</View>
					{/*11*/}
					<View style={styles.textInfo1}>
					<Text style={styles.text1}>ថ្ងែខែឆ្នាំបញ្ចាំ:</Text>
					<Text  style={styles.text2}>28 / 02 / 2023</Text>
					</View>
						{/*12*/}
						<View style={styles.textInfo1}>
					<Text style={styles.text1}>ថ្ងែខែឆ្នាំផុតកំណត់:</Text>
					<Text  style={styles.text2}>28 / 08 / 2023</Text>
					</View>
						{/*13*/}
						<View style={styles.textInfo1}>
					<Text style={styles.text1}>លេខទូរស័ព្ទ:</Text>
					<Text  style={styles.text2}>015 916 299</Text>
					</View>
				</View>
			</View>
		)
	}
	function renderFile1() {
		return (
			<View style={{alignItems:'center',paddingTop:SIZES.padding2,paddingVertical:SIZES.padding,justifyContent:'space-around'}}>
				<Text style={{ ...FONTS.body2, color: '#00007E' }}>រូបភាពឯកសារយោង</Text>
				<FlatList
          data={DateFile}
          pagingEnabled
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <FileCard image={item} />}
        />
			</View>
		)
	}

		return (
			<ScrollView showsVerticalScrollIndicator={false}>
				<StatusBar backgroundColor={COLORS.Skyblue} />
				{renderHeader()}
				{renderImage()}
				{renderInformation()}
				{renderFile1()}

		</ScrollView>
		)
}
const styles = StyleSheet.create({
	imagecontainer: {
		width: '100%',
		height: 200,
		borderRadius: 10,
	},
	textInfo: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: SIZES.padding,
		paddingVertical: 6,
		
	},
	textInfo1: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: SIZES.padding,
		paddingVertical: 6,
		borderStyle: 'dashed',
		borderTopWidth: 0.6,
		borderTopColor: COLORS.Skyblue,
	},
	text1: {
		...FONTS.body3,
		color: COLORS.Black,
		left:5
	},
	text2: {
		...FONTS.body3,
		color: COLORS.Black,
		right: 5
	}
})
export default CustomerInformation

import React from 'react'
import { Text, View,Image,ScrollView,StatusBar,StyleSheet,TouchableOpacity,FlatList } from 'react-native'
import COLORS from '../temp/COLORS'
import image from '../contants/image'
import { FONTS } from '../temp/Fonts'
import {useNavigation} from '@react-navigation/native';
import { SIZES } from '../temp/SIZES'
import DateFile from '../contants/DataFile'
import FileCard from '../components/FileCard'
const InvestorInformation = () => {
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
						ព័ត៍មានអ្នកបោះទុន
					</Text>
	</View>
	<View style={{justifyContent:'center',right:10}}>
		<View style={{ justifyContent: 'center', width: 30, height: 30, backgroundColor: COLORS.white, alignItems: 'center', borderRadius: 8}}>
		<Image source={image.print} style={{width:18,height:18,tintColor:COLORS.Skyblue}} />
	</View>
</View>
	</View>
			)
	}
	function renderImage() {
		return (
			<View style={{paddingHorizontal:SIZES.padding,flex:1,paddingTop:SIZES.padding,alignItems:'center'}}>
				<Image source={image.Idcard1} style={{ width: 300, height: 190 }} />
			</View>
		)
	}
	function renderInformation() {
		return (
			<View style={{ paddingHorizontal: SIZES.padding, flex: 1, paddingTop: SIZES.padding }}>
				<Text style={{...FONTS.body3,color:'#00007E',bottom:5}}>ពត៌មានម្ចាស់ដើមទុន</Text>
			<View style={{ width: '100%', height: 270, backgroundColor: COLORS.white, borderRadius: 5, elevation: 2,paddingTop:20,top:10 }}>
					{/*1*/}
					<View style={styles.textInfo}>
				<Text style={styles.text1}>ឈ្មោះម្ចាស់ដើមទុន:</Text>
				<Text  style={styles.text2}>សុខ​ សំបូរ</Text>
				</View>
				{/*2*/}
				<View style={styles.textInfo1}>
				<Text style={styles.text1}>ចំនួនទឹកប្រាក់:</Text>
				<Text  style={styles.text2}>100,000$</Text>
				</View>
				{/*3*/}
				<View style={styles.textInfo1}>
				<Text style={styles.text1}>រយៈពេល:</Text>
				<Text  style={styles.text2}>5ឆ្នាំ</Text>
				</View>
				{/*4*/}
				<View style={styles.textInfo1}>
				<Text style={styles.text1}>ការប្រាក់(%):</Text>
				<Text  style={styles.text2}>5%</Text>
				</View>
						{/*5*/}
						<View style={styles.textInfo1}>
				<Text style={styles.text1}>ថ្ងែខែឆ្នាំដាក់ប្រាក់:</Text>
				<Text  style={styles.text2}>28 / 02 / 2023</Text>
				</View>
						{/*6*/}
						<View style={styles.textInfo1}>
				<Text style={styles.text1}>ថ្ងែខែឆ្នាំដកប្រាក់:</Text>
				<Text  style={styles.text2}>28 / 02 / 2028</Text>
				</View>
						{/*7*/}
						<View style={styles.textInfo1}>
				<Text style={styles.text1}>លេខទូរស័ព្ទ:</Text>
				<Text  style={styles.text2}>012 345 678</Text>
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
		borderTopWidth: 1,
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

export default InvestorInformation
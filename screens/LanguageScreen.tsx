import React ,{useState } from 'react'
import { View , StyleSheet,Text,Image,SafeAreaView,TouchableOpacity,StatusBar,FlatList} from 'react-native'
import COLORS from '../temp/COLORS'
import image from '../contants/image'
import { FONTS } from '../temp/Fonts'
import {useNavigation} from '@react-navigation/native';
import { SIZES } from '../temp/SIZES'
const LanguageScreen = () => {
	const navigation: any = useNavigation();

  function renderHeader() {
    return (
      <View style={{flexDirection: 'row', backgroundColor: COLORS.sky}}>
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
            ភាសា
          </Text>
        </View>
      </View>
    );
	}
	function renderLanguage() {
		const [language, setlanguage] = React.useState(false);
		const [languages, setLanguages] = useState([
				{imgae:image.khmer,name: 'ខ្មែរ', selected: true },
				{imgae:image.English,name: 'អង់គ្លេស', selected: false }
		]);
		const onSelected = (index:any) => {
			const temp = languages;
			temp.map((item, ind) => {
					if (index == ind) {
							if (item.selected == true) {
									item.selected = false
							} else {
									item.selected = true
							}
					} else {
							item.selected = false
					}
			});
			let temp2 = [];
			temp.map(item => {
					temp2.push(item)
			});
			setLanguages(temp2);
	}
		return (
			<View style={{paddingTop:SIZES.padding,paddingHorizontal:SIZES.padding}}>
				<FlatList
					data={languages}
					renderItem={({ item, index }) => {
						return (
							<TouchableOpacity style={[styles.bgLanguage, { borderColor: item.selected == true ? COLORS.Black : COLORS.light }]} onPress={() => {
								onSelected(index)
						}}>
									<Image source={item.imgae} style={styles.imag} />
								<Text style={styles.textsetting}>{item.name}</Text>
								{
									item.selected == true ? (
										<View
										style={{
												justifyContent: 'flex-end',
												alignItems: 'flex-end',
												flex: 1,
												marginRight:20
										}}>
										<Image source={image.selected} style={[styles.select,{tintColor:COLORS.Skyblue}]} />
								</View>
									) : (
										<View
										style={{
												justifyContent: 'flex-end',
												alignItems: 'flex-end',
												flex: 1,
												marginRight:20
										}}>
								<Image source={image.non_selected} style={styles.select} />
								</View>
									)
								}
					</TouchableOpacity>
						)
					}}
				/>
			</View>
		)
	}
		return (
			<SafeAreaView>
				<StatusBar backgroundColor={COLORS.sky}/>
				{renderHeader()}
				{renderLanguage()}
			</SafeAreaView>
		)
}
const styles = StyleSheet.create({
	bgLanguage: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: COLORS.white,
		height: 50,
		borderRadius: 8,
		margin: 10,
		elevation:3,
		paddingLeft: SIZES.padding,
},
imag: {
	width: 25,
	height:25
},
textsetting: {
		left: 10,
		...FONTS.body3,
		color: COLORS.Black,
},
	select: {
		width: 20,
		height: 20
	}
})
export default LanguageScreen
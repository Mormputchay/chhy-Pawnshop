import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import COLORS from '../temp/COLORS'
import { FONTS } from '../temp/Fonts'
import Icons from 'react-native-vector-icons/Ionicons'
const SearchField2 = () => {
		return (
			<View style={styles.container}>
				<Icons name='search-outline' size={20} color={COLORS.Black} style={{left:5}} />
				<TextInput
					placeholder='ស្វែងរកឈ្មោះគូសហការ'
					placeholderTextColor={COLORS.Black}
					style={{color:COLORS.Black,...FONTS.body4,left:10}} />
			</View>
		)
}
const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		backgroundColor: COLORS.white,
		height:50,
		alignItems: 'center',
		borderRadius: 3,
		elevation: 1,
		borderColor:COLORS.white
	}
})
export default SearchField2
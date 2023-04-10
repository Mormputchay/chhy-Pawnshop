import React from 'react'
import {View , Text,Image} from 'react-native'
import { SIZES } from '../temp/SIZES'
const FileCard = ({image}:any) => {
		return (
			<View style={{margin:8,marginHorizontal:SIZES.padding}}>
				<Image source={image.img} style={{borderRadius:8}} />
				</View>
		)
}
export default FileCard
import React, { useState,useEffect, useRef} from 'react'
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import routes from '../contants/routes';
import {useNavigation} from '@react-navigation/native';
import COLORS from '../temp/COLORS';
const LoadingScreen = () => {
	const navigation: any = useNavigation();
	setTimeout(() => {
		navigation.replace(routes.Home);
	}, 3000)

		return (
			<View style={{flex:1,justifyContent:'center',alignItems:'center'}} >
								<ActivityIndicator size={45} color={COLORS.Skyblue} />
			</View>
		)
	
}
export default LoadingScreen
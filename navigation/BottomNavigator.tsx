import React from 'react';
import {StyleSheet, View, Text,Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import routes from '../contants/routes';
import HomeScreen from '../screens/HomeScreen';
import ReportsScreen from '../screens/ReportsScreen';
import Mortgagetype from '../screens/Mortgagetype';
import Capitalowner from '../screens/Capitalowner';
import SettingScreen from '../screens/SettingScreen';
import AntDesign from "react-native-vector-icons/AntDesign"
import Ionicons from "react-native-vector-icons/Ionicons"
import image from '../contants/image';
const Tab = createBottomTabNavigator();
import COLORS from '../temp/COLORS';
import { FONTS } from '../temp/Fonts';
import Investors from '../screens/Investors';
const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name={routes.Home}
        component={HomeScreen}
								options={{
									headerShown: false,
									tabBarIcon: ({ props }: any) => (
										<View style={{
											position: 'absolute',
											justifyContent: 'center',
											flex:1,
											alignItems:'center'
										}}>
											<Image source={image.home}  />
										<Text style={{...FONTS.body5,color:COLORS.white}}>ទំព័រដើម</Text>
										</View>
									)
								}}
      />
      <Tab.Screen
        name={routes.ReportsScreen}
        component={ReportsScreen}
								options={{
									headerShown: false,
									tabBarIcon: ({ props }: any) => (
										<View style={{
											position: 'absolute',
											justifyContent: 'center',
											flex:1,
											alignItems:'center'
										}}>
											<Ionicons name='newspaper-outline'
												size={20}
												color={COLORS.white}
											/>
										<Text style={{...FONTS.body5,color:COLORS.white}}>របាយការណ៍</Text>
										</View>
									)
								}}
      />
      <Tab.Screen
        name={routes.Mortgagetype}
        component={Mortgagetype}
								options={{
									headerShown: false,
									tabBarIcon: ({ props }: any) => (
										<View style={{
											width: 55,
											height: 55,
											backgroundColor: COLORS.white,
											borderRadius: 35,
											justifyContent: 'center',
											alignItems: 'center',
											marginBottom: 60,
											elevation:10
										}}>
											<Ionicons name='add'
												size={26}
												color={COLORS.sky}
											/>
										</View>
									)
								}}
					
      />
      <Tab.Screen
        name={routes.Capitalowner}
        component={Capitalowner}
								options={{
									headerShown: false,
									tabBarIcon: ({ props }: any) => (
										<View style={{
											position: 'absolute',
											justifyContent: 'center',
											flex:1,
											alignItems:'center'
										}}>
											<Image source={image.Path}  />
										<Text style={{...FONTS.body5,color:COLORS.white}}>អ្នកបោះទុន</Text>
										</View>
									)
								}}
      />
      <Tab.Screen
        name={routes.SettingScreen}
        component={SettingScreen}
								options={{
									headerShown: false,
									tabBarIcon: ({ props }: any) => (
										<View style={{
											position: 'absolute',
											justifyContent: 'center',
											flex:1,
											alignItems:'center'
										}}>
											<AntDesign name='setting'
												size={20}
												color={COLORS.white}
											/>
										<Text style={{...FONTS.body5,color:COLORS.white}}>ការកំណត់</Text>
										</View>
									)
								}}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  tabBar: {
			backgroundColor: COLORS.sky,
			position: 'absolute',
			height: 60,
			borderTopLeftRadius: 15,
			borderTopRightRadius: 15,
		shadowColor: '#fff',
			elevation:5,
		shadowOffset: {
			width: 10,
			height:10
			}
  },
});
export default BottomNavigator;

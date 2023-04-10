import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import COLORS from '../temp/COLORS';
import {FONTS} from '../temp/Fonts';
import { TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import routes from '../contants/routes';
const InvestorCard = ({ person }: any) => {
  const navigation: any = useNavigation();
  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity style={{flex:1,flexDirection: 'row',alignItems:'flex-end'}} onPress={()=>navigation.navigate(routes.InvestorInformation)}>
        <Image
          source={person.image}
						style={{ width: 70, height: 70, left: 10, borderRadius: 35, bottom:10 }}
        />
        <View style={{justifyContent: 'center', paddingLeft: 18, }}>
          <Text style={styles.text}>ឈ្មោះ                     :</Text>
          <Text style={styles.text}>ប្រភេទបញ្ចាំ            :</Text>
          <Text style={styles.text}>ចំនួនទឹកប្រាក់បញ្ចាំ  :</Text>
        </View>
        <View style={{justifyContent: 'space-between', paddingLeft: 5}}>
          <Text style={styles.text2}>{person.Name}</Text>
          <Text style={styles.text2}>{person.Mortgagetype}</Text>
						<Text style={styles.text2}>{person.Depositamount}</Text>
					</View>
					<TouchableOpacity style={{ flex:1, backgroundColor: COLORS.sky,height:22,width:45,marginStart:10,alignItems:'center',justifyContent:'center',borderRadius:2}}>
          <Text style={{...FONTS.body4,color:COLORS.white}}>កាលវិភាគសងប្រាក់</Text>
        </TouchableOpacity>
				</TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
	cardContainer: {
		flex:1,
    width: '95%',
    height: 90,
    backgroundColor: COLORS.white,
    margin: 8,
    borderRadius: 5,
    elevation: 2,
    justifyContent: 'space-between',
  },
  text: {
    ...FONTS.body5,
			color: COLORS.Black,
			bottom:10
  },
  text2: {
    ...FONTS.body4,
    color: COLORS.Black,
			fontWeight: 'bold',
			bottom:10
  },
});
export default InvestorCard

import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import COLORS from '../temp/COLORS';
import image from '../contants/image';
import routes from '../contants/routes';
import {useNavigation} from '@react-navigation/native';
import Button from '../components/Button';
import { FONTS } from '../temp/Fonts';
const {height, width} = Dimensions.get('window');
const GetStart = () => {
  const navigation: any = useNavigation();
  return (
			<View style={styles.container}>
				<StatusBar backgroundColor={COLORS.white}/>
				<View style={styles.slider}>
					<Image source={image.Logo1} style={{width:150,height:150}} />
						</View>
      <View style={styles.footer}>
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: COLORS.white,
          }}
        />
        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.Skyblue,
            borderTopLeftRadius: 50,
						justifyContent: 'center',
						alignItems:'center'
          }}>
          <Text style={{...FONTS.h2, color: COLORS.white}}>
            សា្វគមន៍មកកាន់កម្មវិធីបញ្ចាំ
          </Text>
          <Text style={{...FONTS.body3, marginTop: 8, color: COLORS.white}}>
            បញ្ចាំជាមួយទំនួលខុសត្រូវ​ និងទំនុកចិត្តក្នុងកម្មវិធីទូរស័ព្ទ
          </Text>
          <Button
            Press={() => navigation.navigate(routes.PIN)}
            bgColor={COLORS.white}
            textcolor={COLORS.sky}
            btnLabel="ចាប់ផ្តើម"
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.Skyblue,
  },
  slider: {
    height: 0.61 * height,
    backgroundColor: COLORS.white,
			borderBottomRightRadius: 50,
			justifyContent: 'center',
				alignItems:'center'
  },
  footer: {
    flex: 1,
  },
});
export default GetStart;

import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import COLORS from '../temp/COLORS';
import image from '../contants/image';
import {FONTS} from '../temp/Fonts';
import {useNavigation} from '@react-navigation/native';
import {SIZES} from '../temp/SIZES';
import routes from '../contants/routes';
const Generalexpenses = () => {
  const navigation: any = useNavigation();
  function renderHander() {
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
            ចំណាយទូទៅ
          </Text>
        </View>
      </View>
    );
  }
  function renderGeneralexpenses() {
    return (
      <View style={{paddingHorizontal: SIZES.padding2, paddingTop: 5}}>
        {/*1*/}
        <TouchableOpacity style={styles.cardGeneralexpenses} onPress={()=>navigation.navigate(routes.Generalexpenses2)}>
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: COLORS.sky,
              marginStart: 15,
              borderRadius: 8,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image source={image.wifi} style={styles.imageGeneralexpenses} />
          </View>
          <View>
            <Text style={styles.text}>អិនធឺណេត​</Text>
            <Text style={styles.text2}>បង់ថ្លៃអ៊ីនធឺណិតរបស់អ្នក​</Text>
          </View>
        </TouchableOpacity>
        {/*2*/}
        <TouchableOpacity style={styles.cardGeneralexpenses}>
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: COLORS.red,
              marginStart: 15,
              borderRadius: 8,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={image.electric}
              style={styles.imageGeneralexpenses}
            />
          </View>
										<View>
            <Text style={styles.text}>ឧបករណ៍ប្រើប្រាស់​</Text>
            <Text style={styles.text2}>បង់ថ្លៃអគ្គិសនី, ទឹក និងសម្រាម​</Text>
          </View>
          <View
            style={{
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
              flex: 1,
            }}></View>
        </TouchableOpacity>
        {/*3*/}
        <TouchableOpacity style={styles.cardGeneralexpenses}>
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: COLORS.green,
              marginStart: 15,
              borderRadius: 8,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image source={image.home2} style={styles.imageGeneralexpenses} />
          </View>
          <View>
            <Text style={styles.text}>អចលនទ្រព្យ​</Text>
            <Text style={styles.text2}>បង់ថ្លៃអចលនទ្រព្យ</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={COLORS.sky} />
      {renderHander()}
      {renderGeneralexpenses()}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  cardGeneralexpenses: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: COLORS.white,
    height: 77,
    borderRadius: 8,
    marginVertical:5,
    elevation: 1,
    alignItems: 'center',
  },
  imageGeneralexpenses: {
    width: 24,
    height: 24,
    tintColor: COLORS.white,
  },
  text: {
    ...FONTS.body2,
    color: COLORS.Black,
    left: 10,
	},
	text2: {
		left: 10,
		...FONTS.body4,
		color:COLORS.gray
	}
});
export default Generalexpenses;

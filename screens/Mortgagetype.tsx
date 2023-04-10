import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import image from '../contants/image';
import COLORS from '../temp/COLORS';
import {SIZES} from '../temp/SIZES';
import {FONTS} from '../temp/Fonts';
import {useNavigation} from '@react-navigation/native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import routes from '../contants/routes';
const Mortgagetype = () => {
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
            ជ្រើសរើសប្រភេទបញ្ចាំ
          </Text>
        </View>
      </View>
    );
  }
  function renderMortgagetype() {
    return (
      <View style={{paddingHorizontal: SIZES.padding2, paddingTop: 5}}>
        {/*1*/}
        <TouchableOpacity
          style={styles.cardMortgagetype}
          onPress={() => navigation.navigate(routes.Addcustomers)}>
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: COLORS.backred,
              marginStart: 15,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image source={image.house} style={styles.imageMortgagetype} />
          </View>
          <Text style={styles.text}>អចលនទ្រព្យ</Text>
          <View
            style={{
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
              flex: 1,
            }}>
            <EvilIcons name="chevron-right" size={30} color={COLORS.Black} />
          </View>
        </TouchableOpacity>
        {/*2*/}
        <TouchableOpacity style={styles.cardMortgagetype}>
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: COLORS.backOra,
              marginStart: 15,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image source={image.car} style={styles.imageMortgagetype} />
          </View>
          <Text style={styles.text}>យានជំនិះ</Text>
          <View
            style={{
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
              flex: 1,
            }}>
            <EvilIcons name="chevron-right" size={30} color={COLORS.Black} />
          </View>
        </TouchableOpacity>
        {/*3*/}
        <TouchableOpacity style={styles.cardMortgagetype}>
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: COLORS.backYel,
              marginStart: 15,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image source={image.diamond} style={styles.imageMortgagetype} />
          </View>
          <Text style={styles.text}>គ្រឿងអលង្ការ</Text>
          <View
            style={{
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
              flex: 1,
            }}>
            <EvilIcons name="chevron-right" size={30} color={COLORS.Black} />
          </View>
        </TouchableOpacity>
        {/*4*/}
        <TouchableOpacity style={styles.cardMortgagetype}>
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: COLORS.babelblue,
              marginStart: 15,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image source={image.blueapps} />
          </View>
          <Text style={styles.text}>ផ្សេងៗ</Text>
          <View
            style={{
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
              flex: 1,
            }}>
            <EvilIcons name="chevron-right" size={30} color={COLORS.Black} />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white}}>
      <StatusBar backgroundColor={COLORS.sky} />
      {renderHander()}
      {renderMortgagetype()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cardMortgagetype: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: COLORS.white,
    height: 60,
    borderRadius: 8,
    marginTop: 10,
    elevation: 1,
    alignItems: 'center',
  },
  imageMortgagetype: {
    width: 25,
    height: 25,
  },
  text: {
    ...FONTS.body4,
    color: COLORS.Black,
    left: 10,
  },
});
export default Mortgagetype;

import React, {useState} from 'react';
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
const Generalexpenses2 = () => {
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
  function renderCalender() {
    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);
    const [selectedDate1, setSelectedDate1] = useState('Select Date');
    return (
      <View style={{flex: 1, paddingHorizontal: SIZES.padding, paddingTop: 5}}>
        <View style={styles.calender}>
          <View style={{flexDirection: 'row'}}>
            {/*1*/}
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                borderRightWidth: 0.5,
                borderRightColor: COLORS.gray,
              }}>
              <TouchableOpacity>
                <Image
                  source={image.calender}
                  style={{
                    height: 25,
                    width: 25,
                    tintColor: COLORS.sky,
                    marginStart: 20,
                  }}
                />
              </TouchableOpacity>
              <View style={{justifyContent: 'space-around', flex: 1}}>
                <Text
                  style={{
                    ...FONTS.body5,
                    color: COLORS.gray,
                    bottom: 5,
                    left: 10,
                  }}>
                  {' '}
                  ចាប់ពីថ្ងៃ​
                </Text>
                <Text
                  style={{
                    ...FONTS.body4,
                    color: COLORS.Black,
                    bottom: 10,
                    left: 10,
                  }}>
                  {selectedDate1}
                </Text>
              </View>
            </View>
            {/*2*/}
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                alignItems: 'flex-start',
                justifyContent: 'flex-end',
              }}>
              <TouchableOpacity>
                <Image
                  source={image.calender}
                  style={{
                    height: 25,
                    width: 25,
                    tintColor: COLORS.sky,
                    marginStart: 20,
                  }}
                />
              </TouchableOpacity>
              <View style={{justifyContent: 'space-around', flex: 1}}>
                <Text
                  style={{
                    ...FONTS.body5,
                    color: COLORS.gray,
                    bottom: 5,
                    left: 10,
                  }}>
                  ដល់ថ្ងៃ​
                </Text>
                <Text
                  style={{
                    ...FONTS.body4,
                    color: COLORS.Black,
                    bottom: 10,
                    left: 10,
                  }}>
                  {selectedDate1}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
  function renderStock() {
    return (
      <View
        style={{padding:SIZES.padding, paddingTop: SIZES.padding}}>
        <View style={{justifyContent: 'center'}}>
          <Text style={{...FONTS.body3, color: COLORS.Black}}>
            សកម្មភាពចំណាយ
          </Text>
          <TouchableOpacity style={styles.cardMortgagetype}>
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: COLORS.Skyblue,
                marginStart: 15,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={image.wifi} style={styles.imageMortgagetype} />
            </View>
								<Text style={styles.text}>អិនធឺណេត​</Text>
            <View
              style={{
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
																flex: 1,
																marginRight:15
									}}>
									<Text style={{...FONTS.body3,color:COLORS.sky,fontWeight:'bold'}}>0.00$</Text>
														</View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  return (
    <SafeAreaView>
      <View
        style={{flex: 1, justifyContent: 'space-around', position: 'absolute'}}>
        <StatusBar backgroundColor={COLORS.sky} />
        {renderHander()}
        {renderCalender()}
        {renderStock()}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  text: {
    ...FONTS.body3,
    color: COLORS.Black,
    left: 10,
  },
  text2: {
    left: 10,
    ...FONTS.body4,
    color: COLORS.gray,
  },
  calender: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: COLORS.white,
    height: 60,
    borderRadius: 8,
    marginTop: 5,
    elevation: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardMortgagetype: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: COLORS.white,
    height: 60,
    borderRadius: 8,
    marginTop: 8,
    elevation: 1,
    alignItems: 'center',
  },
  imageMortgagetype: {
    width: 25,
			height: 25,
				tintColor:COLORS.white
  },
});
export default Generalexpenses2;

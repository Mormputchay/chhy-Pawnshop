import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
  ImageBackground
} from 'react-native';
import React,{useState,useEffect,useRef} from 'react';
import Button2 from '../components/Button2';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../temp/COLORS';
import routes from '../contants/routes';
import image from '../contants/image';
import {FONTS} from '../temp/Fonts';
import {useNavigation} from '@react-navigation/native';
import { SIZES } from '../temp/SIZES';
import ModalPopupMoney from '../components/ModalPopupMoney';
const Paywithcash = () => {
  const navigation: any = useNavigation();
  function renderHearder() {
    return (
      <View style={{flexDirection: 'row', backgroundColor: COLORS.Skyblue}}>
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
              ...FONTS.h3,
              right: 12,
              color: COLORS.white,
            }}>
            ទូទាត់ជាមួយសាច់ប្រាក់ផ្ទាល់
          </Text>
        </View>
      </View>
    );
  }
  function renderPayMoeny() {
    return (
      <View
        style={{
          paddingHorizontal: 20,
          flex: 1,
          paddingTop: 20,
          borderRadius: 8,
        }}>
        <View
          style={{
            width: '100%',
            height: 180,
            backgroundColor: COLORS.white,
            elevation: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{...FONTS.h3, color: COLORS.Black}}>ចំនួនទឹកប្រាក់</Text>
          <View style={{borderBottomWidth:1,borderBottomColor:COLORS.Skyblue}}>
								<TextInput style={{...FONTS.h2,color:COLORS.Skyblue}} />
          </View>
        </View>
      </View>
    );
	}
  function renderButton() {
    const [visible, setVisble] = React.useState(false);
		return (
      <View style={{ justifyContent: 'flex-end', flex: 1, bottom: 18, paddingHorizontal: SIZES.padding2 }} >
        <ModalPopupMoney visible={visible}>
          <View style={{alignItems:'center'}}>
            <View style={styles.header}>
              <View style={{width:80,height:80,borderRadius:45,backgroundColor:COLORS.lightGreen,justifyContent:'center',alignItems:'center'}}>
              <Image source={image.greencurrency} style={{tintColor:COLORS.green}} />
              </View>
            <Text style={{top:15,...FONTS.body3,color:COLORS.Black}}>ការបង់ប្រាក់របស់អ្នកបានជោគជ័យ!</Text>
            </View>
            <TouchableOpacity style={styles.buttonConfirm} onPress={()=>navigation.navigate(routes.Buildmoney)}>
                <Text style={{...FONTS.body4,color:COLORS.white}}>បញ្ជាក់</Text>
              </TouchableOpacity>
          </View>
         
        </ModalPopupMoney>
			<Button2 Press={()=>setVisble(true)}
					bgColor={COLORS.Skyblue}
					textcolor={COLORS.white}
					btnLabel="បង់ឥឡូវនេះ"/>
			</View>

		)
	}
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.Skyblue} />
      {renderHearder()}
				{renderPayMoeny()}
				{renderButton()}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonConfirm: {
    marginTop:20,width:100,height:44,backgroundColor:COLORS.sky,justifyContent:'center',alignItems:'center',borderRadius:8
  }
});
export default Paywithcash;

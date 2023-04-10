import React ,{ useRef } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native';
import COLORS from '../temp/COLORS';
import {SIZES} from '../temp/SIZES';
import { FONTS } from '../temp/Fonts';
import image from '../contants/image';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Fontisto from 'react-native-vector-icons/Fontisto'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Button2 from '../components/Button2';
import routes from '../contants/routes';
import Ionicons from 'react-native-vector-icons/Ionicons';
const AccountScreen = () => {
  const nameRef = useRef<any>()
  const passwordRef = useRef<any>()
  const navigation: any = useNavigation();
  function renderHeader() {
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
            គណនី
          </Text>
        </View>
      </View>
    );
  }
  function renderProfile() {
    return (
      <View style={{backgroundColor: COLORS.white, paddingTop:SIZES.padding2}}>
      <View style={{alignItems: 'center'}}>
          <Image
              source={image.chhay1}
              style={{width: 90, height: 90, borderRadius: 45}}
          />
          <View style={styles.camera}>
              <Ionicons
                  name="camera-sharp"
                  size={18}
                  color={COLORS.Black}
                  style={{alignItems: 'center',}}
              />
          </View>
          <Text
              style={{
                  ...FONTS.h4,
                color: COLORS.Black,
                  bottom:20
              }}>
              ពុធ​​ ឆាយ
          </Text>
      </View>
  </View>
    )
  }
  function renderInputText() {
    return (
      <View style={{paddingTop:SIZES.padding,flex:1,paddingHorizontal:SIZES.padding2}}>
        <Text style={{ ...FONTS.body3, color: COLORS.Black }}>ឈ្មោះ</Text>
        <View style={{paddingTop:SIZES.padding2,}}>
          <View style={styles.InpttContainer1}>
            <FontAwesome name='user' size={18} color={COLORS.Black} style={{left:10}} />
            <TextInput placeholder='ពុធ​ ឆាយ'
              placeholderTextColor={COLORS.Black}
              ref={nameRef}
              onSubmitEditing={() => passwordRef.current.focus()}
              style={{
                left: 15,
                ...FONTS.body3,
                color:COLORS.Black
              }} />
        </View>
        </View>

        <Text style={{ ...FONTS.body3, color: COLORS.Black,top:10 }}>កូដសម្ងាត់</Text>
        <View style={{paddingTop:SIZES.padding2,}}>
          <TouchableOpacity style={styles.InputContainer2} onPress={()=>navigation.navigate(routes.EditAccount)}>
            <Fontisto name='locked' size={18} color={COLORS.Black} style={{left:10}} />
            <TextInput placeholder='*******'
              placeholderTextColor={COLORS.gray}
              secureTextEntry
              ref={passwordRef}
              style={{
                left: 15,
                ...FONTS.body3,
                color:COLORS.Black
              }} />
                <View
                style={{
                  justifyContent: 'flex-end',
                  alignItems: 'flex-end',
                  flex: 1,
                }}>
                <EvilIcons
                  name="chevron-right"
                  size={30}
                  color={COLORS.Black}
                />
              </View>
        </TouchableOpacity>
        </View>
      </View>
    )
  }
  function renderButtonSave() {
    return (
      <View style={{justifyContent: 'flex-end', flex: 1, bottom: 22,paddingHorizontal:SIZES.padding2}}>
        <Button2 Press={()=>navigation.navigate(routes.SettingScreen)}
          bgColor={COLORS.sky}
          textcolor={COLORS.white}
          btnLabel="រក្សាទុក"
        />
      </View>
    )
  }
		return (
      <SafeAreaView style={{flex:1,backgroundColor:COLORS.white}}>
        <StatusBar backgroundColor={COLORS.sky} />
        {renderHeader()}
        {renderProfile()}
        {renderInputText()}
        {renderButtonSave()}
    </SafeAreaView>
		)
}
const styles = StyleSheet.create({
  imageContainer: {
    paddingTop: SIZES.padding2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  InpttContainer1: {
    flexDirection: 'row', width: '100%',
    height: 45,
    backgroundColor: COLORS.white,
    elevation: 1,
    borderRadius: 5,
    alignItems: 'center',
    borderColor: COLORS.white
  },
  camera: {
		bottom: 30,
		backgroundColor: COLORS.light,
		marginStart: 75,
		width: 25,
		height: 25,
		alignItems:'center',
		borderRadius: 55,
		elevation:6,
		justifyContent: 'center',
},
  InputContainer2: {
    flexDirection: 'row',
    width: '100%',
    height: 45,
    backgroundColor: COLORS.white,
    elevation: 1,
    borderRadius: 5,
    alignItems: 'center',
    top: 10,
    borderColor: COLORS.white
  }

})
export default AccountScreen
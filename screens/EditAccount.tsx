import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import COLORS from '../temp/COLORS';
import {SIZES} from '../temp/SIZES';
import {FONTS} from '../temp/Fonts';
import image from '../contants/image';
import LottieView from 'lottie-react-native'
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Button2 from '../components/Button2';
import ModalpopSuccess from '../components/ModalpopSuccess';

const EditAccount = () => {
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
              ...FONTS.h3,
              right: 12,
              color: COLORS.white,
            }}>
            កែប្រែគណនី
          </Text>
        </View>
      </View>
    );
  }
  function renderProfile() {
    return (
      <View style={{backgroundColor: COLORS.white, paddingTop: SIZES.padding2}}>
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
              style={{alignItems: 'center'}}
            />
          </View>
          <Text
            style={{
              ...FONTS.h4,
              color: COLORS.Black,
              bottom: 20,
            }}>
            ពុធ​​ ឆាយ
          </Text>
        </View>
      </View>
    );
  }
  function renderTextInput() {
    return (
      <View style={{paddingHorizontal: SIZES.padding, flex: 1}}>
        {/*1*/}
        <Text style={{...FONTS.body3, color: COLORS.Black}}>
          កូដសម្ងាត់បច្ចុប្បន្ន
        </Text>
        <View style={{paddingTop: SIZES.padding2 + 2}}>
          <View style={styles.InpttContainer1}>
            <Fontisto name="locked" size={18} style={{left: 10}} />
            <TextInput
              placeholder="កូដសម្ងាត់បច្ចុប្បន្ន"
              placeholderTextColor={COLORS.Black}
              //ref={nameRef}
              //={() => passwordRef.current.focus()}
              style={{
                left: 15,
                ...FONTS.body3,
                color: COLORS.Black,
              }}
            />
            <View
              style={{
                flex: 1,
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
                paddingEnd: 18,
              }}>
              <Image source={image.eye} style={{width: 20, height: 20}} />
            </View>
          </View>
          {/*2*/}
          <Text style={{...FONTS.body3, color: COLORS.Black, top: 10}}>
            កូដសម្ងាត់ថ្មី
          </Text>
          <View style={{paddingTop: SIZES.padding2 + 2}}>
            <View style={styles.InpttContainer1}>
              <Fontisto name="locked" size={18} style={{left: 10}} />
              <TextInput
                placeholder="កូដសម្ងាត់ថ្មី"
                placeholderTextColor={COLORS.Black}
                //ref={nameRef}
                //={() => passwordRef.current.focus()}
                style={{
                  left: 15,
                  ...FONTS.body3,
                  color: COLORS.Black,
                }}
              />
              <View
                style={{
                  flex: 1,
                  alignItems: 'flex-end',
                  justifyContent: 'flex-end',
                  paddingEnd: 18,
                }}>
                <Image source={image.eye} style={{width: 20, height: 20}} />
              </View>
            </View>
          </View>
          {/*3*/}
          <Text style={{...FONTS.body3, color: COLORS.Black, top: 10}}>
            បញ្ជាក់កូដសម្ងាត់ថ្មី
          </Text>
          <View style={{paddingTop: SIZES.padding2}}>
            <View style={styles.InpttContainer1}>
              <Fontisto name="locked" size={18} style={{left: 10}} />
              <TextInput
                placeholder="បញ្ជាក់កូដសម្ងាត់ថ្មី"
                placeholderTextColor={COLORS.Black}
                //ref={nameRef}
                //={() => passwordRef.current.focus()}
                style={{
                  left: 15,
                  ...FONTS.body3,
                  color: COLORS.Black,
                }}
              />
              <View
                style={{
                  flex: 1,
                  alignItems: 'flex-end',
                  justifyContent: 'flex-end',
                  paddingEnd: 18,
                }}>
                <Image source={image.eye} style={{width: 20, height: 20}} />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
  function renderButtonSave() {
    const [visible, setVisble] = React.useState(false);

    return (
      <View
        style={{
          justifyContent: 'flex-end',
          flex: 1,
          bottom: 10,
          paddingHorizontal: SIZES.padding2,
        }}>
        <Button2
          Press={() => setVisble(true)}
          bgColor={COLORS.sky}
          textcolor={COLORS.white}
          btnLabel="រក្សាទុក"
        />
        <ModalpopSuccess visible={visible}>
							<View style={styles.header}>
						
        <LottieView
										style={{width:120,height:120}}
                source={require('../assets/success.json')} autoPlay
              />
          
            <Text style={{justifyContent:'center', ...FONTS.h3, color: COLORS.Black,marginTop:10}}>
              ផ្លាស់ប្ដូរដោយជោគជ័យ!
            </Text>
            <Text style={{top: 15, ...FONTS.body3, color: COLORS.gray,textAlign:'center'}}>
              ពាក្យសម្ងាត់របស់អ្នកបានផ្លាស់ប្ដូរដោយជោគជ័យ។
            </Text>
           
          </View>
        </ModalpopSuccess>
      </View>
    );
  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar backgroundColor={COLORS.sky} />
      {renderHeader()}
      {renderProfile()}
      {renderTextInput()}
      {renderButtonSave()}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  imageContainer: {
    paddingTop: SIZES.padding2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  camera: {
    bottom: 30,
    backgroundColor: COLORS.light,
    marginStart: 75,
    width: 25,
    height: 25,
    alignItems: 'center',
    borderRadius: 55,
    elevation: 6,
    justifyContent: 'center',
  },
  InpttContainer1: {
    flexDirection: 'row',
    width: '100%',
    height: 45,
    backgroundColor: COLORS.white,
    elevation: 1,
    borderRadius: 5,
    alignItems: 'center',
    borderColor: COLORS.white,
  },
});
export default EditAccount;

import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import COLORS from '../temp/COLORS';
import {SIZES} from '../temp/SIZES';
import {FONTS} from '../temp/Fonts';
import Spacing from '../contants/Spacing';
import image from '../contants/image';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import ModalpopLogout from '../components/ModalpopLogout';
import {useNavigation} from '@react-navigation/native';
import routes from '../contants/routes';
import ModalpopDelete from '../components/ModalpopDelete';
const SettingScreen = () => {
  const navigation: any = useNavigation();
  function LogoAccount() {
    return (
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            justifyContent: 'center',
            paddingLeft: Spacing * 3,
            paddingTop: Spacing * 4,
            flexDirection: 'row',
          }}>
          <Image
            source={image.chhay1}
            style={{width: 64, height: 64, borderRadius: 35}}
          />
          <View>
            <Text
              style={{
                paddingLeft: SIZES.padding2,
                ...FONTS.h3,
                color: COLORS.white,
                fontWeight: 'bold',
              }}>
              Lim Pov
            </Text>
            <Text
              style={{
                paddingLeft: SIZES.padding2,
                ...FONTS.body4,
                color: COLORS.white,
                paddingTop: 5,
              }}>
              015 916 299
            </Text>
          </View>
        </View>
      </View>
    );
  }
  function renderSettting() {
    const [visible, setVisble] = React.useState(false);
    return (
      <View
        style={{
          paddingHorizontal: SIZES.padding,
          paddingTop: SIZES.padding,
        }}>
        <View
          style={{
            width: '100%',
            height: 390,
            backgroundColor: COLORS.white,
            elevation: 4,
            borderRadius: 8,
          }}>
          <View
            style={{
              flex: 1,
              paddingHorizontal: SIZES.padding,
              paddingTop: SIZES.padding,
            }}>
            {/*1*/}
            <TouchableOpacity style={styles.buttonsetting} onPress={()=>navigation.navigate(routes.AccountScreen)}>
              <View
                style={{
                  height: 30,
                  width: 30,
                  backgroundColor: COLORS.backred,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 3,
                }}>
                <Image source={image.pinkperson} style={styles.imag} />
              </View>
              <Text style={styles.textsetting}>គណនី</Text>
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
            {/*2*/}
            <TouchableOpacity style={styles.buttonthensetting} onPress={()=>navigation.navigate(routes.NoticeScreen)}>
              <View
                style={{
                  height: 30,
                  width: 30,
                  backgroundColor: COLORS.backOra,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 3,
                }}>
                <Image source={image.bell} style={styles.imag} />
              </View>
              <Text style={styles.textsetting}>សេចកី្តជូនដំណឺង</Text>
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
            {/*3*/}
            <TouchableOpacity style={styles.buttonthensetting} onPress={()=>navigation.navigate(routes.LanguageScreen)}>
              <View
                style={{
                  height: 30,
                  width: 30,
                  backgroundColor: COLORS.babelblue,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 3,
                }}>
                <Image source={image.world} style={styles.imag} />
              </View>
              <Text style={styles.textsetting}>ភាសា</Text>
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
            {/*4*/}
            <TouchableOpacity style={styles.buttonthensetting} onPress={()=>navigation.navigate(routes.AboutScreen)}>
              <View
                style={{
                  height: 30,
                  width: 30,
                  backgroundColor: '#4D4D4D21',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 3,
                }}>
                <Image source={image.info} style={styles.imag} />
              </View>
              <Text style={styles.textsetting}>អំពីយើង</Text>
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
            {/*5*/}
            <TouchableOpacity style={styles.buttonthensetting} onPress={()=>navigation.navigate(routes.PrivacyScreen)}>
              <View
                style={{
                  height: 30,
                  width: 30,
                  backgroundColor: COLORS.lightGreen,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 3,
                }}>
                <Image source={image.shieldcheck} style={styles.imag} />
              </View>
              <Text style={styles.textsetting}>ឯកជនភាព</Text>
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
            {/*6*/}
            <TouchableOpacity style={styles.buttonthensetting} onPress={() => setVisble(true)}>
              <View
                style={{
                  height: 30,
                  width: 30,
                  backgroundColor: COLORS.backred,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 3,
                }}>
                <Image source={image.Delete} style={styles.imag} />
              </View>
              <Text style={styles.textsetting}>លុបគណនី</Text>
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
            {/*ModalpopDelect*/}
            <ModalpopDelete visible={visible}>
          <View style={styles.header}>
            <View
              style={{
                width: 103,
                height: 103,
                borderRadius: 50,
                backgroundColor: COLORS.backred,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={image.Delete}
                style={{width: 42, height: 48, tintColor: COLORS.red}}
              />
            </View>
            <Text style={{top: 10, ...FONTS.h3, color: COLORS.Black}}>
              លុបគណនី?
            </Text>
            <Text style={{top: 15, ...FONTS.body3, color: COLORS.gray}}>
            តើអ្នកប្រាកដថាចង់លុបគណនីរបស់អ្នកមែនទេ?
            </Text>
            <View style={{flexDirection: 'row',marginTop:30}}>
              <TouchableOpacity onPress={()=>setVisble(false)}
                style={{
                  width: 130,
                  height: 40,
                  borderRadius: 10,
                  backgroundColor: COLORS.white,
                  borderWidth: 1,
                  borderColor: COLORS.red,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{...FONTS.h4, color: COLORS.red}}>អត់ទេ</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>navigation.navigate(routes.GANStart)}
                style={{
                  width: 130,
                  height: 40,
                  borderRadius: 10,
                  backgroundColor: COLORS.red,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginStart: 10,
                }}>
                <Text style={{...FONTS.h4, color: COLORS.white}}>លុប</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ModalpopDelete>
          </View>
        </View>
      </View>
    );
  }
  function renderButtonLogout() {
    const [visible, setVisble] = React.useState(false);
    return (
      <View style={{paddingHorizontal: SIZES.padding}}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            backgroundColor: COLORS.sky,
            borderRadius: Spacing,
            marginTop: 20,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}
          onPress={() => setVisble(true)}>
          <Image
            source={image.Logout}
            style={{
              width: 16,
              height: 16,
              right: 10,
              tintColor: COLORS.white,
            }}
          />
          <Text
            style={{
              color: COLORS.white,
              ...FONTS.h4,
              fontWeight: 'bold',
            }}>
            ចាកចេញ
          </Text>
        </TouchableOpacity>
        <ModalpopLogout visible={visible}>
          <View style={styles.header}>
            <View
              style={{
                width: 103,
                height: 103,
                borderRadius: 50,
                backgroundColor: COLORS.babelblue,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={image.Logout}
                style={{width: 40, height: 40, tintColor: COLORS.sky}}
              />
            </View>
            <Text style={{top: 10, ...FONTS.h3, color: COLORS.Black}}>
              ចាកចេញ?
            </Text>
            <Text style={{top: 15, ...FONTS.body3, color: COLORS.gray}}>
              តើអ្នកប្រាកដថាចង់ចាកចេញពីកម្មវិធីមែនទេ?
            </Text>
            <View style={{flexDirection: 'row', marginTop:30}}>
              <TouchableOpacity onPress={()=>setVisble(false)}
                style={{
                  width: 130,
                  height: 40,
                  borderRadius: 8,
                  backgroundColor: COLORS.white,
                  borderWidth: 1,
                  borderColor: COLORS.sky,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{...FONTS.h4, color: COLORS.sky}}>អត់ទេ</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>navigation.navigate(routes.GANStart)}
                style={{
                  width: 130,
                  height: 40,
                  borderRadius: 8,
                  backgroundColor: COLORS.sky,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginStart: 10,
                }}>
                <Text style={{...FONTS.h4, color: COLORS.white}}>ចាកចេញ</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ModalpopLogout>
      </View>
    );
  }
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
      <StatusBar backgroundColor="#1d7096" />
      <View style={styles.container}>
        <Text style={styles.textTitle}>ការកំណត់</Text>
        {LogoAccount()}
        {renderSettting()}
        {renderButtonLogout()}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1d7096',
    height: 283,
    borderBottomLeftRadius: 38,
    borderBottomRightRadius: 28,
  },
  textTitle: {
    textAlign: 'center',
    paddingTop: SIZES.padding2,
    ...FONTS.h2,
    color: COLORS.white,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonsetting: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.light,
    height: 50,
    borderRadius: 8,
    paddingLeft: SIZES.padding,
  },
  buttonthensetting: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.light,
    height: 50,
    borderRadius: 8,
    paddingLeft: SIZES.padding,
  },
  imag: {
    width: 15,
    height: 19,
  },
  textsetting: {
    left: 10,
    ...FONTS.body4,
    color: COLORS.Black,
  },
});
export default SettingScreen;

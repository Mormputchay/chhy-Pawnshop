import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import COLORS from '../temp/COLORS';
import image from '../contants/image';
import {FONTS} from '../temp/Fonts';
import {useNavigation} from '@react-navigation/native';

const NoticeScreen = () => {
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
            សេចក្ដីជូនដំណឹង
          </Text>
        </View>
      </View>
    );
  }
  function renderImage() {
    return (
      <View style={styles.container}>
        <View style={{backgroundColor:COLORS.Skyblue,width:100,height:100,borderRadius:50,justifyContent:'center',alignItems:'center'}}>
          <Image source={image.whitebell} style={{width: 50, height: 55}} />
						</View>
						<Text style={{ top: 12, ...FONTS.h3, color: COLORS.Black }}>No Notifications Yet!</Text>
						<Text style={{top:12,...FONTS.body3,color:COLORS.gray}}>We'll notify when something arrives.</Text>
      </View>
    );
  }
  return (
    <View style={{justifyContent: 'center', flex: 1, backgroundColor: '#fff'}}>
      {renderHeader()}
      <StatusBar backgroundColor={COLORS.sky} />
      {renderImage()}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
export default NoticeScreen;

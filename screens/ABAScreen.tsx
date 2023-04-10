import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import COLORS from '../temp/COLORS';
import image from '../contants/image';
const ABAScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.white} />
      <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#fff'}}>
					<Image source={image.ABA} style={{width:300,height:400,}} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'
  },
});
export default ABAScreen;

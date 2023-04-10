import { View,Text ,SafeAreaView,StyleSheet,Image,TextInput,TouchableOpacity} from 'react-native'
import React,{useRef} from 'react'
import image from '../contants/image'
import COLORS from '../temp/COLORS'
import { FONTS } from '../temp/Fonts'
import Icons from 'react-native-vector-icons/Fontisto'
import { useNavigation } from '@react-navigation/native';
import routes from '../contants/routes'
import Button2 from '../components/Button2'
import { SIZES } from '../temp/SIZES'
const NewPasswordScreen = () => {
	const confirmpasswordRef = useRef<any>();
  const navigation: any = useNavigation();
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setConfirmPassword] = React.useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image source={image.reset} style={styles.image} />
      </View>
      <View style={{flex: 1, marginStart: 20}}>
        <Text style={{...FONTS.h2, color: COLORS.sky}}>
          កំណត់ពាក្យសម្ងាត់ឡើងវិញ
        </Text>
        <Text style={{...FONTS.body3, color: COLORS.gray, top: 10}}>
          ពាក្យសម្ងាត់
        </Text>
        <View style={styles.container1}>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholderTextColor={COLORS.gray}
            placeholder="ពាក្យសម្ងាត់"
            onSubmitEditing={() => confirmpasswordRef.current.focus()}
            secureTextEntry={!showPassword}
          />
          <Icons
            name="locked"
            size={15}
            color={COLORS.Black}
            style={styles.icons}
          />
          <TouchableOpacity
            style={{right: 30, justifyContent: 'center'}}
            onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={showPassword ? image.eye : image.hide}
              style={{width: 20, height: 20, marginTop: 4}}
            />
          </TouchableOpacity>
        </View>
        <Text style={{...FONTS.body3, color: COLORS.gray, top: 10}}>
          ពាក្យសម្ងាត់ថ្មី
        </Text>
       
        
        <View style={styles.container1}>
        
          <TextInput
            ref={confirmpasswordRef}
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="ពាក្យសម្ងាត់ថ្មី"
            placeholderTextColor={COLORS.gray}
            secureTextEntry={!showConfirmPassword}
          />
           <Icons
            name="locked"
            size={15}
            color={COLORS.Black}
            style={styles.icons}
          />
          <TouchableOpacity
           style={{right: 30, justifyContent: 'center'}}
            onPress={() => setConfirmPassword(!showPassword)}>
            <Image
              source={showConfirmPassword ? image.eye : image.hide}
              style={{width: 20, height: 20, marginTop: 4}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{justifyContent: 'flex-end', flex: 1, bottom: 18,paddingHorizontal:15 }}>
        <Button2
          Press={() => navigation.navigate(routes.Loading)}
          bgColor={COLORS.Skyblue}
          textcolor={COLORS.white}
          btnLabel="បញ្ជាក់"
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.white,
	},
	image: {
		width: 250,
		height:250
	},
	container1: {
		flexDirection: 'row',
		marginTop:20
	},
	input: {
		height: 45,
		flex: 1,
		backgroundColor: COLORS.white,
		paddingLeft: 40,
		borderRadius: 8,
		...FONTS.h4,
		borderColor: COLORS.sky,
		borderWidth: 1,
		width:"100%"
	},
	icons: {
		position: 'absolute',
		justifyContent:'center',
		left: 10,
		top:15
	}
})
export default NewPasswordScreen
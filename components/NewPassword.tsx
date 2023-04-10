import React,{useRef} from 'react';
import {View, Text, TextInput, StyleSheet,TouchableOpacity,Image} from 'react-native';
import COLORS from '../temp/COLORS';
import {FONTS} from '../temp/Fonts';
import image from '../contants/image';
import Icons from 'react-native-vector-icons/Fontisto'
const NewPassword = ({ props, icon }: any) => {
	const confirmpasswordRef = useRef<any>()
	const [showPassword, setShowPassword] = React.useState(false);
	return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholderTextColor={COLORS.gray}
        placeholder="ពាក្យសម្ងាត់ថ្មី"
        onSubmitEditing={() => confirmpasswordRef.current.focus()}
        secureTextEntry={!showPassword}
      />
      <Icons
        name="locked"
        size={15}
        color={COLORS.Black}
        style={styles.icons}
      />
      <TouchableOpacity style={{right: 30, justifyContent: 'center'}} onPress={() => setShowPassword(!showPassword)}>
        <Image
          source={showPassword ? image.eye : image.hide}
          style={{width: 20, height: 20, marginTop: 4}}
        />
      </TouchableOpacity>
    </View>
  );

};
const styles = StyleSheet.create({
	container: {
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
});
export default NewPassword;

import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import image from '../contants/image';
import COLORS from '../temp/COLORS';
import {FONTS} from '../temp/Fonts';
import {useNavigation} from '@react-navigation/native';
import PeopleCard from '../components/PeopleCard';
import SearchField1 from '../components/SearchField1';
import DataPeople from '../contants/DataPeople';
import {SIZES} from '../temp/SIZES';
const Buildmoney = () => {
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
            អ្នកត្រូវសងប្រាក់
          </Text>
        </View>
      </View>
    );
  }
  function renderSearch() {
    return (
      <View style={styles.container}>
        <SearchField1 />
      </View>
    );
  }
  function renderCard() {
    return (
      <View style={{paddingTop: SIZES.padding,}}>
      <FlatList
        data={DataPeople}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <PeopleCard person={item} />}
      />
    </View>
    );
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={COLORS.sky} />
      {renderHeader()}
      {renderSearch()}
      {renderCard()}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: SIZES.padding,
    paddingHorizontal: SIZES.padding2,
  },
});
export default Buildmoney;

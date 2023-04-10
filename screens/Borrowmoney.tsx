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
import SearchField from '../components/SearchField1';
import DataPeople from '../contants/DataPeople';
import {SIZES} from '../temp/SIZES';

const Borrowmoney = () => {
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
            ប្រាក់គេខ្លីជាក់សែ្តង
          </Text>
        </View>
      </View>
    );
  }
  function renderRaisemoney() {
    return (
      <View
        style={{paddingHorizontal: SIZES.padding, paddingTop: SIZES.padding}}>
        <TouchableOpacity style={styles.box}>
          <View
            style={{
              width: 45,
              height: 48,
              borderRadius: 30,
              backgroundColor: COLORS.sky,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image source={image.moneybag1} style={styles.image} />
          </View>
          <Text
            style={{
              marginTop: 5,
              ...FONTS.h2,
              color: COLORS.Skyblue,
              fontWeight: 'bold',
            }}>
            $230.555
          </Text>
          <Text style={{top: 2, ...FONTS.body3, color: COLORS.Black}}>
            សង់ដៃគូសហការ
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  function renderSearch() {
    return (
      <View style={styles.container}>
        <SearchField />
      </View>
    );
  }
  function renderCard() {
    return (
      <View style={{paddingTop: SIZES.padding}}>
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
      {renderRaisemoney()}
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
  box: {
    backgroundColor: COLORS.lightblue,
    width: '100%',
    height: 150,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 30,
    height: 42,
    tintColor: COLORS.white,
    top: 4,
  },
});
export default Borrowmoney;

import React from 'react';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import SearchField2 from '../components/SearchField2';
import COLORS from '../temp/COLORS';
import {FONTS} from '../temp/Fonts';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native';
import image from '../contants/image';
import {SIZES} from '../temp/SIZES';
import DataPeople from '../contants/DataPeople';
import PeopleCard from '../components/PeopleCard';

const Buildpartnerships = () => {
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
            សង់ដៃគូសហការ
          </Text>
        </View>
      </View>
    );
  }
  function renderMoney() {
    return (
      <View
        style={{
          paddingHorizontal: SIZES.padding,
          paddingTop: SIZES.padding,
          flexDirection: 'row',
          justifyContent:'space-around'
        }}>
        <TouchableOpacity style={styles.box1}>
          <View
            style={{
              width: 45,
              height: 48,
              borderRadius: 30,
              backgroundColor: COLORS.Skyblue,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={image.People}
              style={{width: 25, height: 25, tintColor: COLORS.white}}
            />
          </View>
          <Text
            style={{
              marginTop: 10,
              ...FONTS.h4,
              color: COLORS.Skyblue,
              fontWeight: 'bold',
            }}>
            04 នាក់
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box2}>
          <View
            style={{
              width: 45,
              height: 48,
              borderRadius: 30,
              backgroundColor: COLORS.orange,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image source={image.moneybag1} style={styles.image} />
          </View>
          <Text
            style={{
              marginTop: 10,
              ...FONTS.h3,
              color: COLORS.orange,
              fontWeight: 'bold',
            }}>
            $20,000
          </Text>
        </TouchableOpacity>
      </View>
    );
	}
	function renderSearch() {
		return (
				<View style={styles.container}>
						<SearchField2 />
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
      {renderMoney()}
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
  box1: {
    width: 160,
    height: 140,
    backgroundColor: COLORS.lightblue,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box2: {
    width: 160,
    height: 140,
    backgroundColor: COLORS.lightOrange,
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
export default Buildpartnerships;

import {
  View,
  Text,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import COLORS from '../temp/COLORS';
import {FONTS} from '../temp/Fonts';
import {SIZES} from '../temp/SIZES';
import image from '../contants/image';
import {useNavigation} from '@react-navigation/native';
import routes from '../contants/routes';
const HomeScreen = () => {
  const navigation: any = useNavigation();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(!loading);
    }, 2000);
  }, []);
  function renderHeader() {
    return (
      <View style={styles.hearderContner}>
        <Text style={styles.textred}>PHSAR</Text>
        <Text style={styles.textskyblue}> - </Text>
        <Text style={styles.textred}>Pawnshop</Text>
        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate(routes.ABAScreen)}>
            <Image source={image.qrcode} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  function rendermoney() {
    return (
      <View style={styles.cardContainer}>
        <View
          style={{
            width: '100%',
            backgroundColor: COLORS.sky,
            height: 95,
            borderRadius: 10,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              marginLeft: 20,
              ...FONTS.h3,
              color: COLORS.white,
              fontWeight: 'bold',
            }}>
            $ 230.555
          </Text>
          <Text style={{marginLeft: 20, ...FONTS.body4, color: COLORS.white}}>
            លុយបោះទុន
          </Text>
        </View>
        <View
          style={{
            alignItems: 'flex-end',
            flex: 1,
            justifyContent: 'center',
            right: 25,
          }}>
          <View
            style={{
              width: 45,
              height: 48,
              borderRadius: 30,
              backgroundColor: COLORS.white,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image source={image.moneybag1} style={styles.image} />
          </View>
        </View>
      </View>
    );
  }
  function renderStock() {
    return (
      <View style={{paddingHorizontal: SIZES.padding, paddingTop: 5}}>
        <Text style={{...FONTS.body2, color: COLORS.Black}}>
          ស្តុក​ ឬ​ដើមទុន
        </Text>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            backgroundColor: COLORS.ligthome,
            height: 110,
            borderRadius: 8,
            marginTop: 10,
            elevation: 1,
            justifyContent:'space-around'
          }}>
          <View>
            <TouchableOpacity
              style={styles.cardStock}
              onPress={() => navigation.navigate(routes.Inverstors)}>
              <Image source={image.investor} style={styles.imagecard} />
            </TouchableOpacity>
            <Text
              style={{
                marginTop: -20,
                textAlign: 'center',
                ...FONTS.body4,
                color: COLORS.red,
              }}>
              អ្នកបោះទុន
            </Text>
          </View>
          <View>
            <TouchableOpacity
              style={styles.cardStock}
              onPress={() => navigation.navigate(routes.Mortgage)}>
              <Image source={image.mortgageloan} style={styles.imagecard} />
            </TouchableOpacity>
            <Text
              style={{
                marginTop: -20,
                textAlign: 'center',
                ...FONTS.body4,
                color: COLORS.red,
              }}>
              ទ្រព្យបញ្ចាំ
            </Text>
          </View>
          <View>
            <TouchableOpacity
              style={styles.cardStock}
              onPress={() => navigation.navigate(routes.Additionalcapital)}>
              <Image source={image.assets} style={styles.imagecard} />
            </TouchableOpacity>
            <Text
              style={{
                marginTop: -20,
                textAlign: 'center',
                ...FONTS.body4,
                color: COLORS.red,
              }}>
              ទុនបនែ្ថម
            </Text>
          </View>
          <View>
            <TouchableOpacity
              style={styles.cardStock}
              onPress={() => navigation.navigate(routes.ReportsScreen)}>
              <Image source={image.report} style={styles.imagecard} />
            </TouchableOpacity>
            <Text
              style={{
                marginTop: -20,
                textAlign: 'center',
                ...FONTS.body4,
                color: COLORS.red,
              }}>
              របាយការណ៍
            </Text>
          </View>
        </View>
      </View>
    );
  }
  function renderRevenue() {
    return (
      <View style={{paddingHorizontal: SIZES.padding2, paddingTop: 5}}>
        <Text style={{...FONTS.body2, color: COLORS.Black}}>ចំណូល</Text>
        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.ligthome,
            width: '100%',
            height: 250,
            borderRadius: 10,
            marginTop: 10,
          }}>
          {/*1*/}
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                borderRightWidth: 0.6,
                borderRightColor:COLORS.sky
              }}>
              <TouchableOpacity onPress={()=>navigation.navigate(routes.Buildmoney)}
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: COLORS.white,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  top: 10,
                }}>
                <Image source={image.cash} style={{width: 30, height: 30}} />
              </TouchableOpacity>
              <Text style={{...FONTS.body4, color: COLORS.red, top: 13}}>
                អ្នកត្រូវសង់ប្រាក់
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                borderRightWidth: 0.6,
                borderRightColor:COLORS.sky
              }}>
              <TouchableOpacity onPress={()=>navigation.navigate(routes.Raisemoney)}
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: COLORS.white,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  top: 10,
                }}>
                <Image
                  source={image.donation}
                  style={{width: 30, height: 30}}
                />
              </TouchableOpacity>
              <Text style={{...FONTS.body4, color: COLORS.red, top: 13}}>
              ប្រាក់ត្រូវប្រមូល
              </Text>
            </View>

            <View style={{flex: 1, marginTop: 10, alignItems: 'center'}}>
              <TouchableOpacity onPress={() => navigation.navigate(routes.Actualcollection)}
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: COLORS.white,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={image.transaction}
                  style={{width: 30, height: 30}}
                />
              </TouchableOpacity>
              <Text
                style={{
                  ...FONTS.body4,
                  color: COLORS.red,
                  textAlign: 'center',
                }}>
                ប្រាក់ប្រមូលបានជាក់ស្តែង
              </Text>
            </View>
          </View>
          {/*2*/}
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderTopWidth: 0.6,
              borderTopColor:COLORS.sky
            }}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                borderRightWidth: 0.6,
                borderRightColor:COLORS.sky
              }}>
              <TouchableOpacity onPress={()=>navigation.navigate(routes.Totalprincipal)}
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: COLORS.white,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  top: 10,
                }}>
                <Image
                  source={image.moneybag2}
                  style={{width: 30, height: 30}}
                />
              </TouchableOpacity>
              <Text
                style={{
                  ...FONTS.body4,
                  color: COLORS.red,
                  top: 13,
                  textAlign: 'center',
                }}>
                ប្រាក់ដើមសងសុរប
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                borderRightWidth: 0.6,
                borderRightColor:COLORS.sky
              }}>
              <TouchableOpacity onPress={()=>navigation.navigate(routes.Prepaidinterest)}
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: COLORS.white,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  top: 10,
                }}>
                <Image source={image.deposit} style={{width: 30, height: 30}} />
              </TouchableOpacity>
              <Text
                style={{
                  ...FONTS.body4,
                  color: COLORS.red,
                  top: 13,
                  textAlign: 'center',
                }}>
                ការប្រាក់បង់មុន (អ្នកខ្ជីលើស២ខែ)
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
              }}>
              <TouchableOpacity onPress={()=>navigation.navigate(routes.Totalinterest)}
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: COLORS.white,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  top: 10,
                }}>
                <Image source={image.money} style={{width: 30, height: 30}} />
              </TouchableOpacity>
              <Text
                style={{
                  ...FONTS.body4,
                  color: COLORS.red,
                  textAlign: 'center',
                  top: 13,
                }}>
                ការប្រាក់សងសុរប
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
  function renderCost() {
    return (
      <View style={{paddingHorizontal: SIZES.padding2, paddingTop: 5}}>
        <Text style={{...FONTS.body2, color: COLORS.Black}}>ចំណាយ</Text>
        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.ligthome,
            width: '100%',
            height: 250,
            borderRadius: 10,
            marginTop: 10,
          }}>
          {/*1*/}
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                borderRightWidth: 0.6,
                borderRightColor:COLORS.sky
              }}>
              <TouchableOpacity onPress={()=>navigation.navigate(routes.Generalexpenses)}
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: COLORS.white,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  top: 10,
                }}>
                <Image
                  source={image.mortgageloan}
                  style={{width: 30, height: 30}}
                />
              </TouchableOpacity>
              <Text style={{...FONTS.body4, color: COLORS.red, top: 13}}>
                ចំណាយទូទៅ
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                alignItems: 'center',
                borderRightWidth: 0.6,
                borderRightColor:COLORS.sky
              }}>
              <TouchableOpacity onPress={()=>navigation.navigate(routes.TodayLoan_amount)}
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: COLORS.white,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  top: 10,
                }}>
                <Image
                  source={image.donation}
                  style={{width: 30, height: 30}}
                />
              </TouchableOpacity>
              <Text style={{...FONTS.body4, color: COLORS.red, top: 13}}>
                ចំនួនខី្ចថ្ងៃនេះ
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                alignItems: 'center',
               
              }}>
              <TouchableOpacity onPress={()=>navigation.navigate(routes.Total_loan_amount)}
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: COLORS.white,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  top: 10,
                }}>
                <Image
                  source={image.moneybag}
                  style={{width: 30, height: 30}}
                />
              </TouchableOpacity>
              <Text style={{...FONTS.body4, color: COLORS.red, top: 13}}>
                ចំនួនខី្ចសុរប
              </Text>
            </View>
          </View>
          {/*2*/}
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
             
            }}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                borderRightWidth: 0.6,
                borderRightColor: COLORS.sky,
                borderTopWidth: 1,
                borderTopColor:COLORS.sky
              }}>
              <TouchableOpacity onPress={()=>navigation.navigate(routes.Buildpartnerships)}
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: COLORS.white,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  top: 10,
                }}>
                <Image source={image.bribe} style={{width: 30, height: 30}} />
              </TouchableOpacity>
              <Text style={{...FONTS.body4, color: COLORS.red, top: 13}}>
                សង់ដៃគូសហការ
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                borderRightWidth: 0.6,
                borderRightColor: COLORS.sky,
                borderTopWidth: 1,
                borderTopColor:COLORS.sky
              }}>
              <TouchableOpacity onPress={()=>navigation.navigate(routes.Borrowmoney)}
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: COLORS.white,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  top: 10,
                }}>
                <Image
                  source={image.borrowedmoney}
                  style={{width: 30, height: 30}}
                />
              </TouchableOpacity>
              <Text style={{...FONTS.body4, color: COLORS.red, top: 13}}>
                ប្រាក់គេខ្លីជាក់សែ្តង
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                borderTopWidth: 1,
                borderTopColor:COLORS.sky
              }}></View>
          </View>
        </View>
      </View>
    );
  }
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{flex: 1, marginBottom: 70}}>
        {renderHeader()}
        {rendermoney()}
        {renderStock()}
        {renderRevenue()}
        {renderCost()}
        <StatusBar backgroundColor={COLORS.white} />
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  textred: {
    fontSize: 20,
    color: COLORS.red,
    fontWeight: 'bold',
  },
  hearderContner: {
    paddingHorizontal: SIZES.padding,
    flexDirection: 'row',
    paddingTop: SIZES.padding,
  },
  textskyblue: {
    fontSize: 20,
    color: COLORS.Skyblue,
  },
  image: {
    width: 30,
    height: 42,
    tintColor: COLORS.sky,
    top: 4,
  },
  cardContainer: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
    paddingTop: SIZES.padding2,
    flexDirection: 'row',
  
  },
  cardStock: {
    width: 50,
    height: 45,
    borderRadius: 5,
    backgroundColor: COLORS.white,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
 
  },
  imagecard: {
    width: 30,
    height: 30,
  },
  container: {
    flex: 1,
    marginVertical: 20,
  },
  continue: {
    flex: 1,
    marginVertical: 20,
  },
  item: {
    backgroundColor: COLORS.lightblue,
  },
});
export default HomeScreen;

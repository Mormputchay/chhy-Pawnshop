import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Image,
  StyleSheet,
} from 'react-native';
import image from '../contants/image';
import COLORS from '../temp/COLORS';
import {SIZES} from '../temp/SIZES';
import {FONTS} from '../temp/Fonts';
import {useNavigation} from '@react-navigation/native';
import routes from '../contants/routes';
const Repaymentschedule = () => {
  const navigation: any = useNavigation();
  function renderHeader() {
    return (
      <View style={{flexDirection: 'row', backgroundColor: COLORS.Skyblue}}>
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
            កាលវិភាគសងប្រាក់
          </Text>
        </View>
        <View style={{justifyContent: 'center', right: 10}}>
          <View
            style={{
              justifyContent: 'center',
              width: 30,
              height: 30,
              backgroundColor: COLORS.white,
              alignItems: 'center',
              borderRadius: 8,
            }}>
            <Image
              source={image.print}
              style={{width: 18, height: 18, tintColor: COLORS.Skyblue}}
            />
          </View>
        </View>
      </View>
    );
  }
  function renderTable1() {
    return (
      <View style={{flex: 1, paddingHorizontal: 15, paddingTop: SIZES.padding}}>
        {/*Table1*/}
        <View
          style={{
            width: '100%',
            height: 183,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: COLORS.Skyblue,
          }}>
          {/*Row1*/}
          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              borderBottomColor: COLORS.Skyblue,
            }}>
            <View
              style={{
                width: 87,
                height: 30,
                backgroundColor: '#4AB0D680',
                justifyContent: 'center',
                alignItems: 'center',
                borderTopLeftRadius: 5,
              }}>
              <Text style={{...FONTS.body5, color: COLORS.Black}}>
                ឈ្មោះមន្ដ្រី
              </Text>
            </View>
            <View
              style={{
                width: 87,
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{...FONTS.body5, color: COLORS.Black}}>
                គីម​ ហ៊ាង
              </Text>
            </View>
            <View
              style={{
                width: 80,
                height: 30,
                justifyContent: 'center',
                backgroundColor: '#4AB0D680',
              }}>
              <Text style={{...FONTS.body5, color: COLORS.Black}}>
                លេខទូរស័ព្ទ
              </Text>
            </View>
            <View style={{width: 100, height: 30, justifyContent: 'center'}}>
              <Text style={{...FONTS.body5, color: COLORS.Black}}>
                012 345 678
              </Text>
            </View>
          </View>
          {/*Row2*/}
          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              borderBottomColor: COLORS.Skyblue,
            }}>
            <View
              style={{
                width: 87,
                height: 30,
                backgroundColor: '#4AB0D680',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{...FONTS.body5, color: COLORS.Black}}>
                ឈ្មោះអតិថិជន
              </Text>
            </View>
            <View
              style={{
                width: 87,
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{...FONTS.body5, color: COLORS.Black}}>លឹម ពៅ</Text>
            </View>
            <View
              style={{
                width: 80,
                height: 30,
                justifyContent: 'center',
                backgroundColor: '#4AB0D680',
              }}>
              <Text style={{...FONTS.body5, color: COLORS.Black}}>
                ថ្ងៃបញ្ចាំ
              </Text>
            </View>
            <View style={{width: 100, height: 30, justifyContent: 'center'}}>
              <Text style={{...FONTS.body5, color: COLORS.Black}}>
                28/ 02 / 2023
              </Text>
            </View>
          </View>
          {/*Row3*/}
          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              borderBottomColor: COLORS.Skyblue,
            }}>
            <View
              style={{
                width: 87,
                height: 30,
                backgroundColor: '#4AB0D680',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{...FONTS.body5, color: COLORS.Black}}>
                ចំនួនទឹកប្រាក់
              </Text>
            </View>
            <View
              style={{
                width: 87,
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{...FONTS.body5, color: COLORS.Black}}>15,000$</Text>
            </View>
            <View
              style={{
                width: 80,
                height: 30,
                justifyContent: 'center',
                backgroundColor: '#4AB0D680',
              }}>
              <Text style={{...FONTS.body5, color: COLORS.Black}}>
                ថ្ងៃសងចុងក្រោយ
              </Text>
            </View>
            <View style={{width: 90, height: 30, justifyContent: 'center'}}>
              <Text style={{...FONTS.body5, color: COLORS.Black}}>
                28/ 08 / 2023
              </Text>
            </View>
          </View>
          {/*Row4*/}
          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              borderBottomColor: COLORS.Skyblue,
            }}>
            <View
              style={{
                width: 87,
                height: 30,
                backgroundColor: '#4AB0D680',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{...FONTS.body5, color: COLORS.Black}}>
                អត្រាការប្រាក់
              </Text>
            </View>
            <View
              style={{
                width: 87,
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{...FONTS.body5, color: COLORS.Black}}>1.5%/ខែ</Text>
            </View>
            <View
              style={{
                width: 80,
                height: 30,
                justifyContent: 'center',
                backgroundColor: '#4AB0D680',
              }}>
              <Text style={{...FONTS.body5, color: COLORS.Black}}>
                វត្ថុដាក់បញ្ចាំ
              </Text>
            </View>
            <View style={{width: 80, height: 30, justifyContent: 'center'}}>
              <Text style={{...FONTS.body5, color: COLORS.Black}}>
                អចលនទ្រព្យ
              </Text>
            </View>
          </View>
          {/*Row5*/}
          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              borderBottomColor: COLORS.Skyblue,
            }}>
            <View
              style={{
                width: 87,
                height: 30,
                backgroundColor: '#4AB0D680',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{...FONTS.body5, color: COLORS.Black}}>
                អាស័យដ្ឋាន
              </Text>
            </View>
            <View
              style={{
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{...FONTS.body5, color: COLORS.Black, left: 4}}>
                ខណ្ឌទួលគោក, រាជធានីភ្នំពេញ
              </Text>
            </View>
          </View>
          {/*Row5*/}
          <View style={{flexDirection: 'row', flex: 1}}>
            <View
              style={{
                width: 87,
                height: 27,
                backgroundColor: '#4AB0D680',
                justifyContent: 'center',
                alignItems: 'center',
                borderBottomLeftRadius: 6,
              }}>
              <Text
                style={{
                  ...FONTS.body5,
                  color: COLORS.Black,
                  left: 4,
                  bottom: 2,
                }}>
                គោលបំណង
              </Text>
            </View>
            <View style={{height: 30, justifyContent: 'center', flex: 1}}>
              <Text
                style={{
                  ...FONTS.body5,
                  color: COLORS.Black,
                  left: 4,
                  bottom: 2,
                }}>
                បើកអាជីវកម្ម
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
  function renderTable2() {
    return (
      <View style={{flex: 2, paddingHorizontal: 10,marginTop:40}}>
        <View
          style={{
            width: '100%',
            height: 304,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: COLORS.Skyblue,
          }}>
          {/*Row1*/}
          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              borderBottomColor: COLORS.Skyblue,
            }}>
            <View
              style={{
                borderEndWidth: 1,
                borderEndColor: COLORS.Skyblue,
                height: '100%',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: 65,
                  height: 45,
                  backgroundColor: '#4AB0D6',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderTopLeftRadius: 2,
                }}>
                <Text style={{...FONTS.body5, color: COLORS.white}}>
                  ថ្ងៃសងប្រាក់
                </Text>
              </View>
            </View>
            <View
              style={{
                borderEndWidth: 1,
                borderEndColor: COLORS.Skyblue,
                height: '100%',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: 65,
                  height: 45,
                  backgroundColor: '#4AB0D6',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    ...FONTS.body5,
                    color: COLORS.white,
                    textAlign: 'center',
                  }}>
                  ប្រាក់ដើមនៅ ជំពាក់
                </Text>
              </View>
            </View>
            <View
              style={{
                borderEndWidth: 1,
                borderEndColor: COLORS.Skyblue,
                height: '100%',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: 60,
                  height: 45,
                  backgroundColor: '#4AB0D6',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    ...FONTS.body5,
                    color: COLORS.white,
                    textAlign: 'center',
                  }}>
                  ប្រាក់ដើមត្រូវ សង
                </Text>
              </View>
            </View>
            <View
              style={{
                borderEndWidth: 1,
                borderEndColor: COLORS.Skyblue,
                height: '100%',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: 40,
                  height: 45,
                  backgroundColor: '#4AB0D6',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    ...FONTS.body5,
                    color: COLORS.white,
                    textAlign: 'center',
                  }}>
                  ការប្រាក់
                </Text>
              </View>
            </View>
            <View
              style={{
                borderEndWidth: 1,
                borderEndColor: COLORS.Skyblue,
                height: '100%',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: 45,
                  height: 45,
                  backgroundColor: '#4AB0D6',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    ...FONTS.body5,
                    color: COLORS.white,
                    textAlign: 'center',
                  }}>
                  សរុប
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  width: 58,
                  height: 45,
                  backgroundColor: '#4AB0D6',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderTopEndRadius: 2,
                }}>
                <Text
                  style={{
                    ...FONTS.body5,
                    color: COLORS.white,
                    textAlign: 'center',
                  }}>
                  ស្ថានភាព
                </Text>
              </View>
            </View>
          </View>
          {/*Row2*/}
          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              borderBottomColor: COLORS.Skyblue,
            }}>
            <View
              style={{
                borderEndWidth: 1,
                borderEndColor: COLORS.Skyblue,
                height: '100%',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: 65,
                  height: 35,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{...FONTS.body5, color: COLORS.Black}}>
                  02/03/2023
                </Text>
              </View>
            </View>
            <View
              style={{
                borderEndWidth: 1,
                borderEndColor: COLORS.Skyblue,
                height: '100%',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: 65,
                  height: 35,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    ...FONTS.body5,
                    color: COLORS.Black,
                    textAlign: 'center',
                  }}>
                  15,000$
                </Text>
              </View>
            </View>
            <View
              style={{
                borderEndWidth: 1,
                borderEndColor: COLORS.Skyblue,
                height: '100%',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: 60,
                  height: 35,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    ...FONTS.body5,
                    color: COLORS.Black,
                    textAlign: 'center',
                  }}>
                  3,000$
                </Text>
              </View>
            </View>
            <View
              style={{
                borderEndWidth: 1,
                borderEndColor: COLORS.Skyblue,
                height: '100%',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: 40,
                  height: 35,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    ...FONTS.body5,
                    color: COLORS.Black,
                    textAlign: 'center',
                  }}>
                  149$
                </Text>
              </View>
            </View>
            <View
              style={{
                borderEndWidth: 1,
                borderEndColor: COLORS.Skyblue,
                height: '100%',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: 45,
                  height: 35,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    ...FONTS.body5,
                    color: COLORS.Black,
                    textAlign: 'center',
                  }}>
                  3,149$
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  width: 63,
                  height: 35,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    ...FONTS.body5,
                    color: COLORS.Black,
                    textAlign: 'center',
                  }}>
                  បង់រួច
                </Text>
              </View>
            </View>
          </View>
          {/*Row3*/}
          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              borderBottomColor: COLORS.Skyblue,
            }}>
            <View
              style={{
                borderEndWidth: 1,
                borderEndColor: COLORS.Skyblue,
                height: '100%',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: 65,
                  height: 35,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{...FONTS.body5, color: COLORS.Black}}>
                  02/04/2023
                </Text>
              </View>
            </View>
            <View
              style={{
                borderEndWidth: 1,
                borderEndColor: COLORS.Skyblue,
                height: '100%',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: 65,
                  height: 35,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    ...FONTS.body5,
                    color: COLORS.Black,
                    textAlign: 'center',
                  }}>
                  12,000$
                </Text>
              </View>
            </View>
            <View
              style={{
                borderEndWidth: 1,
                borderEndColor: COLORS.Skyblue,
                height: '100%',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: 60,
                  height: 35,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    ...FONTS.body5,
                    color: COLORS.Black,
                    textAlign: 'center',
                  }}>
                  3,000$
                </Text>
              </View>
            </View>
            <View
              style={{
                borderEndWidth: 1,
                borderEndColor: COLORS.Skyblue,
                height: '100%',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: 40,
                  height: 35,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    ...FONTS.body5,
                    color: COLORS.Black,
                    textAlign: 'center',
                  }}>
                  149$
                </Text>
              </View>
            </View>
            <View
              style={{
                borderEndWidth: 1,
                borderEndColor: COLORS.Skyblue,
                height: '100%',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: 45,
                  height: 35,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    ...FONTS.body5,
                    color: COLORS.Black,
                    textAlign: 'center',
                  }}>
                  3,149$
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  width: 63,
                  height: 35,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    ...FONTS.body5,
                    color: COLORS.Black,
                    textAlign: 'center',
                  }}>
                  បង់រួច
                </Text>
              </View>
            </View>
          </View>

          {/*Row4*/}
          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              borderBottomColor: COLORS.Skyblue,
            }}>
            <View
              style={{
                borderEndWidth: 1,
                borderEndColor: COLORS.Skyblue,
                height: '100%',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: 65,
                  height: 45,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#4AB0D680',
                }}>
                <Text style={{...FONTS.body5, color: COLORS.Black}}>
                  02/05/2023
                </Text>
              </View>
            </View>
            <View
              style={{
                borderEndWidth: 1,
                borderEndColor: COLORS.Skyblue,
                height: '100%',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: 65,
                  height: 45,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#4AB0D680',
                }}>
                <Text
                  style={{
                    ...FONTS.body5,
                    color: COLORS.Black,
                    textAlign: 'center',
                  }}>
                  9,000$
                </Text>
              </View>
            </View>
            <View
              style={{
                borderEndWidth: 1,
                borderEndColor: COLORS.Skyblue,
                height: '100%',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: 60,
                  height: 45,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#4AB0D680',
                }}>
                <Text
                  style={{
                    ...FONTS.body5,
                    color: COLORS.Black,
                    textAlign: 'center',
                  }}>
                  3,000$
                </Text>
              </View>
            </View>
            <View
              style={{
                borderEndWidth: 1,
                borderEndColor: COLORS.Skyblue,
                height: '100%',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: 40,
                  height: 45,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#4AB0D680',
                }}>
                <Text
                  style={{
                    ...FONTS.body5,
                    color: COLORS.Black,
                    textAlign: 'center',
                  }}>
                  149$
                </Text>
              </View>
            </View>
            <View
              style={{
                borderEndWidth: 1,
                borderEndColor: COLORS.Skyblue,
                height: '100%',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: 45,
                  height: 45,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#4AB0D680',
                }}>
                <Text
                  style={{
                    ...FONTS.body5,
                    color: COLORS.Black,
                    textAlign: 'center',
                  }}>
                  3,149$
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  width: 60,
                  height: 45,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  style={{
                    width: 50,
                    height: 30,
                    backgroundColor: COLORS.red,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 2,
											}} onPress={() => navigation.navigate(routes.PaymentScreen)}>
                  <Text
                    style={{
                      ...FONTS.body5,
                      color: COLORS.white,
                      textAlign: 'center',
                    }}>
                    បង់ថ្ងៃនេះ
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/*Row5*/}
          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              borderBottomColor: COLORS.Skyblue,
            }}>
            <View
              style={{
                borderEndWidth: 1,
                borderEndColor: COLORS.Skyblue,
                height: '100%',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: 65,
                  height: 35,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{...FONTS.body5, color: COLORS.Black}}>
                  02/06/2023
                </Text>
              </View>
            </View>
            <View
              style={{
                borderEndWidth: 1,
                borderEndColor: COLORS.Skyblue,
                height: '100%',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: 65,
                  height: 35,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    ...FONTS.body5,
                    color: COLORS.Black,
                    textAlign: 'center',
                  }}>
                  6,000$
                </Text>
              </View>
            </View>
            <View
              style={{
                borderEndWidth: 1,
                borderEndColor: COLORS.Skyblue,
                height: '100%',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: 60,
                  height: 35,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    ...FONTS.body5,
                    color: COLORS.Black,
                    textAlign: 'center',
                  }}>
                  3,000$
                </Text>
              </View>
            </View>
            <View
              style={{
                borderEndWidth: 1,
                borderEndColor: COLORS.Skyblue,
                height: '100%',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: 40,
                  height: 35,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    ...FONTS.body5,
                    color: COLORS.Black,
                    textAlign: 'center',
                  }}>
                  149$
                </Text>
              </View>
            </View>
            <View
              style={{
                borderEndWidth: 1,
                borderEndColor: COLORS.Skyblue,
                height: '100%',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: 45,
                  height: 35,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    ...FONTS.body5,
                    color: COLORS.Black,
                    textAlign: 'center',
                  }}>
                  3,149$
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  width: 63,
                  height: 35,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    ...FONTS.body5,
                    color: COLORS.red,
                    textAlign: 'center',
                  }}>
                  មិនទាន់បង
                </Text>
              </View>
            </View>
          </View>
          {/*Row6*/}
          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              borderBottomColor: COLORS.Skyblue,
            }}>
            <View
              style={{
                borderEndWidth: 1,
                borderEndColor: COLORS.Skyblue,
                height: '100%',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: 65,
                  height: 35,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{...FONTS.body5, color: COLORS.Black}}>
                  02/07/2023
                </Text>
              </View>
            </View>
            <View
              style={{
                borderEndWidth: 1,
                borderEndColor: COLORS.Skyblue,
                height: '100%',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: 65,
                  height: 35,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    ...FONTS.body5,
                    color: COLORS.Black,
                    textAlign: 'center',
                  }}>
                  3,000$
                </Text>
              </View>
            </View>
            <View
              style={{
                borderEndWidth: 1,
                borderEndColor: COLORS.Skyblue,
                height: '100%',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: 60,
                  height: 35,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    ...FONTS.body5,
                    color: COLORS.Black,
                    textAlign: 'center',
                  }}>
                  3,000$
                </Text>
              </View>
            </View>
            <View
              style={{
                borderEndWidth: 1,
                borderEndColor: COLORS.Skyblue,
                height: '100%',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: 40,
                  height: 35,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    ...FONTS.body5,
                    color: COLORS.Black,
                    textAlign: 'center',
                  }}>
                  149$
                </Text>
              </View>
            </View>
            <View
              style={{
                borderEndWidth: 1,
                borderEndColor: COLORS.Skyblue,
                height: '100%',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: 45,
                  height: 35,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    ...FONTS.body5,
                    color: COLORS.Black,
                    textAlign: 'center',
                  }}>
                  3,149$
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  width: 63,
                  height: 35,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    ...FONTS.body5,
                    color: COLORS.red,
                    textAlign: 'center',
                  }}>
                  មិនទាន់បង
                </Text>
              </View>
            </View>
          </View>

          {/*Row7*/}
          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              borderBottomColor: COLORS.Skyblue,
            }}>
            <View
              style={{
                borderEndWidth: 1,
                borderEndColor: COLORS.Skyblue,
                height: '100%',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: 65,
                  height: 35,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{...FONTS.body5, color: COLORS.Black}}>
                  02/08/2023
                </Text>
              </View>
            </View>
            <View
              style={{
                borderEndWidth: 1,
                borderEndColor: COLORS.Skyblue,
                height: '100%',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: 65,
                  height: 35,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    ...FONTS.body5,
                    color: COLORS.Black,
                    textAlign: 'center',
                  }}>
                  0$
                </Text>
              </View>
            </View>
            <View
              style={{
                borderEndWidth: 1,
                borderEndColor: COLORS.Skyblue,
                height: '100%',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: 60,
                  height: 35,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    ...FONTS.body5,
                    color: COLORS.Black,
                    textAlign: 'center',
                  }}>
                  3,000$
                </Text>
              </View>
            </View>
            <View
              style={{
                borderEndWidth: 1,
                borderEndColor: COLORS.Skyblue,
                height: '100%',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: 40,
                  height: 35,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    ...FONTS.body5,
                    color: COLORS.Black,
                    textAlign: 'center',
                  }}>
                  149$
                </Text>
              </View>
            </View>
            <View
              style={{
                borderEndWidth: 1,
                borderEndColor: COLORS.Skyblue,
                height: '100%',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: 45,
                  height: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    ...FONTS.body5,
                    color: COLORS.Black,
                    textAlign: 'center',
                  }}>
                  3,149$
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  width: 63,
                  height: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    ...FONTS.body5,
                    color: COLORS.red,
                    textAlign: 'center',
                  }}>
                  មិនទាន់បង
                </Text>
              </View>
            </View>
          </View>

          {/*Row8*/}
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                borderEndWidth: 1,
                borderEndColor: COLORS.Skyblue,
                height: '100%',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: 65,
                  height: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#4AB0D6',
                  borderBottomStartRadius: 3,
                }}>
                <Text style={{...FONTS.body5, color: COLORS.white}}>សរុប</Text>
              </View>
            </View>
            <View
              style={{
                borderEndWidth: 1,
                borderEndColor: COLORS.Skyblue,
                height: '100%',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: 65,
                  height: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#4AB0D6',
                }}>
                <Text
                  style={{
                    ...FONTS.body5,
                    color: COLORS.white,
                    textAlign: 'center',
                  }}>
                  0$
                </Text>
              </View>
            </View>
            <View
              style={{
                borderEndWidth: 1,
                borderEndColor: COLORS.Skyblue,
                height: '100%',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: 60,
                  height: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#4AB0D6',
                }}>
                <Text
                  style={{
                    ...FONTS.body5,
                    color: COLORS.white,
                    textAlign: 'center',
                  }}>
                  15,000$
                </Text>
              </View>
            </View>
            <View
              style={{
                borderEndWidth: 1,
                borderEndColor: COLORS.Skyblue,
                height: '100%',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: 40,
                  height: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#4AB0D6',
                }}>
                <Text
                  style={{
                    ...FONTS.body5,
                    color: COLORS.white,
                    textAlign: 'center',
                  }}>
                  894$
                </Text>
              </View>
            </View>
            <View
              style={{
                borderEndWidth: 1,
                borderEndColor: COLORS.Skyblue,
                height: '100%',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: 45,
                  height: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#4AB0D6',
                }}>
                <Text
                  style={{
                    ...FONTS.body5,
                    color: COLORS.white,
                    textAlign: 'center',
                  }}>
                  18,894$
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  width: 63,
                  height: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}></View>
            </View>
          </View>
        </View>
      </View>
    );
  }
  function renderText() {
    return (
      <View style={{flex:1,marginHorizontal:20}}>
        <Text style={{...FONTS.h4, color: COLORS.Black, }}>
          កំណត់សម្គាល់
        </Text>
        <Text style={{...FONTS.body5, color: COLORS.Black}}>
          - អតិថិជនត្រូវបង់ប្រាក់អោយបានទៀងទាត់តាមកាលវិភាគ
        </Text>
        <Text style={{...FONTS.body5, color: COLORS.Black}}>
          {' '}
          - ការមិនគោរពកិច្ចសន្យា គ្រឹះស្ថាននឹងចាត់វិធានការតាមផ្លូវច្បាប់
        </Text>
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.Skyblue} />
      {renderHeader()}
      {renderTable1()}
				{renderTable2()}
				{renderText()}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
export default Repaymentschedule;

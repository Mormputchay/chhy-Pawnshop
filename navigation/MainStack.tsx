import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetStart from '../screens/GetStart';
import routes from '../contants/routes';
import PINScreen from '../screens/PINScreen';
import ForgetPassword from '../screens/ForgetPassword';
import OTPScreen from '../screens/OTPScreen';
import NewPassword from '../screens/NewPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import ReportsScreen from '../screens/ReportsScreen';
import Mortgagetype from '../screens/Mortgagetype';
import Capitalowner from '../screens/Capitalowner';
import SettingScreen from '../screens/SettingScreen';
import BottomNavigator from './BottomNavigator';
import Investors from '../screens/Investors';
import Mortgage from '../screens/Mortgage';
import Additionalcapital from '../screens/Additionalcapital';
import ABAScreen from '../screens/ABAScreen';
import Generalexpenses2 from '../screens/Generalexpenses2';
import Generalexpenses from '../screens/Generalexpenses';
import Buildmoney from '../screens/Buildmoney';
import Raisemoney from '../screens/Raisemoney';
import Actualcollection from '../screens/Actualcollection';
import Prepaidinterest from '../screens/Prepaidinterest';
import Totalinterest from '../screens/Totalinterest';
import Totalprincipal from '../screens/Totalprincipal';
import TodayLoan_amount from '../screens/Today_Loan_amount';
import Total_loan_amount from '../screens/Total_loan_amount';
import Borrowmoney from '../screens/Borrowmoney';
import Buildpartnerships from '../screens/Buildpartnerships';
import AccountScreen from '../screens/AccountScreen';
import NoticeScreen from '../screens/NoticeScreen';
import LanguageScreen from '../screens/LanguageScreen';
import EditAccount from '../screens/EditAccount';
import Addcustomers from '../screens/Addcustomers';
import PrivacyScreen from '../screens/PrivacyScreen';
import AboutScreen from '../screens/AboutScreen';
const Stack = createNativeStackNavigator();
import CustomerInformation from '../screens/CustomerInformation';
import Investors2 from '../screens/Investors2';
import Investors3 from '../screens/Investors3';
import Addinvestors from '../screens/Addinvestors';
import Addinvestors2 from '../screens/Addinvestors2';
import InvestorInformation from '../screens/InvestorInformation';
import Repaymentschedule from '../screens/Repaymentschedule';
import PaymentScreen from '../screens/PaymentScreen';
import Paywithcash from '../screens/Paywithcash';
import PaywithKHQRCode from '../screens/PaywithKHQRCode';
import LoadingScreen from '../screens/LoadingScreen';
const MainStack = () => {
		return (
			<Stack.Navigator screenOptions={{headerShown: false}}>
				<Stack.Screen component={GetStart} name={routes.GANStart}  />
				<Stack.Screen component={PINScreen} name={routes.PIN} />
				<Stack.Screen component={ForgetPassword} name={routes.ForgetPassword} />
				<Stack.Screen component={OTPScreen} name={routes.OTP}/>
				<Stack.Screen component={NewPassword} name={routes.NewPassword} />
				<Stack.Screen component={LoadingScreen} name={routes.Loading}/>
				<Stack.Screen component={BottomNavigator} name={routes.Home}/>
				<Stack.Screen component={ABAScreen} name={routes.ABAScreen} />
				<Stack.Screen component={ReportsScreen} name={routes.ReportsScreen} />
				<Stack.Screen component={Mortgagetype} name={routes.Mortgagetype} />
				<Stack.Screen component={Capitalowner} name={routes.Capitalowner} />
				<Stack.Screen component={SettingScreen} name={routes.SettingScreen} />
				<Stack.Screen component={Investors} name={routes.Inverstors}  />
				<Stack.Screen component={Mortgage} name={routes.Mortgage} />
				<Stack.Screen component={Additionalcapital} name={routes.Additionalcapital} />
				<Stack.Screen component={Generalexpenses} name={routes.Generalexpenses} />
				<Stack.Screen component={Generalexpenses2} name={routes.Generalexpenses2} />
				<Stack.Screen component={Buildmoney} name={routes.Buildmoney} />
				<Stack.Screen component={Raisemoney} name={routes.Raisemoney} />
				<Stack.Screen component={Actualcollection} name={routes.Actualcollection} />
				<Stack.Screen component={Prepaidinterest} name={routes.Prepaidinterest} />
				<Stack.Screen component={Totalinterest} name={routes.Totalinterest} />
				<Stack.Screen component={Totalprincipal} name={routes.Totalprincipal} />
				<Stack.Screen component={TodayLoan_amount} name={routes.TodayLoan_amount} />
				<Stack.Screen component={Total_loan_amount} name={routes.Total_loan_amount} />
				<Stack.Screen component={Borrowmoney} name={routes.Borrowmoney} />
				<Stack.Screen component={Buildpartnerships} name={routes.Buildpartnerships} />
				<Stack.Screen component={AccountScreen} name={routes.AccountScreen} />
				<Stack.Screen component={NoticeScreen} name={routes.NoticeScreen} />
				<Stack.Screen component={LanguageScreen} name={routes.LanguageScreen} />
				<Stack.Screen component={EditAccount} name={routes.EditAccount} />
				<Stack.Screen component={Addcustomers} name={routes.Addcustomers} />
				<Stack.Screen component={AboutScreen} name={routes.AboutScreen} />
				<Stack.Screen component={PrivacyScreen} name={routes.PrivacyScreen} />
				<Stack.Screen component={CustomerInformation} name={routes.CustomerInformation} />
				<Stack.Screen component={Addinvestors} name={routes.Addinvestors} />
				<Stack.Screen component={Addinvestors2} name={routes.Addinvestors2} />
				<Stack.Screen component={Investors2} name={routes.Investors2} />
				<Stack.Screen component={Investors3} name={routes.Investors3} />
				<Stack.Screen component={InvestorInformation} name={routes.InvestorInformation} />
				<Stack.Screen component={Repaymentschedule} name={routes.Repaymentschedule} />
				<Stack.Screen component={PaymentScreen} name={routes.PaymentScreen} />
				<Stack.Screen component={Paywithcash} name={routes.Paywithcash} />
				<Stack.Screen component={PaywithKHQRCode} name={routes.PaywithKHQRCode} />
			</Stack.Navigator>
		)
}

export default MainStack
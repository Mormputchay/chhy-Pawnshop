import SplashScreen from 'react-native-splash-screen'
import  React,{useEffect} from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Route from './src/navigation/Route';

const Stack = createNativeStackNavigator();

const App=() =>{
  useEffect(
    () => {
      SplashScreen.hide();
    },[]
  )
  return (
   <Route />
  );
}

export default App;
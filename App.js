import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity,SafeAreaView, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

import AppHeader from './components/AppHeader';
import Attendance from './screens/Attendance';
import BackAttendance from './screens/BackAttendance';
import Submit from './screens/Submit';

export default function App() { 
  return (
    <View> 
      <AppContainer />  
    </View>
  ); 
} 

var AppNavigator = createSwitchNavigator({
  Attendance: Attendance,
  Submit: Submit,
  BackAttendance:BackAttendance,
});

const AppContainer = createAppContainer(AppNavigator);
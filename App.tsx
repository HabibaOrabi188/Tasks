import React from 'react';
import {
  Text,
  View,
} from 'react-native';


import { styled } from 'nativewind';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Block1 from './Pages/Block1';
import Block2 from './Pages/Block2';
//import Block3 from './Pages/Block3';
import Block4 from './Pages/Block4';
import Block5 from './Pages/Block5';
import Block6 from './Pages/Block6';
const StyledView = styled(View)

const StyledText = styled(Text)

const App = () => {
  return (
    <Block6/>
  );

}
export default App;

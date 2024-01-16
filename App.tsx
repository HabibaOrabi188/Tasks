import 'react-native-gesture-handler';
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
import Block3 from './Pages/Block3';
import Block4 from './Pages/Block4';
import Block5 from './Pages/Block5';
import Block6 from './Pages/Block6';
import Block7 from './Pages/Block7'
import Block8 from './Pages/Block8';
import Block9 from './Pages/Block9';
import Block10 from './Pages/Block10';
const StyledView = styled(View)

const StyledText = styled(Text)

const App = () => {
  return (
    <Block9/>
  );

}
export default App;
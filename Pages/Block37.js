/// Testimonials
import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
  Image,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Images from '../Constants/Images';
import {styled} from 'nativewind';
import {Drawer} from 'react-native-drawer-layout';
import {Header} from 'react-native-elements';

import {
  MD3LightTheme as DefaultTheme,
  Button,
  Provider,
  PaperProvider,
  Dialog,
  Portal,
  Menu,
} from 'react-native-paper';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledButton = styled(TouchableOpacity);
const StyledInput = styled(TextInput);
const StyledDialog = styled(Dialog);
const StyledImage = styled(Image);
const Styledmenu = styled(Menu);
//const StyledIcon = styled(Icon);

const Block37 = () => {
  return (
    <StyledView className="flex h-full py-6 px-2 items-center">
      <FontAwesome5 name="quote-left" size={50} color="#9ca3af" />

      <StyledText className="text-2xl font-medium text-gray-900 my-5 text-center">
        "Flowbite is just awesome. It contains tons of predesigned components
        and pages starting from login screen to complex dashboard. Perfect
        choice for your next SaaS application."
      </StyledText>

      <StyledView className="flex-row items-center space-x-3">
        <Image className="h-8 w-8 rounded-full" source={Images.person3} />
        <StyledText className="font-medium text-base text-gray-900">
          Micheal Gough
        </StyledText>

        <StyledView className="w-1 h-6 border-l-2 border-gray-400"></StyledView>

        <StyledText className="text-sm font-light text-gray-400 ">
          CEO at Google
        </StyledText>
      </StyledView>
    </StyledView>
  );
};

export default Block37;

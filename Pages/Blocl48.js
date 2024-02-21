///User Onboarding
import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  ImageBackground,
  Image,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Images from '../Constants/Images';
import {styled} from 'nativewind';
import {Drawer} from 'react-native-drawer-layout';
import {Header} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

import {
  MD3LightTheme as DefaultTheme,
  Menu,
  Provider,
  PaperProvider,
} from 'react-native-paper';
import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome6';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledButton = styled(TouchableOpacity);
const StyledInput = styled(TextInput);
const Styledmenu = styled(Menu);
const StyledImage = styled(Image);
const StyledBackImage = styled(ImageBackground, Image);

const AnimatedView = styled(Animatable.View);
//const StyledIcon = styled(Icon);

const Block48 = () => {
  //MyCustomComponent = Animatable.createAnimatableComponent(StyledView);
  const [next, setnext] = useState(false);

  const [login, setlogin] = useState(false);

  const [desiger, setdesiger] = useState(0);
  const theme = {
    ...DefaultTheme,
    // Specify custom property
    myOwnProperty: true,
    // Specify custom property in nested object
    colors: {
      ...DefaultTheme.colors,
      myOwnColor: '#fff',
    },
  };

  return (
    <PaperProvider theme={theme}>
      <StyledView className="px-2 space-y-6">
        <StyledView className="flex-row self-center my-4">
          <StyledImage source={Images.Flowbite} className="w-6 h-6 ml-2" />
          <StyledText className="text-xl font-semibold text-gray-700">
            Flowbite
          </StyledText>
        </StyledView>

        <StyledView className="flex-row items-center space-x-2 ">
          <StyledText className="text-base text-gray-500  ">
            1 Personal
          </StyledText>
          <StyledText className="text-sm text-gray-400">/</StyledText>

          <StyledText className="text-base text-gray-500">2 Account</StyledText>
          <StyledText className="text-sm text-gray-400">/</StyledText>

          <StyledText className="text-base text-gray-500 ">
            3 Confirmation
          </StyledText>
        </StyledView>

        <StyledText className="text-2xl font-bold text-gray-700 ">
          Tell us about yourself
        </StyledText>

        <StyledText className="text-xl font-light text-gray-500">
          What is your profession?
        </StyledText>

        <StyledButton
          onPress={() => {
            setdesiger(1);
          }}
          className={
            desiger == 1
              ? ' w-full border-2 border-blue-500  bg-white h-16 items-center flex-row rounded-lg px-3 justify-between'
              : ' w-full border border-slate-300  bg-slate-50 h-16 items-center flex-row rounded-lg px-3 justify-between'
          }>
          <StyledView className="flex-row items-center space-x-2">
            <Entypo
              name="colours"
              size={20}
              color={desiger == 1 ? '#3b82f6' : '#8f9194'}
            />
            <StyledText
              className={
                desiger == 1 ? 'text-xl text-blue-500' : 'text-xl text-gray-500'
              }>
              I'm a Designr
            </StyledText>
          </StyledView>

          <FontAwesome6Icon
            name="arrow-right-long"
            size={20}
            color={desiger == 1 ? '#3b82f6' : '#8f9194'}
          />
        </StyledButton>

        <StyledButton
          onPress={() => {
            setdesiger(2);
          }}
          className={
            desiger == 2
              ? ' w-full border-2 border-blue-500  bg-white h-16 items-center flex-row rounded-lg px-3 justify-between'
              : ' w-full border border-gray-300  bg-slate-50 h-16 items-center flex-row rounded-lg px-3 justify-between'
          }>
          <StyledView className="flex-row items-center space-x-2">
            <Entypo
              name="code"
              size={20}
              color={desiger == 2 ? '#3b82f6' : '#8f9194'}
            />
            <StyledText
              className={
                desiger == 2 ? 'text-xl text-blue-500' : 'text-xl text-gray-500'
              }>
              I'm a Developer
            </StyledText>
          </StyledView>

          <FontAwesome6Icon
            name="arrow-right-long"
            size={20}
            color={desiger == 2 ? '#3b82f6' : '#8f9194'}
          />
        </StyledButton>

        <StyledButton
          onPress={() => {
            setnext(true);
          }}
          className={
            next
              ? ' w-full border-4 border-sky-300  bg-blue-500 h-14 items-center flex-row rounded-lg px-3 justify-center'
              : ' w-full  bg-blue-500 h-14 items-center flex-row rounded-lg px-3 justify-center'
          }>
          <StyledText className="text-white text-base font-medium">
            Next: Account Info
          </StyledText>
        </StyledButton>

        <StyledView className="flex-row items-center">
          <StyledText className="text-gray-500 text-base">
            Already have an account?
          </StyledText>

          <StyledButton
            onPressIn={() => {
              setlogin(true);
              setnext(false);
            }}
            onPressOut={() => {
              setlogin(false);
            }}>
            <StyledText
              className={
                login
                  ? 'text-base text-blue-500 mx-1 w-auto border-b border-blue-500'
                  : 'text-base text-blue-500 mx-1 w-auto '
              }>
              Login here.
            </StyledText>
          </StyledButton>
        </StyledView>
      </StyledView>
    </PaperProvider>
  );
};

export default Block48;

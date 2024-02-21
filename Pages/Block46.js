////// Cookie Consent
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

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Images from '../Constants/Images';
import {styled} from 'nativewind';

import {
  MD3LightTheme as DefaultTheme,
  Menu,
  Banner,
  PaperProvider,
  Portal,
  Modal,
} from 'react-native-paper';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledButton = styled(TouchableOpacity);
const StyledImage = styled(Image);
const StyledScrool = styled(ScrollView);
const StyledInbut = styled(TextInput);
const StyledBanner = styled(Banner);

const Block46 = () => {
  const [visible, setvisible] = useState(true);
  const [readBnt, setreadBnt] = useState(false);
  const [setting, setsetting] = useState(false);
  const [cookies, setcookies] = useState(false);
  const [accept, setaccept] = useState(false);
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
    <PaperProvider>
      <StyledBanner visible={visible} className=" bg-slate-100">
        <StyledView className="w-96">
          <StyledView className="">
            <StyledText className="text-gray-500 text-sm w-9/11 mr-10">
              We use our own cookies as well as third-party cookies on our
              websites to enhance your experience, analyze our traffic, and for
              security and marketing. Select "Accept All" to allow them to be
              used.
            </StyledText>

            <StyledView className="flex-row items-center">
              <StyledText className="text-gray-500 text-sm">
                Read our
              </StyledText>
              <StyledButton
                onPressIn={() => {
                  setreadBnt(true);
                  setaccept(false);
                  setcookies(false);
                }}
                onPressOut={() => {
                  setreadBnt(false);
                }}>
                <StyledText
                  className={
                    readBnt
                      ? 'font-medium  text-gray-900 text-sm w-auto border-b border-gray-900 ml-l'
                      : 'font-medium text-gray-900 text-sm w-auto ml-1'
                  }>
                  Cookie Policy.
                </StyledText>
              </StyledButton>
            </StyledView>
            <StyledButton
              onPressIn={() => {
                setsetting(true);
                setaccept(false);
                setcookies(false);
              }}
              onPressOut={() => {
                setsetting(false);
              }}>
              <StyledText
                className={
                  setting
                    ? 'font-medium  text-blue-500 text-sm w-28 border-b border-blue-500 my-4'
                    : 'font-medium text-blue-500 text-sm w-28 my-4'
                }>
                Manage settings
              </StyledText>
            </StyledButton>

            <StyledButton
              onPress={() => {
                setcookies(true);
                setaccept(false);
              }}
              className={
                cookies
                  ? 'w-80 h-12 bg-blue-500 rounded-lg items-center justify-center border-4 border-sky-300'
                  : 'w-80 h-10 bg-blue-500 rounded-lg items-center justify-center'
              }>
              <StyledText className="text-white font-medium text-base">
                Block all cookies
              </StyledText>
            </StyledButton>

            <StyledButton
              onPress={() => {
                setaccept(true);
                setcookies(false);
              }}
              className={
                accept
                  ? 'w-80 h-12 bg-blue-500 rounded-lg items-center justify-center border-4 border-sky-300 mt-4'
                  : 'w-80 h-10 bg-blue-500 rounded-lg items-center justify-center mt-4'
              }>
              <StyledText className="text-white font-medium text-base">
                Accept all
              </StyledText>
            </StyledButton>
          </StyledView>
        </StyledView>
      </StyledBanner>
    </PaperProvider>
  );
};

export default Block46;

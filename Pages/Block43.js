//// Account Recovery
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

const Block43 = () => {
  const [email, setemail] = useState('');
  const [emailBnt, setemailBnt] = useState(false);
  const [check, setcheck] = useState(false);
  const [submit, setsubmit] = useState(false);
  const theme = {
    ...DefaultTheme,
    // Specify custom property
    myOwnProperty: true,
    // Specify custom property in nested object
    colors: {
      ...DefaultTheme.colors,
      myOwnColor: '#e5e7eb',
    },
  };

  return (
    <StyledView className="flex h-full py-3 items-center bg-slate-100">
      <StyledView className="flex-row mb-4">
        <StyledImage source={Images.Flowbite} className="w-7 h-7 mr-1" />

        <StyledText className="text-xl font-semibold text-gray-900">
          Flowbite
        </StyledText>
      </StyledView>

      <StyledView className="w-11/12 bg-white border-2 border-gray-200 pl-4 rounded-lg py-6">
        <StyledText className="text-xl font-bold text-gray-900 ">
          Forgot your password?
        </StyledText>

        <StyledText className="text-xlfont-light text-gray-500 text-base mb-5 ">
          Don't fret! Just type in your email and we will send you a code to
          reset your password!
        </StyledText>

        <StyledText className="text-gray-800 text-base font-medium">
          Your email
        </StyledText>

        <StyledInput
          className={
            emailBnt
              ? 'border-2 border-blue-500 px-3 mt-1 rounded-xl bg-slate-100 h-14 w-11/12 text-base'
              : 'border border-gray-300 px-3 mt-1 rounded-xl bg-slate-100 h-14 w-11/12 text-base'
          }
          onPressIn={() => {
            setPasswordBnt(false);
            setconPasswordBnt(false);
            setsubmit(false);
            setemailBnt(true);
          }}
          onEndEditing={() => setemailBnt(false)}
          placeholder="name@company.com"
          value={email}
          onChangeText={value => {
            setemail(value);
          }}
        />

        <StyledView className="flex-row items-center my-4">
          <StyledButton
            onPress={() => {
              setcheck(!check);
              setemailBnt(false);
            }}
            className="flex-row items-center">
            {check ? (
              <AntDesign name="checksquare" color="#3b82f6" size={22} />
            ) : (
              <StyledView className="h-5 w-5 border border-gray-400"></StyledView>
            )}

            <StyledText className="text-gray-500 text-base ml-2">
              I accept the
            </StyledText>
          </StyledButton>
          <StyledButton>
            <StyledText className="text-blue-500 text-base ml-1 font-medium">
              Terms and Conditions
            </StyledText>
          </StyledButton>
        </StyledView>
        <StyledButton
          onPress={() => {
            setemailBnt(false);
            setsubmit(true);
          }}
          className={
            submit
              ? 'border-4 border-sky-300 items-center justify-center mt-1 rounded-xl bg-blue-500 h-12 w-11/12 '
              : 'items-center justify-center mt-1 rounded-xl bg-blue-500 h-12 w-11/12'
          }>
          <StyledText className=" text-white font-medium  text-base">
            Reset password
          </StyledText>
        </StyledButton>
      </StyledView>
    </StyledView>
  );
};

export default Block43;

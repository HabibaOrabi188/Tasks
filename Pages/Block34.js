//// Login Forms
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

const Block34 = () => {
  const [email, setemail] = useState('');
  const [emailBnt, setemailBnt] = useState(false);
  const [Password, setPassword] = useState('');
  const [PasswordBnt, setPasswordBnt] = useState(false);
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

      <StyledView className="w-11/12 bg-white border-2 border-gray-200 pl-4 pb-4 rounded-lg">
        <StyledText className="text-xl font-semibold text-gray-900 my-5 ">
          Sign in to your account
        </StyledText>

        <StyledText className="text-gray-800 text-sm font-medium">
          Your email
        </StyledText>

        <StyledInput
          className={
            emailBnt
              ? 'border-2 border-blue-500 px-3 mt-1 rounded-xl bg-slate-100 h-14 w-11/12 '
              : 'border border-gray-300 px-3 mt-1 rounded-xl bg-slate-100 h-14 w-11/12 '
          }
          onPressIn={() => {
            setPasswordBnt(false);
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

        <StyledText className="text-gray-800 text-sm font-medium mt-4 ">
          Password
        </StyledText>

        <StyledInput
          secureTextEntry={true}
          className={
            PasswordBnt
              ? 'border-2 border-blue-500 px-3 mt-1 rounded-xl bg-slate-100 h-14 w-11/12 text-3xl '
              : Password.length > 0
              ? 'border border-gray-300 px-3 mt-1 rounded-xl bg-slate-100 h-14 w-11/12 text-3xl'
              : 'border border-gray-300 px-3 mt-1 rounded-xl bg-slate-100 h-14 w-11/12 text-4xl'
          }
          onPressIn={() => {
            setemailBnt(false);
            setPasswordBnt(true);
            setsubmit(false);
          }}
          onEndEditing={() => setPasswordBnt(false)}
          placeholder=".........."
          value={Password}
          onChangeText={value => {
            setPassword(value);
          }}
        />

        <StyledView className="flex-row items-center justify-between my-4 w-11/12">
          <StyledButton
            onPress={() => {
              setcheck(!check);
              setemailBnt(false);
              setPasswordBnt(false);
            }}
            className="flex-row items-center">
            {check ? (
              <AntDesign name="checksquare" color="#3b82f6" size={22} />
            ) : (
              <StyledView className="h-5 w-5 border border-gray-300"></StyledView>
            )}

            <StyledText className="text-gray-500 font-light text-base ml-2">
              Remember me
            </StyledText>
          </StyledButton>

          <StyledButton>
            <StyledText className="text-blue-500 text-base ml-1 font-medium">
              Forgot password?
            </StyledText>
          </StyledButton>
        </StyledView>
        <StyledButton
          onPress={() => {
            setemailBnt(false);
            setPasswordBnt(false);
            setsubmit(true);
          }}
          className={
            submit
              ? 'border-4 border-sky-300 items-center justify-center my-1 rounded-xl bg-blue-500 h-12 w-11/12 '
              : 'items-center justify-center my-1 rounded-xl bg-blue-500 h-12 w-11/12'
          }>
          <StyledText className=" text-white font-medium  text-base">
            Sign in
          </StyledText>
        </StyledButton>

        <StyledView className="flex-row items-center my-4">
          <StyledText className="text-gray-500 font-light text-base ml-2">
            Don’t have an account yet?
          </StyledText>
          <StyledButton>
            <StyledText className="text-blue-500 text-base ml-1 font-medium">
              Sign up
            </StyledText>
          </StyledButton>
        </StyledView>
      </StyledView>
    </StyledView>
  );
};

export default Block34;

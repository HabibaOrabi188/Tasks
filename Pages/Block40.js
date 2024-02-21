/// Newsletter Sections
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

import {
  Table,
  TableWrapper,
  Row,
  Cell,
  Rows,
  Col,
} from 'react-native-table-component';

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
  Provider,
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
const Styledmenu = styled(Menu);

const Block40 = () => {
  const [email, setemail] = useState('');
  const [emailBnt, setemailBnt] = useState(false);
  const [sub, setsub] = useState(false);
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
    <StyledView className="flex items-center">
      <StyledText className="m-4 text-3xl tracking-tight font-bold text-gray-900">
        Sign up for our newsletter
      </StyledText>
      <StyledText className="mx-2 mb-8 text-xl font-light text-gray-400">
        Stay up to date with the roadmap progress, announcements and exclusive
        discounts feel free to sign up with your email.
      </StyledText>

      <StyledButton
        onPressIn={() => {
          setemailBnt(true);
          setsub(false);
        }}
        className={
          emailBnt
            ? 'border-2 border-gray-900 px-3  rounded-xl bg-white h-14 w-11/12 flex-row items-center space-x-.5'
            : 'border border-gray-300 px-3 rounded-xl bg-white h-14 w-11/12 flex-row items-center space-x-.5'
        }>
        <MaterialIcons name="mail" size={24} color="#9ca3af" />
        <StyledInbut
          onPressIn={() => {
            setemailBnt(true);
            setsub(false);
          }}
          className="text-base"
          onEndEditing={() => setemailBnt(false)}
          placeholder="name@company.com"
          value={email}
          onChangeText={value => {
            setemail(value);
          }}
        />
      </StyledButton>

      <StyledButton
        onPressIn={() => {
          setsub(true);
          setemailBnt(false);
        }}
        className={
          sub
            ? 'border-4 border-sky-300 px-3  rounded-xl bg-blue-500 mt-6 h-14 w-11/12 items-center justify-center'
            : ' px-3 rounded-xl bg-blue-500 h-14 mt-6 w-11/12 items-center justify-center'
        }>
        <StyledText className="text-base font-medium text-white">
          Subscribe
        </StyledText>
      </StyledButton>

      <StyledView className="flex-row mt-3">
        <StyledText className="text-base text-gray-400">
          We care about the protection of your data.
        </StyledText>
        <StyledButton>
          <StyledText className="text-base text-blue-500 ml-1">Read</StyledText>
        </StyledButton>
      </StyledView>
      <StyledView className=" w-11/12">
        <StyledButton>
          <StyledText className="text-base text-blue-500">
            our Privacy Policy.
          </StyledText>
        </StyledButton>
      </StyledView>
    </StyledView>
  );
};

export default Block40;

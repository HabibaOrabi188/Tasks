import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
} from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {styled} from 'nativewind';

import {
  MD3LightTheme as DefaultTheme,
  Menu,
  Provider,
  PaperProvider,
} from 'react-native-paper';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledButton = styled(TouchableOpacity);
const StyledInput = styled(TextInput);
const Styledmenu = styled(Menu);
//const StyledIcon = styled(Icon);

const Block5 = () => {
  const [Botton_border, setBotton_border] = useState(false);
  const [Botton_border2, setBotton_border2] = useState(false);
  return (
    <StyledView className="flex  bg-white space-y-3 px-4 pt-10">
      <StyledView>
        <StyledText className="text-4xl font-bold text-gray-900 my-2  ">
          Let's find more that brings us together.
        </StyledText>
        <StyledText className="text-base font-blod text-gray-400 my-5  ">
          Flowbite helps you connect with friends, family and communities of
          people who share your interests. Connecting with your friends and
          family as well as discovering new ones is easy with features like
          Groups, Watch and Marketplace.
        </StyledText>

        <StyledButton
          className={
            Botton_border
              ? 'flex py-2 px-24 justify-center items-center self-center bg-blue-500 rounded-xl items-center border-4 border-blue-300 my-3'
              : 'flex py-3 px-24 justify-center items-center self-center bg-blue-500 rounded-lg items-center my-3'
          }
          onPress={() => {
            setBotton_border(true);
          }}>
          <StyledText className="text-gray-100 text-lg font-medium mx-7">
            Get start
          </StyledText>
        </StyledButton>

        <StyledButton
          className={
            Botton_border2
              ? 'flex py-2 px-24 justify-center items-center self-center rounded-xl items-center border-4 border-gray-200 my-3 flex-row'
              : 'flex py-3 px-24 justify-center items-center self-center rounded-lg items-center border border-gray-500 my-3 flex-row'
          }
          onPress={() => {
            setBotton_border2(true);
          }}>
          <FontAwesome6 name="video" size={22} color="#1f2937" />
          <StyledText className="text-gray-800 text-lg font-medium ml-3 flex-row">
            View more
          </StyledText>
        </StyledButton>
      </StyledView>
    </StyledView>
  );
};

export default Block5;

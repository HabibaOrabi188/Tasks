//// Pricing Tables
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
const StyledIcon = styled(AntDesign);

const Block12 = () => {
  const [cards, setcards] = useState([
    {
      Type: 'Starter',
      text: 'Best option for personal use & for your next project.',
      cost: '$29',
      developer: 1,
      support: 6,
      updates: 6,
    },
    {
      Type: 'Company',
      text: 'Relevant for multiple users, extended & premium support.',
      cost: '$99',
      developer: 10,
      support: 24,
      updates: 24,
    },
    {
      Type: 'Enterprise',
      text: 'Best for large scale uses and extended redistribution rights.',
      cost: '$499',
      developer: 100,
      support: 36,
      updates: 36,
    },
  ]);

  const [start, setstart] = useState(false);

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
    <ScrollView>
      <StyledView className="flex items-center justify-center px-2 pt-5">
        <StyledText className="text-3xl tracking-tight font-bold text-gray-900 text-center mb-4">
          Designed for business teams like yours
        </StyledText>

        <StyledText className="font-light text-gray-500 text-base text-center mb-3">
          Here at Flowbite we focus on markets where technology, innovation, and
          capital can unlock long-term value and drive economic growth.
        </StyledText>

        <FlatList
          data={cards}
          scrollEnabled={false}
          renderItem={({item, index}) => {
            return (
              <StyledView className="m-4 border-2 border-gray-200 p-4  rounded-md ">
                <StyledText className="text-xl tracking-tight font-bold text-gray-900 text-center mb-4">
                  {item.Type}
                </StyledText>
                <StyledText className="font-light text-gray-500 text-base text-center mb-3 mx-2">
                  {item.text}
                </StyledText>
                <StyledView className="flex flex-row self-center my-2">
                  <StyledText className="text-4xl tracking-tight font-bold text-gray-900">
                    {item.cost}
                  </StyledText>
                  <StyledText className="text-gray-500 text-lg text-center ml-1 mt-2">
                    /month
                  </StyledText>
                </StyledView>

                <StyledView className="flex flex-row mt-2">
                  <StyledIcon name="check" size={22} color="#22c55e" />
                  <StyledText className="font-light text-gray-500 text-base text-center ml-2">
                    Individual configuration
                  </StyledText>
                </StyledView>

                <StyledView className="flex flex-row mt-2">
                  <StyledIcon name="check" size={22} color="#22c55e" />
                  <StyledText className="font-light text-gray-500 text-base text-center ml-2">
                    No setup, or hidden fees
                  </StyledText>
                </StyledView>

                <StyledView className="flex flex-row mt-2">
                  <StyledIcon name="check" size={22} color="#22c55e" />
                  <StyledText className="font-light text-gray-500 text-base text-center ml-2">
                    Team size:
                  </StyledText>
                  <StyledText className="font-blod text-gray-800 text-base text-center ml-2">
                    {item.developer} developer
                  </StyledText>
                </StyledView>

                <StyledView className="flex flex-row mt-2">
                  <StyledIcon name="check" size={22} color="#22c55e" />
                  <StyledText className="font-light text-gray-500 text-base text-center ml-2">
                    Premium support:
                  </StyledText>
                  <StyledText className="font-blod text-gray-800 text-base text-center ml-2">
                    {item.support} months
                  </StyledText>
                </StyledView>

                <StyledView className="flex flex-row mt-2">
                  <StyledIcon name="check" size={22} color="#22c55e" />
                  <StyledText className="font-light text-gray-500 text-base text-center ml-2">
                    Free updates:
                  </StyledText>
                  <StyledText className="font-blod text-gray-800 text-base text-center ml-2">
                    {item.updates} months
                  </StyledText>
                </StyledView>

                <StyledButton
                  onPress={() => {
                    setstart(true);
                  }}
                  className={
                    start
                      ? 'flex py-2 px-16 x-outo justify-center items-center self-center bg-blue-500 rounded-lg  items-center mt-2 border-2 border-blue-200'
                      : 'flex py-2 px-16 x-outo justify-center items-center self-center bg-blue-500 rounded-lg  items-center mt-2 '
                  }>
                  <StyledText className="text-gray-100 text-base font-medium mx-10">
                    Get start
                  </StyledText>
                </StyledButton>
              </StyledView>
            );
          }}
        />
      </StyledView>
    </ScrollView>
  );
};

export default Block12;

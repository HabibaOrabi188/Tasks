/// Project Portfolio
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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
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

const Block45 = () => {
  const [data, setdata] = useState([
    {
      title: 'Alphabet Inc.',
      title2: 'Official website',
      sub: false,
    },
    {
      title: 'Microsoft Corp.',
      title2: 'Management system',
      sub: false,
    },
    {
      title: 'Adobe Inc.',
      title2: 'Logo design',
      sub: false,
    },
  ]);
  setdata;
  const [num, setnum] = useState(-1);
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
      <StyledView className="flex h-full py-3 items-center ">
        <StyledText className="mb-4 text-3xl  tracking-tight font-extrabold text-gray-900 ">
          Our work
        </StyledText>

        <StyledText className="text-base font-normal text-gray-400 text-center mx-2">
          Crafted with skill and care to help our clients grow their business!
        </StyledText>

        <FlatList
          data={data}
          renderItem={({item, index}) => {
            return (
              <StyledView className="w-full items-center px-4">
                <StyledText className="w-auto bg-sky-100 mt-10 px-2 text-gray-500">
                  {item.title}
                </StyledText>

                <StyledText className="text-2xl font-bold leading-tight text-gray-900 my-3">
                  {item.title2}
                </StyledText>

                <StyledText className="text-lg font-normal text-gray-400 text-center">
                  Flowbite helps you connect with friends, family and
                  communities of people who share your interests.
                </StyledText>

                <StyledButton
                  onPress={() => {
                    setnum(index);
                    let arr = data;
                    for (let i = 0; i < arr.length; i++) {
                      i == index ? (arr[i].sub = true) : (arr[i].sub = false);
                    }
                    setdata(arr);
                  }}
                  className={
                    index == num
                      ? 'flex-row mt-4 h-12 w-6/12 bg-blue-500 items-center justify-center rounded-lg border-4 border-sky-300'
                      : 'flex-row mt-4 h-12 w-6/12 bg-blue-500 items-center justify-center rounded-lg'
                  }>
                  <StyledText className="text-white text-base mr-1 mb-1">
                    View case study
                  </StyledText>

                  <AntDesign name="arrowright" size={22} color="#fff" />
                </StyledButton>
              </StyledView>
            );
          }}
        />
      </StyledView>
    </ScrollView>
  );
};

export default Block45;

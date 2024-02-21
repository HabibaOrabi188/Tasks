//// Related Articles
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

const Block35 = () => {
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
      <ScrollView>
        <StyledView className="bg-slate-50 w-screen pl-4 ">
          <StyledView className="w-11/12 my-3">
            <StyledText className="text-2xl font-bold text-gray-900">
              Related articles
            </StyledText>

            <StyledImage
              className="w-11/12 h-52 my-5 rounded-lg"
              resizeMode="cover"
              source={Images.office}
            />

            <StyledText className="text-2xl font-semibold text-gray-900">
              Our first office
            </StyledText>

            <StyledText className="text-base text-gray-500 my-2">
              Over the past year, Volosoft has undergone many changes! After
              months of preparation.
            </StyledText>

            <StyledText className="text-lg font-medium text-blue-500 mt-2">
              Read in 2 minutes
            </StyledText>

            <StyledImage
              className="w-11/12 h-48 my-5 rounded-lg"
              resizeMode="cover"
              source={Images.Digital_art}
            />

            <StyledText className="text-2xl font-semibold text-gray-900">
              Enterprise design tips
            </StyledText>

            <StyledText className="text-base text-gray-500 my-2">
              Over the past year, Volosoft has undergone many changes! After
              months of preparation.
            </StyledText>
            <StyledText className="text-lg font-medium text-blue-500 mt-2">
              Read in 12 minutes
            </StyledText>

            <StyledImage
              className="w-11/12 h-48 my-5 rounded-lg"
              resizeMode="cover"
              source={Images.google}
            />

            <StyledText className="text-2xl font-semibold text-gray-900">
              We partnered with Google
            </StyledText>

            <StyledText className="text-base text-gray-500 my-2">
              Over the past year, Volosoft has undergone many changes! After
              months of preparation.
            </StyledText>
            <StyledText className="text-lg font-medium text-blue-500 mt-2">
              Read in 8 minutes
            </StyledText>

            <StyledImage
              className="w-11/12 h-48 my-5 rounded-lg"
              resizeMode="cover"
              source={Images.meeting}
            />

            <StyledText className="text-2xl font-semibold text-gray-900">
              Our first project with React
            </StyledText>

            <StyledText className="text-base text-gray-500 my-2">
              Over the past year, Volosoft has undergone many changes! After
              months of preparation.
            </StyledText>
            <StyledText className="text-lg font-medium text-blue-500 my-2">
              Read in 4 minutes
            </StyledText>
          </StyledView>
        </StyledView>
      </ScrollView>
    </PaperProvider>
  );
};

export default Block35;

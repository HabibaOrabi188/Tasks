///// Table Footers
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
import Ionicons from 'react-native-vector-icons/Ionicons';
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
const StyledInput = styled(TextInput);
const StyledModal = styled(Modal);
const StyledImage = styled(Image);
const StyledIcon = styled(FontAwesome5);

const Block24 = () => {
  return (
    <PaperProvider>
      <StyledView className="flex h-full justify-end">
        <StyledView className="pb-3">
          <StyledView className="flex flex-row  ">
            <StyledText className="flex flex-row ml-4 ">Showing</StyledText>
            <StyledText className="font-semibold text-gray-900">
              {' 1-10 '}
            </StyledText>
            <StyledText>of </StyledText>
            <StyledText className="font-semibold text-gray-900">
              1000{' '}
            </StyledText>
          </StyledView>
          <StyledView className="flex flex-row mt-3 ">
            <TouchableOpacity>
              <StyledIcon
                name="angle-left"
                size={26}
                className="text-xl text-gray-500 bg-white border border-gray-300 px-4  ml-4 rounded-l  py-1"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <StyledText className="text-lg text-gray-500 bg-white border border-gray-300 px-3  py-1">
                1
              </StyledText>
            </TouchableOpacity>
            <TouchableOpacity>
              <StyledText className="text-lg text-gray-500 bg-white border border-gray-300 px-3 py-1 ">
                2
              </StyledText>
            </TouchableOpacity>
            <TouchableOpacity>
              <StyledText className="text-lg text-blue-500 bg-blue-100 border border-blue-300 px-3  py-1">
                3
              </StyledText>
            </TouchableOpacity>
            <TouchableOpacity>
              <StyledText className="text-lg text-gray-500 bg-white border border-gray-300 px-3  py-1">
                ...
              </StyledText>
            </TouchableOpacity>

            <TouchableOpacity>
              <StyledText className="text-lg text-gray-500 bg-white border border-gray-300 px-2 py-1">
                100
              </StyledText>
            </TouchableOpacity>

            <TouchableOpacity>
              <StyledIcon
                name="angle-right"
                size={26}
                className="text-xl text-gray-500 bg-white border border-gray-300 px-4 rounded-r  py-1"
              />
            </TouchableOpacity>
          </StyledView>
        </StyledView>
      </StyledView>
    </PaperProvider>
  );
};

export default Block24;

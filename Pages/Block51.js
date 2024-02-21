//// 404 Pages

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
import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome6';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Images from '../Constants/Images';
import {styled} from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledButton = styled(TouchableOpacity);

const Block51 = () => {
  const [back, setback] = useState(false);

  return (
    <ScrollView>
      <StyledView className="py-8 px-4 ">
        <StyledText className="text-7xl tracking-tight font-extrabold text-center text-blue-500 mb-4">
          404
        </StyledText>

        <StyledText className="mb-4 text-3xl tracking-tight font-bold text-gray-900 text-center">
          Something's missing.
        </StyledText>
        <StyledText className="mb-4 text-lg font-light text-gray-500 text-center">
          Sorry, we can't find that page. You'll find lots to explore on the
          home page.
        </StyledText>

        <StyledButton
          onPress={() => {
            setback(true);
          }}
          className={
            back
              ? 'bg-blue-500 h-12 self-center items-center justify-center w-44 rounded-lg border-4 border-sky-300'
              : 'bg-blue-500 h-12 self-center items-center justify-center w-44 rounded-lg'
          }>
          <StyledText className="text-white font-medium text-base">
            Back to Homepage
          </StyledText>
        </StyledButton>
      </StyledView>
    </ScrollView>
  );
};

export default Block51;

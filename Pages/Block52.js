//// 500 page

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
import {styled} from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledButton = styled(TouchableOpacity);

const Block52 = () => {
  return (
    <ScrollView>
      <StyledView className="py-8 px-2 ">
        <StyledText className="text-7xl tracking-tight font-extrabold text-center text-blue-500 mb-4">
          500
        </StyledText>

        <StyledText className="mb-4 text-3xl tracking-tight font-bold text-gray-900 text-center">
          Internal Server Error.
        </StyledText>
        <StyledText className="mb-4 text-lg font-light text-gray-500 text-center">
          We are already working to solve the problem.
        </StyledText>
      </StyledView>
    </ScrollView>
  );
};

export default Block52;

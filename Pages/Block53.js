////// maintenance page
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

const Block53 = () => {
  return (
    <ScrollView>
      <StyledView className="py-8 px-2 items-center ">
        <FontAwesome6Icon name="screwdriver-wrench" color="#cbd5e1" size={40} />

        <StyledText className="mb-4 mb-4 text-4xl font-bold  text-gray-900 mt-4">
          Under Maintenance
        </StyledText>
        <StyledText className="mb-4 text-lg font-light text-gray-500 text-center">
          Our Enterprise administrators are performing scheduled maintenance.
        </StyledText>
      </StyledView>
    </ScrollView>
  );
};

export default Block53;

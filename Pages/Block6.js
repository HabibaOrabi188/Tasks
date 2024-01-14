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

const Block6 = () => {
  return (
    <StyledView className="flex space-y-3 px-5 pt-10">
      <StyledText className="text-3xl font-bold text-gray-900 my-2  ">
        Powering innovation at 200,000+ companies worldwide
      </StyledText>
      <StyledText className="text-base font-light font-blod text-gray-400 my-2  ">
        Track work across the enterprise through an open, collaborative
        platform. Link issues across Jira and ingest data from other software
        development tools, so your IT support and operations teams have richer
        contextual information to rapidly respond to requests, incidents, and
        changes.
      </StyledText>

      <StyledText className="text-base font-medium text-gray-400 my-2  ">
        Deliver great service experiences fast - without the complexity of
        traditional ITSM solutions.Accelerate critical development work,
        eliminate toil, and deploy changes with ease.
      </StyledText>

      <StyledButton className="flex flex-row items-center">
        <StyledText className="text-lg font-medium text-blue-400 mb-1 mr-1 ">
          Learn more
        </StyledText>

        <FontAwesome6 name="angle-right" size={18} color="#60a5fa" />
      </StyledButton>
    </StyledView>
  );
};

export default Block6;

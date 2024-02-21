//// Dashboard Footers
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
//import {IconButton, Tooltip} from 'react-native-paper';
import {Tooltip} from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome6Pro from 'react-native-vector-icons/FontAwesome6Pro';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Images from '../Constants/Images';
import {styled} from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledButton = styled(TouchableOpacity);
const StyledTool = styled(Tooltip);
const StyledImage = styled(Image);
const StyledIcon = styled(AntDesign);

const Block14 = () => {
  return (
    <StyledView className="items-center py-4 border-2 border-gray-300 rounded-xl">
      <StyledText>© 2019-2022 Flowbite.com. All rights reserved.</StyledText>

      <StyledView className="flex flex-row space-x-3 mt-4">
        <StyledView>
          <Tooltip
            backgroundColor="#000"
            popover={
              <StyledText className="text-gray-100">
                like Us on facebook
              </StyledText>
            }>
            <Fontisto name="facebook" size={20} />
          </Tooltip>
        </StyledView>

        <StyledView>
          <Tooltip
            backgroundColor="#000"
            popover={
              <StyledText className="text-gray-100">
                Follow us on twitter
              </StyledText>
            }>
            <Fontisto name="twitter" size={20} />
          </Tooltip>
        </StyledView>

        <StyledView>
          <Tooltip
            backgroundColor="#000"
            popover={
              <StyledText className="text-gray-100">
                Star us on GitHub
              </StyledText>
            }>
            <AntDesign name="github" size={20} />
          </Tooltip>
        </StyledView>

        <StyledView>
          <Tooltip
            backgroundColor="#000"
            popover={
              <StyledText className="text-gray-100">
                Follow us on Dribbble
              </StyledText>
            }>
            <AntDesign name="dribbble" size={20} />
          </Tooltip>
        </StyledView>
      </StyledView>
    </StyledView>
  );
};

export default Block14;

//// Read Sections (CRUD)
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
//const StyledIcon = styled(Icon);

const Block21 = () => {
  const [edit, setedit] = useState(false);

  const [dele, setdele] = useState(false);

  return (
    <PaperProvider>
      <StyledView className="flex py-8 px-3">
        <StyledText className="text-xl font-semibold text-gray-900 mb-1">
          Apple iMac 25
        </StyledText>

        <StyledText className="text-xl font-extrabold text-gray-900 mb-2">
          $2999
        </StyledText>

        <StyledText className="text-xl font-semibold text-gray-900 mb-2">
          Details
        </StyledText>

        <StyledText className="text-xl font-light text-gray-400 mb-4">
          Standard glass ,3.8GHz 8-core 10th-generation Intel Core i7 processor,
          Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory, Radeon Pro 5500 XT
          with 8GB of GDDR6 memory, 256GB SSD storage, Gigabit Ethernet, Magic
          Mouse 2, Magic Keyboard - US.
        </StyledText>

        <StyledView className="flex flex-row items-center space-x-6">
          <StyledView>
            <StyledText className="text-xl font-semibold text-gray-900 mb-2">
              Category
            </StyledText>
            <StyledText className="text-xl font-light text-gray-400 mb-2">
              Electronics/PC
            </StyledText>

            <StyledButton
              onPress={() => {
                setedit(true);
                setdele(false);
              }}
              className={
                edit
                  ? 'bg-blue-600 flex-row w-24 py-2 items-center justify-center h-12 rounded-lg border-4 border-sky-400'
                  : 'bg-blue-600 flex-row w-24 py-2 items-center justify-center h-12 rounded-lg'
              }>
              <FontAwesome5 name="edit" color="#fff" size={20} />
              <StyledText className="text-white font-medium rounded-lg text-sm ml-1">
                Edit
              </StyledText>
            </StyledButton>
          </StyledView>

          <StyledView>
            <StyledText className="text-xl font-semibold text-gray-900 mb-2">
              Item weight
            </StyledText>
            <StyledText className="text-xl font-light text-gray-400 mb-2">
              12kg
            </StyledText>

            <StyledButton
              onPress={() => {
                setedit(false);
                setdele(true);
              }}
              className={
                dele
                  ? 'bg-red-600 flex-row w-26 py-2 items-center justify-center h-12 rounded-lg border-4 border-pink-200'
                  : 'bg-red-600 flex-row w-26 py-2 items-center justify-center h-12 rounded-lg'
              }>
              <FontAwesome5 name="trash-alt" color="#fff" size={20} />
              <StyledText className="text-white font-medium rounded-lg text-sm ml-1">
                Delete
              </StyledText>
            </StyledButton>
          </StyledView>
        </StyledView>
      </StyledView>
    </PaperProvider>
  );
};

export default Block21;

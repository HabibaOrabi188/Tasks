//// Social Proof
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

const Block22 = () => {
  const [edit, setedit] = useState(false);

  const [dele, setdele] = useState(false);

  return (
    <PaperProvider>
      <StyledView className="flex space-y-1 px-3 items-center">
        <StyledView className="mt-5 items-center px-3">
          <StyledText className="text-3xl font-extrabold text-gray-900 ">
            73M+
          </StyledText>
          <StyledText className="font-light text-gray-500">
            developers
          </StyledText>
        </StyledView>

        <StyledView className="flex space-y-1 px-3 items-center px-3">
          <StyledText className="text-3xl font-extrabold text-gray-900 my-5">
            1B+
          </StyledText>
          <StyledText className="font-light text-gray-500">
            contributors
          </StyledText>
        </StyledView>
        <StyledText className="text-3xl font-extrabold text-gray-900 mt-5">
          4M+
        </StyledText>
        <StyledText className="font-light text-gray-500">
          organizations
        </StyledText>
      </StyledView>
    </PaperProvider>
  );
};

export default Block22;

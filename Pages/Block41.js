//// Banners
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
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Images from '../Constants/Images';
import {styled} from 'nativewind';

import {
  MD3LightTheme as DefaultTheme,
  Menu,
  Banner,
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
const StyledBanner = styled(Banner);

const Block41 = () => {
  const [visible, setvisible] = useState(true);
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
    <PaperProvider>
      <StyledBanner visible={visible} className="w-full bg-slate-100">
        <StyledView className="w-full flex-row space-x-2">
          <StyledView className="w-3/4 pr-4">
            <StyledText className="text-gray-500 text-sm">
              Supercharge your hiring by taking advantage of
            </StyledText>
            <StyledView className="flex-row items-center">
              <StyledText className="text-gray-500 text-sm">our</StyledText>
              <StyledButton>
                <StyledText className="text-blue-500 text-sm w-auto mx-1  border-b border-blue-500">
                  limited-time sale
                </StyledText>
              </StyledButton>
              <StyledText className="text-gray-500 text-sm">
                for Designer Search + Job
              </StyledText>
            </StyledView>
            <StyledView>
              <StyledText className="text-gray-500 text-sm w-72">
                Board. Unlimited access to over 190K top-ranked candidates and
                the #1 design job board.
              </StyledText>
            </StyledView>
          </StyledView>
          <StyledButton
            onPress={() => {
              setvisible(false);
            }}
            className="h-5 w-5">
            <FontAwesome5 name="times" size={20} />
          </StyledButton>
        </StyledView>
      </StyledBanner>
    </PaperProvider>
  );
};

export default Block41;

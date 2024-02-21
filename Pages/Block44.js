/// Blog sections
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
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Images from '../Constants/Images';
import {styled} from 'nativewind';
import {Drawer} from 'react-native-drawer-layout';
import {Header} from 'react-native-elements';

import {
  MD3LightTheme as DefaultTheme,
  Button,
  Provider,
  PaperProvider,
  Dialog,
  Portal,
  Menu,
} from 'react-native-paper';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledButton = styled(TouchableOpacity);
const StyledInput = styled(TextInput);
const StyledDialog = styled(Dialog);
const StyledImage = styled(Image);
const Styledmenu = styled(Menu);
//const StyledIcon = styled(Icon);

const Block44 = () => {
  const [email, setemail] = useState('');
  const [readBnt, setreadBnt] = useState(false);
  const [readBnt2, setreadBnt2] = useState(false);
  const theme = {
    ...DefaultTheme,
    // Specify custom property
    myOwnProperty: true,
    // Specify custom property in nested object
    colors: {
      ...DefaultTheme.colors,
      myOwnColor: '#e5e7eb',
    },
  };

  return (
    <ScrollView>
      <StyledView className="flex h-full py-3 items-center ">
        <StyledText className="mb-4 text-3xl  tracking-tight font-extrabold text-gray-900 ">
          Our Blog
        </StyledText>

        <StyledText className="font-light text-gray-400 text-base text-center mx-2">
          We use an agile approach to test assumptions and connect with the
          needs of your audience early and often.
        </StyledText>

        <StyledView className="w-11/12 border border-gray-300 mt-5 p-3 rounded-lg shadow-lg shadow-slate-200">
          <StyledView className="flex-row justify-between items-center mb-4">
            <StyledView className="flex-row bg-sky-300 items-center px-2 py-1">
              <FontAwesome5 name="video" color="#3b82f6" />
              <StyledText className="text-blue-500 ml-1">Tutorial</StyledText>
            </StyledView>
            <StyledText className="text-gray-500">14 days ago</StyledText>
          </StyledView>

          <StyledText className="mb-4 text-2xl mb-2 font-bold text-gray-900 ">
            How to quickly deploy a static website
          </StyledText>

          <StyledText className="mb-5 font-light text-gray-500 text-base">
            Static websites are now used to bootstrap lots of websites and are
            becoming the basis for a variety of tools that even influence both
            web designers and developers influence both web designers and
            developers.
          </StyledText>

          <StyledView className="flex-row items-center justify-between">
            <StyledView className="flex-row items-center space-x-4">
              <StyledImage
                source={Images.person2}
                className="h-10 w-10 rounded-full "
              />
              <StyledText className="font-medium text-base text-gray-900">
                Jese Leos
              </StyledText>
            </StyledView>

            <StyledButton
              onPressIn={() => {
                setreadBnt(true);
              }}
              onPressOut={() => {
                setreadBnt(false);
              }}
              className="flex-row items-center">
              <StyledText
                className={
                  readBnt
                    ? 'font-medium text-base text-blue-500 w-auto border-b border-blue-500 mr-1'
                    : 'font-medium text-base text-blue-500 w-auto mr-1'
                }>
                Read more
              </StyledText>

              <AntDesign name="arrowright" size={18} color="#3b82f6" />
            </StyledButton>
          </StyledView>
        </StyledView>

        <StyledView className="w-11/12 border border-gray-300 mt-8 p-3 rounded-lg shadow-lg shadow-slate-200">
          <StyledView className="flex-row justify-between items-center mb-4">
            <StyledView className="flex-row bg-sky-300 items-center px-2 py-1">
              <MaterialIcons name="article" color="#3b82f6" />
              <StyledText className="text-blue-500 ml-1">Article</StyledText>
            </StyledView>
            <StyledText className="text-gray-500">14 days ago</StyledText>
          </StyledView>

          <StyledText className="mb-4 text-2xl mb-2 font-bold text-gray-900 ">
            Our first project with React
          </StyledText>

          <StyledText className="mb-5 font-light text-gray-500 text-base">
            Static websites are now used to bootstrap lots of websites and are
            becoming the basis for a variety of tools that even influence both
            web designers and developers influence both web designers and
            developers. developers.
          </StyledText>

          <StyledView className="flex-row items-center justify-between">
            <StyledView className="flex-row items-center space-x-4">
              <StyledImage
                source={Images.person1}
                className="h-10 w-10 rounded-full "
              />
              <StyledText className="font-medium text-base text-gray-900">
                Bonnie Green
              </StyledText>
            </StyledView>

            <StyledButton
              onPressIn={() => {
                setreadBnt2(true);
              }}
              onPressOut={() => {
                setreadBnt(false);
              }}
              className="flex-row items-center">
              <StyledText
                className={
                  readBnt2
                    ? 'font-medium text-base text-blue-500 w-auto border-b border-blue-500 mr-1'
                    : 'font-medium text-base text-blue-500 w-auto mr-1'
                }>
                Read more
              </StyledText>

              <AntDesign name="arrowright" size={18} color="#3b82f6" />
            </StyledButton>
          </StyledView>
        </StyledView>
      </StyledView>
    </ScrollView>
  );
};

export default Block44;

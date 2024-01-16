import React, {useState} from 'react';
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Images from '../Constants/Images';
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
const StyleImage = styled(Image);
//const StyledIcon = styled(Icon);

const Block7 = () => {
  const [data, setData] = useState([
    'Home',
    'Company',
    'Marketplace',
    'Feature',
    'Team',
    'Contact',
  ]);
  const [menu, setMenu] = useState(false);
  const [loginBtn, setloginBtn] = useState(false);
  const [startBtn, setstartBtn] = useState(false);
  return (
    <StyledView className="flex h-screen  bg-gray-100  ">
      <StyledView className="flex h-14 flex-row justify-between bg-white items-cente p-1">
        <StyledView className="flex w-22 flex-row justify-between items-center space-x-1.5 mx-1">
          {/*<FontAwesome6 name="circle-play" size={24} />*/}

          <StyleImage source={Images.Flowbite} className="w-6 h-6" />

          <StyledText className="text-xl font-semibold text-gray-700">
            Flowbite
          </StyledText>
        </StyledView>

        <StyledView className="flex flex-row items-center px-1">
          <StyledButton
            onPress={() => {
              setloginBtn(!loginBtn);
              setstartBtn(false);
            }}
            className={
              loginBtn
                ? 'px-2 py-2 border-4 rounded-lg border-gray-300 items-center justify-center ml-1'
                : 'px-2 py-2 items-center justify-center '
            }>
            <StyledText
              className={
                loginBtn
                  ? 'text-gray-800 text-sm font-medium'
                  : 'text-gray-800 text-sm font-medium mr-1'
              }>
              Log in
            </StyledText>
          </StyledButton>

          <StyledButton
            onPress={() => {
              setstartBtn(!startBtn);
              setloginBtn(false);
            }}
            className={
              startBtn
                ? 'flex px-3 py-1 bg-blue-500 border-4 rounded-lg border-sky-200 items-center justify-center ml-1'
                : 'flex px-4 py-1 bg-blue-500 rounded-lg items-center justify-center ml-1'
            }>
            <StyledText className="text-gray-100 text-base font-medium">
              Get started
            </StyledText>
          </StyledButton>

          <StyledButton
            onPress={() => {
              setMenu(!menu);
              setloginBtn(false);
              setstartBtn(false);
            }}
            className={
              menu
                ? 'flex p-1 border border-gray-300 rounded ml-1.5'
                : 'flex p-1 rounded ml-2 '
            }>
            <Ionicons name="menu" size={22} />
          </StyledButton>
        </StyledView>
      </StyledView>

      <StyledView className="bg-white flex px-2">
        {data.map((item, index) =>
          menu ? (
            <StyledButton
              className={
                index == 0
                  ? 'm-1 py-3 rounded pl-2 bg-blue-500'
                  : 'm-1 py-3 rounded pl-2 border-b border-gray-200'
              }>
              <StyledText
                className={
                  index == 0
                    ? 'text-gray-100 text-lg font-medium'
                    : 'text-gray-700 text-lg font-medium'
                }>
                {item}
              </StyledText>
            </StyledButton>
          ) : null,
        )}
      </StyledView>
    </StyledView>
  );
};

export default Block7;

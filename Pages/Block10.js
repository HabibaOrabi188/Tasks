///Dropdown Filters
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
const StyledImage = styled(Image);
//const StyledIcon = styled(Icon);

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

const Block10 = () => {
  const [check, setCheck] = useState([
    {
      value: 'Apple (56)',
      check: false,
    },
    {
      value: 'Fitbit (56)',
      check: false,
    },
    {
      value: 'Dell (56)',
      check: false,
    },
    {
      value: 'Asus (97)',
      check: true,
    },
    {
      value: 'Logitech (97)',
      check: true,
    },
    {
      value: 'MSI (97)',
      check: true,
    },
    {
      value: ' Bosch (176)',
      check: true,
    },
    {
      value: 'Sony (234)',
      check: false,
    },
    {
      value: 'Samsung (76)',
      check: true,
    },
    {
      value: 'Canon (49)',
      check: false,
    },
    {
      value: 'Microsoft (45)',
      check: false,
    },
    {
      value: 'Razor (49)',
      check: false,
    },
  ]);

  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  const [value, setValue] = React.useState('first');

  const [checkNum, setcheckNum] = useState(-1);
  return (
    <Provider theme={theme}>
      <StyledView className="flex items-center pt-4 ">
        <Styledmenu
          className=" px-1  self-center "
          contentStyle={{backgroundColor: theme.colors.myOwnColor}}
          visible={visible}
          onDismiss={closeMenu}
          //anchorPosition="bottom"
          statusBarHeight={70}
          anchor={
            <TouchableOpacity onPress={openMenu}>
              <StyledView
                className={
                  visible
                    ? 'flex flex-row items-center justify-center px-3 bg-blue-500 border-4 py-3 rounded-xl border-sky-200 '
                    : 'flex flex-row items-center justify-center px-3 bg-blue-500 py-3 px-3.5 rounded-lg mt-1 mx-1'
                }>
                <StyledText className="text-lg text-gray-100 mr-2 mb-1">
                  Filter by category
                </StyledText>
                <FontAwesome6 name="angle-down" color={'#374151'} size={20} />
              </StyledView>
            </TouchableOpacity>
          }>
          <StyledView className="flex px-4 bg-white  ">
            <StyledText className="text-base text-gray-700">
              Categories
            </StyledText>
            <FlatList
              data={check}
              renderItem={({item, index}) => {
                return (
                  <StyledButton
                    onPress={() => {
                      let arr = check;
                      arr[index].check = !item.check;
                      setCheck(arr);
                      setcheckNum(index);
                    }}
                    className="flex flex-row items-center py-1">
                    <StyledView
                      className={
                        checkNum == index
                          ? 'flex h-7 w-7 border border-blue-500 rounded-md justify-center items-center'
                          : ''
                      }>
                      <StyledView
                        className={
                          item.check == true
                            ? 'h-5 w-5 border rounded-md bg-blue-500 border-gray-200 justify-center items-center'
                            : 'h-5 w-5 border rounded-md self-center bg-gray-100 border-gray-200 '
                        }>
                        {item.check ? (
                          <FontAwesome6 name="check" color={'#fff'} />
                        ) : null}
                      </StyledView>
                    </StyledView>
                    <StyledText
                      className={
                        item.check
                          ? 'text-base text-gray-700 ml-1 mr-6'
                          : checkNum == index
                          ? 'text-base text-gray-700 ml-1 mr-6'
                          : 'text-base text-gray-700 ml-1 mr-5'
                      }>
                      {item.value}
                    </StyledText>
                  </StyledButton>
                );
              }}
            />
          </StyledView>
        </Styledmenu>
      </StyledView>
    </Provider>
  );
};

export default Block10;

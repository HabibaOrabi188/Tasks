import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {styled} from 'nativewind';

import {
  MD3LightTheme as DefaultTheme,
  Menu,
  Provider,
  PaperProvider,
  RadioButton,
} from 'react-native-paper';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledButton = styled(TouchableOpacity);
const StyledInput = styled(TextInput);
const Styledmenu = styled(Menu);
const StyledIcon = styled(Icon);

const Block2 = () => {
  const [Botton_border, setBotton_border] = useState(false);

  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const [visible2, setVisible2] = React.useState(false);
  const openMenu2 = () => setVisible2(true);
  const closeMenu2 = () => setVisible2(false);
  const [value, setValue] = React.useState('first');

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
      check: false,
    },
  ]);

  const [checkNum, setCheckNum] = useState(-1);

  return (
    <PaperProvider theme={theme}>
      <StyledView className="h-screen items-center justify-center bg-gray-100">
        <StyledView className="relative x-1  px-4 space-y-3 lg:px-10 bg-white">
          <StyledView className="pl-5 y-5 mt-4 flex flex-row space-x-1 items-center border border-gray-300 bg-gray-50 rounded-xl mx-4 ">
            <Fontisto name="search" size={20} color={'#6b7280'} />
            <StyledInput
              className="text-base x-2 m"
              placeholder="Search"
              placeholderTextColor={'#9ca3af'}
            />
          </StyledView>

          {Botton_border ? (
            <StyledButton className="inline-flex py-2 px-5 px-24 justify-center items-center self-center bg-blue-500 rounded-xl flex flex-row items-center border-4 border-blue-300">
              <StyledIcon
                name="plus"
                size={15}
                color={'#fff'}
                className="ml-6"

                //style={{marginLeft: 30}}
              />
              <StyledText className="text-gray-100 text-lg font-medium ml-2">
                Add product
              </StyledText>
            </StyledButton>
          ) : (
            <StyledButton
              onPress={() => {
                setBotton_border(true);
              }}
              className="flex py-3 px-24 x-outo justify-center items-center self-center bg-blue-500 rounded-lg flex flex-row items-center ">
              <StyledIcon
                name="plus"
                size={15}
                color={'#fff'}
                className="ml-6"

                //style={{marginLeft: 30}}
              />
              <StyledText className="text-gray-100 text-lg font-medium ml-2">
                Add product
              </StyledText>
            </StyledButton>
          )}

          <StyledView className="px-4 mt-5 flex flex-row items-center rounded-xl mx-1 space-x-4 ">
            <StyledView className="flex items-center x-outo space-x-3 ma  ">
              <StyledView className="flex flex-row items-center justify-center px-4 py-2 border border-gray-300 rounded-lg mb-4 ">
                <Styledmenu
                  className="mt-3 self-center"
                  contentStyle={{backgroundColor: theme.colors.myOwnColor}}
                  visible={visible}
                  onDismiss={closeMenu}
                  anchorPosition="bottom"
                  //// elevation={theme.colors.myOwnColor}
                  anchor={
                    <TouchableOpacity onPress={openMenu}>
                      <StyledView className="flex flex-row items-center justify-center space-x-1 px-5 ">
                        <Icon name="chevron-down" color={'#374151'} size={20} />
                        <StyledText className="text-lg text-gray-700">
                          Actions
                        </StyledText>
                      </StyledView>
                    </TouchableOpacity>
                  }>
                  <Menu.Item onPress={() => {}} title="Mass Edit" />
                  <Menu.Item onPress={() => {}} title="Delete All" />
                </Styledmenu>
              </StyledView>
            </StyledView>

            <StyledView className="flex items-center x-outo space-x-3  ">
              <StyledView className="flex flex-row items-center justify-center px-4 py-2 border border-gray-300 rounded-lg mb-4 ">
                <Styledmenu
                  className=" px-1 y-4  self-center"
                  contentStyle={{backgroundColor: theme.colors.myOwnColor}}
                  visible={visible2}
                  onDismiss={closeMenu2}
                  //anchorPosition="bottom"
                  statusBarHeight={-180}
                  anchor={
                    <TouchableOpacity onPress={openMenu2}>
                      <StyledView className="flex flex-row items-center justify-center space-x-1 px-3 ">
                        <Fontisto name="filter" color={'#9ca3af'} size={18} />
                        <StyledText className="text-lg text-gray-700">
                          Filters
                        </StyledText>
                        <Icon name="chevron-down" color={'#374151'} size={20} />
                      </StyledView>
                    </TouchableOpacity>
                  }>
                  <StyledView className="flex space-y-2 p-2 ">
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
                              setCheckNum(index);
                            }}
                            className="flex flex-row items-center">
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
                                    : 'h-5 w-5 border rounded-md self-center bg-gray-100 border-gray-100 '
                                }>
                                {item.check ? (
                                  <Icon name="check" color={'#fff'} />
                                ) : null}
                              </StyledView>
                            </StyledView>
                            <StyledText
                              className={
                                item.check
                                  ? 'text-base text-gray-700 ml-1 mr-6'
                                  : 'text-base text-gray-700 ml-1 mr-6'
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
            </StyledView>
          </StyledView>
        </StyledView>
      </StyledView>
    </PaperProvider>
  );
};

export default Block2;

///// Advanced Tables
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
import Icon from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import {styled} from 'nativewind';

import {
  MD3LightTheme as DefaultTheme,
  Menu,
  Provider,
  PaperProvider,
  RadioButton,
} from 'react-native-paper';
import {
  Table,
  TableWrapper,
  Row,
  Cell,
  Rows,
  Col,
} from 'react-native-table-component';
const StyledView = styled(View);
const StyledText = styled(Text);
const StyledButton = styled(TouchableOpacity);
const StyledInput = styled(TextInput);
const Styledmenu = styled(Menu);
const StyledIcon = styled(Icon);
const StyleCell = styled(Cell);

const Block15 = () => {
  const [Botton_border, setBotton_border] = useState(false);

  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const [visible2, setVisible2] = React.useState(false);
  const openMenu2 = () => setVisible2(true);
  const closeMenu2 = () => setVisible2(false);
  const [value, setValue] = React.useState('first');

  const [visible3, setVisible3] = React.useState(false);
  const openMenu3 = () => setVisible3(true);
  const closeMenu3 = () => setVisible3(false);

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
      value: 'Microsoft (16)',
      check: false,
    },
    {
      value: 'Razor (49)',
      check: false,
    },
    {
      value: 'Nikon (12)',
      check: false,
    },
    {
      value: 'BenQ (74)',
      check: false,
    },
  ]);

  const [checkNum, setCheckNum] = useState(-1);

  const [tableHead, settableHead] = useState([
    'PRODUCT NAME',
    'CATEGORY',
    'BRAND',
    'DESCRIPTION',
    'PRICE',
    '  ',
  ]);
  const [tableData, settableData] = useState([
    [
      'Apple iMac 27',
      'PC',
      'Apple',
      '300',
      '$2999',
      <Styledmenu
        className="mt-3 self-center"
        contentStyle={{backgroundColor: theme.colors.myOwnColor}}
        visible={visible3}
        onDismiss={closeMenu3}
        anchorPosition="bottom"
        //// elevation={theme.colors.myOwnColor}
        anchor={
          <StyledButton onPress={openMenu3} className="px-5 ">
            <Entypo name="dots-three-horizontal" size={20} />
          </StyledButton>
        }>
        <Menu.Item onPress={() => {}} title="Mass Edit" />
        <Menu.Item onPress={() => {}} title="Delete All" />
      </Styledmenu>,
    ],
    [
      'Apple iMac 20',
      'PC',
      'Apple',
      '200',
      '$1499',
      <Styledmenu
        className="mt-3 self-center"
        contentStyle={{backgroundColor: theme.colors.myOwnColor}}
        visible={visible3}
        onDismiss={closeMenu3}
        anchorPosition="bottom"
        //// elevation={theme.colors.myOwnColor}
        anchor={
          <StyledButton onPress={openMenu3} className="px-5 ">
            <Entypo name="dots-three-horizontal" size={20} />
          </StyledButton>
        }>
        <Menu.Item onPress={() => {}} title="Mass Edit" />
        <Menu.Item onPress={() => {}} title="Delete All" />
      </Styledmenu>,
    ],
    [
      'Apple iPhone 14',
      'Phone',
      'Apple',
      '1237',
      '$999',
      <Styledmenu
        className="mt-3 self-center"
        contentStyle={{backgroundColor: theme.colors.myOwnColor}}
        visible={visible3}
        onDismiss={closeMenu3}
        anchorPosition="bottom"
        //// elevation={theme.colors.myOwnColor}
        anchor={
          <StyledButton onPress={openMenu3} className="px-5 ">
            <Entypo name="dots-three-horizontal" size={20} />
          </StyledButton>
        }>
        <Menu.Item onPress={() => {}} title="Mass Edit" />
        <Menu.Item onPress={() => {}} title="Delete All" />
      </Styledmenu>,
    ],
    [
      'Apple iPad Air',
      'Tablet',
      'Apple',
      '4578',
      '$1999',
      <Styledmenu
        className="mt-3 self-center"
        contentStyle={{backgroundColor: theme.colors.myOwnColor}}
        visible={visible3}
        onDismiss={closeMenu3}
        anchorPosition="bottom"
        //// elevation={theme.colors.myOwnColor}
        anchor={
          <StyledButton onPress={openMenu3} className="px-5 ">
            <Entypo name="dots-three-horizontal" size={20} />
          </StyledButton>
        }>
        <Menu.Item onPress={() => {}} title="Mass Edit" />
        <Menu.Item onPress={() => {}} title="Delete All" />
      </Styledmenu>,
    ],
    [
      'Xbox Series S',
      'Gaming/Console',
      'Microsoft',
      '56',
      '$299',
      <Styledmenu
        className="mt-3 self-center"
        contentStyle={{backgroundColor: theme.colors.myOwnColor}}
        visible={visible3}
        onDismiss={closeMenu3}
        anchorPosition="bottom"
        //// elevation={theme.colors.myOwnColor}
        anchor={
          <StyledButton onPress={openMenu3} className="px-5 ">
            <Entypo name="dots-three-horizontal" size={20} />
          </StyledButton>
        }>
        <Menu.Item onPress={() => {}} title="Mass Edit" />
        <Menu.Item onPress={() => {}} title="Delete All" />
      </Styledmenu>,
    ],
    [
      'PlayStation 5',
      'Gaming/Console',
      'Sony',
      '78',
      '$799',
      <Styledmenu
        className="mt-3 self-center"
        contentStyle={{backgroundColor: theme.colors.myOwnColor}}
        visible={visible3}
        onDismiss={closeMenu3}
        anchorPosition="bottom"
        //// elevation={theme.colors.myOwnColor}
        anchor={
          <StyledButton onPress={openMenu3} className="px-5 ">
            <Entypo name="dots-three-horizontal" size={20} />
          </StyledButton>
        }>
        <Menu.Item onPress={() => {}} title="Mass Edit" />
        <Menu.Item onPress={() => {}} title="Delete All" />
      </Styledmenu>,
    ],
    [
      'Xbox Series X',
      'Gaming/Console',
      'Microsoft',
      '200',
      '$699',
      <Styledmenu
        className="mt-3 self-center"
        contentStyle={{backgroundColor: theme.colors.myOwnColor}}
        visible={visible3}
        onDismiss={closeMenu3}
        anchorPosition="bottom"
        //// elevation={theme.colors.myOwnColor}
        anchor={
          <StyledButton onPress={openMenu3} className="px-5 ">
            <Entypo name="dots-three-horizontal" size={20} />
          </StyledButton>
        }>
        <Menu.Item onPress={() => {}} title="Mass Edit" />
        <Menu.Item onPress={() => {}} title="Delete All" />
      </Styledmenu>,
    ],
    [
      'Apple Watch SE',
      'Watch',
      'Apple',
      '657',
      '$399',
      <Styledmenu
        className="mt-3 self-center"
        contentStyle={{backgroundColor: theme.colors.myOwnColor}}
        visible={visible3}
        onDismiss={closeMenu3}
        anchorPosition="bottom"
        //// elevation={theme.colors.myOwnColor}
        anchor={
          <StyledButton onPress={openMenu3} className="px-5 ">
            <Entypo name="dots-three-horizontal" size={20} />
          </StyledButton>
        }>
        <Menu.Item onPress={() => {}} title="Mass Edit" />
        <Menu.Item onPress={() => {}} title="Delete All" />
      </Styledmenu>,
    ],
    [
      'NIKON D850',
      'Photo',
      'Nikon',
      '465',
      '$599',
      <Styledmenu
        className="mt-3 self-center"
        contentStyle={{backgroundColor: theme.colors.myOwnColor}}
        visible={visible3}
        onDismiss={closeMenu3}
        anchorPosition="bottom"
        //// elevation={theme.colors.myOwnColor}
        anchor={
          <StyledButton onPress={openMenu3} className="px-5 ">
            <Entypo name="dots-three-horizontal" size={20} />
          </StyledButton>
        }>
        <Menu.Item onPress={() => {}} title="Mass Edit" />
        <Menu.Item onPress={() => {}} title="Delete All" />
      </Styledmenu>,
    ],
    [
      'Monitor BenQ EX2710Q',
      'TV/Monitor',
      'BenQ',
      '354',
      '$499',
      <Styledmenu
        className="mt-3 self-center"
        contentStyle={{backgroundColor: theme.colors.myOwnColor}}
        visible={visible3}
        onDismiss={closeMenu3}
        anchorPosition="bottom"
        //// elevation={theme.colors.myOwnColor}
        anchor={
          <StyledButton onPress={openMenu3} className="px-5 ">
            <Entypo name="dots-three-horizontal" size={20} />
          </StyledButton>
        }>
        <Menu.Item onPress={() => {}} title="Mass Edit" />
        <Menu.Item onPress={() => {}} title="Delete All" />
      </Styledmenu>,
    ],
  ]);

  return (
    <PaperProvider theme={theme}>
      <ScrollView>
        <StyledView className="h-screen items-center justify-center bg-gray-100">
          <StyledView className="relative x-1  px-4 space-y-2 lg:px-10 bg-white">
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

            <StyledView className="px-4 mt-4 flex flex-row items-center rounded-xl mx-1 space-x-4 ">
              <StyledView className="flex items-center x-outo space-x-3 ">
                <StyledView className="flex flex-row items-center justify-center px-4 py-2 border border-gray-300 rounded-lg mb-2 ">
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
                          <Icon
                            name="chevron-down"
                            color={'#374151'}
                            size={20}
                          />
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
                    statusBarHeight={40}
                    anchor={
                      <TouchableOpacity onPress={openMenu2}>
                        <StyledView className="flex flex-row items-center justify-center space-x-1 px-3 ">
                          <Fontisto name="filter" color={'#9ca3af'} size={18} />
                          <StyledText className="text-lg text-gray-700">
                            Filters
                          </StyledText>
                          <Icon
                            name="chevron-down"
                            color={'#374151'}
                            size={20}
                          />
                        </StyledView>
                      </TouchableOpacity>
                    }>
                    <StyledView className="flex space-y-2 ml-3">
                      <StyledText className="text-base text-gray-700">
                        Choose brand
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

            <ScrollView showsVerticalScrollIndicator={true} horizontal={true}>
              <StyledView>
                <Table
                  borderStyle={{borderBottomWidth: 1, borderColor: '#d1d5db'}}>
                  <Row
                    data={tableHead}
                    flexArr={[1, 1, 1, 1, 1]}
                    style={{
                      height: 40,
                      backgroundColor: '#f9fafb',
                      // paddingLift: 16,
                      alignItems: 'center',
                    }}
                    textStyle={{textAlign: 'center'}}
                  />
                  <TableWrapper
                    style={{
                      flexDirection: 'row',
                      borderBottomWidth: 1,
                      borderColor: '#C1C0B9',
                    }}>
                    <Rows
                      data={tableData}
                      style={{
                        height: 40,
                        borderBottomWidth: 1,
                        borderColor: '#C1C0B9',
                      }}
                      textStyle={{textAlign: 'center', width: 155}}
                    />
                  </TableWrapper>
                </Table>
              </StyledView>
            </ScrollView>

            <StyledView className="pb-1">
              <StyledView className="flex flex-row  ">
                <StyledText className="flex flex-row ml-4 ">Showing</StyledText>
                <StyledText className="font-semibold text-gray-900">
                  {' 1-10 '}
                </StyledText>
                <StyledText>of </StyledText>
                <StyledText className="font-semibold text-gray-900">
                  1000{' '}
                </StyledText>
              </StyledView>
              <StyledView className="flex flex-row mt-3 ">
                <TouchableOpacity>
                  <StyledIcon
                    name="angle-left"
                    size={26}
                    className="text-xl text-gray-500 bg-white border border-gray-300 px-4  ml-4 rounded-l  py-1"
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <StyledText className="text-lg text-gray-500 bg-white border border-gray-300 px-3  py-1">
                    1
                  </StyledText>
                </TouchableOpacity>
                <TouchableOpacity>
                  <StyledText className="text-lg text-gray-500 bg-white border border-gray-300 px-3 py-1 ">
                    2
                  </StyledText>
                </TouchableOpacity>
                <TouchableOpacity>
                  <StyledText className="text-lg text-blue-500 bg-blue-100 border border-blue-300 px-3  py-1">
                    3
                  </StyledText>
                </TouchableOpacity>
                <TouchableOpacity>
                  <StyledText className="text-lg text-gray-500 bg-white border border-gray-300 px-3  py-1">
                    ...
                  </StyledText>
                </TouchableOpacity>

                <TouchableOpacity>
                  <StyledText className="text-lg text-gray-500 bg-white border border-gray-300 px-2 py-1">
                    100
                  </StyledText>
                </TouchableOpacity>

                <TouchableOpacity>
                  <StyledIcon
                    name="angle-right"
                    size={26}
                    className="text-xl text-gray-500 bg-white border border-gray-300 px-4 rounded-r  py-1"
                  />
                </TouchableOpacity>
              </StyledView>
            </StyledView>
          </StyledView>
        </StyledView>
      </ScrollView>
    </PaperProvider>
  );
};

export default Block15;

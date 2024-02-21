//// CRUD Layouts
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
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Images from '../Constants/Images';
import {styled} from 'nativewind';
import {Drawer} from 'react-native-drawer-layout';
import {Header} from 'react-native-elements';

import {
  Table,
  TableWrapper,
  Row,
  Cell,
  Rows,
  Cols,
} from 'react-native-table-component';

import {
  MD3LightTheme as DefaultTheme,
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
const StyledIcon = styled(FontAwesome5);

const Block23 = () => {
  const [search, setSearch] = useState(false);
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  const [name, setName] = useState('');
  const [nameBnt, setNameBnt] = useState(false);

  const [brand, setbrand] = useState('');
  const [brandBnt, setbrandBnt] = useState(false);

  const [price, setprice] = useState(399);
  const [priceBnt, setpriceBnt] = useState(false);

  const [visible2, setVisible2] = React.useState(false);
  const openMenu = () => setVisible2(true);
  const closeMenu = () => setVisible2(false);

  const [visibleMenu, setVisibleMenu] = React.useState(false);
  const openMenu3 = () => setVisibleMenu(true);
  const closeMenu3 = () => setVisibleMenu(false);

  const [visibleMenu2, setVisibleMenu2] = React.useState(false);
  const openMenu4 = () => setVisibleMenu2(true);
  const closeMenu4 = () => setVisibleMenu2(false);

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

  const [checkNum, setcheckNum] = useState(-1);

  const [categories, setcategories] = useState([
    {
      name: 'Select category',
      value: true,
    },
    {
      name: 'TV/Manitors',
      value: false,
    },
    {
      name: 'PC',
      value: false,
    },
    {
      name: 'Gaming/Console',
      value: false,
    },
    {
      name: 'Phones',
      value: false,
    },
  ]);

  const [categoryVal, setcategoryVal] = useState('Select category');

  const [description, setdescription] = useState('');
  const [descriptionBnt, setdescriptionBnt] = useState(false);

  const [submit, setsubmit] = useState(false);
  const [cancel, setcancel] = useState(0);

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
      <StyledButton onPress={openMenu3} className="px-5 ">
        <Entypo name="dots-three-horizontal" size={20} />
      </StyledButton>,
    ],
    [
      'Apple iMac 20',
      'PC',
      'Apple',
      '200',
      '$1499',
      <StyledButton onPress={openMenu3} className="px-5 ">
        <Entypo name="dots-three-horizontal" size={20} />
      </StyledButton>,
    ],
    [
      'Apple iPhone 14',
      'Phone',
      'Apple',
      '1237',
      '$999',
      <StyledButton onPress={openMenu3} className="px-5 ">
        <Entypo name="dots-three-horizontal" size={20} />
      </StyledButton>,
    ],
    [
      'Apple iPad Air',
      'Tablet',
      'Apple',
      '4578',
      '$1999',
      <StyledButton onPress={openMenu3} className="px-5 ">
        <Entypo name="dots-three-horizontal" size={20} />
      </StyledButton>,
    ],
    [
      'Xbox Series S',
      'Gaming/Console',
      'Microsoft',
      '56',
      '$299',
      <StyledButton onPress={openMenu3} className="px-5 ">
        <Entypo name="dots-three-horizontal" size={20} />
      </StyledButton>,
    ],
    [
      'PlayStation 5',
      'Gaming/Console',
      'Sony',
      '78',
      '$799',
      <StyledButton onPress={openMenu3} className="px-5 ">
        <Entypo name="dots-three-horizontal" size={20} />
      </StyledButton>,
    ],
    [
      'Xbox Series X',
      'Gaming/Console',
      'Microsoft',
      '200',
      '$699',
      <StyledButton onPress={openMenu3} className="px-5 ">
        <Entypo name="dots-three-horizontal" size={20} />
      </StyledButton>,
    ],
    [
      'Apple Watch SE',
      'Watch',
      'Apple',
      '657',
      '$399',
      <StyledButton onPress={openMenu3} className="px-5 ">
        <Entypo name="dots-three-horizontal" size={20} />
      </StyledButton>,
    ],
    [
      'NIKON D850',
      'Photo',
      'Nikon',
      '465',
      '$599',
      <StyledButton onPress={openMenu3} className="px-5 ">
        <Entypo name="dots-three-horizontal" size={20} />
      </StyledButton>,
    ],
    [
      'Monitor BenQ EX2710Q',
      'TV/Monitor',
      'BenQ',
      '354',
      '$499',

      <StyledButton onPress={openMenu3} className="px-5 ">
        <Entypo name="dots-three-horizontal" size={20} />
      </StyledButton>,
    ],
  ]);

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
    <PaperProvider theme={theme}>
      <ScrollView>
        <StyledView className="flex items-center pt-3">
          <StyledView
            className={
              search
                ? 'w-11/12 h-12 border-blue-500 bg-slate-50 rounded-xl flex-row space-x-1 my-3 items-center pl-4 border-2'
                : 'w-11/12 h-12 border-gray-200 bg-slate-100 rounded-xl flex-row space-x-1 my-3 items-center pl-4 border-2'
            }>
            <Fontisto name="search" size={20} color={'#6b7280'} />
            <StyledInput
              onPressIn={() => {
                setSearch(true);
              }}
              onEndEditing={() => {
                setSearch(false);
              }}
              className="text-base"
              placeholder="Search"
              placeholderTextColor={'#9ca3af'}
            />
          </StyledView>

          <StyledButton
            onPress={() => {
              setVisible(true);
            }}
            className="w-11/12 h-11 bg-blue-500 my-3 items-center justify-center rounded-xl mb-2">
            <StyledText className="text-gray-100 text-lg font-medium ">
              Add Product
            </StyledText>
          </StyledButton>

          <StyledView className="w-11/12 flex-row items-center space-x-3">
            <Styledmenu
              className="ml-3 self-center"
              contentStyle={{backgroundColor: theme.colors.myOwnColor}}
              visible={visibleMenu}
              onDismiss={closeMenu3}
              anchorPosition="bottom"
              statusBarHeight={10}
              elevation={theme.colors.myOwnColor}
              anchor={
                <StyledButton
                  className={
                    visibleMenu
                      ? 'flex flex-row items-center justify-center space-x-1 w-40  h-14 border-8 rounded-lg border-gray-200'
                      : 'flex flex-row items-center justify-center space-x-1 w-40  h-14 rounded-md  border border-zinc-300'
                  }
                  onPress={openMenu3}>
                  <FontAwesome5
                    name="chevron-down"
                    color={'#374151'}
                    size={20}
                  />
                  <StyledText className="text-lg text-gray-700">
                    Actions
                  </StyledText>
                </StyledButton>
              }>
              <StyledView className="w-36">
                <StyledButton className="border-b border-gray-200">
                  <StyledText className="text-lg text-gray-700 m-2">
                    Mass Edit
                  </StyledText>
                </StyledButton>
                <StyledButton>
                  <StyledText className="text-lg text-gray-700 m-2">
                    Delete All
                  </StyledText>
                </StyledButton>
              </StyledView>
            </Styledmenu>

            <Styledmenu
              className="ml-12 "
              contentStyle={{backgroundColor: theme.colors.myOwnColor}}
              visible={visibleMenu2}
              onDismiss={closeMenu4}
              statusBarHeight={65}
              anchor={
                <TouchableOpacity onPress={openMenu4}>
                  <StyledView
                    className={
                      visibleMenu2
                        ? 'flex h-14 flex-row items-center justify-center border-8 rounded-lg border-gray-200 w-40 ml-4 space-x1'
                        : 'flex h-14 flex-row items-center justify-center border border-zinc-300  rounded-lg  w-40 ml-4 space-x1'
                    }>
                    <Fontisto name="filter" color={'#9ca3af'} size={18} />
                    <StyledText className="text-lg text-gray-700">
                      Filters
                    </StyledText>
                    <FontAwesome5
                      name="chevron-down"
                      color={'#374151'}
                      size={20}
                    />
                  </StyledView>
                </TouchableOpacity>
              }>
              <StyledView className="flex px-4 bg-white ml-5 w-64">
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

          <ScrollView showsVerticalScrollIndicator={true} horizontal={true}>
            <StyledView className="ml-2">
              <Table
                borderStyle={{borderBottomWidth: 1, borderColor: '#d1d5db'}}>
                <Row
                  data={tableHead}
                  flexArr={[1, 2, 2, 2, 2]}
                  style={{
                    height: 40,
                    backgroundColor: '#f9fafb',
                    // paddingLift: 16,
                    alignItems: 'center',
                  }}
                  textStyle={{textAlign: 'center', width: 120}}
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
                    textStyle={{textAlign: 'center', width: 120}}
                  />
                </TableWrapper>
              </Table>
            </StyledView>
          </ScrollView>

          <StyledView className="pb-1 x-96 my-5 ">
            <StyledView className="flex flex-row x-96 ml-3">
              <StyledText className="flex flex-row ">Showing</StyledText>
              <StyledText className="font-semibold text-gray-900">
                {' 1-10 '}
              </StyledText>
              <StyledText>of </StyledText>
              <StyledText className="font-semibold text-gray-900">
                1000{' '}
              </StyledText>
            </StyledView>
            <StyledView className="flex flex-row mt-2 mr-4 ">
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

          <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
              <Dialog.Content>
                <ScrollView>
                  <StyledView className="flex h-full mb-4">
                    <StyledView className="flex flex-row justify-between items-center">
                      <StyledText className="text-gray-800 text-lg font-medium ">
                        Add Product
                      </StyledText>
                      <StyledButton onPress={hideDialog}>
                        <AntDesign name="close" size={20} />
                      </StyledButton>
                    </StyledView>

                    <StyledView className="flex h-0.5 bg-gray-300 mt-2"></StyledView>

                    <StyledText className="text-gray-800 text-lg font-normal mt-2 ">
                      Name
                    </StyledText>

                    <StyledInput
                      placeholder="Type product name"
                      className={
                        nameBnt
                          ? 'border-2 border-blue-500 px-3 mt-1 rounded-xl bg-gray-200 h-12'
                          : 'border border-gray-300 px-3 mt-1 rounded-xl bg-gray-200 h-12'
                      }
                      onPressIn={() => setNameBnt(true)}
                      onEndEditing={() => setNameBnt(false)}
                      value={name}
                      onChangeText={value => {
                        setName(value);
                      }}
                    />

                    <StyledText className="text-gray-800 text-lg font-normal mt-2 ">
                      Brand
                    </StyledText>

                    <StyledInput
                      placeholder="Product brand"
                      className={
                        brandBnt
                          ? 'border-2 border-blue-500 px-3 mt-1 rounded-xl bg-gray-200 h-12'
                          : 'border border-gray-300 px-3 mt-1 rounded-xl bg-gray-200 h-12'
                      }
                      onPressIn={() => setbrandBnt(true)}
                      onEndEditing={() => setbrandBnt(false)}
                      value={brand}
                      onChangeText={value => {
                        setbrand(value);
                      }}
                    />

                    <StyledText className="text-gray-800 text-lg font-normal mt-2 ">
                      Price
                    </StyledText>

                    <StyledView
                      className={
                        priceBnt
                          ? 'border-2 border-blue-500 px-3 mt-1 rounded-xl bg-gray-200 flex-row items-center justify-between '
                          : 'border border-gray-300 px-3 mt-1 rounded-xl bg-gray-200 flex-row items-center justify-between'
                      }>
                      <TextInput
                        placeholder="$2999"
                        onPressIn={() => setpriceBnt(true)}
                        onEndEditing={() => setpriceBnt(false)}
                        keyboardType="numeric"
                        value={price.toString()}
                        onChangeText={value => {
                          setprice(parseInt(value));
                        }}
                      />

                      <StyledView className="">
                        <StyledButton
                          className="w-5 h-2 items-center ml-3"
                          onPress={() => {
                            let val = price + 1;
                            setprice(val);
                          }}>
                          <FontAwesome5 name="sort-up" size={15} />
                        </StyledButton>

                        <StyledButton
                          className="w-5 items-center ml-3 "
                          onPress={() => {
                            let val = price - 1;
                            setprice(val);
                          }}>
                          <FontAwesome5 name="sort-down" size={15} />
                        </StyledButton>
                      </StyledView>
                    </StyledView>

                    <StyledText className="text-gray-800 text-lg font-normal mt-2 ">
                      Category
                    </StyledText>

                    <StyledView
                      className={
                        visible2
                          ? 'border-2 border-blue-500 px-3 mt-1 rounded-xl bg-gray-200 flex-row items-center h-12'
                          : 'border border-gray-300 px-3 mt-1 rounded-xl bg-gray-200 flex-row items-center h-12'
                      }>
                      <Styledmenu
                        className="  self-center"
                        contentStyle={{
                          backgroundColor: theme.colors.myOwnColor,
                          width: 238,
                          marginRight: 18,
                          //height: 100,
                        }}
                        visible={visible2}
                        onDismiss={closeMenu}
                        //anchorPosition="bottom"
                        statusBarHeight={35}
                        anchor={
                          <StyledButton
                            className={
                              'flex w-full flex-row justify-evenly space-x-16 '
                            }
                            onPress={openMenu}>
                            <StyledText className="mr-20">
                              {categoryVal}
                            </StyledText>
                            <FontAwesome5 name="angle-down" size={15} />
                          </StyledButton>
                        }>
                        <StyledView className="flex space-y-2 ">
                          <FlatList
                            data={categories}
                            renderItem={({item, index}) => {
                              return (
                                <StyledButton
                                  onPress={() => {
                                    setcategoryVal(item.name);
                                    let arr = categories;
                                    for (let i = 0; i < arr.length; i++) {
                                      i == index
                                        ? (arr[i].value = true)
                                        : (arr[i].value = false);
                                    }
                                    setcategories(arr);
                                  }}
                                  className={item.value ? 'bg-blue-500' : null}>
                                  <StyledText className="text-base">
                                    {item.name}
                                  </StyledText>
                                </StyledButton>
                              );
                            }}
                          />
                        </StyledView>
                      </Styledmenu>
                    </StyledView>

                    <StyledText className="text-gray-800 text-lg font-normal mt-2 ">
                      Description
                    </StyledText>

                    <StyledInput
                      placeholder="Write product description here"
                      className={
                        descriptionBnt
                          ? 'border-2 border-blue-500 px-3 mt-1 rounded-xl bg-gray-200 y-20 pb-14'
                          : 'border border-gray-300 px-3 mt-1 rounded-xl bg-gray-200 h-20 pb-14'
                      }
                      onPressIn={() => setdescriptionBnt(true)}
                      onEndEditing={() => setdescriptionBnt(false)}
                      multiline={true}
                      value={description}
                      onChangeText={value => {
                        setdescription(value);
                      }}
                    />

                    <StyledView className="flex flex-row space-x-5 ">
                      <StyledButton
                        onPress={() => {
                          setsubmit(true);
                        }}
                        className={
                          submit
                            ? 'flex py-2 px-3 x-outo justify-center items-center self-center bg-blue-500 rounded-lg  items-center mt-2 border-2 border-blue-200'
                            : 'flex py-2 px-3 x-outo justify-center items-center self-center bg-blue-500 rounded-lg  items-center mt-2 '
                        }>
                        <StyledText className="text-gray-100 text-base font-medium ">
                          + Add new product
                        </StyledText>
                      </StyledButton>
                    </StyledView>
                  </StyledView>
                </ScrollView>
              </Dialog.Content>
            </Dialog>
          </Portal>
        </StyledView>
      </ScrollView>
    </PaperProvider>
  );
};

export default Block23;

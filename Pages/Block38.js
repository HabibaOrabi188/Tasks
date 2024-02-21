//// Create Drawers (CRUD)
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
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styled} from 'nativewind';

import {Drawer} from 'react-native-drawer-layout';
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
const Styledmenu = styled(Menu);

const Block38 = () => {
  const [open, setOpen] = React.useState(false);

  const [name, setName] = useState('');
  const [nameBnt, setNameBnt] = useState(false);

  const [brand, setbrand] = useState('');
  const [brandBnt, setbrandBnt] = useState(false);

  const [price, setprice] = useState('');
  const [priceBnt, setpriceBnt] = useState(false);

  const [visible2, setVisible2] = React.useState(false);
  const openMenu = () => setVisible2(true);
  const closeMenu = () => setVisible2(false);

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

  const [edit, setedit] = useState(false);

  const [dele, setdele] = useState(false);

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
    <PaperProvider theme={theme}>
      <Drawer
        open={open}
        drawerType="slide"
        swipeEdgeWidth={20}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        renderDrawerContent={() => {
          return (
            <ScrollView>
              <StyledView className="flex py-3 pl-2 pr-3 ">
                <StyledView className="flex-row justify-between mb-3">
                  <StyledText className="text-xl font-semibold text-gray-500 mb-1">
                    NEW PRODUCT
                  </StyledText>
                  <StyledButton>
                    <StyledButton
                      onPress={() => {
                        setOpen(false);
                      }}>
                      <AntDesign name="close" size={20} />
                    </StyledButton>
                  </StyledButton>
                </StyledView>

                <StyledText className="text-gray-800 text-lg font-normal mt-2 ">
                  Name
                </StyledText>

                <StyledInput
                  placeholder="Type product name"
                  className={
                    nameBnt
                      ? 'border-2 border-blue-500 px-3 mt-1 rounded-xl bg-slate-50 h-12'
                      : 'border border-gray-300 px-3 mt-1 rounded-xl bg-slate-50 h-12'
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
                      ? 'border-2 border-blue-500 px-3 mt-1 rounded-xl bg-slate-50 h-12'
                      : 'border border-gray-300 px-3 mt-1 rounded-xl bg-slate-50 h-12'
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
                      ? 'border-2 border-blue-500 px-3 mt-1 rounded-xl bg-slate-50 flex-row items-center justify-between '
                      : 'border border-gray-300 px-3 mt-1 rounded-xl bg-slate-50 flex-row items-center justify-between'
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
                      ? 'border-2 border-blue-500 px-3 mt-1 rounded-xl bg-slate-50 flex-row items-center h-12'
                      : 'border border-gray-300 px-3 mt-1 rounded-xl bg-slate-50 flex-row items-center h-12'
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
                        <StyledText className="mr-20">{categoryVal}</StyledText>
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

                <StyledButton
                  onPress={() => {
                    setdescriptionBnt(true);
                  }}
                  className={
                    descriptionBnt
                      ? 'border-2 border-blue-500 px-3 mt-1 rounded-xl bg-slate-50  h-28'
                      : 'border border-gray-300 px-3 mt-1 rounded-xl bg-slate-50  h-28'
                  }>
                  <StyledInput
                    placeholder="Enter event description here
                    "
                    onPressIn={() => {
                      setdescriptionBnt(true);
                    }}
                    onEndEditing={() => setdescriptionBnt(false)}
                    multiline={true}
                    value={description}
                    onChangeText={val => {
                      setdescription(val);
                    }}
                  />
                </StyledButton>

                <StyledView className="flex">
                  <StyledView className="flex-row justify-between mt-3">
                    <StyledButton
                      onPress={() => {
                        setedit(true);
                        setdele(false);
                      }}
                      className={
                        edit
                          ? 'bg-blue-500 flex-row w-32  items-center justify-center h-12 rounded-lg border-4 border-sky-400'
                          : 'bg-blue-500 flex-row w-32 items-center justify-center h-12 rounded-lg'
                      }>
                      <StyledText className="text-white font-medium rounded-lg text-base ml-1">
                        Add product
                      </StyledText>
                    </StyledButton>
                    <StyledButton
                      onPress={() => {
                        setedit(false);
                        setdele(true);
                        setOpen(prevOpen => !prevOpen);
                      }}
                      className={
                        dele
                          ? 'flex-row w-32 items-center justify-center h-12 rounded-lg border-4 border-sky-300'
                          : 'border border-gray-200 flex-row w-32 items-center justify-center h-12 rounded-lg'
                      }>
                      <AntDesign name="close" color="#9ca3af" size={20} />
                      <StyledText className="text-gray-400 font-normal rounded-lg text-base ml-1">
                        Cancel
                      </StyledText>
                    </StyledButton>
                  </StyledView>
                </StyledView>
              </StyledView>
            </ScrollView>
          );
        }}>
        <StyledButton
          className={
            open
              ? ''
              : 'flex w-36 justify-center h-11 bg-blue-500 self-center items-center mt-5 rounded-lg'
          }
          onPress={() => {
            setedit(false);
            setdele(false);
            setOpen(prevOpen => !prevOpen);
          }}>
          <StyledText className=" text-white text-base font-medium">
            Create products
          </StyledText>
        </StyledButton>
      </Drawer>
    </PaperProvider>
  );
};

export default Block38;

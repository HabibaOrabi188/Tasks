///// Update Forms (CRUD)
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

const Block32 = () => {
  const [open, setOpen] = React.useState(false);

  const [name, setName] = useState('Apple iMac 27“');
  const [nameBnt, setNameBnt] = useState(false);

  const [brand, setbrand] = useState('Apple');
  const [brandBnt, setbrandBnt] = useState(false);

  const [price, setprice] = useState(2999);
  const [priceBnt, setpriceBnt] = useState(false);

  const [visible2, setVisible2] = React.useState(false);
  const openMenu = () => setVisible2(true);
  const closeMenu = () => setVisible2(false);

  const [categories, setcategories] = useState([
    {
      name: 'Electronics',
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

  const [categoryVal, setcategoryVal] = useState('Electronics');

  const [description, setdescription] = useState(
    'Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US',
  );
  const [descriptionBnt, setdescriptionBnt] = useState(false);

  const [weight, setweight] = useState(15);
  const [weightBnt, setweightBnt] = useState(false);

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
      <ScrollView>
        <StyledView className="flex py-3 pl-2 pr-3 ">
          <StyledView className="flex-row justify-between mb-2">
            <StyledText className="text-xl font-semibold text-gray-900 ">
              Update product
            </StyledText>
          </StyledView>

          <StyledText className="text-gray-800 text-lg font-normal mt-2 ">
            Name
          </StyledText>

          <StyledInput
            placeholder="Type product name"
            className={
              nameBnt
                ? 'border-2 border-blue-500 px-3 mt-1 rounded-xl bg-slate-100 h-12'
                : 'border border-gray-300 px-3 mt-1 rounded-xl bg-slate-100 h-12'
            }
            onPressIn={() => setNameBnt(true)}
            onEndEditing={() => setNameBnt(false)}
            value={name}
            onChangeText={value => {
              setName(value);
            }}
          />

          <StyledText className="text-gray-800 text-base font-normal mt-2 ">
            Brand
          </StyledText>

          <StyledInput
            placeholder="Product brand"
            className={
              brandBnt
                ? 'border-2 border-blue-500 px-3 mt-1 rounded-xl bg-slate-100 h-12'
                : 'border border-gray-300 px-3 mt-1 rounded-xl bg-slate-100 h-12'
            }
            onPressIn={() => setbrandBnt(true)}
            onEndEditing={() => setbrandBnt(false)}
            value={brand}
            onChangeText={value => {
              setbrand(value);
            }}
          />

          <StyledText className="text-gray-800 text-base font-normal mt-2 ">
            Price
          </StyledText>

          <StyledView
            className={
              priceBnt
                ? 'border-2 border-blue-500 px-3 mt-1 rounded-xl bg-slate-100 flex-row items-center justify-between '
                : 'border border-gray-300 px-3 mt-1 rounded-xl bg-slate-100 flex-row items-center justify-between'
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

          <StyledText className="text-gray-800 text-base font-normal mt-2 ">
            Category
          </StyledText>

          <StyledView
            className={
              visible2
                ? 'border-2 border-blue-500 px-3 mt-1 rounded-xl bg-slate-100 flex-row items-center h-12 '
                : 'border border-gray-300 px-3 mt-1 rounded-xl bg-slate-100 flex-row items-center h-12 '
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
                  className={'flex w-full flex-row justify-evenly space-x-16 '}
                  onPress={openMenu}>
                  <StyledText className="w-56">{categoryVal}</StyledText>
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

          <StyledText className="text-gray-800 text-base font-normal mt-2 ">
            Weight
          </StyledText>

          <StyledInput
            placeholder=""
            className={
              weightBnt
                ? 'border-2 border-blue-500 px-3 mt-1 rounded-xl bg-slate-100 h-12'
                : 'border border-gray-300 px-3 mt-1 rounded-xl bg-slate-100 h-12'
            }
            onPressIn={() => setweightBnt(true)}
            onEndEditing={() => setweightBnt(false)}
            value={weight.toString()}
            onChangeText={value => {
              setweight(parseInt(value));
            }}
          />

          <StyledText className="text-gray-800 text-base font-normal mt-2 ">
            Description
          </StyledText>

          <StyledButton
            onPress={() => {
              setdescriptionBnt(true);
            }}
            className={
              descriptionBnt
                ? 'border-2 border-blue-500 px-3 mt-1 rounded-xl bg-slate-100 y-20 h-40'
                : 'border border-gray-300 px-3 mt-1 rounded-xl bg-slate-100 h-20 h-40'
            }>
            <StyledInput
              placeholder="Write product description here"
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
            <StyledView className="flex-row space-x-4 mt-3">
              <StyledButton
                onPress={() => {
                  setedit(true);
                  setdele(false);
                }}
                className={
                  edit
                    ? 'bg-blue-500 ml-2  w-36  items-center justify-center h-12 rounded-lg border-4 border-sky-400'
                    : 'bg-blue-500 ml-2 w-36 items-center justify-center h-12 rounded-lg'
                }>
                <StyledText className="text-white font-normal rounded-lg text-base ">
                  Update product
                </StyledText>
              </StyledButton>
              <StyledButton
                onPress={() => {
                  setedit(false);
                  setdele(true);
                }}
                className={
                  dele
                    ? ' flex-row w-32 items-center justify-center h-12 rounded-lg border-4 border-pink-200'
                    : 'border border-red-600 flex-row w-32 items-center justify-center h-12 rounded-lg'
                }>
                <FontAwesome5 name="trash-alt" color="#f00" size={20} />
                <StyledText className="text-red-600 font-normal rounded-lg text-base ml-1">
                  Delete
                </StyledText>
              </StyledButton>
            </StyledView>
          </StyledView>
        </StyledView>
      </ScrollView>
    </PaperProvider>
  );
};

export default Block32;

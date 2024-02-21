//// Create Forms (CRUD)
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

const Block27 = () => {
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  const [name, setName] = useState('');
  const [nameBnt, setNameBnt] = useState(false);

  const [brand, setbrand] = useState('');
  const [brandBnt, setbrandBnt] = useState(false);

  const [price, setprice] = useState('');
  const [priceBnt, setpriceBnt] = useState(false);

  const [weight, setweight] = useState('');
  const [weightBnt, setweightBnt] = useState(false);

  const [visible2, setVisible2] = React.useState(false);
  const openMenu = () => setVisible2(true);
  const closeMenu = () => setVisible2(false);

  const [categories, setcategories] = useState([
    {
      name: 'Select category',
      value: false,
    },
    {
      name: 'Electronics',
      value: false,
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
        <StyledView className="flex w-96 mb-4 pl-2">
          <StyledView className="flex flex-row justify-between items-center">
            <StyledText className="text-gray-800 mb-4 text-xl font-bold m-4 ">
              Add a new product
            </StyledText>
          </StyledView>

          <StyledText className="text-gray-800 text-lg font-normal mt-2 ">
            Product Name
          </StyledText>

          <StyledInput
            className={
              nameBnt
                ? 'border-2 border-blue-500 px-3 mt-1 rounded-xl bg-slate-200 h-12 w-11/12 '
                : 'border border-gray-300 px-3 mt-1 rounded-xl bg-slate-200 h-12 w-11/12 '
            }
            onPressIn={() => setNameBnt(true)}
            onEndEditing={() => setNameBnt(false)}
            placeholder="Type product name"
            value={name}
            onChangeText={value => {
              setName(value);
            }}
          />

          <StyledText className="text-gray-800 text-lg font-normal mt-5 mb-2">
            Brand
          </StyledText>

          <StyledInput
            className={
              brandBnt
                ? 'border-2 border-blue-500 px-3 mt-1 rounded-xl bg-slate-200 h-12  w-11/12'
                : 'border border-gray-300 px-3 mt-1 rounded-xl bg-slate-200 h-12 w-11/12'
            }
            onPressIn={() => setbrandBnt(true)}
            onEndEditing={() => setbrandBnt(false)}
            value={brand}
            placeholder="Product brand"
            onChangeText={value => {
              setbrand(value);
            }}
          />

          <StyledText className="text-gray-800 text-lg font-normal mt-5 mb-2">
            Price
          </StyledText>

          <StyledView
            className={
              priceBnt
                ? 'border-2 border-blue-500 px-3 mt-1 rounded-xl bg-slate-200 flex-row items-center justify-between w-11/12'
                : 'border border-gray-300 px-3 mt-1 rounded-xl bg-slate-200 flex-row items-center justify-between w-11/12'
            }>
            <TextInput
              onPressIn={() => setpriceBnt(true)}
              onEndEditing={() => setpriceBnt(false)}
              keyboardType="numeric"
              placeholder="$2999"
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

          <StyledText className="text-gray-800 text-lg font-normal mt-5 mb-2">
            Item Weight (kg)
          </StyledText>

          <StyledView
            className={
              weightBnt
                ? 'border-2 border-blue-500 px-3 mt-1 rounded-xl bg-slate-200 flex-row items-center justify-between w-11/12'
                : 'border border-gray-300 px-3 mt-1 rounded-xl bg-slate-200 flex-row items-center justify-between w-11/12'
            }>
            <TextInput
              onPressIn={() => setweightBnt(true)}
              onEndEditing={() => setweightBnt(false)}
              keyboardType="numeric"
              placeholder="12"
              value={weight.toString()}
              onChangeText={value => {
                setweight(parseInt(value));
              }}
            />

            <StyledView className="">
              <StyledButton
                className="w-5 h-2 items-center ml-3"
                onPress={() => {
                  let val = weight + 1;
                  setweight(val);
                }}>
                <FontAwesome5 name="sort-up" size={15} />
              </StyledButton>

              <StyledButton
                className="w-5 items-center ml-3 "
                onPress={() => {
                  let val = weight - 1;
                  setweight(val);
                }}>
                <FontAwesome5 name="sort-down" size={15} />
              </StyledButton>
            </StyledView>
          </StyledView>

          <StyledText className="text-gray-800 text-lg font-normal mt-5 mb-2">
            Category
          </StyledText>

          <StyledView
            className={
              visible2
                ? 'border-2 border-blue-500 mt-1  rounded-xl bg-slate-200 flex-row items-center h-12 w-11/12'
                : 'border border-gray-300  mt-1 rounded-xl bg-slate-200 flex-row items-center h-12 w-11/12'
            }>
            <Styledmenu
              className=" px-1 y-4  self-center"
              contentStyle={{
                backgroundColor: theme.colors.myOwnColor,
                //  width: 340,
                // marginLeft: 14,
                //height: 100,
              }}
              visible={visible2}
              onDismiss={closeMenu}
              //anchorPosition="bottom"
              statusBarHeight={35}
              anchor={
                <StyledButton
                  className={'w-80 flex-row justify-between pl-3'}
                  onPress={openMenu}>
                  <StyledText className="mr-3">{categoryVal}</StyledText>
                  <FontAwesome5 name="angle-down" size={15} />
                </StyledButton>
              }>
              <StyledView className="w-80 space-y-2 ">
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
                        <StyledText className="text-base ml-2">
                          {item.name}
                        </StyledText>
                      </StyledButton>
                    );
                  }}
                />
              </StyledView>
            </Styledmenu>
          </StyledView>

          <StyledText className="text-gray-800 text-lg font-normal mt-5 mb-2">
            Description
          </StyledText>

          <StyledView
            className={
              descriptionBnt
                ? 'border-2 border-blue-500 px-3 mt-1 rounded-xl bg-slate-200 h-40 w-11/12'
                : 'border border-gray-300 px-3 mt-1 rounded-xl bg-slate-200 h-40 w-11/12'
            }>
            <StyledInput
              onPressIn={() => setdescriptionBnt(true)}
              onEndEditing={() => setdescriptionBnt(false)}
              multiline={true}
              value={description}
              onChangeText={value => {
                setdescription(value);
              }}
            />
          </StyledView>

          <StyledView className="flex flex-row space-x-5">
            <StyledButton
              onPress={() => {
                setsubmit(true);
              }}
              className={
                submit
                  ? 'flex py-2 px-3 x-outo justify-center items-center self-center bg-blue-500 rounded-lg  items-center mt-2 border-4 border-blue-200'
                  : 'flex py-2 px-3 x-outo justify-center items-center self-center bg-blue-500 rounded-lg  items-center mt-2 '
              }>
              <StyledText className="text-gray-100 text-base font-medium ">
                Add product
              </StyledText>
            </StyledButton>
          </StyledView>
        </StyledView>
      </ScrollView>
    </PaperProvider>
  );
};

export default Block27;

{
  /*


  */
}

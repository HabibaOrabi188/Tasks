///// Create Modals (CRUD)
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

const Block13 = () => {
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
      <View>
        <StyledButton
          onPress={() => {
            setVisible(true);
          }}
          className="flex py-3 px-20 x-outo justify-center items-center self-center bg-blue-500 rounded-lg  items-center mt-12 ">
          <StyledText className="text-gray-100 text-lg font-medium ml-2">
            Add Product
          </StyledText>
        </StyledButton>

        <Portal>
          <Dialog
            theme={{colors: {primary: 'white'}}}
            visible={visible}
            onDismiss={hideDialog}>
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
      </View>
    </PaperProvider>
  );
};

export default Block13;

{
  /*


  */
}

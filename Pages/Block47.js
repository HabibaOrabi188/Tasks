// Faceted Search Drawers
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

import {Rating} from '@kolking/react-native-rating';

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

const Block47 = () => {
  const [open, setOpen] = React.useState(false);

  const [Fromprice, setFromprice] = useState(2999);
  const [FrompriceBnt, setFrompriceBnt] = useState(false);

  const [Toprice, setToprice] = useState(2999);
  const [TopriceBnt, setTopriceBnt] = useState(false);

  const [check, setCheck] = useState([
    {
      value: 'TV, Audio-Video',
      check: false,
    },
    {
      value: 'Desktop PC',
      check: false,
    },
    {
      value: 'Gaming',
      check: false,
    },
    {
      value: 'Monitors',
      check: false,
    },
    {
      value: 'Laptops',
      check: false,
    },
    {
      value: 'Console',
      check: false,
    },
    {
      value: 'Tablets',
      check: false,
    },
    {
      value: 'Foto',
      check: false,
    },
    {
      value: 'Fashion',
      check: false,
    },
    {
      value: 'Books',
      check: false,
    },
  ]);

  const [checkNum, setCheckNum] = useState(-1);

  const [rating, setrating] = useState([
    {
      check: false,
    },
    {
      check: false,
    },
    {
      check: false,
    },
    {
      check: false,
    },
    {
      check: false,
    },
  ]);

  const [view, setview] = useState(false);

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

  const [ratingNum, setratingNum] = useState(-1);

  const ratingfun = () => {
    setratingNum(-1);
  };

  const [apply, setapply] = useState(false);

  const [dele, setdele] = useState(false);

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
              <StyledView className="flex py-3 pl-3 pr-3 ">
                <StyledView className="flex-row justify-between mb-3">
                  <StyledText className="text-base font-semibold text-gray-500 mb-1">
                    APPLY FILTERS
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
                <StyledText className="text-gray-800 text-base font-medium mt-2 ">
                  Category
                </StyledText>
                <StyledView className="flex ">
                  <FlatList
                    scrollEnabled={false}
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
                          className="flex flex-row items-center h-10">
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
                                  : 'h-5 w-5 border rounded-md self-center bg-gray-100 border-gray-300 '
                              }>
                              {item.check ? (
                                <FontAwesome5 name="check" color={'#fff'} />
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
                  <StyledButton
                    onPressIn={() => {
                      setview(true);
                    }}
                    onPressOut={() => {
                      setview(false);
                    }}>
                    <StyledText
                      className={
                        view
                          ? 'font-medium text-sm text-blue-500 text-base w-16 border-b border-blue-500'
                          : ' font-medium text-sm text-blue-500 text-base '
                      }>
                      View all
                    </StyledText>
                  </StyledButton>
                </StyledView>
                <StyledView>
                  <StyledText className="text-gray-800 text-base font-medium mt-6 ">
                    Prices
                  </StyledText>

                  <StyledView className="flex-row space-x-2">
                    <StyledView className="flex-row">
                      <StyledView>
                        <StyledText className="text-gray-800 font-medium mt-2 ">
                          From
                        </StyledText>
                        <StyledView
                          className={
                            FrompriceBnt
                              ? 'border-2 border-blue-500 px-3 mt-1 rounded-xl bg-slate-50 flex-row items-center justify-between w-32'
                              : 'border border-gray-300 px-3 mt-1 rounded-xl bg-slate-50 flex-row items-center justify-between w-32'
                          }>
                          <TextInput
                            placeholder="$2999"
                            onPressIn={() => setFrompriceBnt(true)}
                            onEndEditing={() => setFrompriceBnt(false)}
                            keyboardType="numeric"
                            value={Fromprice.toString()}
                            onChangeText={value => {
                              setFromprice(parseInt(value));
                            }}
                          />

                          <StyledView className="">
                            <StyledButton
                              className="w-5 h-2 items-center ml-3"
                              onPress={() => {
                                let val = Fromprice + 1;
                                setFromprice(val);
                              }}>
                              <FontAwesome5 name="sort-up" size={15} />
                            </StyledButton>

                            <StyledButton
                              className="w-5 items-center ml-3 "
                              onPress={() => {
                                let val = Fromprice - 1;
                                setFromprice(val);
                              }}>
                              <FontAwesome5 name="sort-down" size={15} />
                            </StyledButton>
                          </StyledView>
                        </StyledView>
                      </StyledView>
                    </StyledView>

                    <StyledView className="flex-row">
                      <StyledView>
                        <StyledText className="text-gray-800 font-medium mt-2 ">
                          To
                        </StyledText>
                        <StyledView
                          className={
                            TopriceBnt
                              ? 'border-2 border-blue-500 px-3 mt-1 rounded-xl bg-slate-50 flex-row items-center justify-between w-32'
                              : 'border border-gray-300 px-3 mt-1 rounded-xl bg-slate-50 flex-row items-center justify-between w-32'
                          }>
                          <TextInput
                            placeholder="$2999"
                            onPressIn={() => setTopriceBnt(true)}
                            onEndEditing={() => setTopriceBnt(false)}
                            keyboardType="numeric"
                            value={Toprice.toString()}
                            onChangeText={value => {
                              setToprice(parseInt(value));
                            }}
                          />

                          <StyledView className="">
                            <StyledButton
                              className="w-5 h-2 items-center ml-3"
                              onPress={() => {
                                let val = Toprice + 1;
                                setToprice(val);
                              }}>
                              <FontAwesome5 name="sort-up" size={15} />
                            </StyledButton>

                            <StyledButton
                              className="w-5 items-center ml-3 "
                              onPress={() => {
                                let val = Toprice - 1;
                                setToprice(val);
                              }}>
                              <FontAwesome5 name="sort-down" size={15} />
                            </StyledButton>
                          </StyledView>
                        </StyledView>
                      </StyledView>
                    </StyledView>
                  </StyledView>
                </StyledView>
                <StyledText className="text-gray-800 text-base font-medium mt-6 ">
                  Rating
                </StyledText>

                <FlatList
                  scrollEnabled={false}
                  data={rating}
                  renderItem={({item, index}) => {
                    return (
                      <StyledView className="flex-row items-center my-1 space-x-1">
                        <StyledButton
                          onPress={() => {
                            let arr = rating;
                            for (let i = 0; i < arr.length; i++) {
                              arr[i].check = false;
                            }
                            arr[index].check = !item.check;
                            setrating(arr);
                            console.log(rating);
                            setratingNum(index);
                          }}
                          onPressOut={() => {
                            setTimeout(ratingfun, 5000);
                          }}
                          className={
                            index == ratingNum
                              ? 'w-6 h-6 rounded-full border-2 items-center justify-center border-blue-500 '
                              : 'w-6 items-center justify-center'
                          }>
                          {
                            <StyledView
                              className={
                                item.check
                                  ? 'w-4 h-4 rounded-full bg-blue-500  items-center justify-center'
                                  : 'w-4 h-4 rounded-full bg-slate-200 border border-gray-400 items-center justify-center'
                              }>
                              {item.check ? (
                                <StyledView className="w-2 h-2 rounded-full bg-white"></StyledView>
                              ) : null}
                            </StyledView>
                          }
                        </StyledButton>
                        <Rating
                          size={20}
                          rating={5 - index}
                          fillColor="#f5da42"
                          disabled={true}
                        />
                      </StyledView>
                    );
                  }}
                />

                <StyledView className="flex-row w-full my-3 space-x-4">
                  <StyledButton
                    onPressIn={() => {
                      setapply(true);
                      setdele(false);
                    }}
                    className={
                      apply
                        ? 'w-28 bg-blue-500 border-4 border-sky-300 h-12 rounded-lg items-center justify-center'
                        : 'w-28 bg-blue-500 h-12 rounded-lg items-center justify-center'
                    }>
                    <StyledText className="text-base text-white font-medium">
                      Apply filters
                    </StyledText>
                  </StyledButton>

                  <StyledButton
                    onPressIn={() => {
                      setapply(false);
                      setdele(true);
                    }}
                    className={
                      dele
                        ? 'w-28 border-4 border-gray-100 h-12 rounded-lg items-center justify-center'
                        : 'w-28 h-12 rounded-lg items-center justify-center border border-gray-200'
                    }>
                    <StyledText className="text-base text-gray-900 font-medium">
                      Clear all
                    </StyledText>
                  </StyledButton>
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
          onPress={() => setOpen(prevOpen => !prevOpen)}>
          <StyledText className=" text-white text-base font-medium">
            Show drawer
          </StyledText>
        </StyledButton>
      </Drawer>
    </PaperProvider>
  );
};
export default Block47;

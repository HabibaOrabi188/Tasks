///Dashboard Navbars
import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  ImageBackground,
  Image,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Images from '../Constants/Images';
import {styled} from 'nativewind';
import {Drawer} from 'react-native-drawer-layout';
import {Header} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

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
const StyledBackImage = styled(ImageBackground, Image);

const AnimatedView = styled(Animatable.View);
//const StyledIcon = styled(Icon);

const Block19 = () => {
  //MyCustomComponent = Animatable.createAnimatableComponent(StyledView);
  const [open, setOpen] = React.useState(false);

  const [profile, setProfile] = useState(false);
  const [Apps, setApps] = useState(false);
  const [Noti, setNoti] = useState(false);
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
      <StyledView className="flex h-full bg-gray-100">
        <Header
          placement="left"
          backgroundColor="#fff"
          leftComponent={
            <StyledView className="flex flex-row space-x-2 items-center mb-1 mt-1">
              <StyledButton onPress={() => setOpen(prevOpen => !prevOpen)}>
                <Entypo name="menu" size={24} />
              </StyledButton>

              <StyledImage source={Images.Flowbite} className="w-6 h-6 ml-2" />
              <StyledText className="text-xl font-semibold text-gray-700">
                Flowbite
              </StyledText>
            </StyledView>
          }
          rightComponent={
            <StyledView
              className={
                Noti || profile || Apps
                  ? 'flex flex-row space-x-2 items-center '
                  : 'flex flex-row space-x-3 items-center '
              }>
              <StyledButton>
                <Ionicons name="search-sharp" size={26} color="#a1a1aa" />
              </StyledButton>

              <StyledButton
                onPress={() => {
                  setNoti(!Noti);
                  setApps(false);
                  setProfile(false);
                }}
                className={
                  Noti ? 'border-4 p-1 border-gray-300 rounded-lg' : ''
                }>
                <Ionicons name="notifications" size={26} color="#a1a1aa" />
              </StyledButton>

              <StyledButton
                onPress={() => {
                  setApps(!Apps);
                  setNoti(false);
                  setProfile(false);
                }}
                className={
                  Apps ? 'border-4 p-1 border-gray-300 rounded-lg' : 'mx-1'
                }>
                <AntDesign name="appstore1" size={26} color="#a1a1aa" />
              </StyledButton>

              <StyledButton
                onPress={() => {
                  setApps(false);
                  setNoti(false);
                  setProfile(!profile);
                }}
                className={
                  profile
                    ? 'border-4 border-gray-300 rounded-full w-12 h-12 items-center justify-center'
                    : 'mx-1'
                }>
                <StyledImage
                  source={Images.person3}
                  className="w-10 h-10  rounded-full"
                />
              </StyledButton>
            </StyledView>
          }
        />

        <StyledView className="items-end flex ">
          <AnimatedView
            animation="fadeInDown"
            className="flex  bg-white rounded">
            {profile ? (
              <StyledView className="py-2 ">
                <StyledView className="border-b border-gray-400 my-2 pr-12 pl-3">
                  <StyledText className="text-sm font-semibold text-gray-900 mt-2">
                    Neil sims
                  </StyledText>
                  <StyledText className="text-base  text-zinc-500 mb-3 ">
                    name@flowbite.com
                  </StyledText>
                </StyledView>

                <StyledView className="border-b border-gray-400 mt-2 pl-3">
                  <StyledButton>
                    <StyledText className="text-base text-zinc-500 ">
                      My profile
                    </StyledText>
                  </StyledButton>
                  <StyledButton>
                    <StyledText className="text-base text-zinc-500 my-3 ">
                      Account setting
                    </StyledText>
                  </StyledButton>
                </StyledView>

                <StyledView className="border-b border-gray-400 mt-2 pl-3">
                  <StyledButton className="flex-row items-center">
                    <Entypo name="heart" color="#9ca3af" size={20} />
                    <StyledText className="text-base text-zinc-500 ml-1.5 ">
                      My like
                    </StyledText>
                  </StyledButton>
                  <StyledButton className="flex-row items-center mt-3">
                    <FontAwesome5
                      name="layer-group"
                      color="#9ca3af"
                      size={20}
                    />
                    <StyledText className="text-base text-zinc-500 ml-1.5 ">
                      collection
                    </StyledText>
                  </StyledButton>

                  <StyledButton className="flex-row items-center mt-3 space-x-3">
                    <StyledView className="flex-row items-center mb-2 ">
                      <Ionicons name="rocket" color="#2563eb" size={20} />
                      <StyledText className="text-base text-zinc-500 ml-1.5 mr-12">
                        Pro version
                      </StyledText>
                    </StyledView>
                    <Entypo name="chevron-right" color="#9ca3af" size={20} />
                  </StyledButton>
                </StyledView>
                <StyledButton>
                  <StyledText className="text-base text-zinc-500 my-3 ml-3">
                    Sign out
                  </StyledText>
                </StyledButton>
              </StyledView>
            ) : null}

            {Apps ? (
              <StyledView className="w-64 items-center">
                <StyledText className="px-4 w-full text-base font-medium text-center text-gray-700 bg-slate-200 py-2">
                  Apps
                </StyledText>
                <StyledView className=" w-64 gap-4 justify-around  flex-row grid grid-flow-row-dense grid-cols-3 grid-rows-3 py-5">
                  <StyledButton className="items-center">
                    <FontAwesome5
                      name="shopping-bag"
                      size={30}
                      color="#9ca3af"
                    />
                    <StyledText className="text-sm font-medium text-gray-900 mt-1">
                      Sales
                    </StyledText>
                  </StyledButton>
                  <StyledButton className="items-center">
                    <FontAwesome name="users" size={30} color="#9ca3af" />
                    <StyledText className="text-sm font-medium text-gray-900 mt-1">
                      Users
                    </StyledText>
                  </StyledButton>

                  <StyledButton className="items-center">
                    <MaterialCommunityIcons
                      name="inbox-full"
                      size={30}
                      color="#9ca3af"
                    />
                    <StyledText className="text-sm font-medium text-gray-900 mt-1">
                      Inbox
                    </StyledText>
                  </StyledButton>
                </StyledView>

                <StyledView className=" w-64 gap-4 justify-around  flex-row grid grid-flow-row-dense grid-cols-3 grid-rows-3 py-5">
                  <StyledButton className="items-center">
                    <FontAwesome5
                      name="user-circle"
                      size={30}
                      color="#9ca3af"
                    />
                    <StyledText className="text-sm font-medium text-gray-900 mt-1">
                      Profile
                    </StyledText>
                  </StyledButton>
                  <StyledButton className="items-center">
                    <Ionicons name="settings-sharp" size={30} color="#9ca3af" />
                    <StyledText className="text-sm font-medium text-gray-900 mt-1">
                      Setting
                    </StyledText>
                  </StyledButton>

                  <StyledButton className="items-center">
                    <Entypo name="box" size={30} color="#9ca3af" />
                    <StyledText className="text-sm font-medium text-gray-900 mt-1">
                      Products
                    </StyledText>
                  </StyledButton>
                </StyledView>
                <StyledView className=" w-64 gap-4 justify-around  flex-row grid grid-flow-row-dense grid-cols-3 grid-rows-3 py-5">
                  <StyledButton className="items-center">
                    <FontAwesome5
                      name="dollar-sign"
                      size={30}
                      color="#9ca3af"
                    />
                    <StyledText className="text-sm font-medium text-gray-900 mt-1">
                      Pricing
                    </StyledText>
                  </StyledButton>
                  <StyledButton className="items-center">
                    <MaterialCommunityIcons
                      name="file-table-box-outline"
                      size={30}
                      color="#9ca3af"
                    />
                    <StyledText className="text-sm font-medium text-gray-900 mt-1">
                      Billing
                    </StyledText>
                  </StyledButton>

                  <StyledButton className="items-center">
                    <Entypo name="log-out" size={30} color="#9ca3af" />
                    <StyledText className="text-sm font-medium text-gray-900 mt-1">
                      Logout
                    </StyledText>
                  </StyledButton>
                </StyledView>
              </StyledView>
            ) : null}

            {Noti ? (
              <StyledView>
                <StyledText className="px-4 w-full text-base font-medium text-center text-gray-700 bg-slate-200 py-2">
                  Notifications
                </StyledText>
                <StyledButton className="border-b border-gray-300 my-2 px-2 flex-row">
                  <StyledView className="rounded-3xl">
                    <StyledImage
                      resizeMode="cover"
                      source={Images.person1}
                      className="w-12 h-12  rounded-3xl mr-2"
                    />
                    <StyledView>
                      <MaterialCommunityIcons
                        name="inbox-full"
                        size={16}
                        color="#fff"
                        style={{
                          marginTop: -20,
                          marginLeft: 20,
                          backgroundColor: '#3b82f6',
                          borderRadius: 28,
                          paddingVertical: 5,
                          paddingHorizontal: 5,
                          alignSelf: 'center',
                          borderColor: '#fff',
                          borderWidth: 1,
                        }}
                      />
                    </StyledView>
                  </StyledView>
                  <StyledView>
                    <StyledView className="flex-row">
                      <StyledText className="text-gray-500 text-sm mb-1.5">
                        New message from
                      </StyledText>
                      <StyledText className="text-gray-900 font-semibold text-sm mb-1.5 ">
                        {' ' + 'Bonnie Green'}
                      </StyledText>
                      <StyledText className="text-gray-500 text-sm mb-1.5">
                        {' ' + '"Hey,'}
                      </StyledText>
                    </StyledView>
                    <StyledText className="text-gray-500 text-sm mb-1.5">
                      what's up? All set for the presentation?"
                    </StyledText>
                    <StyledText className="text-blue-500 text-sm mb-1.5">
                      a few moments ago
                    </StyledText>
                  </StyledView>
                </StyledButton>

                <StyledButton className="border-b border-gray-300 my-2 px-2 flex-row">
                  <StyledView className="rounded-3xl">
                    <StyledImage
                      resizeMode="cover"
                      source={Images.person2}
                      className="w-12 h-12  rounded-3xl mr-2"
                    />
                    <StyledView>
                      <FontAwesome5
                        name="user-plus"
                        size={16}
                        color="#fff"
                        style={{
                          marginTop: -20,
                          marginLeft: 20,
                          backgroundColor: '#000',
                          borderRadius: 28,
                          paddingVertical: 5,
                          paddingHorizontal: 5,
                          alignSelf: 'center',
                          borderColor: '#fff',
                          borderWidth: 1,
                        }}
                      />
                    </StyledView>
                  </StyledView>
                  <StyledView>
                    <StyledView className="flex-row">
                      <StyledText className="text-gray-900 font-semibold text-sm mb-1.5 ">
                        Jese leos
                      </StyledText>
                      <StyledText className="text-gray-500 text-sm mb-1.5">
                        {' ' + 'and '}
                      </StyledText>
                      <StyledText className="text-gray-900 font-semibold text-sm mb-1.5 ">
                        5 others
                      </StyledText>
                      <StyledText className="text-gray-500 text-sm mb-1.5">
                        {' started following'}
                      </StyledText>
                    </StyledView>
                    <StyledText className="text-gray-500 text-sm mb-1.5">
                      {' you.'}
                    </StyledText>
                    <StyledText className="text-blue-500 text-sm mb-1.5">
                      10 minutes ago
                    </StyledText>
                  </StyledView>
                </StyledButton>

                <StyledButton className="border-b border-gray-300 my-2 px-2 flex-row">
                  <StyledView className="rounded-3xl">
                    <StyledImage
                      resizeMode="cover"
                      source={Images.person5}
                      className="w-12 h-12  rounded-3xl mr-2"
                    />
                    <StyledView c>
                      <Entypo
                        name="heart"
                        size={16}
                        color="#fff"
                        style={{
                          marginTop: -20,
                          marginLeft: 20,
                          backgroundColor: '#f00',
                          borderRadius: 28,
                          paddingVertical: 5,
                          paddingHorizontal: 5,
                          alignSelf: 'center',
                          justifyContent: 'center',
                          borderColor: '#fff',
                          borderWidth: 1,
                        }}
                      />
                    </StyledView>
                  </StyledView>
                  <StyledView>
                    <StyledView className="flex-row">
                      <StyledText className="text-gray-900 font-semibold text-sm mb-1.5 ">
                        Jese leos
                      </StyledText>
                      <StyledText className="text-gray-500 text-sm mb-1.5">
                        {' ' + 'and '}
                      </StyledText>
                      <StyledText className="text-gray-900 font-semibold text-sm mb-1.5 ">
                        141 others
                      </StyledText>
                      <StyledText className="text-gray-500 text-sm mb-1.5">
                        {' love your'}
                      </StyledText>
                    </StyledView>
                    <StyledText className="text-gray-500 text-sm mb-1.5">
                      story. See it and view more stories.
                    </StyledText>
                    <StyledText className="text-blue-500 text-sm mb-1.5">
                      44 minutes ago
                    </StyledText>
                  </StyledView>
                </StyledButton>

                <StyledButton className="border-b border-gray-300 my-2 px-2 flex-row">
                  <StyledView className="rounded-3xl">
                    <StyledImage
                      resizeMode="cover"
                      source={Images.person6}
                      className="w-12 h-12  rounded-3xl mr-2"
                    />
                    <StyledView>
                      <MaterialCommunityIcons
                        name="message-processing"
                        size={14}
                        color="#fff"
                        style={{
                          marginTop: -20,
                          marginLeft: 20,
                          backgroundColor: '#4ade80',
                          borderRadius: 28,
                          paddingVertical: 7,
                          paddingHorizontal: 7,
                          alignSelf: 'center',
                          borderColor: '#fff',
                          borderWidth: 1,
                        }}
                      />
                    </StyledView>
                  </StyledView>
                  <StyledView>
                    <StyledView className="flex-row">
                      <StyledText className="text-gray-900 font-semibold text-sm mb-1.5 ">
                        Leslie Livingston
                      </StyledText>
                      <StyledText className="text-gray-500 text-sm mb-1.5">
                        mentioned you in a
                      </StyledText>
                    </StyledView>

                    <StyledView className="flex-row">
                      <StyledText className="text-gray-500 text-sm mb-1.5">
                        comment:
                      </StyledText>
                      <StyledText className="text-blue-500 text-sm mb-1.5">
                        @bonnie.green
                      </StyledText>
                      <StyledText className="text-gray-500 text-sm mb-1.5">
                        what do you say?
                      </StyledText>
                    </StyledView>

                    <StyledText className="text-blue-500 text-sm mb-1.5">
                      1 hour ago
                    </StyledText>
                  </StyledView>
                </StyledButton>

                <StyledButton className=" my-2 px-2 flex-row">
                  <StyledView className="rounded-3xl">
                    <StyledImage
                      resizeMode="cover"
                      source={Images.person7}
                      className="w-12 h-12  rounded-3xl mr-2"
                    />
                    <StyledView>
                      <FontAwesome5
                        name="video"
                        size={14}
                        color="#fff"
                        style={{
                          marginTop: -20,
                          marginLeft: 20,
                          backgroundColor: '#a855f7',
                          borderRadius: 28,
                          paddingVertical: 7,
                          paddingHorizontal: 7,
                          alignSelf: 'center',
                          justifyContent: 'center',
                          borderColor: '#fff',
                          borderWidth: 1,
                        }}
                      />
                    </StyledView>
                  </StyledView>
                  <StyledView>
                    <StyledView className="flex-row">
                      <StyledText className="text-gray-900 font-semibold text-sm mb-1.5 ">
                        Robert Brown
                      </StyledText>
                      <StyledText className="text-gray-500 text-sm mb-1.5">
                        {' posted a new video:'}
                      </StyledText>
                    </StyledView>
                    <StyledText className="text-gray-500 text-sm mb-1.5">
                      Glassmorphism - learn how to implement
                    </StyledText>
                    <StyledText className="text-gray-500 text-sm mb-1.5">
                      the new design trend.
                    </StyledText>
                    <StyledText className="text-blue-500 text-sm mb-1.5">
                      3 hours ago
                    </StyledText>
                  </StyledView>
                </StyledButton>

                <StyledButton className=" flex-row w-full text-lg font-medium items-center space-x-1 justify-center  text-gray-700 bg-slate-50 py-2.5">
                  <AntDesign name="eye" size={22} color="#000" />
                  <StyledText className=" text-lg font-medium  text-gray-800">
                    View notifications
                  </StyledText>
                </StyledButton>
              </StyledView>
            ) : null}
          </AnimatedView>
        </StyledView>
      </StyledView>
    </PaperProvider>
  );
};

export default Block19;

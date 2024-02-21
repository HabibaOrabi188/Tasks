///Application Shells
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

const Block9 = () => {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [data, setData] = useState([
    {
      title: 'Overview',
      icon: 'clockcircle',
      icon_type: 'AntDesign',
      body: [],
      press: false,
    },
    {
      title: 'Pages',
      icon: 'document-text-sharp',
      icon_type: 'Ionicons',
      body: [{text: 'Setting'}, {text: 'Kanban'}, {text: 'Calendar'}],
      press: false,
    },
    {
      title: 'Sales',
      icon: 'shopping-bag',
      icon_type: 'FontAwesome5',
      body: [{text: 'Products'}, {text: 'Billing'}, {text: 'Invoice'}],
      press: false,
    },
    {
      title: 'Messages',
      icon: 'archive-arrow-down-outline',
      icon_type: 'MaterialCommunityIcons',
      body: [],
      press: false,
    },
    {
      title: 'Authentication',
      icon: 'lock',
      icon_type: 'FontAwesome5',
      body: [],
      press: false,
    },
  ]);

  const [data2, setData2] = useState([
    {
      title: 'Docs',
      icon: 'clipboard-text',
      icon_type: 'MaterialCommunityIcons',
    },
    {
      title: 'Comonents',
      icon: 'albums',
      icon_type: 'Ionicons',
    },
    {
      title: 'Help',
      icon: 'nuclear',
      icon_type: 'Ionicons',
    },
  ]);

  const [bnt, setBnt] = useState(6);

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

  const [drawer, setdrawer] = useState(0);

  return (
    <PaperProvider theme={theme}>
      <Header
        placement="left"
        backgroundColor="#fff"
        leftComponent={
          <StyledView className="flex flex-row space-x-2 items-center">
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
          <StyledView className="flex flex-row space-x-4 items-center">
            <StyledButton onPress={() => setOpen(prevOpen => !prevOpen)}>
              <Ionicons name="search-sharp" size={24} />
            </StyledButton>

            <StyledButton></StyledButton>

            <Styledmenu
              className=" px-1 y-4  self-center"
              contentStyle={{backgroundColor: theme.colors.myOwnColor}}
              visible={visible}
              onDismiss={closeMenu}
              //anchorPosition="bottom"
              statusBarHeight={70}
              anchor={
                <TouchableOpacity onPress={openMenu}>
                  <Ionicons name="notifications" size={24} />
                </TouchableOpacity>
              }>
              <StyledView className="flex space-y-2 p-2 ">
                <StyledText className="text-base text-gray-700">
                  Categories
                </StyledText>
              </StyledView>
            </Styledmenu>

            <StyledButton onPress={() => {}}>
              <AntDesign name="appstore1" size={24} />
            </StyledButton>

            <StyledImage source={Images.person3} className="w-6 h-6 mr-2" />
          </StyledView>
        }
      />

      <Drawer
        open={open}
        drawerType="slide"
        //swipeEdgeWidth={20}

        onOpen={() => setOpen(true)}
        onClose={() => {
          setOpen(false);
        }}
        renderDrawerContent={() => {
          return (
            <StyledView className="flex space-h-3 pt-2">
              <FlatList
                data={data}
                renderItem={({item, index}) => {
                  return (
                    <StyledView className="flex jusyify-center">
                      <StyledButton
                        onPress={() => {
                          index == bnt ? setBnt(6) : setBnt(index);
                        }}
                        className="space-y-3 px-4 flex flex-row justify-between items-center">
                        <StyledView className="flex flex-row space-y-4 items-center justify-center">
                          {item.icon_type == 'AntDesign' ? (
                            <AntDesign name={item.icon} size={22} />
                          ) : item.icon_type == 'FontAwesome5' ? (
                            <FontAwesome5 name={item.icon} size={22} />
                          ) : item.icon_type == 'MaterialCommunityIcons' ? (
                            <MaterialCommunityIcons
                              name={item.icon}
                              size={22}
                            />
                          ) : (
                            <Ionicons name={item.icon} size={22} />
                          )}

                          <StyledText className="text-xl mb-4 ml-4 text-gray-800 ">
                            {item.title}
                          </StyledText>
                        </StyledView>

                        {item.body.length > 0 ? (
                          <FontAwesome5
                            name="angle-down"
                            size={24}
                            color="#1f2937"
                          />
                        ) : item.title == 'Messages' ? (
                          <StyledView className="flex w-6 h-6 rounded-full bg-sky-200 items-center justify-center pb-1">
                            <StyledText className="text-base font-medium text-blue-500 ">
                              6
                            </StyledText>
                          </StyledView>
                        ) : null}
                      </StyledButton>

                      {bnt == index ? (
                        <StyledView>
                          {item.body.map((val, i) => (
                            <StyledText className="ml-11 text-xl mb-3 text-gray-800 ">
                              {val.text}
                            </StyledText>
                          ))}
                        </StyledView>
                      ) : null}
                    </StyledView>
                  );
                }}
              />

              <StyledView className="flex h-0.5 bg-gray-300  m-3"></StyledView>

              <FlatList
                data={data2}
                renderItem={({item, index}) => {
                  return (
                    <StyledView className="flex jusyify-center">
                      <StyledButton
                        onPress={() => {}}
                        className="space-y-3 px-4 flex flex-row justify-between">
                        <StyledView className="flex flex-row space-y-5 items-center justify-center">
                          {item.icon_type == 'AntDesign' ? (
                            <AntDesign name={item.icon} size={22} />
                          ) : item.icon_type == 'FontAwesome5' ? (
                            <FontAwesome5 name={item.icon} size={22} />
                          ) : item.icon_type == 'MaterialCommunityIcons' ? (
                            <MaterialCommunityIcons
                              name={item.icon}
                              size={22}
                            />
                          ) : (
                            <Ionicons name={item.icon} size={22} />
                          )}

                          <StyledText className="text-xl mb-5 ml-4 text-gray-800 ">
                            {item.title}
                          </StyledText>
                        </StyledView>
                      </StyledButton>
                    </StyledView>
                  );
                }}
              />
            </StyledView>
          );
        }}>
        <StyledButton
          className="p-5 flex itmes-center mx-3"
          onPress={() => setOpen(prevOpen => !prevOpen)}></StyledButton>
      </Drawer>
    </PaperProvider>
  );
};

export default Block9;

{
  /*


  */
}
